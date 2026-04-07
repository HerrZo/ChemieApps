import { useState } from 'react'
import type { Quiz } from '../types'

interface QuizPanelProps {
  quiz: Quiz
  topicIndex: number
  alreadyCompleted: boolean
  onComplete: (correct: boolean) => void
}

export function QuizPanel({ quiz, alreadyCompleted, onComplete }: QuizPanelProps) {
  const [answered, setAnswered] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)

  const handleAnswer = (index: number) => {
    if (answered !== null) return
    setAnswered(index)
    const opt = quiz.options[index]
    if (opt.isCorrect) {
      setFeedback(null)
      onComplete(true)
    } else {
      setFeedback(opt.error ?? 'Diese Antwort ist leider nicht korrekt.')
      onComplete(false)
    }
  }

  const getClass = (i: number) => {
    if (answered === null) return 'option-btn'
    if (quiz.options[i].isCorrect) return 'option-btn correct'
    if (i === answered) return 'option-btn incorrect selected'
    return 'option-btn'
  }

  return (
    <div className="quiz-section">
      <div className="quiz-question">🏁 Quiz: {quiz.question}</div>
      <div className="options-grid">
        {quiz.options.map((opt, i) => (
          <button
            key={i}
            className={getClass(i)}
            disabled={answered !== null}
            onClick={() => handleAnswer(i)}
          >
            {opt.text}
          </button>
        ))}
      </div>
      {feedback && answered !== null && !quiz.options[answered].isCorrect && (
        <div className="callout error" style={{ marginTop: 16 }}>
          <div className="callout-title">⚠️ Fehlerteufel</div>
          {feedback}
        </div>
      )}
      {alreadyCompleted && answered === null && (
        <p style={{ marginTop: 8, opacity: 0.6, fontSize: '0.9rem' }}>✅ Bereits abgeschlossen</p>
      )}
    </div>
  )
}
