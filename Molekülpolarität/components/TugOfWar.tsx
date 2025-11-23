import React, { useState } from 'react';
import { ATOMS } from '../constants';
import { AtomSymbol } from '../types';
import { formatNumber, getBondType } from '../services/chemistryService';

export const TugOfWar: React.FC = () => {
  const [atom1, setAtom1] = useState<AtomSymbol>(AtomSymbol.H);
  const [atom2, setAtom2] = useState<AtomSymbol>(AtomSymbol.Cl);

  const en1 = ATOMS[atom1].en;
  const en2 = ATOMS[atom2].en;
  const deltaEN = Math.abs(en1 - en2);
  const bondType = getBondType(deltaEN);
  const isIonic = deltaEN >= 1.7;

  // Calculate position offset (-50 to 50 normally)
  const maxPull = 2.0; // Max reasonable delta EN for visual scaling
  
  // Base pull calculation
  let rawPull = (en2 - en1) / maxPull;
  // Clamp for non-ionic
  if (!isIonic) {
      if (rawPull > 1) rawPull = 1;
      if (rawPull < -1) rawPull = -1;
  } else {
      // If ionic, exaggerate the pull to detach
      rawPull = rawPull > 0 ? 1.3 : -1.3;
  }
  
  const pull = rawPull * 80; 

  const isAtom1Loser = isIonic && en1 < en2;
  const isAtom2Loser = isIonic && en2 < en1;

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">⚡ Das Elektronen-Tauziehen</h2>
        <p className="text-slate-600 mb-6">
          Wähle zwei Atome und beobachte, wer stärker an den Bindungselektronen zieht. 
          Der Unterschied in der Elektronegativität (ΔEN) bestimmt die Polarität.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col items-center bg-orange-50 p-4 rounded-lg">
            <label className="font-bold text-orange-700 mb-2">Atom Links</label>
            <select 
              value={atom1} 
              onChange={(e) => setAtom1(e.target.value as AtomSymbol)}
              className="p-2 border border-orange-300 rounded w-full bg-white"
            >
              {Object.keys(ATOMS).map(sym => (
                <option key={sym} value={sym}>{sym} (EN: {ATOMS[sym as AtomSymbol].en})</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-center bg-amber-50 p-4 rounded-lg">
            <label className="font-bold text-amber-700 mb-2">Atom Rechts</label>
            <select 
              value={atom2} 
              onChange={(e) => setAtom2(e.target.value as AtomSymbol)}
              className="p-2 border border-amber-300 rounded w-full bg-white"
            >
              {Object.keys(ATOMS).map(sym => (
                <option key={sym} value={sym}>{sym} (EN: {ATOMS[sym as AtomSymbol].en})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Visual Stage */}
        <div className="relative h-48 bg-gradient-to-b from-sky-50 to-white rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center">
            
            {/* Rope */}
            <div className="absolute h-2 bg-amber-700 w-2/3 top-1/2 transform -translate-y-1/2 rounded shadow-sm"></div>
            
            {/* Electron Pair (The knot) */}
            <div 
                className="absolute w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-[0_0_15px_rgba(250,204,21,0.6)] z-10 flex items-center justify-center font-bold text-xs transition-all duration-500 ease-out"
                style={{ transform: `translate(${pull}px, -50%)`, top: '50%' }}
            >
                e⁻
            </div>

            {/* Stick Figure Left */}
            <div className="absolute left-4 bottom-4 transition-transform duration-500" style={{ transform: `scale(${1 + en1/10}) translateX(${pull/6}px)` }}>
                 <svg width="60" height="100" viewBox="0 0 60 100">
                    <circle cx="30" cy="20" r="15" fill={ATOMS[atom1].color} stroke="black" strokeWidth="2"/>
                    <line x1="30" y1="35" x2="30" y2="70" stroke="black" strokeWidth="3"/>
                    <line x1="30" y1="70" x2="10" y2="100" stroke="black" strokeWidth="3"/>
                    <line x1="30" y1="70" x2="50" y2="100" stroke="black" strokeWidth="3"/>
                    {/* Arms pulling or letting go */}
                    {isAtom1Loser ? (
                         <path d="M30 45 L 10 25 M30 45 L 5 35" stroke="black" strokeWidth="3" fill="none" />
                    ) : (
                         <path d="M30 45 Q 10 45, 60 50" stroke="black" strokeWidth="3" fill="none" />
                    )}
                    <text x="30" y="25" textAnchor="middle" fontSize="12" fontWeight="bold">{atom1}</text>
                 </svg>
                 {/* Charge Labels */}
                 {isIonic ? (
                     en1 < en2 ? <div className="absolute -top-2 left-0 font-serif text-2xl text-blue-600 font-bold">+</div> 
                               : <div className="absolute -top-2 right-0 font-serif text-2xl text-red-600 font-bold">-</div>
                 ) : (
                     deltaEN > 0.4 && (
                         en1 < en2 ? <div className="absolute -top-2 left-0 font-serif text-xl text-blue-600 font-bold">δ+</div> 
                                   : <div className="absolute -top-2 right-0 font-serif text-xl text-red-600 font-bold">δ-</div>
                     )
                 )}
            </div>

            {/* Stick Figure Right */}
            <div className="absolute right-4 bottom-4 transition-transform duration-500" style={{ transform: `scale(${1 + en2/10}) translateX(${pull/6}px)` }}>
                <svg width="60" height="100" viewBox="0 0 60 100">
                    <circle cx="30" cy="20" r="15" fill={ATOMS[atom2].color} stroke="black" strokeWidth="2"/>
                    <line x1="30" y1="35" x2="30" y2="70" stroke="black" strokeWidth="3"/>
                    <line x1="30" y1="70" x2="10" y2="100" stroke="black" strokeWidth="3"/>
                    <line x1="30" y1="70" x2="50" y2="100" stroke="black" strokeWidth="3"/>
                    {/* Arms pulling or letting go */}
                    {isAtom2Loser ? (
                        <path d="M30 45 L 50 25 M30 45 L 55 35" stroke="black" strokeWidth="3" fill="none" />
                    ) : (
                        <path d="M30 45 Q 50 45, 0 50" stroke="black" strokeWidth="3" fill="none" />
                    )}
                    <text x="30" y="25" textAnchor="middle" fontSize="12" fontWeight="bold">{atom2}</text>
                 </svg>
                 {/* Charge Labels */}
                 {isIonic ? (
                     en2 < en1 ? <div className="absolute -top-2 left-0 font-serif text-2xl text-blue-600 font-bold">+</div> 
                               : <div className="absolute -top-2 right-0 font-serif text-2xl text-red-600 font-bold">-</div>
                 ) : (
                     deltaEN > 0.4 && (
                         en2 < en1 ? <div className="absolute -top-2 left-0 font-serif text-xl text-blue-600 font-bold">δ+</div> 
                                   : <div className="absolute -top-2 right-0 font-serif text-xl text-red-600 font-bold">δ-</div>
                     )
                 )}
            </div>

        </div>

        <div className="mt-4 text-center p-4 bg-white rounded border border-slate-200">
            <p className="text-lg">ΔEN = <span className="font-mono font-bold">{formatNumber(deltaEN)}</span></p>
            <p className={`font-bold text-xl mt-2 ${deltaEN < 0.4 ? 'text-green-600' : (deltaEN < 1.7 ? 'text-orange-600' : 'text-red-600')}`}>
                {bondType}
            </p>
        </div>
      </div>
    </div>
  );
};