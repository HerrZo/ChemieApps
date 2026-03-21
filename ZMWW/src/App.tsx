import { useState } from 'react'
import { EnhancedQuizPanel } from '@/components/EnhancedQuizPanel'
import { LearningResources } from '@/components/LearningResources'
import './App.css'

type AppView = 'quiz' | 'resources'

export function App() {
  const [view, setView] = useState<AppView>('resources')

  return (
    <div className="zmww-app">
      {/* Header */}
      <header className="app-header">
        <div className="header-container">
          <div className="header-left">
            <h1>⚡ Zwischenmolekulare Wechselwirkungen</h1>
            <p>ZMWW: London-Kräfte, Dipol-Dipol, Wasserstoffbrücken</p>
          </div>
          <nav className="header-nav">
            <button
              className={`nav-button ${view === 'quiz' ? 'active' : ''}`}
              onClick={() => setView('quiz')}
            >
              🎯 Quiz
            </button>
            <button
              className={`nav-button ${view === 'resources' ? 'active' : ''}`}
              onClick={() => setView('resources')}
            >
              📚 Lernressourcen
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {view === 'quiz' && <EnhancedQuizPanel />}
        {view === 'resources' && <LearningResources />}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Johannes-Scharrer-Gymnasium · Chemie Lern-App · ZMWW</p>
      </footer>
    </div>
  )
}
