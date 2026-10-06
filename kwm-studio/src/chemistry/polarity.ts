import { ELEMENTS } from './elements';
import { Molecule, getBonds, Vec3, vec3 } from './model';

export interface BondPolarity {
  atomAId: string;
  atomBId: string;
  deltaEN: number;
  isPolar: boolean; // deltaEN >= 0.4
  moreElectronegativeId?: string;
  lessElectronegativeId?: string;
  asymmetryFactor: number; // 0..1 (zur eiförmigen Verformung der Bindungswolke)
}

export interface PolarityAnalysis {
  bonds: BondPolarity[];
  atomLabels: Map<string, 'δ⁺' | 'δ⁻'>;
  dipoleVector: Vec3;
  dipoleMagnitude: number;
  isMoleculePolar: boolean; // |μ| > 0.15
}

export function analyzePolarity(mol: Molecule): PolarityAnalysis {
  const bonds = getBonds(mol);
  const bondPolarities: BondPolarity[] = [];
  const atomNetPolarBias = new Map<string, number>();

  let dipX = 0;
  let dipY = 0;
  let dipZ = 0;

  for (const b of bonds) {
    const aA = mol.atoms.get(b.atomA);
    const aB = mol.atoms.get(b.atomB);
    if (!aA || !aB) continue;

    const enA = ELEMENTS[aA.element].en;
    const enB = ELEMENTS[aB.element].en;

    if (enA === null || enB === null) {
      bondPolarities.push({
        atomAId: b.atomA,
        atomBId: b.atomB,
        deltaEN: 0,
        isPolar: false,
        asymmetryFactor: 0
      });
      continue;
    }

    const deltaEN = Math.abs(enA - enB);
    const isPolar = deltaEN >= 0.4;
    const asymmetryFactor = Math.min(1, deltaEN / 2.0);

    let moreId: string | undefined;
    let lessId: string | undefined;

    if (enA > enB) {
      moreId = b.atomA;
      lessId = b.atomB;
    } else if (enB > enA) {
      moreId = b.atomB;
      lessId = b.atomA;
    }

    if (isPolar && moreId && lessId) {
      // Net-Vorzeichen-Zähler für Atome
      atomNetPolarBias.set(moreId, (atomNetPolarBias.get(moreId) || 0) - 1);
      atomNetPolarBias.set(lessId, (atomNetPolarBias.get(lessId) || 0) + 1);

      // Vektor vom weniger zum stärker elektronegativen Atom
      const posLess = mol.atoms.get(lessId)!.position;
      const posMore = mol.atoms.get(moreId)!.position;
      const dx = posMore.x - posLess.x;
      const dy = posMore.y - posLess.y;
      const dz = posMore.z - posLess.z;
      const len = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (len > 0.0001) {
        // Skaliert mit deltaEN
        dipX += (dx / len) * deltaEN;
        dipY += (dy / len) * deltaEN;
        dipZ += (dz / len) * deltaEN;
      }
    }

    bondPolarities.push({
      atomAId: b.atomA,
      atomBId: b.atomB,
      deltaEN,
      isPolar,
      moreElectronegativeId: moreId,
      lessElectronegativeId: lessId,
      asymmetryFactor
    });
  }

  // Atom-Labels bestimmen
  const atomLabels = new Map<string, 'δ⁺' | 'δ⁻'>();
  for (const [id, bias] of atomNetPolarBias.entries()) {
    if (bias < 0) {
      atomLabels.set(id, 'δ⁻');
    } else if (bias > 0) {
      atomLabels.set(id, 'δ⁺');
    }
  }

  const dipoleMag = Math.sqrt(dipX * dipX + dipY * dipY + dipZ * dipZ);
  const isMoleculePolar = dipoleMag > 0.15;

  return {
    bonds: bondPolarities,
    atomLabels,
    dipoleVector: vec3(dipX, dipY, dipZ),
    dipoleMagnitude: dipoleMag,
    isMoleculePolar
  };
}
