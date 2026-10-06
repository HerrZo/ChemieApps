import { Molecule, createEmptyMolecule, getFormula } from './chemistry/model';
import { ElementSymbol } from './chemistry/elements';
import {
  CommandManager,
  AddAtomCommand,
  ConnectAtomsCommand,
  AddProtonCommand,
  PullHydrogenCommand,
  DeleteAtomsCommand
} from './chemistry/commands';
import { relaxMolecule } from './geometry/relax';
import { MoleculeScene, ViewMode } from './render/scene';
import { renderHeader, updateUndoRedoButtons } from './ui/header';
import { renderToolbar, ToolMode } from './ui/toolbar';
import { renderPeriodicPicker } from './ui/periodicPicker';
import { renderInspector } from './ui/inspector';
import { renderCameraControls } from './ui/cameraControls';
import { openLibraryModal } from './ui/libraryModal';
import { openAboutDialog } from './ui/aboutDialog';
import { showToast } from './ui/toast';
import { bindShortcuts } from './ui/shortcuts';
import { autoSave, loadAutoSave, serializeMolecule } from './io/storage';
import { downloadDataUrl, downloadFile } from './io/export';
import { generateLewisSVG } from './chemistry/lewis';
import { LIBRARY, buildMoleculeFromRecipe } from './chemistry/library';

// ── App-Zustand ─────────────────────────────────────────────────────────────
class App {
  private mol: Molecule;
  private cmdMgr = new CommandManager();
  private scene!: MoleculeScene;
  private activeTool: ToolMode = 'select';
  private selectedAtomId: string | null = null;
  private connectFirstAtomId: string | null = null;
  private currentTheme: 'light' | 'dark' | 'beamer' = 'light';
  private camControlsApi: { setCameraLocked: (locked: boolean) => void } | null = null;

  constructor() {
    // Gespeichertes Modell laden oder mit Wasser (H₂O) starten
    const saved = loadAutoSave();
    if (saved && saved.atoms.size > 0) {
      this.mol = saved;
    } else {
      const h2o = LIBRARY.find(r => r.id === 'h2o')!;
      this.mol = buildMoleculeFromRecipe(h2o);
      relaxMolecule(this.mol, 50);
    }

    this.initUI();
    this.initScene();
    this.initShortcuts();
    this.updateAll();
  }

  private initUI() {
    const headerEl = document.getElementById('header')!;
    const sidebarEl = document.getElementById('sidebar')!;
    const cameraOverlayEl = document.getElementById('camera-controls')!;
    const modalEl = document.getElementById('modal-container')!;

    // 1. Header
    renderHeader(headerEl, {
      onModeChange: (mode: ViewMode) => {
        this.scene.mode = mode;
        if (mode === 'lewis') {
          this.scene.alignTo2D();
          showToast('Lewis-Modus: Flach zur Kamera ausgerichtet.', 'info');
        }
        this.updateAll();
      },
      onPolarityToggle: (active: boolean) => {
        this.scene.showPolarity = active;
        this.scene.updateMolecule(this.mol);
        this.updateInspector();
        showToast(active ? 'Polaritäts-Analyse aktiv.' : 'Polarität ausgeblendet.', 'info');
      },
      onUndo: () => this.handleUndo(),
      onRedo: () => this.handleRedo(),
      onOpenLibrary: () => {
        openLibraryModal(modalEl, {
          onSelectRecipe: recipe => {
            this.mol = buildMoleculeFromRecipe(recipe);
            relaxMolecule(this.mol, 60);
            this.cmdMgr.clear();
            this.selectedAtomId = null;
            this.scene.selectedAtomId = null;
            this.updateAll();
            showToast(`${recipe.name} geladen.`, 'info');
          },
          onClose: () => {}
        });
      },
      onExport: () => this.handleExport(),
      onToggleTheme: () => this.toggleTheme(),
      onAbout: () => openAboutDialog(modalEl, () => {})
    });

    // 2. Toolbar in Sidebar
    renderToolbar(sidebarEl, {
      onToolChange: tool => {
        this.activeTool = tool;
        this.scene.activeTool = tool;
        this.connectFirstAtomId = null;
        if (tool === 'connect') {
          showToast('Tippe das 1. Atom an, das du verbinden möchtest.', 'info');
        } else if (tool === 'proton') {
          showToast('Tippe ein H-Atom an (Abspalten) oder ein freies Elektronenpaar (Anlagern).', 'info');
        } else if (tool === 'delete') {
          showToast('Tippe Atome an, um sie direkt zu entfernen.', 'info');
        } else {
          showToast('Klicke Atome an, um sie auszuwählen oder zu verschieben.', 'info');
        }
      },
      onAutoAlign: () => {
        relaxMolecule(this.mol, 100);
        this.scene.updateMolecule(this.mol);
        this.updateInspector();
        showToast('Geometrie entspannt und ausgerichtet.', 'info');
      },
      onClear: () => {
        if (confirm('Möchtest du die Szene wirklich leeren?')) {
          this.mol = createEmptyMolecule();
          this.cmdMgr.clear();
          this.selectedAtomId = null;
          this.scene.selectedAtomId = null;
          this.updateAll();
          showToast('Szene geleert.', 'info');
        }
      }
    });

    // 3. Periodensystem in Sidebar
    renderPeriodicPicker(sidebarEl, {
      onSelectElement: (symbol: ElementSymbol) => {
        const cmd = new AddAtomCommand(symbol);
        const res = this.cmdMgr.execute(cmd, this.mol);
        if (res.success) {
          relaxMolecule(this.mol, 20);
          this.updateAll();
          showToast(res.message || `${symbol} hinzugefügt.`, 'info');
        } else {
          showToast(res.message || 'Fehler beim Hinzufügen.', res.level || 'blocked');
        }
      }
    });

    // 4. Kamera-Overlay auf der Bühne
    this.camControlsApi = renderCameraControls(cameraOverlayEl, {
      onZoomIn: () => this.scene.zoomCamera(0.85),
      onZoomOut: () => this.scene.zoomCamera(1.18),
      onToggleAutoRotate: () => {
        this.scene.autoRotate = !this.scene.autoRotate;
        showToast(this.scene.autoRotate ? 'Auto-Rotation aktiv.' : 'Auto-Rotation pausiert.', 'info');
      },
      onToggleLockCamera: () => {
        this.scene.isCameraLocked = !this.scene.isCameraLocked;
        this.camControlsApi?.setCameraLocked(this.scene.isCameraLocked);
        showToast(
          this.scene.isCameraLocked
            ? 'Kameradrehung gesperrt (Fixiert für ruhiges Auswählen).'
            : 'Kameradrehung entsperrt.',
          'info'
        );
      },
      onReset: () => {
        this.scene.resetCamera();
        showToast('Kamera zurückgesetzt.', 'info');
      },
      onFullscreen: () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      }
    });
  }

  private initScene() {
    const canvas = document.getElementById('stage-canvas') as HTMLCanvasElement;
    this.scene = new MoleculeScene(canvas, this.currentTheme === 'dark');
    this.scene.activeTool = this.activeTool;

    // Picking-Event
    this.scene.onPick = e => {
      if (e.type === 'atom' && e.atomId) {
        this.handleAtomClicked(e.atomId);
      } else if (e.type === 'cloud' && e.atomId) {
        if (this.activeTool === 'proton' && e.cloudId) {
          this.handleCloudClicked(e.cloudId, e.atomId);
        } else {
          this.handleAtomClicked(e.atomId);
        }
      } else {
        // Klick auf Hintergrund: Auswahl abwählen
        if (this.selectedAtomId) {
          this.selectedAtomId = null;
          this.scene.selectedAtomId = null;
          this.scene.updateMolecule(this.mol);
          this.updateInspector();
        }
        this.connectFirstAtomId = null;
      }
    };

    // Atom Drag: Synchrones Update aller Kugelwolken und Bindungen
    this.scene.onAtomMoved = (atomId, pos) => {
      const a = this.mol.atoms.get(atomId);
      if (a) {
        a.position = { ...pos };
        this.scene.updateMolecule(this.mol);
      }
    };

    this.scene.onAtomMoveEnd = () => {
      autoSave(this.mol);
      this.updateInspector();
    };

    window.addEventListener('resize', () => this.scene.resize());
  }

  private handleAtomClicked(atomId: string) {
    if (this.activeTool === 'delete') {
      this.deleteAtomById(atomId);
      return;
    }

    if (this.activeTool === 'proton') {
      const atom = this.mol.atoms.get(atomId);
      if (atom?.element === 'H') {
        // H als Proton herausziehen
        const cmd = new PullHydrogenCommand(atomId);
        const res = this.cmdMgr.execute(cmd, this.mol);
        this.updateAll();
        showToast(res.message || '', res.level || 'info');
      } else {
        // Proton anlagern
        const cmd = new AddProtonCommand(atomId);
        const res = this.cmdMgr.execute(cmd, this.mol);
        this.updateAll();
        showToast(res.message || '', res.level || 'info');
      }
      return;
    }

    if (this.activeTool === 'connect') {
      if (!this.connectFirstAtomId) {
        this.connectFirstAtomId = atomId;
        const el = this.mol.atoms.get(atomId)?.element;
        showToast(`1. Atom (${el}) gewählt. Klicke jetzt das zweite Atom an.`, 'info');
      } else if (this.connectFirstAtomId === atomId) {
        showToast('Du hast dasselbe Atom gewählt. Wähle ein anderes Atom zum Verbinden.', 'warning');
      } else {
        const idA = this.connectFirstAtomId;
        const idB = atomId;
        this.connectFirstAtomId = null;

        const cmd = new ConnectAtomsCommand(idA, idB);
        const res = this.cmdMgr.execute(cmd, this.mol);
        if (res.success) {
          relaxMolecule(this.mol, 40);
        }
        this.updateAll();
        showToast(res.message || '', res.level || 'info');
      }
      return;
    }

    // Standard: Auswählen
    const atom = this.mol.atoms.get(atomId);
    if (atom) {
      this.selectedAtomId = atomId;
      this.scene.selectedAtomId = atomId;
      this.scene.updateMolecule(this.mol);
      this.updateInspector();
      showToast(`Atom ${atom.element} ausgewählt.`, 'info');
    }
  }

  private deleteAtomById(atomId: string) {
    const el = this.mol.atoms.get(atomId)?.element || '';
    const cmd = new DeleteAtomsCommand([atomId]);
    const res = this.cmdMgr.execute(cmd, this.mol);
    if (this.selectedAtomId === atomId) {
      this.selectedAtomId = null;
      this.scene.selectedAtomId = null;
    }
    this.updateAll();
    showToast(res.message || `${el} entfernt.`, 'info');
  }

  private handleCloudClicked(cloudId: string, atomId: string) {
    if (this.activeTool === 'proton') {
      const cmd = new AddProtonCommand(atomId, cloudId);
      const res = this.cmdMgr.execute(cmd, this.mol);
      this.updateAll();
      showToast(res.message || '', res.level || 'info');
    }
  }

  private handleUndo() {
    const res = this.cmdMgr.undo(this.mol);
    this.selectedAtomId = null;
    this.scene.selectedAtomId = null;
    this.updateAll();
    showToast(res.message || '', 'info');
  }

  private handleRedo() {
    const res = this.cmdMgr.redo(this.mol);
    this.selectedAtomId = null;
    this.scene.selectedAtomId = null;
    this.updateAll();
    showToast(res.message || '', 'info');
  }

  private handleExport() {
    const formula = getFormula(this.mol);
    const cleanFormula = formula.replace(/[^\w]/g, '') || 'Molekuel';

    const png = this.scene.captureScreenshotPNG();
    downloadDataUrl(png, `${cleanFormula}_kugelwolken.png`);

    // SVG Lewis
    const svg = generateLewisSVG(this.mol);
    downloadFile(svg, `${cleanFormula}_lewis.svg`, 'image/svg+xml');

    // JSON
    const json = serializeMolecule(this.mol);
    downloadFile(json, `${cleanFormula}.kwm.json`, 'application/json');

    showToast(`Export für ${formula} abgeschlossen (PNG, SVG, JSON).`, 'info');
  }

  private toggleTheme() {
    if (this.currentTheme === 'light') {
      this.currentTheme = 'dark';
    } else if (this.currentTheme === 'dark') {
      this.currentTheme = 'beamer';
    } else {
      this.currentTheme = 'light';
    }

    document.documentElement.setAttribute('data-theme', this.currentTheme);
    this.scene.setTheme(this.currentTheme === 'dark');
    this.updateAll();
    showToast(`Design: ${this.currentTheme.toUpperCase()}`, 'info');
  }

  private initShortcuts() {
    bindShortcuts({
      onToolSelect: () => (document.getElementById('tool-select') as HTMLElement)?.click(),
      onToolConnect: () => (document.getElementById('tool-connect') as HTMLElement)?.click(),
      onToolProton: () => (document.getElementById('tool-proton') as HTMLElement)?.click(),
      onToolDelete: () => {
        if (this.selectedAtomId) {
          this.deleteAtomById(this.selectedAtomId);
        } else {
          (document.getElementById('tool-delete') as HTMLElement)?.click();
        }
      },
      onAutoAlign: () => (document.getElementById('btn-align') as HTMLElement)?.click(),
      onToggleMode: () => {
        const nextMode = this.scene.mode === 'kwm' ? 'lewis' : 'kwm';
        if (nextMode === 'kwm') {
          (document.getElementById('btn-mode-kwm') as HTMLElement)?.click();
        } else {
          (document.getElementById('btn-mode-lewis') as HTMLElement)?.click();
        }
      },
      onTogglePolarity: () => (document.getElementById('btn-toggle-polarity') as HTMLElement)?.click(),
      onRotateCamera: (dTheta, dPhi) => this.scene.rotateCamera(dTheta, dPhi),
      onZoomCamera: factor => this.scene.zoomCamera(factor),
      onToggleAutoRotate: () => (document.getElementById('cam-rotate') as HTMLElement)?.click(),
      onResetCamera: () => (document.getElementById('cam-reset') as HTMLElement)?.click(),
      onFullscreen: () => (document.getElementById('cam-fullscreen') as HTMLElement)?.click(),
      onUndo: () => this.handleUndo(),
      onRedo: () => this.handleRedo()
    });
  }

  private updateInspector() {
    const inspectorEl = document.getElementById('inspector');
    if (inspectorEl) {
      renderInspector(inspectorEl, this.mol, this.selectedAtomId, {
        onDeleteAtom: id => this.deleteAtomById(id),
        onDeselectAtom: () => {
          this.selectedAtomId = null;
          this.scene.selectedAtomId = null;
          this.scene.updateMolecule(this.mol);
          this.updateInspector();
        }
      });
    }
  }

  private updateAll() {
    this.scene.updateMolecule(this.mol);
    this.updateInspector();
    updateUndoRedoButtons(this.cmdMgr.canUndo(), this.cmdMgr.canRedo());
    autoSave(this.mol);
  }
}

// App starten, sobald DOM bereit ist
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
