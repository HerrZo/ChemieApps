import { useState } from 'react'
import { TOPICS } from './data'
import { useTheme } from './hooks/useTheme'
import { Sidebar } from '@shared/components/Sidebar'
import { TopicView } from './components/TopicView'
import { Toast, useToast } from '@shared/components/Toast'

type Screen = 'topic' | 'completion'

export function App() {
  const { isDark, toggle } = useTheme()
  const { toast, show: showToast } = useToast()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const [screen, setScreen] = useState<Screen>('topic')

  const totalTopics = TOPICS.length
  const progress = (completed.size / totalTopics) * 100

  const markCompleted = (index: number) => {
    setCompleted(prev => new Set(prev).add(index))
  }

  const handleQuizComplete = (correct: boolean) => {
    if (correct) {
      if (!completed.has(currentIndex)) {
        setScore(s => s + 10)
        showToast('Richtig! 🎉')
      }
    } else {
      showToast('Leider falsch!')
    }
    markCompleted(currentIndex)
  }

  const handleMiniGameScore = (points: number) => {
    setScore(s => s + points)
  }

  const handleMiniGameComplete = () => {
    markCompleted(currentIndex)
  }

  const handleNext = () => {
    if (currentIndex < totalTopics - 1) {
      setCurrentIndex(i => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setScreen('completion')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setScore(0)
    setCompleted(new Set())
    setScreen('topic')
  }

  return (
    <div id="app-container">
      {/* Header */}
      <header className="app-header glass-effect">
        <div className="header-content">
          <a href="/" className="back-link">
            <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück
          </a>

          <h1>🧂 Ionen & Salze</h1>

          <div className="stats-container">
            <button className="theme-toggle" onClick={toggle} aria-label="Theme wechseln">
              <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isDark ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                )}
              </svg>
            </button>
            <div className="stat-badge">⭐ {score} Pkt.</div>
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </header>

      {/* Main Layout */}
      <div className="main-layout">
        <Sidebar
          topics={TOPICS}
          currentIndex={screen === 'completion' ? -1 : currentIndex}
          completed={completed}
          onSelect={i => { setCurrentIndex(i); setScreen('topic') }}
        />

        <main className="content-area">
          {screen === 'completion' ? (
            <div className="content-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: 16 }}>🎓</div>
              <h2 className="card-title" style={{ justifyContent: 'center' }}>Glückwunsch!</h2>
              <p style={{ fontSize: '1.2rem' }}>
                Du hast alle Themen zu Ionen & Salzen gemeistert!
              </p>
              <div style={{ margin: '32px 0', background: 'var(--neutral-100)', padding: 24, borderRadius: 12 }}>
                <div style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                  {score} Punkte
                </div>
                <div>Dein Chemie-Erfolg 🚀</div>
              </div>
              <button className="btn-primary" onClick={handleRestart}>Nochmal Üben</button>
            </div>
          ) : (
            <TopicView
              key={currentIndex}
              topic={TOPICS[currentIndex]}
              topicIndex={currentIndex}
              isCompleted={completed.has(currentIndex)}
              isLast={currentIndex === totalTopics - 1}
              onQuizComplete={handleQuizComplete}
              onMiniGameScore={handleMiniGameScore}
              onMiniGameComplete={handleMiniGameComplete}
              onNext={handleNext}
              onToast={showToast}
            />
          )}
        </main>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
