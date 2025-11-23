import React, { useState } from 'react';
import { Header } from './components/Header';
import { TugOfWar } from './components/TugOfWar';
import { DipoleQuiz } from './components/DipoleQuiz';
import { GeometryLab } from './components/GeometryLab';
import { GlossaryModal } from './components/GlossaryModal';

enum Tab {
  Basics = 'basics',
  Training = 'training',
  Lab = 'lab'
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Basics);
  const [isGlossaryOpen, setGlossaryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col pb-12">
      <Header onOpenGlossary={() => setGlossaryOpen(true)} />
      
      <main className="flex-grow container mx-auto px-4 pt-6 max-w-5xl">
        
        {/* Tab Nav */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          <button 
            onClick={() => setActiveTab(Tab.Basics)}
            className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm flex items-center gap-2 ${activeTab === Tab.Basics ? 'bg-orange-600 text-white scale-105 shadow-orange-200' : 'bg-white text-slate-600 hover:bg-orange-50'}`}
          >
            <span>1.</span> Das Tauziehen
          </button>
          <button 
            onClick={() => setActiveTab(Tab.Training)}
             className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm flex items-center gap-2 ${activeTab === Tab.Training ? 'bg-orange-600 text-white scale-105 shadow-orange-200' : 'bg-white text-slate-600 hover:bg-orange-50'}`}
          >
            <span>2.</span> Dipol-Check
          </button>
          <button 
            onClick={() => setActiveTab(Tab.Lab)}
             className={`px-6 py-3 rounded-full font-bold transition-all shadow-sm flex items-center gap-2 ${activeTab === Tab.Lab ? 'bg-orange-600 text-white scale-105 shadow-orange-200' : 'bg-white text-slate-600 hover:bg-orange-50'}`}
          >
            <span>3.</span> Geometrie-Labor
          </button>
        </div>

        {/* Content Area */}
        <div className="animate-[fadeIn_0.3s_ease-out]">
          {activeTab === Tab.Basics && <TugOfWar />}
          {activeTab === Tab.Training && <DipoleQuiz />}
          {activeTab === Tab.Lab && <GeometryLab />}
        </div>

      </main>

      <GlossaryModal isOpen={isGlossaryOpen} onClose={() => setGlossaryOpen(false)} />
      
      <footer className="text-center text-orange-300 text-sm py-6">
        <p>&copy; 2024 Chemie Digital Learning Tool</p>
      </footer>
    </div>
  );
}