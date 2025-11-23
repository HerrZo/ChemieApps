export enum AtomSymbol {
  H = 'H',
  C = 'C',
  N = 'N',
  O = 'O',
  F = 'F',
  S = 'S',
  Cl = 'Cl'
}

export interface AtomData {
  symbol: AtomSymbol;
  en: number; // Electronegativity
  color: string;
  radius: number;
}

export enum GeometryType {
  Linear2 = 'Linear (2 Atome)',
  Linear3 = 'Linear (3 Atome)',
  Bent = 'Gewinkelt',
  TrigonalPlanar = 'Trigonal-planar',
  Pyramidal = 'Pyramidal',
  Tetrahedral = 'Tetraedrisch'
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface MoleculeDef {
  name: string;
  formula: string; // e.g. "H2O"
  geometry: GeometryType;
  centerAtom: AtomSymbol | null; // Null for Linear2 (H2)
  partners: AtomSymbol[];
  isDipole: boolean;
  explanation: string;
}