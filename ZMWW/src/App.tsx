import { useState } from 'react'
import { EnhancedQuizPanel } from '@/components/EnhancedQuizPanel'
import { LearningResources } from '@/components/LearningResources'
import { useTheme } from './hooks/useTheme'
import './App.css'

type AppView = 'quiz' | 'resources'

export function App() {
  const { isDark, toggle } = useTheme()
  const [view, setView] = useState<AppView>('quiz')

  return (
    <div className="zmww-app">
      {/* Header */}
      <header className="app-header">
        <div className="header-container">
          <div className="header-left">
            <h1>⚡ Zwischenmolekulare Wechselwirkungen</h1>
            <p>ZMWW: London-Kräfte, Dipol-Dipol, Wasserstoffbrücken</p>
          </div>
          <nav className="header-nav" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={toggle}
              aria-label={isDark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren'}
              style={{ padding: '8px 12px', background: 'none', border: '2px solid var(--neutral-200)', borderRadius: 8, cursor: 'pointer', fontSize: '1.1rem', color: 'var(--neutral-900)' }}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
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
