import { useState } from 'react'
import { EnhancedQuizPanel } from '@/components/shared/EnhancedQuizPanel'
import { PolarityVisualization } from './PolarityVisualization'
import { LearningResources } from '@/components/shared/LearningResources'
import './App.css'

type View = 'quiz' | 'visualization' | 'resources'

export function PolaritaetApp() {
  const [view, setView] = useState<View>('quiz')

  return (
    <div className="polarity-app">
      <header className="app-header">
        <div>
          <h1>🧲 Molekülpolarität</h1>
          <p>Bindungstypen, Dipole & Elektronegativität</p>
        </div>
      </header>

      <nav className="nav-tabs">
        <button className={`tab ${view === 'quiz' ? 'active' : ''}`} onClick={() => setView('quiz')}>
          🎯 Quiz
        </button>
        <button className={`tab ${view === 'visualization' ? 'active' : ''}`} onClick={() => setView('visualization')}>
          🔬 Visualisierung
        </button>
        <button className={`tab ${view === 'resources' ? 'active' : ''}`} onClick={() => setView('resources')}>
          📚 Ressourcen
        </button>
      </nav>

      <main className="app-main">
        {view === 'quiz' && <EnhancedQuizPanel />}
        {view === 'visualization' && <PolarityVisualization />}
        {view === 'resources' && <LearningResources />}
      </main>

      <footer className="app-footer">
        <p>Johannes-Scharrer-Gymnasium · Molekülpolarität</p>
      </footer>
    </div>
  )
}
