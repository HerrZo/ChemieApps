import { ElementSymbol, ELEMENTS, initialCloudElectrons } from './elements';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export function vec3(x = 0, y = 0, z = 0): Vec3 {
  return { x, y, z };
}

export interface Atom {
  id: string;
  element: ElementSymbol;
  position: Vec3;
  innerShell: boolean; // Rote Kugel um den Rumpf (Periode >= 2)
  isProton?: boolean;  // H⁺ ohne Elektronenwolke
}

export interface Cloud {
  id: string;
  owners: [string] | [string, string]; // 1 Atom = nichtbindend, 2 Atome = Bindungswolke
  electrons: 0 | 1 | 2;                 // 1 = einfach/blau, 2 = doppelt/rot, 0 = freier Platz
  proton?: boolean;                     // Nimmt ein Proton (H⁺) auf (z.B. in H₃O⁺ oder NH₄⁺)
}

export interface Molecule {
  atoms: Map<string, Atom>;
  clouds: Map<string, Cloud>;
}

export function createEmptyMolecule(): Molecule {
  return {
    atoms: new Map(),
    clouds: new Map()
  };
}

export function cloneMolecule(mol: Molecule): Molecule {
  const nextAtoms = new Map<string, Atom>();
  for (const [id, a] of mol.atoms) {
    nextAtoms.set(id, {
      ...a,
      position: { ...a.position }
    });
  }

  const nextClouds = new Map<string, Cloud>();
  for (const [id, c] of mol.clouds) {
    nextClouds.set(id, {
      ...c,
      owners: [...c.owners] as [string] | [string, string]
    });
  }

  return { atoms: nextAtoms, clouds: nextClouds };
}

// Erzeugt ein Atom mit seinen Valenz-Kugelwolken
export function instantiateAtom(element: ElementSymbol, pos: Vec3, idPrefix = 'a'): { atom: Atom; clouds: Cloud[] } {
  const atomId = `${idPrefix}_${Math.random().toString(36).substring(2, 9)}`;
  const hasInnerShell = ELEMENTS[element].period >= 2;

  const atom: Atom = {
    id: atomId,
    element,
    position: { ...pos },
    innerShell: hasInnerShell,
    isProton: false
  };

  const cloudElectrons = initialCloudElectrons(element);
  const clouds: Cloud[] = cloudElectrons.map((elec, i) => ({
    id: `c_${atomId}_${i}`,
    owners: [atomId],
    electrons: elec,
    proton: false
  }));

  return { atom, clouds };
}

// Gibt alle Wolken zurück, die einem Atom zugeordnet sind
export function getAtomClouds(mol: Molecule, atomId: string): Cloud[] {
  const result: Cloud[] = [];
  for (const c of mol.clouds.values()) {
    if (c.owners.includes(atomId)) {
      result.push(c);
    }
  }
  return result;
}

// Gibt die freien Speicherplätze (unbesetzte Kugelwolken) eines Atoms zurück
export function getAtomFreeSlots(mol: Molecule, atomId: string): number {
  const atom = mol.atoms.get(atomId);
  if (!atom || atom.isProton) return 0;
  const maxSlots = (atom.element === 'H' || atom.element === 'He') ? 1 : 4;
  const clouds = getAtomClouds(mol, atomId);
  return Math.max(0, maxSlots - clouds.length);
}

// Statistische Zähler nach dem Kugelwolkenmodell
export function getCloudStats(mol: Molecule) {
  let freeSlots = 0;
  let singleClouds = 0;
  let doubleClouds = 0;
  let innerShells = 0;

  for (const a of mol.atoms.values()) {
    if (a.innerShell) innerShells++;
    freeSlots += getAtomFreeSlots(mol, a.id);
  }

  for (const c of mol.clouds.values()) {
    if (c.electrons === 1) {
      singleClouds++;
    } else if (c.electrons === 2) {
      doubleClouds++;
    }
  }

  return { freeSlots, singleClouds, doubleClouds, innerShells };
}

// Berechnet die Gesamtmasse in u
export function getMolarMass(mol: Molecule): number {
  let mass = 0;
  for (const a of mol.atoms.values()) {
    mass += ELEMENTS[a.element].mass;
  }
  return mass;
}

// Berechnet die Netto-Ladung des Moleküls
export function getNetCharge(mol: Molecule): number {
  let protonCount = 0;
  let electronCount = 0;

  for (const a of mol.atoms.values()) {
    if (a.isProton) {
      protonCount += 1;
    } else {
      protonCount += ELEMENTS[a.element].valence;
    }
  }

  for (const c of mol.clouds.values()) {
    electronCount += c.electrons;
  }

  return protonCount - electronCount;
}

// Berechnet die Formalladung eines einzelnen Atoms
export function getAtomFormalCharge(mol: Molecule, atomId: string): number {
  const atom = mol.atoms.get(atomId);
  if (!atom) return 0;
  if (atom.isProton) return 1;

  const vNeutral = ELEMENTS[atom.element]?.valence || 0;
  let nonBondingElectrons = 0;
  let bondCount = 0;

  for (const c of mol.clouds.values()) {
    if (c.owners.length === 1 && c.owners[0] === atomId) {
      nonBondingElectrons += c.electrons;
    } else if (c.owners.length === 2 && c.owners.includes(atomId)) {
      bondCount += 1;
    }
  }

  return vNeutral - nonBondingElectrons - bondCount;
}

// Berechnet die Summenformel im Hill-System mit didaktischen Ausnahmen (z.B. OH⁻, NH₄⁺, H₂O)
export function getFormula(mol: Molecule): string {
  if (mol.atoms.size === 0) return '–';

  const counts: Record<string, number> = {};
  for (const a of mol.atoms.values()) {
    counts[a.element] = (counts[a.element] || 0) + 1;
  }

  const subscripts: Record<string, string> = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
    '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
  };

  const toSubscript = (num: number): string => {
    if (num <= 1) return '';
    return num.toString().split('').map(d => subscripts[d] || d).join('');
  };

  const formulaKey = Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}${v}`)
    .join('');

  let baseFormula = '';
  // Didaktische Ausnahmen für bekannte Verbindungen und Ionen
  if (formulaKey === 'H1O1') {
    baseFormula = 'OH';
  } else if (formulaKey === 'H3N1') {
    baseFormula = 'NH₃';
  } else if (formulaKey === 'H4N1') {
    baseFormula = 'NH₄';
  } else if (formulaKey === 'H2O1') {
    baseFormula = 'H₂O';
  } else if (formulaKey === 'H3O1') {
    baseFormula = 'H₃O';
  } else {
    // Hill-System: C zuerst, dann H, dann alphabetisch
    const keys = Object.keys(counts);
    keys.sort((a, b) => {
      if (a === 'C' && b !== 'C') return -1;
      if (b === 'C' && a !== 'C') return 1;
      if (a === 'H' && b !== 'H' && keys.includes('C')) return -1;
      if (b === 'H' && a !== 'H' && keys.includes('C')) return 1;
      return a.localeCompare(b);
    });
    baseFormula = keys.map(k => `${k}${toSubscript(counts[k])}`).join('');
  }

  const charge = getNetCharge(mol);
  if (charge > 0) {
    baseFormula += charge === 1 ? '⁺' : `${charge}⁺`;
  } else if (charge < 0) {
    baseFormula += charge === -1 ? '⁻' : `${Math.abs(charge)}⁻`;
  }

  return baseFormula;
}

// Bindungsinformationen zwischen Paaren von Atomen
export interface BondInfo {
  atomA: string;
  atomB: string;
  order: number; // 1, 2 oder 3
  cloudIds: string[];
}

export function getBonds(mol: Molecule): BondInfo[] {
  const pairMap = new Map<string, { atomA: string; atomB: string; clouds: string[] }>();

  for (const c of mol.clouds.values()) {
    if (c.owners.length === 2) {
      const [a, b] = c.owners;
      const key = a < b ? `${a}_${b}` : `${b}_${a}`;
      if (!pairMap.has(key)) {
        pairMap.set(key, { atomA: a, atomB: b, clouds: [] });
      }
      pairMap.get(key)!.clouds.push(c.id);
    }
  }

  const bonds: BondInfo[] = [];
  for (const item of pairMap.values()) {
    bonds.push({
      atomA: item.atomA,
      atomB: item.atomB,
      order: item.clouds.length,
      cloudIds: item.clouds
    });
  }

  return bonds;
}
