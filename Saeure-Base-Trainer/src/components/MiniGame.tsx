import { useState, useCallback } from 'react'
import { shuffle } from '@shared/utils/shuffle'
import { GAME_ITEMS } from '../data'

interface MiniGameProps {
  onScore: (points: number) => void
  onComplete: () => void
  onToast: (msg: string) => void
}

export function MiniGame({ onScore, onComplete, onToast }: MiniGameProps) {
  const [questions] = useState(() => shuffle(GAME_ITEMS))
  const [index, setIndex] = useState(0)
  const [gameScore, setGameScore] = useState(0)
  const [flash, setFlash] = useState<'correct' | 'wrong' | null>(null)
  const [done, setDone] = useState(false)

  const handleGuess = useCallback(
    (guess: 'Säure' | 'Base') => {
      if (done || flash !== null) return
      const current = questions[index]
      const correct = current.type === guess

      if (correct) {
        setGameScore(s => s + 10)
        onScore(10)
        onToast('Richtig! +10')
        setFlash('correct')
      } else {
        onToast(`Falsch! Es war ${current.type}`)
        setFlash('wrong')
      }

      setTimeout(() => {
        setFlash(null)
        const next = index + 1
        if (next >= questions.length) {
          setDone(true)
          onComplete()
          onToast('Minispiel beendet!')
        } else {
          setIndex(next)
        }
      }, 600)
    },
    [done, flash, index, onComplete, onScore, onToast, questions]
  )

  if (done) {
    return (
      <div className="game-container">
        <div className="game-molecule" style={{ fontSize: '2rem' }}>Ende! 🎉</div>
        <p style={{ fontWeight: 600 }}>Du hast {gameScore} von {questions.length * 10} Punkten erreicht.</p>
      </div>
    )
  }

  const current = questions[index]
  const moleculeStyle: React.CSSProperties = {
    color: flash === 'correct' ? 'var(--success)' : flash === 'wrong' ? 'var(--error)' : 'var(--primary)',
    transform: flash === 'wrong' ? 'translateX(20px)' : flash === 'correct' ? 'scale(1.2)' : undefined,
    transition: 'color 0.3s, transform 0.3s',
  }

  return (
    <div className="game-container">
      <div className="game-score-row">
        <span>Partikel {index + 1}/{questions.length}</span>
        <span>Punkte: {gameScore}</span>
      </div>
      <div className="game-molecule" style={moleculeStyle}>{current.label}</div>
      <div className="game-controls">
        <button className="game-btn btn-acid" onClick={() => handleGuess('Säure')}>Ist Säure</button>
        <button className="game-btn btn-base" onClick={() => handleGuess('Base')}>Ist Base</button>
      </div>
    </div>
  )
}
