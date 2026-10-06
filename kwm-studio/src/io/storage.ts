import { Molecule, createEmptyMolecule, Atom, Cloud } from '../chemistry/model';

const STORAGE_AUTOSAVE_KEY = 'kwm_autosave_v2';

export interface SerializedMolecule {
  version: 2;
  atoms: Atom[];
  clouds: Cloud[];
}

export function serializeMolecule(mol: Molecule): string {
  const data: SerializedMolecule = {
    version: 2,
    atoms: Array.from(mol.atoms.values()),
    clouds: Array.from(mol.clouds.values())
  };
  return JSON.stringify(data, null, 2);
}

export function deserializeMolecule(jsonStr: string): Molecule | null {
  try {
    const data = JSON.parse(jsonStr) as SerializedMolecule;
    const mol = createEmptyMolecule();
    for (const a of data.atoms) {
      mol.atoms.set(a.id, a);
    }
    for (const c of data.clouds) {
      mol.clouds.set(c.id, c);
    }
    return mol;
  } catch (err) {
    console.error('Fehler beim Deserialisieren:', err);
    return null;
  }
}

export function autoSave(mol: Molecule) {
  try {
    localStorage.setItem(STORAGE_AUTOSAVE_KEY, serializeMolecule(mol));
  } catch {
    // LocalStorage evtl. deaktiviert
  }
}

export function loadAutoSave(): Molecule | null {
  try {
    const str = localStorage.getItem(STORAGE_AUTOSAVE_KEY);
    return str ? deserializeMolecule(str) : null;
  } catch {
    return null;
  }
}
