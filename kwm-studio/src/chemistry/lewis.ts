import { Molecule, getBonds, getAtomClouds, getAtomFormalCharge, Vec3, vec3 } from './model';

export interface Lewis3DLine {
  start: Vec3;
  end: Vec3;
  type: 'bond' | 'lonePair';
}

export interface Lewis3DData {
  atomPositions: Map<string, { symbol: string; position: Vec3 }>;
  lines: Lewis3DLine[];
}

// Berechnet die Geometrie für den 3D Lewis-Modus
export function getLewis3DData(mol: Molecule): Lewis3DData {
  const atomPositions = new Map<string, { symbol: string; position: Vec3 }>();
  for (const [id, a] of mol.atoms.entries()) {
    atomPositions.set(id, { symbol: a.element, position: { ...a.position } });
  }

  const lines: Lewis3DLine[] = [];
  const bonds = getBonds(mol);

  for (const b of bonds) {
    const posA = mol.atoms.get(b.atomA)!.position;
    const posB = mol.atoms.get(b.atomB)!.position;

    const dx = posB.x - posA.x;
    const dy = posB.y - posA.y;
    const dz = posB.z - posA.z;
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (len < 0.001) continue;

    const dir = { x: dx / len, y: dy / len, z: dz / len };

    // Verkürzung an den Rumpfenden
    const margin = Math.min(0.35, len * 0.25);
    const startCenter = {
      x: posA.x + dir.x * margin,
      y: posA.y + dir.y * margin,
      z: posA.z + dir.z * margin
    };
    const endCenter = {
      x: posB.x - dir.x * margin,
      y: posB.y - dir.y * margin,
      z: posB.z - dir.z * margin
    };

    // Senkrechter Vektor für Mehrfachbindungen
    let perp = { x: -dir.y, y: dir.x, z: 0 };
    const perpLen = Math.sqrt(perp.x * perp.x + perp.y * perp.y);
    if (perpLen < 0.001) {
      perp = { x: 0, y: -dir.z, z: dir.y };
    } else {
      perp.x /= perpLen;
      perp.y /= perpLen;
    }

    const offsetDist = 0.12;

    if (b.order === 1) {
      lines.push({ start: startCenter, end: endCenter, type: 'bond' });
    } else if (b.order === 2) {
      lines.push({
        start: { x: startCenter.x + perp.x * offsetDist, y: startCenter.y + perp.y * offsetDist, z: startCenter.z + perp.z * offsetDist },
        end: { x: endCenter.x + perp.x * offsetDist, y: endCenter.y + perp.y * offsetDist, z: endCenter.z + perp.z * offsetDist },
        type: 'bond'
      });
      lines.push({
        start: { x: startCenter.x - perp.x * offsetDist, y: startCenter.y - perp.y * offsetDist, z: startCenter.z - perp.z * offsetDist },
        end: { x: endCenter.x - perp.x * offsetDist, y: endCenter.y - perp.y * offsetDist, z: endCenter.z - perp.z * offsetDist },
        type: 'bond'
      });
    } else if (b.order === 3) {
      lines.push({ start: startCenter, end: endCenter, type: 'bond' });
      lines.push({
        start: { x: startCenter.x + perp.x * offsetDist * 1.4, y: startCenter.y + perp.y * offsetDist * 1.4, z: startCenter.z + perp.z * offsetDist * 1.4 },
        end: { x: endCenter.x + perp.x * offsetDist * 1.4, y: endCenter.y + perp.y * offsetDist * 1.4, z: endCenter.z + perp.z * offsetDist * 1.4 },
        type: 'bond'
      });
      lines.push({
        start: { x: startCenter.x - perp.x * offsetDist * 1.4, y: startCenter.y - perp.y * offsetDist * 1.4, z: startCenter.z - perp.z * offsetDist * 1.4 },
        end: { x: endCenter.x - perp.x * offsetDist * 1.4, y: endCenter.y - perp.y * offsetDist * 1.4, z: endCenter.z - perp.z * offsetDist * 1.4 },
        type: 'bond'
      });
    }
  }

  // Freie Elektronenpaare (Striche an Atomen)
  for (const [id, a] of mol.atoms.entries()) {
    const lonePairs = getAtomClouds(mol, id).filter(c => c.owners.length === 1 && c.electrons === 2);
    if (lonePairs.length === 0) continue;

    // Finde eine Richtung weg von den Nachbaratomen
    const neighbors = bonds.filter(b => b.atomA === id || b.atomB === id);
    let avgOpposite = vec3(0, 1, 0);

    if (neighbors.length > 0) {
      let sumDir = vec3(0, 0, 0);
      for (const nb of neighbors) {
        const partnerId = nb.atomA === id ? nb.atomB : nb.atomA;
        const pPos = mol.atoms.get(partnerId)!.position;
        sumDir.x += pPos.x - a.position.x;
        sumDir.y += pPos.y - a.position.y;
        sumDir.z += pPos.z - a.position.z;
      }
      const slen = Math.sqrt(sumDir.x * sumDir.x + sumDir.y * sumDir.y + sumDir.z * sumDir.z);
      if (slen > 0.001) {
        avgOpposite = { x: -sumDir.x / slen, y: -sumDir.y / slen, z: -sumDir.z / slen };
      }
    }

    // Zeichne Striche für freie Elektronenpaare
    lonePairs.forEach((_, idx) => {
      const angle = (idx - (lonePairs.length - 1) / 2) * 0.7;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      const dX = avgOpposite.x * cosA - avgOpposite.y * sinA;
      const dY = avgOpposite.x * sinA + avgOpposite.y * cosA;
      const dist = 0.5;
      const halfW = 0.16;

      const cX = a.position.x + dX * dist;
      const cY = a.position.y + dY * dist;
      const cZ = a.position.z;

      // Senkrecht zur Ausstrahlungsrichtung
      const pX = -dY * halfW;
      const pY = dX * halfW;

      lines.push({
        start: { x: cX - pX, y: cY - pY, z: cZ },
        end: { x: cX + pX, y: cY + pY, z: cZ },
        type: 'lonePair'
      });
    });
  }

  return { atomPositions, lines };
}

// Erzeugt eine druckfertige 2D-SVG Lewis-Formel für den Inspektor und Export
export function generateLewisSVG(mol: Molecule, width = 280, height = 180): string {
  if (mol.atoms.size === 0) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><text x="${width / 2}" y="${height / 2}" text-anchor="middle" fill="#A1A1A6" font-family="sans-serif" font-size="13">Kein Molekül vorhanden</text></svg>`;
  }

  // Projektion der 3D-Positionen in 2D
  const atoms = Array.from(mol.atoms.values());
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  for (const a of atoms) {
    minX = Math.min(minX, a.position.x);
    maxX = Math.max(maxX, a.position.x);
    minY = Math.min(minY, a.position.y);
    maxY = Math.max(maxY, a.position.y);
  }

  const spanX = Math.max(1.5, maxX - minX);
  const spanY = Math.max(1.5, maxY - minY);
  const padding = 40;
  const scale = Math.min((width - padding * 2) / spanX, (height - padding * 2) / spanY);

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;

  const toScreen = (pos: Vec3) => ({
    x: width / 2 + (pos.x - cx) * scale,
    y: height / 2 - (pos.y - cy) * scale // Y umkehren für SVG
  });

  const bonds = getBonds(mol);
  let svgLines = '';

  for (const b of bonds) {
    const sA = toScreen(mol.atoms.get(b.atomA)!.position);
    const sB = toScreen(mol.atoms.get(b.atomB)!.position);
    const dx = sB.x - sA.x;
    const dy = sB.y - sA.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) continue;

    const uX = dx / len;
    const uY = dy / len;
    const pX = -uY;
    const pY = uX;

    const shorten = 14;
    const x1 = sA.x + uX * shorten;
    const y1 = sA.y + uY * shorten;
    const x2 = sB.x - uX * shorten;
    const y2 = sB.y - uY * shorten;

    const offset = 4;
    if (b.order === 1) {
      svgLines += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`;
    } else if (b.order === 2) {
      svgLines += `<line x1="${(x1 + pX * offset).toFixed(1)}" y1="${(y1 + pY * offset).toFixed(1)}" x2="${(x2 + pX * offset).toFixed(1)}" y2="${(y2 + pY * offset).toFixed(1)}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`;
      svgLines += `<line x1="${(x1 - pX * offset).toFixed(1)}" y1="${(y1 - pY * offset).toFixed(1)}" x2="${(x2 - pX * offset).toFixed(1)}" y2="${(y2 - pY * offset).toFixed(1)}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`;
    } else if (b.order === 3) {
      svgLines += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
      svgLines += `<line x1="${(x1 + pX * offset * 1.5).toFixed(1)}" y1="${(y1 + pY * offset * 1.5).toFixed(1)}" x2="${(x2 + pX * offset * 1.5).toFixed(1)}" y2="${(y2 + pY * offset * 1.5).toFixed(1)}" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
      svgLines += `<line x1="${(x1 - pX * offset * 1.5).toFixed(1)}" y1="${(y1 - pY * offset * 1.5).toFixed(1)}" x2="${(x2 - pX * offset * 1.5).toFixed(1)}" y2="${(y2 - pY * offset * 1.5).toFixed(1)}" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
    }
  }

  let svgTexts = '';
  for (const a of atoms) {
    const s = toScreen(a.position);
    const fc = getAtomFormalCharge(mol, a.id);
    svgTexts += `<text x="${s.x.toFixed(1)}" y="${(s.y + 5).toFixed(1)}" text-anchor="middle" font-family="-apple-system, Inter, sans-serif" font-size="15" font-weight="600" fill="currentColor">${a.element}</text>`;
    if (fc !== 0) {
      const sign = fc > 0 ? (fc === 1 ? '⁺' : `${fc}⁺`) : (fc === -1 ? '⁻' : `${Math.abs(fc)}⁻`);
      const color = fc > 0 ? '#0a66d8' : '#e03131';
      svgTexts += `<text x="${(s.x + 11).toFixed(1)}" y="${(s.y - 4).toFixed(1)}" text-anchor="start" font-family="-apple-system, Inter, sans-serif" font-size="13" font-weight="700" fill="${color}">${sign}</text>`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="color: inherit;">
    ${svgLines}
    ${svgTexts}
  </svg>`;
}
