import React from 'react';
import { AtomSymbol, GeometryType } from '../types';
import { ATOMS, GEOMETRY_VECTORS } from '../constants';

interface Props {
  center: AtomSymbol;
  partners: AtomSymbol[];
  geometry: GeometryType;
  showBondVectors?: boolean;
  showNetDipole?: boolean;
  netDipole?: { magnitude: number, vector: { x: number, y: number, z: number } };
}

export const MoleculeRenderer: React.FC<Props> = ({ 
  center, 
  partners, 
  geometry,
  showBondVectors = false,
  showNetDipole = false,
  netDipole
}) => {
  const width = 300;
  const height = 300;
  const centerX = width / 2;
  const centerY = height / 2;
  const bondLength = 80;

  // Prepare atoms to render
  interface RenderAtom {
    x: number;
    y: number;
    z: number;
    symbol: AtomSymbol;
    isCenter: boolean;
    id: string;
  }

  const atomsToRender: RenderAtom[] = [];
  
  // Add center atom (except for Linear2 where we offset it)
  if (geometry !== GeometryType.Linear2) {
    atomsToRender.push({ x: 0, y: 0, z: 0, symbol: center, isCenter: true, id: 'center' });
  } else {
     atomsToRender.push({ x: -0.5, y: 0, z: 0, symbol: center, isCenter: true, id: 'left' });
  }

  // Add partners
  const vectorDefs = GEOMETRY_VECTORS[geometry];
  partners.forEach((p, i) => {
    if (i < vectorDefs.length) {
        if (geometry === GeometryType.Linear2) {
            // Special handling for H2/HCl style
            atomsToRender.push({ x: 0.5, y: 0, z: 0, symbol: p, isCenter: false, id: `p-${i}` });
        } else {
            atomsToRender.push({ 
                x: vectorDefs[i].x, 
                y: vectorDefs[i].y, 
                z: vectorDefs[i].z, 
                symbol: p, 
                isCenter: false, 
                id: `p-${i}`
            });
        }
    }
  });

  // Sort by Z for painter's algorithm (draw furthest Z first)
  // Z axis: positive comes out of screen
  const sortedAtoms = [...atomsToRender].sort((a, b) => a.z - b.z);

  const getScreenCoords = (rx: number, ry: number) => ({
    cx: centerX + rx * bondLength,
    cy: centerY + ry * bondLength
  });

  return (
    <div className="flex items-center justify-center bg-white/50 rounded-xl shadow-inner p-4">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
            </marker>
             <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
            </marker>
        </defs>

        {/* Draw Bonds first (behind atoms typically) */}
        {sortedAtoms.map((atom) => {
            if (atom.isCenter && geometry !== GeometryType.Linear2) return null;
            
            // Find start point (center atom)
            let start = { x: 0, y: 0, z: 0 };
            if (geometry === GeometryType.Linear2 && !atom.isCenter) {
                 start = { x: -0.5, y: 0, z: 0 };
            }

            const startPx = getScreenCoords(start.x, start.y);
            const endPx = getScreenCoords(atom.x, atom.y);

            // Determine bond style based on Z
            // If atom.z is significantly negative -> dashed wedge
            // If atom.z is significantly positive -> solid wedge
            // Else -> line
            
            let bondEl;
            const zThreshold = 0.2;

            if (atom.z < -zThreshold) {
                // Dashed (going back)
                // Draw a wedge shape
                bondEl = (
                    <path 
                        key={`bond-${atom.id}`}
                        d={`M${startPx.cx},${startPx.cy} L${endPx.cx - 5},${endPx.cy} L${endPx.cx + 5},${endPx.cy} Z`} 
                        fill="none" 
                        stroke="#94a3b8" 
                        strokeWidth="2"
                        strokeDasharray="4,2"
                    />
                );
            } else if (atom.z > zThreshold) {
                 // Solid wedge (coming forward)
                 bondEl = (
                    <path 
                        key={`bond-${atom.id}`}
                        d={`M${startPx.cx},${startPx.cy} L${endPx.cx - 6},${endPx.cy} L${endPx.cx + 6},${endPx.cy} Z`} 
                        fill="#cbd5e1" 
                        stroke="#94a3b8" 
                        strokeWidth="1"
                    />
                );
            } else {
                // Standard line
                bondEl = (
                    <line 
                        key={`bond-${atom.id}`}
                        x1={startPx.cx} y1={startPx.cy} 
                        x2={endPx.cx} y2={endPx.cy} 
                        stroke="#94a3b8" 
                        strokeWidth="6" 
                        strokeLinecap="round"
                    />
                );
            }
            return bondEl;
        })}

        {/* Draw Bond Vectors if enabled */}
        {showBondVectors && sortedAtoms.map((atom) => {
            if (atom.isCenter && geometry !== GeometryType.Linear2) return null;
            
             // Calculate vector direction based on EN diff
            let centerSymbol = center;
            let atomSymbol = atom.symbol;
            
            // Handling linear2 properly
            let start = {x: 0, y: 0};
            if (geometry === GeometryType.Linear2) {
                 start = {x: -0.5, y:0};
                 if(atom.isCenter) return null; // Don't draw twice
            }
            
            const enDiff = ATOMS[atomSymbol].en - ATOMS[centerSymbol].en;
            if (Math.abs(enDiff) < 0.1) return null;

            const startPx = getScreenCoords(start.x, start.y);
            const endPx = getScreenCoords(atom.x, atom.y);
            
            // Draw arrow from positive (low EN) to negative (high EN)
            // If enDiff > 0, atom is negative. Arrow points to atom.
            // If enDiff < 0, center is negative. Arrow points to center.

            const isPointsToAtom = enDiff > 0;
            const thickness = Math.min(Math.abs(enDiff) * 2, 6);
            
            // Offset slightly to not overlap bond perfectly
            const offset = 10; 

            return (
                <g key={`vec-${atom.id}`} opacity="0.6">
                    <line 
                        x1={isPointsToAtom ? startPx.cx : endPx.cx}
                        y1={isPointsToAtom ? startPx.cy : endPx.cy}
                        x2={isPointsToAtom ? endPx.cx : startPx.cx}
                        y2={isPointsToAtom ? endPx.cy : startPx.cy}
                        stroke="gray"
                        strokeWidth={thickness}
                        markerEnd="url(#arrowhead)"
                    />
                    {/* Plus sign at tail */}
                    <text 
                        x={isPointsToAtom ? startPx.cx : endPx.cx} 
                        y={isPointsToAtom ? startPx.cy - 10 : endPx.cy - 10}
                        textAnchor="middle"
                        fill="gray"
                        fontSize="12"
                        fontWeight="bold"
                    >+</text>
                </g>
            );
        })}

        {/* Draw Atoms */}
        {sortedAtoms.map((atom) => {
            const data = ATOMS[atom.symbol];
            const pos = getScreenCoords(atom.x, atom.y);
            const radius = data.radius * (1 + atom.z * 0.2); // Perspective scale
            const brightness = atom.z > 0 ? 100 : (atom.z < 0 ? 90 : 95);

            return (
                <g key={atom.id} transform={`translate(${pos.cx}, ${pos.cy})`}>
                     <circle 
                        r={radius} 
                        fill={data.color} 
                        stroke="#1e293b" 
                        strokeWidth="2"
                        filter={`brightness(${brightness}%) drop-shadow(2px 4px 6px rgba(0,0,0,0.2))`}
                    />
                    <text 
                        y="0.3em" 
                        textAnchor="middle" 
                        fill={['H','C'].includes(atom.symbol) ? '#1e293b' : 'white'}
                        fontWeight="bold"
                        fontSize={radius}
                        pointerEvents="none"
                    >
                        {atom.symbol}
                    </text>
                    {/* Partial Charge Label */}
                    {showBondVectors && (
                         <g transform={`translate(${radius * 0.8}, ${-radius * 0.8})`}>
                             <text fontSize="14" fill="#475569" fontWeight="bold">
                                { (atom.isCenter && geometry !== GeometryType.Linear2) 
                                    ? (netDipole && partners.some(p => ATOMS[p].en > ATOMS[center].en) ? 'δ+' : (partners.some(p => ATOMS[p].en < ATOMS[center].en) ? 'δ-' : ''))
                                    : (ATOMS[atom.symbol].en > ATOMS[center].en ? 'δ-' : (ATOMS[atom.symbol].en < ATOMS[center].en ? 'δ+' : ''))
                                }
                             </text>
                         </g>
                    )}
                </g>
            )
        })}

        {/* Net Dipole Vector */}
        {showNetDipole && netDipole && netDipole.magnitude > 0.3 && (
             <g opacity="0.9">
                 <line
                    x1={centerX - (netDipole.vector.x * 40)}
                    y1={centerY - (netDipole.vector.y * 40)}
                    x2={centerX + (netDipole.vector.x * 40)}
                    y2={centerY + (netDipole.vector.y * 40)}
                    stroke="#ef4444"
                    strokeWidth={8}
                    markerEnd="url(#arrowhead-red)"
                 />
                 <text 
                    x={centerX + (netDipole.vector.x * 45)} 
                    y={centerY + (netDipole.vector.y * 45)} 
                    fill="#ef4444" 
                    fontWeight="bold" 
                    fontSize="16"
                    stroke="white"
                    strokeWidth="4"
                    paintOrder="stroke"
                 >
                    Gesamtdipol
                 </text>
             </g>
        )}

      </svg>
    </div>
  );
};