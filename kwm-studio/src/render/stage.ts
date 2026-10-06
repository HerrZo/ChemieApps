import * as THREE from 'three';

export function createStageGrid(size = 36, divisions = 36, isDark = false): THREE.Group {
  const group = new THREE.Group();

  const gridColor = isDark ? 0x333338 : 0xd8d8de;
  const grid = new THREE.GridHelper(size, divisions, gridColor, gridColor);
  grid.position.y = -2.2;

  // Weiches Ausblenden zum Rand
  const gridMat = grid.material as THREE.LineBasicMaterial;
  gridMat.transparent = true;
  gridMat.opacity = isDark ? 0.35 : 0.65;
  group.add(grid);

  // Weicher Bodenschatten-Empfänger
  const shadowGeo = new THREE.PlaneGeometry(size, size);
  const shadowMat = new THREE.ShadowMaterial({
    opacity: isDark ? 0.4 : 0.15
  });
  const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -2.21;
  shadowPlane.receiveShadow = true;
  group.add(shadowPlane);

  return group;
}
