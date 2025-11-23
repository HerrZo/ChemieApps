import { AtomSymbol, AtomData, GeometryType, Vector3 } from './types';

export const ATOMS: Record<AtomSymbol, AtomData> = {
  [AtomSymbol.H]: { symbol: AtomSymbol.H, en: 2.20, color: '#e2e8f0', radius: 25 }, // Light gray
  [AtomSymbol.C]: { symbol: AtomSymbol.C, en: 2.55, color: '#334155', radius: 35 }, // Dark slate
  [AtomSymbol.N]: { symbol: AtomSymbol.N, en: 3.04, color: '#3b82f6', radius: 33 }, // Blue
  [AtomSymbol.O]: { symbol: AtomSymbol.O, en: 3.44, color: '#ef4444', radius: 32 }, // Red
  [AtomSymbol.F]: { symbol: AtomSymbol.F, en: 3.98, color: '#22c55e', radius: 30 }, // Green
  [AtomSymbol.S]: { symbol: AtomSymbol.S, en: 2.58, color: '#fbbf24', radius: 38 }, // Yellow
  [AtomSymbol.Cl]: { symbol: AtomSymbol.Cl, en: 3.16, color: '#10b981', radius: 37 }, // Emerald
};

// Normalized vectors for geometries (Distance = 1)
export const GEOMETRY_VECTORS: Record<GeometryType, Vector3[]> = {
  [GeometryType.Linear2]: [
    { x: 1, y: 0, z: 0 } 
  ],
  [GeometryType.Linear3]: [
    { x: -1, y: 0, z: 0 },
    { x: 1, y: 0, z: 0 }
  ],
  [GeometryType.Bent]: [
    { x: Math.sin(-1.83), y: Math.cos(-1.83), z: 0 }, // Approx 105 deg
    { x: Math.sin(1.83), y: Math.cos(1.83), z: 0 }
  ],
  [GeometryType.TrigonalPlanar]: [
    { x: 0, y: -1, z: 0 },
    { x: Math.sin(2.09), y: Math.cos(2.09), z: 0 }, // 120 deg
    { x: -Math.sin(2.09), y: Math.cos(2.09), z: 0 }
  ],
  [GeometryType.Pyramidal]: [
    { x: 0, y: 0.3, z: -0.9 }, // Top-ish back
    { x: -0.8, y: 0.5, z: 0.4 }, 
    { x: 0.8, y: 0.5, z: 0.4 }
  ],
  [GeometryType.Tetrahedral]: [
    // Arranged so no atom is hidden directly behind the center
    { x: 0, y: -1, z: 0 }, // Top
    { x: 0.9, y: 0.4, z: 0 }, // Bottom Right
    { x: -0.9, y: 0.4, z: 0 }, // Bottom Left
    { x: 0.4, y: 0.8, z: -0.8 } // Back-ish, but offset in X/Y to be visible
  ]
};

export const QUIZ_MOLECULES = [
  {
    name: 'Wasserstoff',
    formula: 'H<sub>2</sub>',
    geometry: GeometryType.Linear2,
    centerAtom: AtomSymbol.H,
    partners: [AtomSymbol.H],
    isDipole: false,
    explanation: 'Zwei gleiche Atome haben die gleiche Elektronegativität. ΔEN = 0.'
  },
  {
    name: 'Chlorwasserstoff',
    formula: 'HCl',
    geometry: GeometryType.Linear2,
    centerAtom: AtomSymbol.Cl,
    partners: [AtomSymbol.H],
    isDipole: true,
    explanation: 'Chlor ist elektronegativer als Wasserstoff. Es entsteht ein permanenter Dipol.'
  },
  {
    name: 'Kohlenstoffdioxid',
    formula: 'CO<sub>2</sub>',
    geometry: GeometryType.Linear3,
    centerAtom: AtomSymbol.C,
    partners: [AtomSymbol.O, AtomSymbol.O],
    isDipole: false,
    explanation: 'Die Bindungen sind polar, aber durch die lineare Symmetrie heben sich die Dipolmomente auf.'
  },
  {
    name: 'Wasser',
    formula: 'H<sub>2</sub>O',
    geometry: GeometryType.Bent,
    centerAtom: AtomSymbol.O,
    partners: [AtomSymbol.H, AtomSymbol.H],
    isDipole: true,
    explanation: 'Durch die gewinkelte Struktur und die polaren O-H Bindungen entsteht ein Gesamtdipol.'
  },
  {
    name: 'Ammoniak',
    formula: 'NH<sub>3</sub>',
    geometry: GeometryType.Pyramidal,
    centerAtom: AtomSymbol.N,
    partners: [AtomSymbol.H, AtomSymbol.H, AtomSymbol.H],
    isDipole: true,
    explanation: 'Die pyramidale Form sorgt dafür, dass sich die polaren Bindungen nicht aufheben.'
  },
  {
    name: 'Methan',
    formula: 'CH<sub>4</sub>',
    geometry: GeometryType.Tetrahedral,
    centerAtom: AtomSymbol.C,
    partners: [AtomSymbol.H, AtomSymbol.H, AtomSymbol.H, AtomSymbol.H],
    isDipole: false,
    explanation: 'Die tetraedrische Symmetrie gleicht die schwach polaren C-H Bindungen perfekt aus.'
  },
  {
    name: 'Tetrafluormethan',
    formula: 'CF<sub>4</sub>',
    geometry: GeometryType.Tetrahedral,
    centerAtom: AtomSymbol.C,
    partners: [AtomSymbol.F, AtomSymbol.F, AtomSymbol.F, AtomSymbol.F],
    isDipole: false,
    explanation: 'Trotz sehr polarer C-F Bindungen ist das Molekül aufgrund der Symmetrie unpolar.'
  },
  {
    name: 'Fluormethan',
    formula: 'CH<sub>3</sub>F',
    geometry: GeometryType.Tetrahedral,
    centerAtom: AtomSymbol.C,
    partners: [AtomSymbol.H, AtomSymbol.H, AtomSymbol.H, AtomSymbol.F],
    isDipole: true,
    explanation: 'Die Symmetrie ist gestört. Das Fluoratom zieht die Elektronen stark zu sich -> Dipol.'
  }
];