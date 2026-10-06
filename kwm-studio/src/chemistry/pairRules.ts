import { ElementSymbol, ELEMENTS } from './elements';
import { Molecule, getBonds, getAtomClouds } from './model';

export type PairRuleKind =
  | 'noMolecule'
  | 'metallic'
  | 'alloy'
  | 'unknown'
  | 'unknownDouble'
  | 'special'
  | 'specialDouble'
  | 'complex';

export interface PairRule {
  a: ElementSymbol;
  b: ElementSymbol;
  kind: PairRuleKind;
  minOrder?: number; // Standard 1
}

export const PAIR_RULES: PairRule[] = [
  // noMolecule
  { a: 'Li', b: 'Li', kind: 'noMolecule' },
  { a: 'Be', b: 'Be', kind: 'noMolecule' },
  { a: 'Na', b: 'Na', kind: 'noMolecule' },
  { a: 'K',  b: 'K',  kind: 'noMolecule' },
  // metallic
  { a: 'Mg', b: 'Mg', kind: 'metallic' },
  { a: 'Al', b: 'Al', kind: 'metallic' },
  { a: 'Ca', b: 'Ca', kind: 'metallic' },
  // alloy
  { a: 'Li', b: 'Be', kind: 'alloy' },
  { a: 'Li', b: 'Na', kind: 'alloy' },
  { a: 'Li', b: 'Mg', kind: 'alloy' },
  { a: 'Li', b: 'K',  kind: 'alloy' },
  { a: 'Li', b: 'Ca', kind: 'alloy' },
  { a: 'Be', b: 'Mg', kind: 'alloy' },
  { a: 'Be', b: 'Al', kind: 'alloy' },
  { a: 'Be', b: 'Si', kind: 'alloy' },
  { a: 'Be', b: 'K',  kind: 'alloy' },
  { a: 'Be', b: 'Ca', kind: 'alloy' },
  { a: 'Be', b: 'Ga', kind: 'alloy' },
  { a: 'Be', b: 'Ge', kind: 'alloy' },
  { a: 'Be', b: 'As', kind: 'alloy' },
  { a: 'B',  b: 'Ge', kind: 'alloy' },
  { a: 'Al', b: 'Na', kind: 'alloy' },
  { a: 'Al', b: 'Mg', kind: 'alloy' },
  { a: 'Al', b: 'Si', kind: 'alloy' },
  { a: 'Al', b: 'K',  kind: 'alloy' },
  { a: 'Al', b: 'Ga', kind: 'alloy' },
  { a: 'Al', b: 'Ge', kind: 'alloy' },
  { a: 'Na', b: 'K',  kind: 'alloy' },
  { a: 'Na', b: 'Ca', kind: 'alloy' },
  { a: 'Mg', b: 'Ca', kind: 'alloy' },
  { a: 'Si', b: 'P',  kind: 'alloy' },
  { a: 'Si', b: 'Ga', kind: 'alloy' },
  { a: 'K',  b: 'Ca', kind: 'alloy' },
  { a: 'Ga', b: 'Ge', kind: 'alloy' },
  // unknown
  { a: 'Be', b: 'Na', kind: 'unknown' },
  { a: 'Na', b: 'Mg', kind: 'unknown' },
  { a: 'Mg', b: 'K',  kind: 'unknown' },
  { a: 'N',  b: 'As', kind: 'unknown' },
  // unknownDouble (ab Doppelbindung)
  { a: 'Be', b: 'N',  kind: 'unknownDouble', minOrder: 2 },
  { a: 'Be', b: 'O',  kind: 'unknownDouble', minOrder: 2 },
  { a: 'Be', b: 'P',  kind: 'unknownDouble', minOrder: 2 },
  { a: 'Be', b: 'S',  kind: 'unknownDouble', minOrder: 2 },
  { a: 'Be', b: 'Se', kind: 'unknownDouble', minOrder: 2 },
  // specialDouble
  { a: 'Be', b: 'C',  kind: 'specialDouble', minOrder: 2 },
  // special
  { a: 'Be', b: 'B',  kind: 'special' },
  { a: 'Al', b: 'B',  kind: 'special' },
  { a: 'B',  b: 'Ga', kind: 'special' },
  { a: 'B',  b: 'As', kind: 'special' },
  { a: 'N',  b: 'Ga', kind: 'special' },
  { a: 'N',  b: 'Ge', kind: 'special' },
  { a: 'Na', b: 'Ga', kind: 'special' },
  { a: 'Mg', b: 'Ga', kind: 'special' },
  { a: 'Al', b: 'Ca', kind: 'special' },
  { a: 'Al', b: 'As', kind: 'special' },
  { a: 'Ga', b: 'P',  kind: 'special' },
  { a: 'Ge', b: 'P',  kind: 'special' },
  { a: 'P',  b: 'As', kind: 'special' },
  { a: 'K',  b: 'Ga', kind: 'special' },
  { a: 'Ca', b: 'Ga', kind: 'special' },
  { a: 'Ga', b: 'As', kind: 'special' },
  { a: 'Ge', b: 'As', kind: 'special' },
  // complex
  { a: 'B',  b: 'Na', kind: 'complex' },
  { a: 'B',  b: 'K',  kind: 'complex' }
];

export function formatPairRuleText(rule: PairRule): string {
  const nameA = ELEMENTS[rule.a].name;
  const nameB = ELEMENTS[rule.b].name;

  switch (rule.kind) {
    case 'noMolecule':
      return `${nameA} bildet unter Normalbedingungen keine Moleküle aus zwei Atomen, sondern ein Metallgitter.`;
    case 'metallic':
      return `Zwischen ${nameA}-Atomen liegt eine Metallbindung vor, keine Elektronenpaarbindung.`;
    case 'alloy':
      return `${nameA} und ${nameB} bilden miteinander nur Legierungen, keine Moleküle.`;
    case 'unknown':
      return `Eine Verbindung aus ${nameA} und ${nameB} ist in dieser Form nicht bekannt.`;
    case 'unknownDouble':
      return `Eine Doppelbindung zwischen ${nameA} und ${nameB} ist nicht bekannt.`;
    case 'special':
      return `${nameA} und ${nameB} bilden besondere Strukturen, die sich mit dem Kugelwolkenmodell nicht darstellen lassen.`;
    case 'specialDouble':
      return `Eine Doppelbindung zwischen ${nameA} und ${nameB} ist ein Sonderfall der Forschung und hier nicht darstellbar.`;
    case 'complex':
      return `${nameA} und ${nameB} bilden Komplexverbindungen, die über das Kugelwolkenmodell hinausgehen.`;
  }
}

export interface ValidationResult {
  valid: boolean;
  message?: string;
  level?: 'info' | 'warning' | 'blocked';
}

// Validiert, ob zwei Atome kovalent verbunden werden dürfen
export function validateConnection(mol: Molecule, atomAId: string, atomBId: string): ValidationResult {
  if (atomAId === atomBId) {
    return { valid: false, message: 'Wähle zwei verschiedene Atome aus.', level: 'info' };
  }

  const atomA = mol.atoms.get(atomAId);
  const atomB = mol.atoms.get(atomBId);
  if (!atomA || !atomB) {
    return { valid: false, message: 'Atom nicht gefunden.', level: 'blocked' };
  }

  // Edelgas-Prüfung
  if (ELEMENTS[atomA.element].cat === 'noble') {
    return {
      valid: false,
      message: `${ELEMENTS[atomA.element].name} ist ein Edelgas: Alle Kugelwolken sind voll besetzt, daher entstehen keine Bindungen.`,
      level: 'blocked'
    };
  }
  if (ELEMENTS[atomB.element].cat === 'noble') {
    return {
      valid: false,
      message: `${ELEMENTS[atomB.element].name} ist ein Edelgas: Alle Kugelwolken sind voll besetzt, daher entstehen keine Bindungen.`,
      level: 'blocked'
    };
  }

  // Bestehende Bindungsordnung
  const bonds = getBonds(mol);
  const existingBond = bonds.find(
    b => (b.atomA === atomAId && b.atomB === atomBId) || (b.atomA === atomBId && b.atomB === atomAId)
  );
  const currentOrder = existingBond ? existingBond.order : 0;
  const targetOrder = currentOrder + 1;

  if (targetOrder > 3) {
    return {
      valid: false,
      message: 'Zwischen zwei Atomen sind höchstens drei Bindungswolken möglich (Dreifachbindung).',
      level: 'blocked'
    };
  }

  // Freie einfach besetzte Kugelwolken vorhanden?
  const singleCloudsA = getAtomClouds(mol, atomAId).filter(c => c.owners.length === 1 && c.electrons === 1);
  const singleCloudsB = getAtomClouds(mol, atomBId).filter(c => c.owners.length === 1 && c.electrons === 1);

  if (singleCloudsA.length === 0) {
    return {
      valid: false,
      message: `${ELEMENTS[atomA.element].name} hat keine einfach besetzte Kugelwolke mehr frei.`,
      level: 'blocked'
    };
  }
  if (singleCloudsB.length === 0) {
    return {
      valid: false,
      message: `${ELEMENTS[atomB.element].name} hat keine einfach besetzte Kugelwolke mehr frei.`,
      level: 'blocked'
    };
  }

  // Paar-Regeln prüfen (Reihenfolge a/b symmetrisch)
  for (const rule of PAIR_RULES) {
    const match =
      (rule.a === atomA.element && rule.b === atomB.element) ||
      (rule.a === atomB.element && rule.b === atomA.element);

    if (match) {
      const minOrder = rule.minOrder ?? 1;
      if (targetOrder >= minOrder) {
        return {
          valid: false,
          message: formatPairRuleText(rule),
          level: 'blocked'
        };
      }
    }
  }

  // Optional: Warnung bei sehr hoher Elektronegativitätsdifferenz (ionischer Charakter)
  const enA = ELEMENTS[atomA.element].en;
  const enB = ELEMENTS[atomB.element].en;
  if (enA !== null && enB !== null) {
    const diff = Math.abs(enA - enB);
    if (diff > 1.7) {
      const diffFormatted = diff.toLocaleString('de-DE', { maximumFractionDigits: 2 });
      return {
        valid: true,
        message: `Hinweis: Die Elektronegativitätsdifferenz beträgt ΔEN = ${diffFormatted}. Hier liegt vorwiegend ionischer Charakter vor.`,
        level: 'warning'
      };
    }
  }

  return { valid: true };
}
