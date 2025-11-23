import React, { useState, useMemo } from 'react';
import { AtomSymbol, GeometryType } from '../types';
import { MoleculeRenderer } from './MoleculeRenderer';
import { calculateNetDipole, formatNumber } from '../services/chemistryService';
import { ATOMS, GEOMETRY_VECTORS } from '../constants';

export const GeometryLab: React.FC = () => {
  const [geometry, setGeometry] = useState<GeometryType>(GeometryType.Linear3);
  const [center, setCenter] = useState<AtomSymbol>(AtomSymbol.C);
  const [partners, setPartners] = useState<AtomSymbol[]>([AtomSymbol.O, AtomSymbol.O, AtomSymbol.H, AtomSymbol.H]); // Max buffer

  const currentVectors = GEOMETRY_VECTORS[geometry];
  const activePartners = partners.slice(0, currentVectors.length);

  const updatePartner = (index: number, sym: AtomSymbol) => {
    const newP = [...partners];
    newP[index] = sym;
    setPartners(newP);
  };

  // Calculation
  const net = useMemo(() => calculateNetDipole(center, activePartners, geometry), [center, activePartners, geometry]);
  const isDipole = net.magnitude > 0.3;

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Controls */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow border border-orange-100">
            <h3 className="font-bold text-lg text-orange-800 mb-4">🔬 Baukasten</h3>
            
            <div className="mb-4">
                <label className="block text-sm font-bold text-slate-600 mb-1">Geometrie</label>
                <select 
                    value={geometry}
                    onChange={(e) => setGeometry(e.target.value as GeometryType)}
                    className="w-full p-2 border rounded bg-white text-slate-900"
                >
                    {Object.values(GeometryType).map(g => (
                        <option key={g} value={g}>{g}</option>
                    ))}
                </select>
            </div>

            {geometry !== GeometryType.Linear2 && (
                <div className="mb-4">
                    <label className="block text-sm font-bold text-slate-600 mb-1">Zentralatom</label>
                    <div className="flex flex-wrap gap-2">
                        {[AtomSymbol.C, AtomSymbol.N, AtomSymbol.O, AtomSymbol.S].map(sym => (
                            <button 
                                key={sym}
                                onClick={() => setCenter(sym)}
                                className={`w-10 h-10 rounded-full font-bold border-2 transition ${center === sym ? 'border-orange-500 scale-110 shadow' : 'border-slate-200 hover:border-orange-300'}`}
                                style={{ backgroundColor: ATOMS[sym].color, color: sym === 'O' ? 'white' : (sym === 'S' ? 'black' : 'white') }}
                            >
                                {sym}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="mb-4">
                <label className="block text-sm font-bold text-slate-600 mb-2">Bindungspartner</label>
                <div className="space-y-2">
                    {activePartners.map((p, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-slate-50 p-2 rounded">
                            <span className="text-xs text-slate-500 font-mono">Position {idx + 1}</span>
                            <select 
                                value={p} 
                                onChange={(e) => updatePartner(idx, e.target.value as AtomSymbol)}
                                className="ml-2 p-1 border rounded text-sm bg-white text-slate-900"
                            >
                                {Object.keys(ATOMS).map(s => (
                                    <option key={s} value={s}>{s} (EN: {ATOMS[s as AtomSymbol].en})</option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Visualization */}
      <div className="lg:col-span-2 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-inner border border-orange-100 p-8 flex flex-col items-center justify-center min-h-[400px]">
         <MoleculeRenderer 
            center={center}
            partners={activePartners}
            geometry={geometry}
            showBondVectors={true}
            showNetDipole={true}
            netDipole={net}
         />

         <div className="mt-8 text-center bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-white w-full max-w-md">
            <p className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-1">Ergebnis</p>
            <h2 className={`text-2xl font-bold ${isDipole ? 'text-red-600' : 'text-slate-400'}`}>
                {isDipole ? 'DIPOL MOLEKÜL' : 'UNPOLAR'}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
                {isDipole 
                    ? 'Die Ladungsschwerpunkte fallen nicht zusammen. Es entsteht ein permanenter Dipol.'
                    : 'Die Vektorsumme der Bindungsdipole ist annähernd Null. Die Kräfte heben sich auf.'
                }
            </p>
            <div className="mt-2 text-xs font-mono text-slate-400">
                Vektorsumme |v| ≈ {formatNumber(net.magnitude)}
            </div>
         </div>
      </div>
    </div>
  );
};