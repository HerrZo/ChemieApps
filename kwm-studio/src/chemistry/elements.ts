// Referenztabelle der 26 unterstützten chemischen Elemente nach dem Kugelwolkenmodell
export type ElementSymbol =
  | 'H'  | 'He'
  | 'Li' | 'Be' | 'B'  | 'C'  | 'N'  | 'O'  | 'F'  | 'Ne'
  | 'Na' | 'Mg' | 'Al' | 'Si' | 'P'  | 'S'  | 'Cl' | 'Ar'
  | 'K'  | 'Ca' | 'Ga' | 'Ge' | 'As' | 'Se' | 'Br' | 'Kr';

export type ElementCategory = 'metal' | 'semimetal' | 'nonmetal' | 'noble';

export interface ElementData {
  symbol: ElementSymbol;
  name: string;
  z: number;
  period: number;
  group: number;
  col: number;      // 1..8 im kompakten Periodensystem
  valence: number;  // 1..8 Valenzelektronen
  en: number | null;// Pauling-Elektronegativität (null für He, Ne, Ar)
  mass: number;     // atomare Masse in u
  cat: ElementCategory;
}

export const ELEMENTS: Record<ElementSymbol, ElementData> = {
  H:  { symbol: 'H',  name: 'Wasserstoff', z: 1,  period: 1, group: 1,  col: 1, valence: 1, en: 2.20, mass: 1.008,  cat: 'nonmetal' },
  He: { symbol: 'He', name: 'Helium',      z: 2,  period: 1, group: 18, col: 8, valence: 2, en: null, mass: 4.003,  cat: 'noble' },
  Li: { symbol: 'Li', name: 'Lithium',     z: 3,  period: 2, group: 1,  col: 1, valence: 1, en: 0.98, mass: 6.940,  cat: 'metal' },
  Be: { symbol: 'Be', name: 'Beryllium',   z: 4,  period: 2, group: 2,  col: 2, valence: 2, en: 1.57, mass: 9.012,  cat: 'metal' },
  B:  { symbol: 'B',  name: 'Bor',         z: 5,  period: 2, group: 13, col: 3, valence: 3, en: 2.04, mass: 10.810, cat: 'semimetal' },
  C:  { symbol: 'C',  name: 'Kohlenstoff', z: 6,  period: 2, group: 14, col: 4, valence: 4, en: 2.55, mass: 12.011, cat: 'nonmetal' },
  N:  { symbol: 'N',  name: 'Stickstoff',  z: 7,  period: 2, group: 15, col: 5, valence: 5, en: 3.04, mass: 14.007, cat: 'nonmetal' },
  O:  { symbol: 'O',  name: 'Sauerstoff',  z: 8,  period: 2, group: 16, col: 6, valence: 6, en: 3.44, mass: 15.999, cat: 'nonmetal' },
  F:  { symbol: 'F',  name: 'Fluor',       z: 9,  period: 2, group: 17, col: 7, valence: 7, en: 3.98, mass: 18.998, cat: 'nonmetal' },
  Ne: { symbol: 'Ne', name: 'Neon',        z: 10, period: 2, group: 18, col: 8, valence: 8, en: null, mass: 20.180, cat: 'noble' },
  Na: { symbol: 'Na', name: 'Natrium',     z: 11, period: 3, group: 1,  col: 1, valence: 1, en: 0.93, mass: 22.990, cat: 'metal' },
  Mg: { symbol: 'Mg', name: 'Magnesium',   z: 12, period: 3, group: 2,  col: 2, valence: 2, en: 1.31, mass: 24.305, cat: 'metal' },
  Al: { symbol: 'Al', name: 'Aluminium',   z: 13, period: 3, group: 13, col: 3, valence: 3, en: 1.61, mass: 26.982, cat: 'metal' },
  Si: { symbol: 'Si', name: 'Silicium',    z: 14, period: 3, group: 14, col: 4, valence: 4, en: 1.90, mass: 28.085, cat: 'semimetal' },
  P:  { symbol: 'P',  name: 'Phosphor',    z: 15, period: 3, group: 15, col: 5, valence: 5, en: 2.19, mass: 30.974, cat: 'nonmetal' },
  S:  { symbol: 'S',  name: 'Schwefel',    z: 16, period: 3, group: 16, col: 6, valence: 6, en: 2.58, mass: 32.060, cat: 'nonmetal' },
  Cl: { symbol: 'Cl', name: 'Chlor',       z: 17, period: 3, group: 17, col: 7, valence: 7, en: 3.16, mass: 35.450, cat: 'nonmetal' },
  Ar: { symbol: 'Ar', name: 'Argon',       z: 18, period: 3, group: 18, col: 8, valence: 8, en: null, mass: 39.948, cat: 'noble' },
  K:  { symbol: 'K',  name: 'Kalium',      z: 19, period: 4, group: 1,  col: 1, valence: 1, en: 0.82, mass: 39.098, cat: 'metal' },
  Ca: { symbol: 'Ca', name: 'Calcium',     z: 20, period: 4, group: 2,  col: 2, valence: 2, en: 1.00, mass: 40.078, cat: 'metal' },
  Ga: { symbol: 'Ga', name: 'Gallium',     z: 31, period: 4, group: 13, col: 3, valence: 3, en: 1.81, mass: 69.723, cat: 'metal' },
  Ge: { symbol: 'Ge', name: 'Germanium',   z: 32, period: 4, group: 14, col: 4, valence: 4, en: 2.01, mass: 72.630, cat: 'semimetal' },
  As: { symbol: 'As', name: 'Arsen',       z: 33, period: 4, group: 15, col: 5, valence: 5, en: 2.18, mass: 74.922, cat: 'semimetal' },
  Se: { symbol: 'Se', name: 'Selen',       z: 34, period: 4, group: 16, col: 6, valence: 6, en: 2.55, mass: 78.971, cat: 'nonmetal' },
  Br: { symbol: 'Br', name: 'Brom',        z: 35, period: 4, group: 17, col: 7, valence: 7, en: 2.96, mass: 79.904, cat: 'nonmetal' },
  Kr: { symbol: 'Kr', name: 'Krypton',     z: 36, period: 4, group: 18, col: 8, valence: 8, en: 3.00, mass: 83.798, cat: 'noble' }
};

export const ELEMENT_LIST = Object.values(ELEMENTS);

// Berechnet die Anfangsbesetzung der Kugelwolken beim Erzeugen eines Atoms
export function initialCloudElectrons(symbol: ElementSymbol): (1 | 2)[] {
  if (symbol === 'H') return [1];
  if (symbol === 'He') return [2];
  const v = ELEMENTS[symbol].valence;
  if (v <= 4) {
    return Array(v).fill(1);
  }
  // Mehr als 4 Valenzelektronen: Hundsche Regel -> erst 4 einfach besetzt, dann paarweise auffüllen
  const doubles = v - 4;
  const singles = 8 - v;
  return [...Array(doubles).fill(2), ...Array(singles).fill(1)];
}
