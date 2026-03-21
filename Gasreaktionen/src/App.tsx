import { useState } from 'react'
import { EnhancedQuizPanel } from './components/EnhancedQuizPanel'
import { GasVisualization } from './components/GasVisualization'
import { LearningResources } from './components/LearningResources'
import './App.css'

type AppView = 'quiz' | 'visualization' | 'resources'

export function App() {
  const [view, setView] = useState<AppView>('quiz')
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <div className="gas-app">
      <header className="app-header">
        <div className="header-content">
          <h1>⚗️ Gasreaktionen & Avogadro-Gesetz</h1>
          <p>Verstehe Volumenverhältnisse und Gasdichte</p>
        </div>
        <div className="score-display">
          <span className="score">{score}/{total}</span>
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
        {view === 'visualization' && <GasVisualization />}
        {view === 'resources' && <LearningResources />}
      </main>

      <footer className="app-footer">
        <p>Johannes-Scharrer-Gymnasium · Gasreaktionen & Avogadro-Gesetz</p>
      </footer>
    </div>
  )
}
