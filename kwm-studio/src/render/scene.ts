import * as THREE from 'three';
import { Molecule, getBonds, getAtomFormalCharge, Vec3, vec3 } from '../chemistry/model';
import { MaterialPalette, VisualStyle } from './materials';
import { createStageGrid } from './stage';
import { createAtomObject } from './atomView';
import { createLoneCloudObject, createBondCloudObject } from './cloudView';
import { createLewis3DGroup } from './lewisView';
import { createDeltaSprite, createTextSprite } from './labels';
import { analyzePolarity } from '../chemistry/polarity';
import { calculateAtomLoneCloudDirections } from '../geometry/vsepr';

export type ViewMode = 'kwm' | 'lewis';

export interface ScenePickEvent {
  type: 'atom' | 'cloud' | 'none';
  atomId?: string;
  cloudId?: string;
  worldPosition?: THREE.Vector3;
}

export class MoleculeScene {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private gridGroup: THREE.Group;
  private moleculeGroup: THREE.Group;
  private overlayGroup: THREE.Group;
  private palette: MaterialPalette;

  // Modi
  public mode: ViewMode = 'kwm';
  public showPolarity = false;
  public autoRotate = false;
  public isCameraLocked = false;
  public activeTool: 'select' | 'connect' | 'proton' | 'delete' = 'select';
  public selectedAtomId: string | null = null;
  public selectedCloudId: string | null = null;

  // Kamera-Orbit-Steuerung
  private cameraDistance = 8.5;
  private cameraPhi = Math.PI / 3;
  private cameraTheta = Math.PI / 4;
  private cameraTarget = new THREE.Vector3(0, 0, 0);

  // Maus & Touch State
  private isPointerDown = false;
  private pointerButton = 0; // 0 = left, 2 = right
  private pointerDownX = 0;
  private pointerDownY = 0;
  private lastPointerX = 0;
  private lastPointerY = 0;
  private hasDragged = false;
  private isDraggingAtom = false;
  private draggedAtomId: string | null = null;
  private touchDistance = 0;

  private raycaster = new THREE.Raycaster();
  private pointerPos = new THREE.Vector2();

  // Callbacks
  public onPick?: (e: ScenePickEvent) => void;
  public onAtomMoved?: (atomId: string, newPos: { x: number; y: number; z: number }) => void;
  public onAtomMoveEnd?: (atomId: string) => void;

  constructor(private canvas: HTMLCanvasElement, isDark = false) {
    this.palette = new MaterialPalette('modern', isDark);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true // für PNG-Export
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Szene
    this.scene = new THREE.Scene();

    // Kamera
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.updateCameraTransform();

    // Studio-Beleuchtung
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xd0d0d8, 0.85);
    this.scene.add(hemiLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.1);
    dirLight1.position.set(6, 12, 8);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 2048;
    dirLight1.shadow.mapSize.height = 2048;
    dirLight1.shadow.camera.near = 0.5;
    dirLight1.shadow.camera.far = 30;
    dirLight1.shadow.bias = -0.0005;
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.45);
    dirLight2.position.set(-8, -4, -6);
    this.scene.add(dirLight2);

    // Gruppen
    this.gridGroup = createStageGrid(36, 36, isDark);
    this.scene.add(this.gridGroup);

    this.moleculeGroup = new THREE.Group();
    this.scene.add(this.moleculeGroup);

    this.overlayGroup = new THREE.Group();
    this.scene.add(this.overlayGroup);

    // Event Listener
    this.bindEvents();
    this.resize();

    // Render-Schleife
    this.animate();
  }

  setTheme(isDark: boolean, style: VisualStyle = 'modern') {
    this.palette.update(style, isDark);
    this.scene.remove(this.gridGroup);
    this.gridGroup = createStageGrid(36, 36, isDark);
    this.scene.add(this.gridGroup);
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  }

  // Baut die 3D-Szene aus dem Zustand des Moleküls auf
  updateMolecule(mol: Molecule) {
    // Vorherige Objekte aufräumen
    while (this.moleculeGroup.children.length > 0) {
      this.moleculeGroup.remove(this.moleculeGroup.children[0]);
    }
    while (this.overlayGroup.children.length > 0) {
      this.overlayGroup.remove(this.overlayGroup.children[0]);
    }

    if (mol.atoms.size === 0) return;

    if (this.mode === 'lewis') {
      // 3D Lewis-Modus
      const lewisGroup = createLewis3DGroup(mol, this.palette);
      this.moleculeGroup.add(lewisGroup);
    } else {
      // Kugelwolken-Modus (KWM)
      // 1. Atome hinzufügen
      for (const a of mol.atoms.values()) {
        const atomObj = createAtomObject(a, this.palette);
        this.moleculeGroup.add(atomObj);
      }

      // Polaritäts-Analyse abrufen
      const pol = this.showPolarity ? analyzePolarity(mol) : null;
      const bondPolMap = new Map<string, { factor: number; moreId?: string }>();
      if (pol) {
        for (const bp of pol.bonds) {
          const key1 = `${bp.atomAId}_${bp.atomBId}`;
          const key2 = `${bp.atomBId}_${bp.atomAId}`;
          bondPolMap.set(key1, { factor: bp.asymmetryFactor, moreId: bp.moreElectronegativeId });
          bondPolMap.set(key2, { factor: bp.asymmetryFactor, moreId: bp.moreElectronegativeId });
        }
      }

      // 2. Kugelwolken hinzufügen
      // Für jedes Atom die VSEPR-abgestoßenen Richtungen aller freien Kugelwolken berechnen
      const loneDirMap = new Map<string, Vec3>();
      for (const a of mol.atoms.values()) {
        const atomDirs = calculateAtomLoneCloudDirections(a.id, mol);
        for (const [cid, dir] of atomDirs.entries()) {
          loneDirMap.set(cid, dir);
        }
      }

      const bonds = getBonds(mol);
      const bondOrderIndexMap = new Map<string, number>();

      for (const c of mol.clouds.values()) {
        if (c.owners.length === 1) {
          const dir = loneDirMap.get(c.id) || vec3(0, 1, 0);
          const loneObj = createLoneCloudObject(c, mol, dir, this.palette);
          this.moleculeGroup.add(loneObj);
        } else {
          // Bindungswolke
          const [a, b] = c.owners;
          const key = a < b ? `${a}_${b}` : `${b}_${a}`;
          const currentIdx = bondOrderIndexMap.get(key) || 0;
          bondOrderIndexMap.set(key, currentIdx + 1);

          const totalOrder = bonds.find(
            bd => (bd.atomA === a && bd.atomB === b) || (bd.atomA === b && bd.atomB === a)
          )?.order || 1;

          const polInfo = bondPolMap.get(`${a}_${b}`);
          const bondObj = createBondCloudObject(
            c,
            mol,
            currentIdx,
            totalOrder,
            this.palette,
            polInfo?.factor || 0,
            polInfo?.moreId
          );
          this.moleculeGroup.add(bondObj);
        }
      }

      // 3. Polaritäts-Overlays (δ⁺/δ⁻ Sprites & Dipolpfeil)
      if (pol && this.showPolarity) {
        // δ-Labels an Atomen
        for (const [id, label] of pol.atomLabels.entries()) {
          const atom = mol.atoms.get(id);
          if (!atom) continue;
          const sprite = createDeltaSprite(label);
          sprite.position.set(atom.position.x, atom.position.y + 0.55, atom.position.z);
          this.overlayGroup.add(sprite);
        }

        // Gesamtdipolpfeil
        if (pol.isMoleculePolar && pol.dipoleMagnitude > 0.2) {
          const dir = new THREE.Vector3(pol.dipoleVector.x, pol.dipoleVector.y, pol.dipoleVector.z).normalize();
          const arrowLen = Math.min(2.8, Math.max(1.4, pol.dipoleMagnitude * 0.8));
          const origin = new THREE.Vector3(0, 1.8, 0);

          const arrow = new THREE.ArrowHelper(dir, origin, arrowLen, 0x0a66d8, 0.45, 0.3);
          this.overlayGroup.add(arrow);
        }
      }

      // 3b. Formalladungs-Badges an Atomen (z.B. ⁻ für Sauerstoff in OH⁻ oder ⁺ für Stickstoff in NH₄⁺)
      for (const a of mol.atoms.values()) {
        const fc = getAtomFormalCharge(mol, a.id);
        if (fc !== 0 && !a.isProton) {
          const sign = fc > 0 ? (fc === 1 ? '⁺' : `${fc}⁺`) : (fc === -1 ? '⁻' : `${Math.abs(fc)}⁻`);
          const color = fc > 0 ? '#0a66d8' : '#e03131';
          const chargeSprite = createTextSprite(sign, 32, color);
          chargeSprite.position.set(a.position.x + 0.32, a.position.y + 0.38, a.position.z);
          chargeSprite.scale.set(0.42, 0.42, 1);
          this.overlayGroup.add(chargeSprite);
        }
      }
    }

    // 4. Auswahl-Indikator für selektiertes Atom
    if (this.selectedAtomId) {
      const selAtom = mol.atoms.get(this.selectedAtomId);
      if (selAtom) {
        const ringGeo = new THREE.TorusGeometry(0.56, 0.025, 16, 48);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x0a66d8 });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.set(selAtom.position.x, selAtom.position.y, selAtom.position.z);
        ringMesh.lookAt(this.camera.position);
        this.overlayGroup.add(ringMesh);
      }
    }
  }

  // ── Orbit & Kamera Steuerung ────────────────────────────────────────────────
  private updateCameraTransform() {
    this.cameraPhi = Math.max(0.05, Math.min(Math.PI - 0.05, this.cameraPhi));
    this.cameraDistance = Math.max(2.5, Math.min(30, this.cameraDistance));

    const x = this.cameraDistance * Math.sin(this.cameraPhi) * Math.sin(this.cameraTheta);
    const y = this.cameraDistance * Math.cos(this.cameraPhi);
    const z = this.cameraDistance * Math.sin(this.cameraPhi) * Math.cos(this.cameraTheta);

    this.camera.position.set(
      this.cameraTarget.x + x,
      this.cameraTarget.y + y,
      this.cameraTarget.z + z
    );
    this.camera.lookAt(this.cameraTarget);
  }

  rotateCamera(deltaTheta: number, deltaPhi: number) {
    this.cameraTheta += deltaTheta;
    this.cameraPhi += deltaPhi;
    this.updateCameraTransform();
  }

  zoomCamera(delta: number) {
    this.cameraDistance *= delta;
    this.updateCameraTransform();
  }

  resetCamera() {
    this.cameraDistance = 8.5;
    this.cameraPhi = Math.PI / 3;
    this.cameraTheta = Math.PI / 4;
    this.cameraTarget.set(0, 0, 0);
    this.updateCameraTransform();
  }

  alignTo2D() {
    // Richtet die Kamera direkt senkrecht von vorne aus (ideal für Lewis-Formeln)
    this.cameraPhi = Math.PI / 2;
    this.cameraTheta = 0;
    this.cameraTarget.set(0, 0, 0);
    this.updateCameraTransform();
  }

  // ── Event-Verarbeitung ──────────────────────────────────────────────────────
  private bindEvents() {
    const el = this.canvas;

    el.addEventListener('pointerdown', e => {
      this.isPointerDown = true;
      this.hasDragged = false;
      this.pointerButton = e.button;
      this.pointerDownX = e.clientX;
      this.pointerDownY = e.clientY;
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;

      this.updatePointerCoords(e);
      const hit = this.raycastHit();

      // Atom-Dragging NUR im "select"-Modus und mit linker Maustaste
      if (this.activeTool === 'select' && e.button === 0 && hit) {
        const ud = hit.object.userData;
        if (ud?.type === 'atom') {
          this.draggedAtomId = ud.atomId;
        } else if (ud?.type === 'cloud' && !ud.bond && ud.atomId) {
          this.draggedAtomId = ud.atomId;
        } else {
          this.draggedAtomId = null;
        }
      } else {
        this.draggedAtomId = null;
      }
      this.isDraggingAtom = false;
    });

    window.addEventListener('pointermove', e => {
      if (!this.isPointerDown) return;

      const totalDist = Math.hypot(e.clientX - this.pointerDownX, e.clientY - this.pointerDownY);
      // Bewegungsschwelle: mindestens 5 Pixel, um versehentliches Wackeln/Drehen beim Klick zu verhindern
      if (totalDist < 5 && !this.hasDragged) {
        return;
      }
      this.hasDragged = true;

      const dx = e.clientX - this.lastPointerX;
      const dy = e.clientY - this.lastPointerY;
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;

      if (this.draggedAtomId && this.activeTool === 'select' && this.onAtomMoved) {
        this.isDraggingAtom = true;
        // Atom in der Kameraebene verschieben
        const factor = this.cameraDistance * 0.0018;
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        this.camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());

        const moveVec = right.clone().multiplyScalar(dx * factor).add(up.clone().multiplyScalar(-dy * factor));
        const obj = this.moleculeGroup.children.find(c => c.userData?.atomId === this.draggedAtomId);
        if (obj) {
          const newPos = {
            x: obj.position.x + moveVec.x,
            y: obj.position.y + moveVec.y,
            z: obj.position.z + moveVec.z
          };
          this.onAtomMoved(this.draggedAtomId, newPos);
        }
      } else if (this.pointerButton === 0) {
        // Drehen nur wenn Kamera NICHT gesperrt ist
        if (!this.isCameraLocked) {
          this.rotateCamera(-dx * 0.008, -dy * 0.008);
        }
      } else {
        // Pan (rechte Maustaste)
        const panFactor = this.cameraDistance * 0.0012;
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        this.camera.matrixWorld.extractBasis(right, up, new THREE.Vector3());
        this.cameraTarget.add(right.multiplyScalar(-dx * panFactor));
        this.cameraTarget.add(up.multiplyScalar(dy * panFactor));
        this.updateCameraTransform();
      }
    });

    window.addEventListener('pointerup', e => {
      if (!this.isPointerDown) return;

      // Wenn die Maus kaum bewegt wurde: Es ist ein Klick!
      if (!this.hasDragged) {
        this.updatePointerCoords(e);
        const hit = this.raycastHit();
        if (hit && this.onPick) {
          const ud = hit.object.userData;
          if (ud?.type === 'atom') {
            this.onPick({ type: 'atom', atomId: ud.atomId, worldPosition: hit.point });
          } else if (ud?.type === 'cloud') {
            let atomId = ud.atomId;
            if (ud.bond && ud.atomAId && ud.atomBId) {
              // Bestimme das Atom, das dem Klickpunkt am nächsten liegt
              const objA = this.moleculeGroup.children.find(c => c.userData?.atomId === ud.atomAId);
              const objB = this.moleculeGroup.children.find(c => c.userData?.atomId === ud.atomBId);
              if (objA && objB) {
                const distA = hit.point.distanceTo(objA.position);
                const distB = hit.point.distanceTo(objB.position);
                atomId = distA < distB ? ud.atomAId : ud.atomBId;
              } else {
                atomId = ud.atomAId;
              }
            }
            this.onPick({ type: 'cloud', cloudId: ud.cloudId, atomId, worldPosition: hit.point });
          }
        } else if (this.onPick) {
          this.onPick({ type: 'none' });
        }
      } else if (this.isDraggingAtom && this.draggedAtomId && this.onAtomMoveEnd) {
        this.onAtomMoveEnd(this.draggedAtomId);
      }

      this.isPointerDown = false;
      this.hasDragged = false;
      this.isDraggingAtom = false;
      this.draggedAtomId = null;
    });

    el.addEventListener('wheel', e => {
      e.preventDefault();
      const zoomFactor = e.deltaY > 0 ? 1.08 : 0.92;
      this.zoomCamera(zoomFactor);
    }, { passive: false });

    // Touch Pinch-to-Zoom
    el.addEventListener('touchstart', e => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        this.touchDistance = Math.sqrt(dx * dx + dy * dy);
      }
    });

    el.addEventListener('touchmove', e => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const newDist = Math.sqrt(dx * dx + dy * dy);
        if (this.touchDistance > 0) {
          const factor = this.touchDistance / newDist;
          this.zoomCamera(Math.max(0.85, Math.min(1.15, factor)));
        }
        this.touchDistance = newDist;
      }
    }, { passive: false });
  }

  private updatePointerCoords(e: PointerEvent | MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointerPos.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointerPos.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  private raycastHit(): { object: THREE.Object3D; point: THREE.Vector3 } | null {
    this.raycaster.setFromCamera(this.pointerPos, this.camera);
    const intersects = this.raycaster.intersectObjects(this.moleculeGroup.children, true);
    if (intersects.length > 0) {
      let cur: THREE.Object3D | null = intersects[0].object;
      while (cur && !cur.userData?.type && cur.parent && cur.parent !== this.moleculeGroup) {
        cur = cur.parent;
      }
      if (cur && cur.userData?.type) {
        return { object: cur, point: intersects[0].point };
      }
    }
    return null;
  }

  captureScreenshotPNG(): string {
    this.renderer.render(this.scene, this.camera);
    return this.canvas.toDataURL('image/png');
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    if (this.autoRotate && !this.isPointerDown) {
      this.cameraTheta += 0.005;
      this.updateCameraTransform();
    }

    this.renderer.render(this.scene, this.camera);
  };
}
