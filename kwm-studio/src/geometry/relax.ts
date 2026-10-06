import { Molecule, getBonds, Vec3, vec3 } from '../chemistry/model';
import { ELEMENTS } from '../chemistry/elements';

export function getIdealBondLength(elA: string, elB: string): number {
  if (elA === 'H' && elB === 'H') return 0.95;
  if (elA === 'H' || elB === 'H') return 1.15;
  const pA = ELEMENTS[elA as keyof typeof ELEMENTS]?.period || 2;
  const pB = ELEMENTS[elB as keyof typeof ELEMENTS]?.period || 2;
  return 1.45 + (pA - 2) * 0.2 + (pB - 2) * 0.2;
}

// Physikalischer Kraftfeld-Solver (Federkräfte, VSEPR-Winkelabstoßung, Van-der-Waals-Ausschluss)
export function relaxMolecule(mol: Molecule, iterations = 80, damping = 0.25): void {
  const atoms = Array.from(mol.atoms.values());
  if (atoms.length <= 1) return;

  const bonds = getBonds(mol);

  // Adjazenzliste
  const neighborMap = new Map<string, string[]>();
  for (const a of atoms) neighborMap.set(a.id, []);
  for (const b of bonds) {
    neighborMap.get(b.atomA)?.push(b.atomB);
    neighborMap.get(b.atomB)?.push(b.atomA);
  }

  // Iterationen
  for (let iter = 0; iter < iterations; iter++) {
    const forces = new Map<string, Vec3>();
    for (const a of atoms) forces.set(a.id, vec3(0, 0, 0));

    // 1. Federkräfte für kovalente Bindungen
    for (const b of bonds) {
      const aA = mol.atoms.get(b.atomA);
      const aB = mol.atoms.get(b.atomB);
      if (!aA || !aB) continue;

      const dx = aB.position.x - aA.position.x;
      const dy = aB.position.y - aA.position.y;
      const dz = aB.position.z - aA.position.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;

      const idealLen = getIdealBondLength(aA.element, aB.element);
      const delta = dist - idealLen;
      const k = 0.65; // Federkonstante

      const fx = (dx / dist) * delta * k;
      const fy = (dy / dist) * delta * k;
      const fz = (dz / dist) * delta * k;

      const fA = forces.get(b.atomA)!;
      fA.x += fx; fA.y += fy; fA.z += fz;

      const fB = forces.get(b.atomB)!;
      fB.x -= fx; fB.y -= fy; fB.z -= fz;
    }

    // 2. Winkelabstoßung zwischen Nachbarn desselben Zentrums (VSEPR-Kraft)
    for (const [centerId, nbs] of neighborMap.entries()) {
      if (nbs.length < 2) continue;
      const centerAtom = mol.atoms.get(centerId);
      if (!centerAtom) continue;

      // Bestimme idealen Bindungswinkel cos(theta) nach Valenz
      const el = centerAtom.element;
      let cosAngle = -1 / 3; // Standard: Tetraeder 109,47°
      if (el === 'Be' && nbs.length === 2) {
        cosAngle = -1.0; // Linear 180°
      } else if (el === 'B' && nbs.length === 3) {
        cosAngle = -0.5; // Trigonal planar 120°
      }

      for (let i = 0; i < nbs.length; i++) {
        for (let j = i + 1; j < nbs.length; j++) {
          const nbA = mol.atoms.get(nbs[i])!;
          const nbB = mol.atoms.get(nbs[j])!;

          const dx = nbB.position.x - nbA.position.x;
          const dy = nbB.position.y - nbA.position.y;
          const dz = nbB.position.z - nbA.position.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;

          const lenA = getIdealBondLength(el, nbA.element);
          const lenB = getIdealBondLength(el, nbB.element);
          // Gesetz von Kosinus: D² = L_A² + L_B² - 2*L_A*L_B*cos(theta)
          const targetDist = Math.sqrt(Math.max(0.1, lenA * lenA + lenB * lenB - 2 * lenA * lenB * cosAngle));

          const delta = targetDist - dist;
          // Sanfte Winkelfeder
          const push = delta * 0.35;
          const fA = forces.get(nbs[i])!;
          fA.x -= (dx / dist) * push;
          fA.y -= (dy / dist) * push;
          fA.z -= (dz / dist) * push;

          const fB = forces.get(nbs[j])!;
          fB.x += (dx / dist) * push;
          fB.y += (dy / dist) * push;
          fB.z += (dz / dist) * push;
        }
      }
    }

    // 3. Raum-Ausschluss (Repulsion zwischen nicht gebundenen Atomen)
    for (let i = 0; i < atoms.length; i++) {
      for (let j = i + 1; j < atoms.length; j++) {
        const idA = atoms[i].id;
        const idB = atoms[j].id;

        const isBonded = bonds.some(
          b => (b.atomA === idA && b.atomB === idB) || (b.atomA === idB && b.atomB === idA)
        );
        if (isBonded) continue;

        const dx = atoms[j].position.x - atoms[i].position.x;
        const dy = atoms[j].position.y - atoms[i].position.y;
        const dz = atoms[j].position.z - atoms[i].position.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;

        const minDist = 1.8;
        if (dist < minDist) {
          const repulse = (minDist - dist) * 0.5;
          const fA = forces.get(idA)!;
          fA.x -= (dx / dist) * repulse;
          fA.y -= (dy / dist) * repulse;
          fA.z -= (dz / dist) * repulse;

          const fB = forces.get(idB)!;
          fB.x += (dx / dist) * repulse;
          fB.y += (dy / dist) * repulse;
          fB.z += (dz / dist) * repulse;
        }
      }
    }

    // Positionen anpassen
    const currentDamping = damping * Math.pow(0.98, iter);
    for (const a of atoms) {
      const f = forces.get(a.id)!;
      a.position.x += f.x * currentDamping;
      a.position.y += f.y * currentDamping;
      a.position.z += f.z * currentDamping;
    }
  }

  // Schwerpunkt zentrieren
  centerMolecule(mol);
}

export function centerMolecule(mol: Molecule): void {
  const atoms = Array.from(mol.atoms.values());
  if (atoms.length === 0) return;

  let sx = 0, sy = 0, sz = 0;
  for (const a of atoms) {
    sx += a.position.x;
    sy += a.position.y;
    sz += a.position.z;
  }
  const cx = sx / atoms.length;
  const cy = sy / atoms.length;
  const cz = sz / atoms.length;

  for (const a of atoms) {
    a.position.x -= cx;
    a.position.y -= cy;
    a.position.z -= cz;
  }
}
