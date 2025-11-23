import React from 'react';

interface Props {
  onOpenGlossary: () => void;
}

export const Header: React.FC<Props> = ({ onOpenGlossary }) => {
  return (
    <header className="bg-orange-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
            <svg className="w-8 h-8 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <circle cx="12" cy="12" r="3"/>
                <circle cx="16" cy="8" r="1.5"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold leading-none">Molekülpolarität</h1>
            <p className="text-orange-200 text-xs md:text-sm">Bindung, Struktur & Dipol</p>
          </div>
        </div>

        <div className="flex gap-2">
          <a 
            href="https://herrzo.github.io/ChemieApps/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 bg-orange-800 hover:bg-orange-900 px-3 py-2 rounded-lg text-sm transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
            Sammlung
          </a>
          <button 
            onClick={onOpenGlossary}
            className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg text-sm font-bold transition shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            Glossar
          </button>
        </div>
      </div>
    </header>
  );
};