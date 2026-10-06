import { ElementSymbol } from './elements';
import { Molecule, Atom, Cloud, instantiateAtom, getAtomClouds, vec3, Vec3 } from './model';
import { validateConnection } from './pairRules';

export interface CommandResult {
  success: boolean;
  message?: string;
  level?: 'info' | 'warning' | 'blocked';
}

export interface Command {
  execute(mol: Molecule): CommandResult;
  undo(mol: Molecule): void;
  description: string;
}

export class CommandManager {
  private undoStack: Command[] = [];
  private redoStack: Command[] = [];
  private maxStackSize = 50;

  execute(cmd: Command, mol: Molecule): CommandResult {
    const res = cmd.execute(mol);
    if (res.success) {
      this.undoStack.push(cmd);
      this.redoStack = [];
      if (this.undoStack.length > this.maxStackSize) {
        this.undoStack.shift();
      }
    }
    return res;
  }

  undo(mol: Molecule): CommandResult {
    const cmd = this.undoStack.pop();
    if (!cmd) {
      return { success: false, message: 'Kein weiterer Schritt zum Rückgängigmachen.' };
    }
    cmd.undo(mol);
    this.redoStack.push(cmd);
    return { success: true, message: `Rückgängig: ${cmd.description}` };
  }

  redo(mol: Molecule): CommandResult {
    const cmd = this.redoStack.pop();
    if (!cmd) {
      return { success: false, message: 'Kein weiterer Schritt zum Wiederholen.' };
    }
    const res = cmd.execute(mol);
    if (res.success) {
      this.undoStack.push(cmd);
    }
    return { success: true, message: `Wiederholt: ${cmd.description}` };
  }

  canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  clear() {
    this.undoStack = [];
    this.redoStack = [];
  }
}

// ── Befehl: Neues Atom hinzufügen ─────────────────────────────────────────────
export class AddAtomCommand implements Command {
  public description: string;
  private createdAtom?: Atom;
  private createdClouds: Cloud[] = [];

  constructor(private element: ElementSymbol, private targetPos?: Vec3) {
    this.description = `Atom ${element} hinzugefügt`;
  }

  execute(mol: Molecule): CommandResult {
    if (mol.atoms.size >= 120) {
      return { success: false, message: 'Die Szene ist auf 120 Atome begrenzt.', level: 'blocked' };
    }

    let pos = this.targetPos ? { ...this.targetPos } : this.findFreePosition(mol);

    const { atom, clouds } = instantiateAtom(this.element, pos);
    this.createdAtom = atom;
    this.createdClouds = clouds;

    mol.atoms.set(atom.id, atom);
    for (const c of clouds) {
      mol.clouds.set(c.id, c);
    }

    return { success: true, message: `${this.element} platziert.`, level: 'info' };
  }

  undo(mol: Molecule): void {
    if (this.createdAtom) {
      mol.atoms.delete(this.createdAtom.id);
      for (const c of this.createdClouds) {
        mol.clouds.delete(c.id);
      }
    }
  }

  private findFreePosition(mol: Molecule): Vec3 {
    if (mol.atoms.size === 0) return vec3(0, 0, 0);

    // Spiralförmig nach einer freien Position mit mindestens 2.2 Einheiten Abstand suchen
    let r = 2.4;
    for (let angle = 0; angle < Math.PI * 6; angle += 0.8) {
      const x = Math.cos(angle) * r;
      const y = (Math.sin(angle * 2) * 0.4);
      const z = Math.sin(angle) * r;

      let collides = false;
      for (const a of mol.atoms.values()) {
        const dx = a.position.x - x;
        const dy = a.position.y - y;
        const dz = a.position.z - z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 2.0) {
          collides = true;
          break;
        }
      }
      if (!collides) {
        return vec3(x, y, z);
      }
      r += 0.3;
    }
    return vec3(mol.atoms.size * 2.2, 0, 0);
  }
}

// ── Befehl: Zwei Kugelwolken / Atome verbinden ─────────────────────────────────
export class ConnectAtomsCommand implements Command {
  public description = 'Kovalente Bindung geknüpft';
  private removedCloudA?: Cloud;
  private removedCloudB?: Cloud;
  private createdBondCloud?: Cloud;
  private warningMsg?: string;

  constructor(private atomAId: string, private atomBId: string) {}

  execute(mol: Molecule): CommandResult {
    const val = validateConnection(mol, this.atomAId, this.atomBId);
    if (!val.valid) {
      return { success: false, message: val.message, level: val.level };
    }
    this.warningMsg = val.message;

    // Je eine einfach besetzte Wolke von Atom A und Atom B wählen
    const cloudsA = getAtomClouds(mol, this.atomAId).filter(c => c.owners.length === 1 && c.electrons === 1);
    const cloudsB = getAtomClouds(mol, this.atomBId).filter(c => c.owners.length === 1 && c.electrons === 1);

    if (cloudsA.length === 0 || cloudsB.length === 0) {
      return { success: false, message: 'Keine einfach besetzten Kugelwolken frei.', level: 'blocked' };
    }

    this.removedCloudA = cloudsA[0];
    this.removedCloudB = cloudsB[0];

    // Beide entfernen
    mol.clouds.delete(this.removedCloudA.id);
    mol.clouds.delete(this.removedCloudB.id);

    // Gemeinsame, doppelt besetzte Bindungswolke erzeugen
    this.createdBondCloud = {
      id: `bond_${this.atomAId}_${this.atomBId}_${Math.random().toString(36).substring(2, 7)}`,
      owners: [this.atomAId, this.atomBId],
      electrons: 2,
      proton: false
    };
    mol.clouds.set(this.createdBondCloud.id, this.createdBondCloud);

    return {
      success: true,
      message: this.warningMsg || 'Bindung erfolgreich geknüpft.',
      level: this.warningMsg ? 'warning' : 'info'
    };
  }

  undo(mol: Molecule): void {
    if (this.createdBondCloud) {
      mol.clouds.delete(this.createdBondCloud.id);
    }
    if (this.removedCloudA) {
      mol.clouds.set(this.removedCloudA.id, this.removedCloudA);
    }
    if (this.removedCloudB) {
      mol.clouds.set(this.removedCloudB.id, this.removedCloudB);
    }
  }
}

// ── Befehl: Proton an freies Elektronenpaar anlagern (Brønsted) ───────────────
export class AddProtonCommand implements Command {
  public description = 'Proton angelagert (Säure-Base)';
  private targetCloud?: Cloud;
  private createdProtonAtom?: Atom;

  constructor(private atomId: string, private cloudId?: string) {}

  execute(mol: Molecule): CommandResult {
    const clouds = getAtomClouds(mol, this.atomId).filter(
      c => c.owners.length === 1 && c.electrons === 2 && !c.proton
    );

    if (clouds.length === 0) {
      return {
        success: false,
        message: 'Ein Proton kann nur an eine doppelt besetzte, freie Kugelwolke angelagert werden.',
        level: 'blocked'
      };
    }

    const chosenCloud = this.cloudId ? mol.clouds.get(this.cloudId) || clouds[0] : clouds[0];
    this.targetCloud = chosenCloud;
    chosenCloud.proton = true;

    // Erzeuge ein H-Atom, das als Proton markiert ist
    const baseAtom = mol.atoms.get(this.atomId)!;
    this.createdProtonAtom = {
      id: `p_${Math.random().toString(36).substring(2, 8)}`,
      element: 'H',
      position: {
        x: baseAtom.position.x + 0.8,
        y: baseAtom.position.y + 0.8,
        z: baseAtom.position.z
      },
      innerShell: false,
      isProton: true
    };
    mol.atoms.set(this.createdProtonAtom.id, this.createdProtonAtom);

    return {
      success: true,
      message: 'Proton (H⁺) erfolgreich an freies Elektronenpaar angelagert.',
      level: 'info'
    };
  }

  undo(mol: Molecule): void {
    if (this.targetCloud) {
      this.targetCloud.proton = false;
    }
    if (this.createdProtonAtom) {
      mol.atoms.delete(this.createdProtonAtom.id);
    }
  }
}

// ── Befehl: H-Atom als Proton herausziehen ────────────────────────────────────
export class PullHydrogenCommand implements Command {
  public description = 'H als Proton abgegeben';
  private removedBondCloud?: Cloud;
  private createdLonePair?: Cloud;
  private hAtom?: Atom;
  private partnerAtomId?: string;

  constructor(private hydrogenAtomId: string) {}

  execute(mol: Molecule): CommandResult {
    const atom = mol.atoms.get(this.hydrogenAtomId);
    if (!atom || atom.element !== 'H') {
      return { success: false, message: 'Nur Wasserstoff-Atome lassen sich als Proton herausziehen.', level: 'info' };
    }

    // Bindungswolke finden
    const bonds = Array.from(mol.clouds.values()).filter(
      c => c.owners.length === 2 && c.owners.includes(this.hydrogenAtomId)
    );

    if (bonds.length === 0) {
      return { success: false, message: 'Dieses Wasserstoff-Atom ist an kein anderes Atom gebunden.', level: 'info' };
    }

    this.removedBondCloud = bonds[0];
    this.partnerAtomId = this.removedBondCloud.owners.find(id => id !== this.hydrogenAtomId)!;
    this.hAtom = atom;

    // Bindungswolke entfernen
    mol.clouds.delete(this.removedBondCloud.id);

    // Dem Partneratom bleibt das Elektronenpaar als nichtbindende Wolke (2 e⁻) erhalten!
    this.createdLonePair = {
      id: `lp_${this.partnerAtomId}_${Math.random().toString(36).substring(2, 7)}`,
      owners: [this.partnerAtomId],
      electrons: 2,
      proton: false
    };
    mol.clouds.set(this.createdLonePair.id, this.createdLonePair);

    // H wird als freies Proton H⁺ markiert
    atom.isProton = true;

    return {
      success: true,
      message: 'Wasserstoff als Proton (H⁺) abgespalten. Das Elektronenpaar verbleibt am Partneratom.',
      level: 'info'
    };
  }

  undo(mol: Molecule): void {
    if (this.hAtom) {
      this.hAtom.isProton = false;
    }
    if (this.createdLonePair) {
      mol.clouds.delete(this.createdLonePair.id);
    }
    if (this.removedBondCloud) {
      mol.clouds.set(this.removedBondCloud.id, this.removedBondCloud);
    }
  }
}

// ── Befehl: Atome löschen ─────────────────────────────────────────────────────
export class DeleteAtomsCommand implements Command {
  public description = 'Atome gelöscht';
  private deletedAtoms: Atom[] = [];
  private deletedClouds: Cloud[] = [];
  private restoredClouds: Cloud[] = [];

  constructor(private atomIds: string[]) {}

  execute(mol: Molecule): CommandResult {
    const toDeleteSet = new Set(this.atomIds);

    for (const id of toDeleteSet) {
      const a = mol.atoms.get(id);
      if (a) {
        this.deletedAtoms.push(a);
        mol.atoms.delete(id);
      }
    }

    // Wolken prüfen
    for (const [cId, c] of Array.from(mol.clouds.entries())) {
      const ownerCountInDeleted = c.owners.filter(id => toDeleteSet.has(id)).length;

      if (ownerCountInDeleted === c.owners.length) {
        // Alle Besitzer gelöscht -> Wolke löschen
        this.deletedClouds.push(c);
        mol.clouds.delete(cId);
      } else if (ownerCountInDeleted > 0 && c.owners.length === 2) {
        // Bindungswolke, bei der ein Partner gelöscht wurde -> verbleibender Partner erhält wieder einfach besetzte Wolke
        this.deletedClouds.push(c);
        mol.clouds.delete(cId);

        const survivorId = c.owners.find(id => !toDeleteSet.has(id))!;
        const restored: Cloud = {
          id: `restored_${survivorId}_${Math.random().toString(36).substring(2, 7)}`,
          owners: [survivorId],
          electrons: 1,
          proton: false
        };
        this.restoredClouds.push(restored);
        mol.clouds.set(restored.id, restored);
      }
    }

    return {
      success: true,
      message: `${this.deletedAtoms.length} Atom(e) entfernt.`,
      level: 'info'
    };
  }

  undo(mol: Molecule): void {
    for (const r of this.restoredClouds) {
      mol.clouds.delete(r.id);
    }
    for (const a of this.deletedAtoms) {
      mol.atoms.set(a.id, a);
    }
    for (const c of this.deletedClouds) {
      mol.clouds.set(c.id, c);
    }
  }
}
