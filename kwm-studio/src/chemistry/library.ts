import { ElementSymbol } from './elements';
import { Molecule, createEmptyMolecule, instantiateAtom, getAtomClouds, vec3 } from './model';

export interface RecipeBond {
  aIndex: number;
  bIndex: number;
  order: number;
}

export type RecipeOp =
  | { op: 'protonate'; atom: number }
  | { op: 'deprotonate'; atom: number };

export interface Recipe {
  id: string;
  name: string;
  group: 'Anorganisch' | 'Ionen' | 'Organisch';
  atoms: ElementSymbol[];
  bonds: [number, number, number][]; // [atomA, atomB, order]
  ops?: RecipeOp[];
}

export const LIBRARY: Recipe[] = [
  // ── Elemente & anorganische Moleküle
  { id: 'h2',   name: 'Wasserstoff',        group: 'Anorganisch', atoms: ['H','H'], bonds: [[0,1,1]] },
  { id: 'f2',   name: 'Fluor',              group: 'Anorganisch', atoms: ['F','F'], bonds: [[0,1,1]] },
  { id: 'cl2',  name: 'Chlor',              group: 'Anorganisch', atoms: ['Cl','Cl'], bonds: [[0,1,1]] },
  { id: 'o2',   name: 'Sauerstoff',         group: 'Anorganisch', atoms: ['O','O'], bonds: [[0,1,2]] },
  { id: 'n2',   name: 'Stickstoff',         group: 'Anorganisch', atoms: ['N','N'], bonds: [[0,1,3]] },
  { id: 'hf',   name: 'Fluorwasserstoff',   group: 'Anorganisch', atoms: ['H','F'], bonds: [[0,1,1]] },
  { id: 'hcl',  name: 'Chlorwasserstoff',   group: 'Anorganisch', atoms: ['H','Cl'], bonds: [[0,1,1]] },
  { id: 'h2o',  name: 'Wasser',             group: 'Anorganisch', atoms: ['O','H','H'], bonds: [[0,1,1],[0,2,1]] },
  { id: 'h2s',  name: 'Schwefelwasserstoff',group: 'Anorganisch', atoms: ['S','H','H'], bonds: [[0,1,1],[0,2,1]] },
  { id: 'nh3',  name: 'Ammoniak',           group: 'Anorganisch', atoms: ['N','H','H','H'], bonds: [[0,1,1],[0,2,1],[0,3,1]] },
  { id: 'ph3',  name: 'Phosphan',           group: 'Anorganisch', atoms: ['P','H','H','H'], bonds: [[0,1,1],[0,2,1],[0,3,1]] },
  { id: 'co2',  name: 'Kohlenstoffdioxid',  group: 'Anorganisch', atoms: ['C','O','O'], bonds: [[0,1,2],[0,2,2]] },
  { id: 'hcn',  name: 'Blausäure',          group: 'Anorganisch', atoms: ['H','C','N'], bonds: [[0,1,1],[1,2,3]] },
  { id: 'beh2', name: 'Berylliumhydrid',    group: 'Anorganisch', atoms: ['Be','H','H'], bonds: [[0,1,1],[0,2,1]] },
  { id: 'bh3',  name: 'Boran',              group: 'Anorganisch', atoms: ['B','H','H','H'], bonds: [[0,1,1],[0,2,1],[0,3,1]] },
  { id: 'sih4', name: 'Silan',              group: 'Anorganisch', atoms: ['Si','H','H','H','H'], bonds: [[0,1,1],[0,2,1],[0,3,1],[0,4,1]] },

  // ── Ionen
  { id: 'h3o',  name: 'Oxonium-Ion',  group: 'Ionen', atoms: ['O','H','H'], bonds: [[0,1,1],[0,2,1]], ops: [{ op: 'protonate', atom: 0 }] },
  { id: 'oh',   name: 'Hydroxid-Ion', group: 'Ionen', atoms: ['O','H','H'], bonds: [[0,1,1],[0,2,1]], ops: [{ op: 'deprotonate', atom: 2 }] },
  { id: 'nh4',  name: 'Ammonium-Ion', group: 'Ionen', atoms: ['N','H','H','H'], bonds: [[0,1,1],[0,2,1],[0,3,1]], ops: [{ op: 'protonate', atom: 0 }] },

  // ── Organisch
  { id: 'ch4',    name: 'Methan',      group: 'Organisch', atoms: ['C','H','H','H','H'], bonds: [[0,1,1],[0,2,1],[0,3,1],[0,4,1]] },
  { id: 'c2h6',   name: 'Ethan',       group: 'Organisch', atoms: ['C','C','H','H','H','H','H','H'],
    bonds: [[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[1,7,1]] },
  { id: 'c3h8',   name: 'Propan',      group: 'Organisch', atoms: ['C','C','C','H','H','H','H','H','H','H','H'],
    bonds: [[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1],[2,10,1]] },
  { id: 'c4h10',  name: 'Butan',       group: 'Organisch', atoms: ['C','C','C','C','H','H','H','H','H','H','H','H','H','H'],
    bonds: [[0,1,1],[1,2,1],[2,3,1],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1],[2,9,1],[2,10,1],[3,11,1],[3,12,1],[3,13,1]] },
  { id: 'c2h4',   name: 'Ethen',       group: 'Organisch', atoms: ['C','C','H','H','H','H'], bonds: [[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]] },
  { id: 'c2h2',   name: 'Ethin',       group: 'Organisch', atoms: ['C','C','H','H'], bonds: [[0,1,3],[0,2,1],[1,3,1]] },
  { id: 'ch3oh',  name: 'Methanol',    group: 'Organisch', atoms: ['C','O','H','H','H','H'], bonds: [[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1]] },
  { id: 'c2h5oh', name: 'Ethanol',     group: 'Organisch', atoms: ['C','C','O','H','H','H','H','H','H'],
    bonds: [[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1]] },
  { id: 'hcho',   name: 'Methanal',    group: 'Organisch', atoms: ['C','O','H','H'], bonds: [[0,1,2],[0,2,1],[0,3,1]] },
  { id: 'hcooh',  name: 'Methansäure', group: 'Organisch', atoms: ['C','O','O','H','H'], bonds: [[0,1,2],[0,2,1],[2,3,1],[0,4,1]] },
  { id: 'ch3cooh',name: 'Ethansäure',  group: 'Organisch', atoms: ['C','C','O','O','H','H','H','H'],
    bonds: [[0,1,1],[1,2,2],[1,3,1],[3,4,1],[0,5,1],[0,6,1],[0,7,1]] },
  { id: 'ch3cl',  name: 'Chlormethan', group: 'Organisch', atoms: ['C','Cl','H','H','H'], bonds: [[0,1,1],[0,2,1],[0,3,1],[0,4,1]] },
  { id: 'c3h6',   name: 'Cyclopropan', group: 'Organisch', atoms: ['C','C','C','H','H','H','H','H','H'],
    bonds: [[0,1,1],[1,2,1],[2,0,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[2,7,1],[2,8,1]] },
  { id: 'c6h12',  name: 'Cyclohexan',  group: 'Organisch', atoms: ['C','C','C','C','C','C','H','H','H','H','H','H','H','H','H','H','H','H'],
    bonds: [[0,1,1],[1,2,1],[2,3,1],[3,4,1],[4,5,1],[5,0,1],
            [0,6,1],[0,7,1],[1,8,1],[1,9,1],[2,10,1],[2,11,1],[3,12,1],[3,13,1],[4,14,1],[4,15,1],[5,16,1],[5,17,1]] }
];

export function buildMoleculeFromRecipe(recipe: Recipe): Molecule {
  const mol = createEmptyMolecule();
  const createdAtomIds: string[] = [];

  // 1. Atome initialisieren
  recipe.atoms.forEach((symbol, i) => {
    // Initial etwas aufgefächerte Koordinaten für den Entspannungs-Solver
    const phi = (i / recipe.atoms.length) * Math.PI * 2;
    const pos = vec3(Math.cos(phi) * 1.5, Math.sin(phi) * 1.5, (i % 2) * 0.4);
    const { atom, clouds } = instantiateAtom(symbol, pos, `rec_${i}`);
    createdAtomIds.push(atom.id);
    mol.atoms.set(atom.id, atom);
    for (const c of clouds) {
      mol.clouds.set(c.id, c);
    }
  });

  // 2. Bindungen knüpfen
  for (const [idxA, idxB, order] of recipe.bonds) {
    const idA = createdAtomIds[idxA];
    const idB = createdAtomIds[idxB];

    for (let o = 0; o < order; o++) {
      const cloudsA = getAtomClouds(mol, idA).filter(c => c.owners.length === 1 && c.electrons === 1);
      const cloudsB = getAtomClouds(mol, idB).filter(c => c.owners.length === 1 && c.electrons === 1);

      if (cloudsA.length > 0 && cloudsB.length > 0) {
        mol.clouds.delete(cloudsA[0].id);
        mol.clouds.delete(cloudsB[0].id);

        const bondCloud = {
          id: `bond_${idA}_${idB}_${o}_${Math.random().toString(36).substring(2, 6)}`,
          owners: [idA, idB] as [string, string],
          electrons: 2 as const,
          proton: false
        };
        mol.clouds.set(bondCloud.id, bondCloud);
      }
    }
  }

  // 3. Nachbearbeitung (Protonierung / Deprotonierung)
  if (recipe.ops) {
    for (const op of recipe.ops) {
      if (op.op === 'protonate') {
        const atomId = createdAtomIds[op.atom];
        const lonePairs = getAtomClouds(mol, atomId).filter(
          c => c.owners.length === 1 && c.electrons === 2 && !c.proton
        );
        if (lonePairs.length > 0) {
          lonePairs[0].proton = true;
          const pAtom = {
            id: `p_rec_${Math.random().toString(36).substring(2, 7)}`,
            element: 'H' as ElementSymbol,
            position: vec3(0, 0, 1),
            innerShell: false,
            isProton: true
          };
          mol.atoms.set(pAtom.id, pAtom);
        }
      } else if (op.op === 'deprotonate') {
        const hId = createdAtomIds[op.atom];
        const hBonds = Array.from(mol.clouds.values()).filter(
          c => c.owners.length === 2 && c.owners.includes(hId)
        );
        if (hBonds.length > 0) {
          const bCloud = hBonds[0];
          const partnerId = bCloud.owners.find(id => id !== hId)!;
          mol.clouds.delete(bCloud.id);

          const lp = {
            id: `lp_rec_${partnerId}_${Math.random().toString(36).substring(2, 6)}`,
            owners: [partnerId] as [string],
            electrons: 2 as const,
            proton: false
          };
          mol.clouds.set(lp.id, lp);
          // H entfernen
          mol.atoms.delete(hId);
        }
      }
    }
  }

  return mol;
}
