import { useState, useCallback } from 'react'
import { SALT_ITEMS } from '../data'
import type { GameQuestion } from '../types'

interface MiniGameProps {
  onScore: (points: number) => void
  onComplete: () => void
  onToast: (msg: string) => void
}

function buildQuestions(): GameQuestion[] {
  const shuffled = [...SALT_ITEMS].sort(() => Math.random() - 0.5)
  return shuffled.map((item, i) => ({
    ...item,
    mode: i < 6 ? ('name-to-formula' as const) : ('formula-to-name' as const),
  }))
}

function normalizeFormula(str: string): string {
  return str
    .trim()
    .replace(/\s+/g, '')
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, d => String('₀₁₂₃₄₅₆₇₈₉'.indexOf(d)))
    .toLowerCase()
}

function formatFormula(f: string): string {
  return f.replace(/(\d)/g, '<sub>$1</sub>')
}

export function MiniGame({ onScore, onComplete, onToast }: MiniGameProps) {
  const [questions] = useState<GameQuestion[]>(buildQuestions)
  const [index, setIndex] = useState(0)
  const [gameScore, setGameScore] = useState(0)
  const [input, setInput] = useState('')
  const [flash, setFlash] = useState<'correct' | 'wrong' | null>(null)
  const [done, setDone] = useState(false)

  const checkAnswer = useCallback(() => {
    if (done || flash !== null || !input.trim()) {
      if (!input.trim()) onToast('Bitte eine Antwort eingeben!')
      return
    }

    const q = questions[index]
    let correct = false
    let correctAnswer = ''

    if (q.mode === 'name-to-formula') {
      correctAnswer = q.formula
      correct = normalizeFormula(input) === normalizeFormula(q.formula)
    } else {
      correctAnswer = q.name
      correct = input.toLowerCase().trim() === q.name.toLowerCase().trim()
    }

    if (correct) {
      setGameScore(s => s + 10)
      onScore(10)
      onToast('Richtig! +10 🎉')
      setFlash('correct')
    } else {
      onToast(`Falsch! Richtig wäre: ${correctAnswer}`)
      setFlash('wrong')
    }

    setTimeout(() => {
      setFlash(null)
      setInput('')
      const next = index + 1
      if (next >= questions.length) {
        setDone(true)
        onComplete()
        onToast('Minispiel beendet! 🏆')
      } else {
        setIndex(next)
      }
    }, 800)
  }, [done, flash, index, input, onComplete, onScore, onToast, questions])

  if (done) {
    return (
      <div className="game-container">
        <div className="game-molecule" style={{ fontSize: '1.8rem' }}>
          🏆 Fertig!<br />
          <span style={{ fontSize: '1rem' }}>{gameScore} / {questions.length * 10} Punkte</span>
        </div>
      </div>
    )
  }

  const q = questions[index]
  const targetHtml =
    q.mode === 'name-to-formula'
      ? `📝 Gib die Formel ein:<br><strong style="color:var(--accent);">${q.name}</strong>`
      : `📝 Wie heißt das Salz?<br><strong style="color:var(--accent);">${formatFormula(q.formula)}</strong>`

  const targetStyle: React.CSSProperties = {
    color: flash === 'correct' ? 'var(--success)' : flash === 'wrong' ? 'var(--error)' : 'var(--primary)',
    transform: flash === 'wrong' ? 'translateX(15px)' : flash === 'correct' ? 'scale(1.1)' : undefined,
    transition: 'color 0.3s, transform 0.3s',
    fontSize: '1.2rem',
    minHeight: 80,
  }

  return (
    <div className="game-container">
      <div className="game-score-row">
        <span>Frage {index + 1}/{questions.length}</span>
        <span>Punkte: {gameScore}</span>
      </div>
      <div
        className="game-molecule"
        style={targetStyle}
        dangerouslySetInnerHTML={{ __html: targetHtml }}
      />
      <div style={{ display: 'flex', gap: 8, width: '100%', maxWidth: 400 }}>
        <input
          className="option-btn"
          style={{ flex: 1, cursor: 'text' }}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && checkAnswer()}
          placeholder="Deine Antwort..."
          autoFocus
        />
        <button className="btn-primary" style={{ marginTop: 0, padding: '12px 20px' }} onClick={checkAnswer}>
          ✓
        </button>
      </div>
    </div>
  )
}
