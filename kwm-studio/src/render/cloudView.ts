import * as THREE from 'three';
import { Cloud, Molecule, Vec3 } from '../chemistry/model';
import { MaterialPalette } from './materials';

export function createLoneCloudObject(
  cloud: Cloud,
  mol: Molecule,
  dir: Vec3,
  palette: MaterialPalette
): THREE.Object3D {
  const atomId = cloud.owners[0];
  const atom = mol.atoms.get(atomId);
  if (!atom) return new THREE.Group();

  const group = new THREE.Group();
  group.userData = { type: 'cloud', cloudId: cloud.id, atomId };

  // Wolkenradius und Abstand
  const radius = atom.element === 'H' ? 0.42 : 0.40;
  const dist = atom.element === 'H' ? 0.0 : (atom.innerShell ? 0.62 : 0.40);

  const geo = new THREE.SphereGeometry(radius, 32, 32);
  const mat = cloud.electrons === 2 ? palette.doubleCloud : palette.singleCloud;
  const mesh = new THREE.Mesh(geo, mat);

  mesh.position.set(dir.x * dist, dir.y * dist, dir.z * dist);
  mesh.castShadow = true;
  mesh.userData = { type: 'cloud', cloudId: cloud.id, atomId };
  group.add(mesh);

  // Falls ein Proton angelagert ist (Säure-Base)
  if (cloud.proton) {
    const pGeo = new THREE.SphereGeometry(0.14, 20, 20);
    const pMesh = new THREE.Mesh(pGeo, palette.proton);
    pMesh.position.copy(mesh.position);
    group.add(pMesh);
  }

  group.position.set(atom.position.x, atom.position.y, atom.position.z);
  return group;
}

export function createBondCloudObject(
  cloud: Cloud,
  mol: Molecule,
  orderIndex: number,
  totalOrder: number,
  palette: MaterialPalette,
  asymmetryFactor = 0,
  moreElectronegativeId?: string
): THREE.Object3D {
  const [idA, idB] = cloud.owners;
  if (!idA || !idB) return new THREE.Group();
  const atomA = mol.atoms.get(idA);
  const atomB = mol.atoms.get(idB);
  if (!atomA || !atomB) return new THREE.Group();

  const group = new THREE.Group();
  group.userData = { type: 'cloud', cloudId: cloud.id, bond: true, atomAId: idA, atomBId: idB };

  const pA = atomA.position;
  const pB = atomB.position;

  const dx = pB.x - pA.x;
  const dy = pB.y - pA.y;
  const dz = pB.z - pA.z;
  const bondLen = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;

  // Mittelpunkt der Bindung
  const midX = (pA.x + pB.x) / 2;
  const midY = (pA.y + pB.y) / 2;
  const midZ = (pA.z + pB.z) / 2;

  // Ellipsoid-Geometrie
  const aRadius = Math.max(0.55, bondLen / 2 + 0.18);
  const bRadius = 0.40;
  const geo = new THREE.SphereGeometry(1, 32, 24);

  // Eiförmige Verformung bei Polarität (asymmetrisch)
  const posAttr = geo.attributes.position;
  const isAStronger = moreElectronegativeId === idA;

  if (asymmetryFactor > 0.1) {
    for (let i = 0; i < posAttr.count; i++) {
      let x = posAttr.getX(i);
      let y = posAttr.getY(i);
      let z = posAttr.getZ(i);

      // Entlang der Z-Achse verformen (vor Ausrichtung)
      const taper = 1.0 + (isAStronger ? -z : z) * asymmetryFactor * 0.42;
      x *= taper;
      y *= taper;

      posAttr.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();
  }

  const mat = cloud.electrons === 2 ? palette.doubleCloud : palette.singleCloud;
  const mesh = new THREE.Mesh(geo, mat);

  // Skalierung zum gestreckten Ellipsoid
  mesh.scale.set(bRadius, bRadius, aRadius);
  mesh.castShadow = true;
  mesh.userData = { type: 'cloud', cloudId: cloud.id, bond: true, atomAId: idA, atomBId: idB };

  // Orientierung entlang der Bindungsachse
  const dir = new THREE.Vector3(dx, dy, dz).normalize();
  const up = new THREE.Vector3(0, 0, 1);
  const quat = new THREE.Quaternion().setFromUnitVectors(up, dir);
  group.quaternion.copy(quat);

  // Versatz bei Mehrfachbindungen (Doppel- / Dreifachbindung)
  if (totalOrder > 1) {
    const angle = (orderIndex / totalOrder) * Math.PI * 2;
    const offsetR = 0.22;
    const perpX = Math.cos(angle) * offsetR;
    const perpY = Math.sin(angle) * offsetR;
    mesh.position.set(perpX, perpY, 0);
  }

  group.position.set(midX, midY, midZ);
  group.add(mesh);

  return group;
}
