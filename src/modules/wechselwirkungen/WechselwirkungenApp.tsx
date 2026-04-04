import { useState } from 'react'
import { EnhancedQuizPanel } from '@/components/shared/EnhancedQuizPanel'
import { InteractionsVisualization } from './InteractionsVisualization'
import { LearningResources } from '@/components/shared/LearningResources'
import './App.css'

type View = 'quiz' | 'visualization' | 'resources'

export function WechselwirkungenApp() {
  const [view, setView] = useState<View>('quiz')

  return (
    <div className="interactions-app">
      <header className="app-header">
        <div>
          <h1>🔗 Zwischenmolekulare Wechselwirkungen</h1>
          <p>London-Kräfte, Dipol-Dipol, Wasserstoffbrücken</p>
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
        {view === 'visualization' && <InteractionsVisualization />}
        {view === 'resources' && <LearningResources />}
      </main>

      <footer className="app-footer">
        <p>Johannes-Scharrer-Gymnasium · Zwischenmolekulare Wechselwirkungen</p>
      </footer>
    </div>
  )
}
