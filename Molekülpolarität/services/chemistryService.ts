import { ATOMS, GEOMETRY_VECTORS } from '../constants';
import { AtomSymbol, GeometryType, Vector3 } from '../types';

export const getBondType = (deltaEN: number): string => {
  if (deltaEN < 0.4) return "Unpolare Atombindung";
  if (deltaEN < 1.7) return "Polare Atombindung";
  return "Ionenbindung";
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

// Calculate net dipole vector
export const calculateNetDipole = (
  center: AtomSymbol, 
  partners: AtomSymbol[], 
  geometry: GeometryType
): { magnitude: number, vector: Vector3 } => {
  
  if (geometry === GeometryType.Linear2) {
    // Special case for diatomic: Center is actually just atom 1, partner is atom 2
    // But our config assumes "Center" + "Partners". 
    // If Linear2, we treat partners[0] as the second atom relative to center
    const delta = ATOMS[partners[0]].en - ATOMS[center].en;
    return { 
        magnitude: Math.abs(delta), 
        vector: { x: delta > 0 ? 1 : -1, y: 0, z: 0 } 
    };
  }

  const vectors = GEOMETRY_VECTORS[geometry];
  let netX = 0;
  let netY = 0;
  let netZ = 0;

  partners.forEach((partner, index) => {
    if (index < vectors.length) {
      const enDiff = ATOMS[partner].en - ATOMS[center].en;
      const v = vectors[index];
      // Vector points from + to -, so towards the higher EN
      // If partner is higher EN (diff > 0), vector points TO partner.
      // If center is higher EN (diff < 0), vector points AWAY from partner (or towards center).
      
      // Mathematical vector add: scale geom vector by enDiff
      netX += v.x * enDiff;
      netY += v.y * enDiff;
      netZ += v.z * enDiff;
    }
  });

  const magnitude = Math.sqrt(netX*netX + netY*netY + netZ*netZ);
  
  return {
    magnitude,
    vector: { x: netX, y: netY, z: netZ }
  };
};
