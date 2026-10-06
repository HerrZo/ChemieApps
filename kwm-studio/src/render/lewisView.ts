import * as THREE from 'three';
import { Molecule, getAtomFormalCharge } from '../chemistry/model';
import { getLewis3DData } from '../chemistry/lewis';
import { MaterialPalette } from './materials';
import { createTextSprite } from './labels';

export function createLewis3DGroup(mol: Molecule, palette: MaterialPalette): THREE.Group {
  const group = new THREE.Group();
  const data = getLewis3DData(mol);

  // 1. Elementbeschriftungen und Formalladungen
  for (const [id, atomInfo] of data.atomPositions.entries()) {
    const sprite = createTextSprite(atomInfo.symbol, 34, palette.style === 'modern' ? '#1d1d1f' : '#000000');
    sprite.position.set(atomInfo.position.x, atomInfo.position.y, atomInfo.position.z);
    sprite.scale.set(0.48, 0.48, 1);
    group.add(sprite);

    // Formalladung (z.B. ⁻ für O in OH⁻ oder ⁺ für N in NH₄⁺)
    const fc = getAtomFormalCharge(mol, id);
    if (fc !== 0) {
      const chargeSign = fc > 0 ? (fc === 1 ? '⁺' : `${fc}⁺`) : (fc === -1 ? '⁻' : `${Math.abs(fc)}⁻`);
      const chargeColor = fc > 0 ? '#0a66d8' : '#e03131';
      const chargeSprite = createTextSprite(chargeSign, 32, chargeColor);
      chargeSprite.position.set(atomInfo.position.x + 0.28, atomInfo.position.y + 0.24, atomInfo.position.z + 0.02);
      chargeSprite.scale.set(0.4, 0.4, 1);
      group.add(chargeSprite);
    }
  }

  // 2. Linien für Bindungen und freie Elektronenpaare
  for (const line of data.lines) {
    const p1 = new THREE.Vector3(line.start.x, line.start.y, line.start.z);
    const p2 = new THREE.Vector3(line.end.x, line.end.y, line.end.z);
    const dist = p1.distanceTo(p2);
    if (dist < 0.01) continue;

    const mid = p1.clone().add(p2).multiplyScalar(0.5);
    const dir = p2.clone().sub(p1).normalize();

    // Zylinder als stabiler 3D-Strich mit runden Enden
    const radius = line.type === 'bond' ? 0.038 : 0.032;
    const cylGeo = new THREE.CylinderGeometry(radius, radius, dist, 12);
    const mesh = new THREE.Mesh(cylGeo, palette.lewisLine);

    mesh.position.copy(mid);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    group.add(mesh);
  }

  return group;
}
