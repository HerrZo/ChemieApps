import { useState } from 'react'
import { EnhancedQuizPanel } from './components/EnhancedQuizPanel'
import { PolarityVisualization } from './components/PolarityVisualization'
import { LearningResources } from './components/LearningResources'
import { useTheme } from './hooks/useTheme'
import './App.css'

type View = 'quiz' | 'visualization' | 'resources'

export function App() {
  const { isDark, toggle } = useTheme()
  const [view, setView] = useState<View>('quiz')

  return (
    <div className="polarity-app">
      <header className="app-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1>🧲 Molekülpolarität</h1>
            <p>Bindungstypen, Dipole & Elektronegativität</p>
          </div>
          <button
            onClick={toggle}
            aria-label={isDark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren'}
            style={{ padding: '8px 12px', background: 'none', border: '2px solid #e5e7eb', borderRadius: 8, cursor: 'pointer', fontSize: '1.1rem' }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <nav className="nav-tabs" aria-label="Bereiche">
        <button className={`tab ${view === 'quiz' ? 'active' : ''}`} onClick={() => setView('quiz')} aria-current={view === 'quiz' ? 'page' : undefined}>
          🎯 Quiz
        </button>
        <button className={`tab ${view === 'visualization' ? 'active' : ''}`} onClick={() => setView('visualization')} aria-current={view === 'visualization' ? 'page' : undefined}>
          🔬 Visualisierung
        </button>
        <button className={`tab ${view === 'resources' ? 'active' : ''}`} onClick={() => setView('resources')} aria-current={view === 'resources' ? 'page' : undefined}>
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
