import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto animate-[fadeIn_0.2s_ease-out]">
        <div className="p-6 border-b border-orange-100 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-orange-800">Glossar</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6 text-slate-700">
          <div>
            <h3 className="font-bold text-orange-600 mb-1">Elektronegativität (EN)</h3>
            <p className="text-sm">Ein Maß dafür, wie stark ein Atom Bindungselektronen anzieht. Das Atom mit dem höheren EN-Wert zieht stärker (wird negativ polarisiert δ-).</p>
          </div>

          <div>
            <h3 className="font-bold text-orange-600 mb-1">Dipol</h3>
            <p className="text-sm">Ein Molekül, in dem die Schwerpunkte der positiven und negativen Ladungen nicht zusammenfallen. Es hat einen Plus- und einen Minuspol.</p>
          </div>

          <div>
            <h3 className="font-bold text-orange-600 mb-1">VSEPR-Modell</h3>
            <p className="text-sm">Valence Shell Electron Pair Repulsion. Elektronenpaare stoßen sich ab und ordnen sich so an, dass sie maximalen Abstand haben. Dies bestimmt die Geometrie (linear, gewinkelt, tetraedrisch...).</p>
          </div>

          <div>
            <h3 className="font-bold text-orange-600 mb-1">Symmetrie</h3>
            <p className="text-sm">Ist ein Molekül sehr symmetrisch (z.B. CO₂, CH₄), können sich die einzelnen polaren Bindungen gegenseitig aufheben. Das Molekül ist dann nach außen unpolar.</p>
          </div>
        </div>
        
        <div className="p-4 border-t border-orange-50 bg-orange-50/50 text-center">
           <button onClick={onClose} className="text-orange-600 font-bold text-sm hover:underline">Schließen</button>
        </div>
      </div>
    </div>
  );
};