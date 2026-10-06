import * as THREE from 'three';
import { Atom } from '../chemistry/model';
import { ELEMENTS } from '../chemistry/elements';
import { MaterialPalette } from './materials';
import { createTextSprite } from './labels';

export function createAtomObject(atom: Atom, palette: MaterialPalette): THREE.Group {
  const group = new THREE.Group();
  group.position.set(atom.position.x, atom.position.y, atom.position.z);
  group.userData = { type: 'atom', atomId: atom.id };

  if (atom.isProton) {
    // Freies Proton (H⁺)
    const pGeo = new THREE.SphereGeometry(0.16, 24, 24);
    const pMesh = new THREE.Mesh(pGeo, palette.proton);
    pMesh.castShadow = true;
    pMesh.userData = { type: 'atom', atomId: atom.id };
    group.add(pMesh);

    const label = createTextSprite('H⁺', 26, '#ffffff');
    label.position.set(0, 0.28, 0);
    group.add(label);
    return group;
  }

  // 1. Rumpfkern (Graphit)
  const coreRadius = 0.14;
  const coreGeo = new THREE.SphereGeometry(coreRadius, 24, 24);
  const coreMesh = new THREE.Mesh(coreGeo, palette.core);
  coreMesh.castShadow = true;
  coreMesh.userData = { type: 'atom', atomId: atom.id };
  group.add(coreMesh);

  // 2. Elementbeschriftung (scharfes Canvas-Sprite)
  const labelSprite = createTextSprite(atom.element, 32, '#ffffff');
  labelSprite.position.set(0, 0, 0.02);
  group.add(labelSprite);

  // 3. Innere vollbesetzte Schale (Periode >= 2)
  if (atom.innerShell) {
    const el = ELEMENTS[atom.element];
    const innerRadius = 0.42 + Math.max(0, el.period - 2) * 0.08;
    const innerGeo = new THREE.SphereGeometry(innerRadius, 32, 32);
    const innerMesh = new THREE.Mesh(innerGeo, palette.innerShell);
    innerMesh.castShadow = true;
    innerMesh.userData = { type: 'atom', atomId: atom.id };
    group.add(innerMesh);
  }

  return group;
}
