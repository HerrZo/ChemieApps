import { Molecule, Vec3, vec3, Cloud } from '../chemistry/model';

// Vektor-Normalisierung
function normalizeVec(v: Vec3): Vec3 {
  const len = Math.hypot(v.x, v.y, v.z) || 0.0001;
  return vec3(v.x / len, v.y / len, v.z / len);
}

// Erzeugt zwei orthogonale Einheitsvektoren senkrecht zu u
function getPerpendicularBasis(u: Vec3): [Vec3, Vec3] {
  // Wähle Referenzvektor, der nicht parallel zu u ist
  const ref = Math.abs(u.z) < 0.8 ? vec3(0, 0, 1) : vec3(1, 0, 0);

  // n1 = normalize(u x ref)
  const c1x = u.y * ref.z - u.z * ref.y;
  const c1y = u.z * ref.x - u.x * ref.z;
  const c1z = u.x * ref.y - u.y * ref.x;
  const n1 = normalizeVec(vec3(c1x, c1y, c1z));

  // n2 = normalize(u x n1)
  const c2x = u.y * n1.z - u.z * n1.y;
  const c2y = u.z * n1.x - u.x * n1.z;
  const c2z = u.x * n1.y - u.y * n1.x;
  const n2 = normalizeVec(vec3(c2x, c2y, c2z));

  return [n1, n2];
}

// Liefert die idealen Richtungsvektoren nach dem VSEPR- / Kugelwolkenmodell für freie isolierte Atome
export function getIdealVseprDirections(count: number): Vec3[] {
  if (count <= 1) {
    return [vec3(0, 1, 0)];
  }

  if (count === 2) {
    // Linear (180°)
    return [vec3(1, 0, 0), vec3(-1, 0, 0)];
  }

  if (count === 3) {
    // Trigonal planar (120°)
    const r1 = vec3(0, 1, 0);
    const cos30 = Math.cos(Math.PI / 6);
    const sin30 = Math.sin(Math.PI / 6);
    const r2 = vec3(-cos30, -sin30, 0);
    const r3 = vec3(cos30, -sin30, 0);
    return [r1, r2, r3];
  }

  // 4 Kugelwolken: Regulärer Tetraeder (109,47°)
  const invSqrt3 = 1 / Math.sqrt(3);
  return [
    vec3(invSqrt3, invSqrt3, invSqrt3),
    vec3(invSqrt3, -invSqrt3, -invSqrt3),
    vec3(-invSqrt3, invSqrt3, -invSqrt3),
    vec3(-invSqrt3, -invSqrt3, invSqrt3)
  ];
}

// Sphärische Coulomb-Repulsion auf der Einheitskugel
// Passt freie Kugelwolken an beliebige Bindungsrichtungen an, sodass sich alle Wolken maximal abstoßen
function relaxLoneCloudsOnSphere(bonds: Vec3[], lones: Vec3[], steps = 20): Vec3[] {
  const current = lones.map(v => ({ ...v }));

  for (let s = 0; s < steps; s++) {
    for (let i = 0; i < current.length; i++) {
      let fx = 0, fy = 0, fz = 0;
      const ci = current[i];

      // Abstoßung von allen Bindungswolken
      for (const b of bonds) {
        const dx = ci.x - b.x;
        const dy = ci.y - b.y;
        const dz = ci.z - b.z;
        const dist = Math.hypot(dx, dy, dz) || 0.01;
        const factor = 1 / (dist * dist * dist);
        fx += dx * factor;
        fy += dy * factor;
        fz += dz * factor;
      }

      // Abstoßung von anderen freien Kugelwolken
      for (let j = 0; j < current.length; j++) {
        if (i === j) continue;
        const cj = current[j];
        const dx = ci.x - cj.x;
        const dy = ci.y - cj.y;
        const dz = ci.z - cj.z;
        const dist = Math.hypot(dx, dy, dz) || 0.01;
        const factor = 1 / (dist * dist * dist);
        fx += dx * factor;
        fy += dy * factor;
        fz += dz * factor;
      }

      // Kraft tangential auf die Einheitskugel projizieren: F_tangent = F - (F . ci) * ci
      const dot = fx * ci.x + fy * ci.y + fz * ci.z;
      const tx = fx - dot * ci.x;
      const ty = fy - dot * ci.y;
      const tz = fz - dot * ci.z;

      // Schritt ausführen und wieder auf Radius 1 normalisieren
      current[i] = normalizeVec(vec3(
        ci.x + tx * 0.15,
        ci.y + ty * 0.15,
        ci.z + tz * 0.15
      ));
    }
  }

  return current;
}

/**
 * Berechnet für ein Atom die exakt abgestoßenen Richtungen aller freien Kugelwolken
 * unter Berücksichtigung aller kovalenten Bindungsachsen (VSEPR / Kugelwolkenmodell).
 */
export function calculateAtomLoneCloudDirections(
  atomId: string,
  mol: Molecule
): Map<string, Vec3> {
  const result = new Map<string, Vec3>();
  const atom = mol.atoms.get(atomId);
  if (!atom) return result;

  // 1. Alle Kugelwolken dieses Atoms erfassen
  const loneClouds: Cloud[] = [];
  const bondVectors: Vec3[] = [];

  for (const c of mol.clouds.values()) {
    if (c.owners.length === 1 && c.owners[0] === atomId) {
      loneClouds.push(c);
    } else if (c.owners.length === 2 && c.owners.includes(atomId)) {
      const partnerId = c.owners.find(id => id !== atomId)!;
      const partner = mol.atoms.get(partnerId);
      if (partner) {
        const dx = partner.position.x - atom.position.x;
        const dy = partner.position.y - atom.position.y;
        const dz = partner.position.z - atom.position.z;
        const len = Math.hypot(dx, dy, dz) || 0.001;
        bondVectors.push(vec3(dx / len, dy / len, dz / len));
      }
    }
  }

  if (loneClouds.length === 0) return result;

  // 2. Gesamtzahl der Valenzwolken im Modell
  // H/He: 1, Li: 1, Be: 2, B: 3 (oder 4 wenn 4-bindig), ab C (Periode 2, 3, 4): 4 Kugelwolken (Tetraeder)
  let totalValenceClouds = 4;
  if (atom.element === 'H' || atom.element === 'He') totalValenceClouds = 1;
  else if (atom.element === 'Li') totalValenceClouds = 1;
  else if (atom.element === 'Be') totalValenceClouds = 2;
  else if (atom.element === 'B' && bondVectors.length < 4) totalValenceClouds = 3;

  const numLone = loneClouds.length;
  const numBonds = bondVectors.length;
  let loneDirs: Vec3[] = [];

  // Fall 0: Keine Bindungen -> Standard-Tetraeder / VSEPR
  if (numBonds === 0) {
    const ideal = getIdealVseprDirections(totalValenceClouds);
    for (let i = 0; i < numLone; i++) {
      loneDirs.push(ideal[i % ideal.length]);
    }
  }
  // Fall 1: Genau 1 Bindung u (z.B. C-H in Radikal, F-H, H-O)
  else if (numBonds === 1) {
    const u = bondVectors[0];
    const [n1, n2] = getPerpendicularBasis(u);

    if (totalValenceClouds === 4) {
      // 3 freie Kugelwolken bilden mit der 1 Bindung einen perfekten Tetraeder (109,47°)
      // cos(109,47°) = -1/3, sin = sqrt(8/9)
      const cosAngle = -1 / 3;
      const sinAngle = Math.sqrt(8 / 9);

      for (let i = 0; i < numLone; i++) {
        const phi = (i * 2 * Math.PI) / 3;
        const wx = Math.cos(phi) * n1.x + Math.sin(phi) * n2.x;
        const wy = Math.cos(phi) * n1.y + Math.sin(phi) * n2.y;
        const wz = Math.cos(phi) * n1.z + Math.sin(phi) * n2.z;

        const vx = u.x * cosAngle + wx * sinAngle;
        const vy = u.y * cosAngle + wy * sinAngle;
        const vz = u.z * cosAngle + wz * sinAngle;
        loneDirs.push(normalizeVec(vec3(vx, vy, vz)));
      }
    } else if (totalValenceClouds === 3) {
      // Trigonal planar (120°)
      const cosAngle = -0.5;
      const sinAngle = Math.sqrt(0.75);
      for (let i = 0; i < numLone; i++) {
        const sign = i === 0 ? 1 : -1;
        loneDirs.push(normalizeVec(vec3(
          u.x * cosAngle + n1.x * sinAngle * sign,
          u.y * cosAngle + n1.y * sinAngle * sign,
          u.z * cosAngle + n1.z * sinAngle * sign
        )));
      }
    } else {
      // Linear (180°)
      loneDirs.push(vec3(-u.x, -u.y, -u.z));
    }
  }
  // Fall 2: 2 Bindungen u0, u1 (z.B. H₂O Sauerstoff mit 2 freien Paaren)
  else if (numBonds === 2) {
    const u0 = bondVectors[0];
    const u1 = bondVectors[1];

    // Winkelhalbierende der Bindungen
    const sumX = u0.x + u1.x;
    const sumY = u0.y + u1.y;
    const sumZ = u0.z + u1.z;
    const bisector = normalizeVec(vec3(sumX, sumY, sumZ));

    // Normale zur Bindungsebene
    const cross = vec3(
      u0.y * u1.z - u0.z * u1.y,
      u0.z * u1.x - u0.x * u1.z,
      u0.x * u1.y - u0.y * u1.x
    );
    let normal = normalizeVec(cross);
    if (Math.hypot(normal.x, normal.y, normal.z) < 0.1) {
      const [p1] = getPerpendicularBasis(u0);
      normal = p1;
    }

    if (numLone === 1) {
      // Einzelne freie Wolke zeigt direkt von den beiden Bindungen weg (-bisector)
      loneDirs.push(vec3(-bisector.x, -bisector.y, -bisector.z));
    } else {
      // 2 freie Paare (z.B. H₂O Sauerstoff): Zeigen nach hinten (-bisector) und spreizen senkrecht auf (+/- normal)
      const cosH = 1 / Math.sqrt(3); // ~0.577 (tetraedrisch)
      const sinH = Math.sqrt(2 / 3); // ~0.816
      loneDirs.push(normalizeVec(vec3(
        -bisector.x * cosH + normal.x * sinH,
        -bisector.y * cosH + normal.y * sinH,
        -bisector.z * cosH + normal.z * sinH
      )));
      loneDirs.push(normalizeVec(vec3(
        -bisector.x * cosH - normal.x * sinH,
        -bisector.y * cosH - normal.y * sinH,
        -bisector.z * cosH - normal.z * sinH
      )));
    }
  }
  // Fall 3: 3 oder mehr Bindungen (z.B. NH₃ Stickstoff mit 1 freiem Paar)
  else {
    // Freie Wolke zeigt entgegengesetzt zum Schwerpunkt aller Bindungen
    let sx = 0, sy = 0, sz = 0;
    for (const b of bondVectors) {
      sx += b.x; sy += b.y; sz += b.z;
    }
    const invB = normalizeVec(vec3(-sx, -sy, -sz));
    const [n1, n2] = getPerpendicularBasis(invB);

    for (let i = 0; i < numLone; i++) {
      if (i === 0) {
        loneDirs.push(invB);
      } else {
        const phi = (i * 2 * Math.PI) / numLone;
        loneDirs.push(normalizeVec(vec3(
          invB.x * 0.5 + Math.cos(phi) * n1.x * 0.866 + Math.sin(phi) * n2.x * 0.866,
          invB.y * 0.5 + Math.cos(phi) * n1.y * 0.866 + Math.sin(phi) * n2.y * 0.866,
          invB.z * 0.5 + Math.cos(phi) * n1.z * 0.866 + Math.sin(phi) * n2.z * 0.866
        )));
      }
    }
  }

  // 3. Sphärische Repulsion (Feinabstimmung für nicht-ideale/gespannte Bindungswinkel)
  if (bondVectors.length > 0 && loneDirs.length > 0) {
    loneDirs = relaxLoneCloudsOnSphere(bondVectors, loneDirs, 20);
  }

  for (let i = 0; i < loneClouds.length; i++) {
    result.set(loneClouds[i].id, loneDirs[i] || vec3(0, 1, 0));
  }

  return result;
}
