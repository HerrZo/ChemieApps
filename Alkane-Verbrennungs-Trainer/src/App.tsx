import { useState } from 'react'
import { GuideMode } from './components/GuideMode'
import { TrainerMode } from './components/TrainerMode'
import { PracticeMode } from './components/PracticeMode'
import './App.css'

type AppMode = 'guide' | 'trainer' | 'practice'

interface AppState {
  mode: AppMode
  carbonCount: number
  score: number
  total: number
  streak: number
  level: number
}

export function App() {
  const [state, setState] = useState<AppState>({
    mode: 'guide',
    carbonCount: 3,
    score: 0,
    total: 0,
    streak: 0,
    level: 1
  })

  const updateState = (updates: Partial<AppState>) => {
    setState(prev => ({ ...prev, ...updates }))
  }

  return (
    <div className="alkane-app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1>🔥 Alkan-Verbrennungen</h1>
          <p>Guide · Trainer · Praxis-Quiz</p>
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="label">Level</span>
            <span className="value">{state.level}</span>
          </div>
          {state.streak > 0 && (
            <div className="stat streak">
              <span className="flame">🔥</span>
              <span className="value">{state.streak}</span>
            </div>
          )}
          <div className="stat">
            <span className="label">Score</span>
            <span className="value">{state.score}/{state.total}</span>
          </div>
        </div>
      </header>

      {/* Mode Tabs */}
      <nav className="mode-tabs">
        <button
          className={`tab-button ${state.mode === 'guide' ? 'active' : ''}`}
          onClick={() => updateState({ mode: 'guide' })}
        >
          📖 Guide
        </button>
        <button
          className={`tab-button ${state.mode === 'trainer' ? 'active' : ''}`}
          onClick={() => updateState({ mode: 'trainer' })}
        >
          🎯 Trainer
        </button>
        <button
          className={`tab-button ${state.mode === 'practice' ? 'active' : ''}`}
          onClick={() => updateState({ mode: 'practice' })}
        >
          💪 Praxis-Quiz
        </button>
      </nav>

      {/* Content */}
      <main className="app-main">
        {state.mode === 'guide' && (
          <GuideMode
            carbonCount={state.carbonCount}
            onCarbonCountChange={(carbonCount) => updateState({ carbonCount })}
          />
        )}
        {state.mode === 'trainer' && (
          <TrainerMode
            score={state.score}
            total={state.total}
            streak={state.streak}
            onUpdate={updateState}
          />
        )}
        {state.mode === 'practice' && (
          <PracticeMode
            level={state.level}
            onLevelUp={() => updateState({ level: state.level + 1 })}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Johannes-Scharrer-Gymnasium · Alkane-Verbrennung Trainer</p>
      </footer>
    </div>
  )
}
