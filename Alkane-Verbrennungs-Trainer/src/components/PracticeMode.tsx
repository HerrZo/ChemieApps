import { useState } from 'react'
import { motion } from 'framer-motion'

interface PracticeModeProps {
  level: number
  onLevelUp: () => void
}

interface Question {
  id: string
  question: string
  type: 'concept' | 'calculation' | 'reasoning'
  options?: string[]
  correctAnswer?: number
  explanation: string
}

// Quiz-Fragen für verschiedene Level
const LEVEL_QUESTIONS: Record<number, Question[]> = {
  1: [
    {
      id: 'l1-q1',
      question: 'Was sind die Produkte der Alkan-Verbrennung?',
      type: 'concept',
      options: ['CO und H₂', 'CO₂ und H₂O', 'CH₄ und O₂'],
      correctAnswer: 1,
      explanation: 'Alkane verbrennen zu Kohlendioxid (CO₂) und Wasser (H₂O).'
    },
    {
      id: 'l1-q2',
      question: 'Welches Alkan hat die Formel C₃H₈?',
      type: 'concept',
      options: ['Ethan', 'Propan', 'Butan'],
      correctAnswer: 1,
      explanation: 'Propan hat 3 Kohlenstoffe und 8 Wasserstoffe (C₃H₈).'
    },
    {
      id: 'l1-q3',
      question: 'Bei der Verbrennung von Ethan (C₂H₆) entsteht:',
      type: 'calculation',
      options: ['2 CO₂ + 3 H₂O', 'CO₂ + 2 H₂O', '2 CO + H₂O'],
      correctAnswer: 0,
      explanation: 'C₂H₆ + 3.5 O₂ → 2 CO₂ + 3 H₂O (oder mal 2: 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O)'
    },
    {
      id: 'l1-q4',
      question: 'Warum ist O₂ bei manchen Gleichungen ein Bruch?',
      type: 'reasoning',
      options: [
        'Weil O₂ nur in Paaren existiert',
        'Weil die Sauerstoff-Atome ungerade sind',
        'Weil Alkane immer verbrennen'
      ],
      correctAnswer: 1,
      explanation: 'Wenn wir eine ungerade Anzahl von O-Atomen brauchen, können wir nicht einfach ganze O₂-Moleküle verwenden.'
    },
    {
      id: 'l1-q5',
      question: 'Was macht man, wenn O₂ ein Bruch ist?',
      type: 'concept',
      options: ['Ignorieren', 'Die ganze Gleichung mit 2 multiplizieren', 'Eine neue Gleichung schreiben'],
      correctAnswer: 1,
      explanation: 'Wenn O₂ ein Bruch ist, multiplizieren wir die gesamte Gleichung mit 2, um nur ganze Zahlen zu erhalten.'
    }
  ],
  2: [
    {
      id: 'l2-q1',
      question: 'Wie viel O₂ braucht man für die Verbrennung von Methan (CH₄)?',
      type: 'calculation',
      options: ['1 O₂', '2 O₂', '0.5 O₂'],
      correctAnswer: 2,
      explanation: 'CH₄ + 2 O₂ → CO₂ + 2 H₂O... aber da 1 O₂ nicht ganz aufgeht, brauchen wir 0.5 (oder mal 2: 2 CH₄ + 4 O₂ ...)'
    },
    {
      id: 'l2-q2',
      question: 'Bei der Verbrennung von Butan (C₄H₁₀) entstehen insgesamt wie viele O-Atome auf der rechten Seite?',
      type: 'calculation',
      options: ['8', '13', '11'],
      correctAnswer: 1,
      explanation: '4 CO₂ = 8 O-Atome, 5 H₂O = 5 O-Atome → Total 13 O-Atome = 6.5 O₂'
    }
  ],
  3: [
    {
      id: 'l3-q1',
      question: 'Erkläre warum längere Alkanketten eine „andere" Verbrennung haben als kurze.',
      type: 'reasoning',
      options: [
        'Sie brauchen weniger O₂',
        'Sie verursachen mehr Rußbildung',
        'Sie folgen derselben stöchiometrischen Regel'
      ],
      correctAnswer: 2,
      explanation: 'Alle Alkane folgen derselben Regel: CₙH₂ₙ₊₂ + rechnet man die O-Atome aus und dividiert durch 2 für O₂.'
    }
  ]
}

export function PracticeMode({ level, onLevelUp }: PracticeModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const questions = LEVEL_QUESTIONS[level] || []
  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  const handleAnswer = (answerIndex: number) => {
    setAnswered(answerIndex)
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(s => s + 1)
    }
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1)
      setAnswered(null)
      setShowExplanation(false)
    } else {
      // Level complete
      onLevelUp()
      setCurrentIndex(0)
      setScore(0)
      setAnswered(null)
      setShowExplanation(false)
    }
  }

  if (!currentQuestion) return null

  const isCorrect = answered === currentQuestion.correctAnswer

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="practice-mode">
      {/* Header */}
      <div className="practice-header">
        <h2>Level {level} - Praxis-Quiz</h2>
        <div className="progress-info">
          Frage {currentIndex + 1}/{questions.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Question */}
      <div className="practice-question">
        <h3>{currentQuestion.question}</h3>

        {/* Options */}
        {currentQuestion.options && (
          <div className="options">
            {currentQuestion.options.map((option, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={answered !== null}
                className={`option ${answered === idx ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                whileTap={answered === null ? { scale: 0.98 } : {}}
              >
                <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                <span>{option}</span>
                {answered === idx && (isCorrect ? <span className="check">✓</span> : <span className="check">✗</span>)}
              </motion.button>
            ))}
          </div>
        )}

        {/* Explanation */}
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`explanation ${isCorrect ? 'correct' : 'wrong'}`}
          >
            {isCorrect ? '🎉 Richtig!' : '💭 Das ist nicht ganz richtig.'}
            <p>{currentQuestion.explanation}</p>
          </motion.div>
        )}

        {/* Next Button */}
        {showExplanation && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleNext}
            className="btn-next"
          >
            {currentIndex === questions.length - 1 ? `Level ${level + 1} freischalten →` : 'Nächste Frage →'}
          </motion.button>
        )}
      </div>

      {/* Score */}
      <div className="practice-footer">
        <span>Score: {score}/{currentIndex + (answered !== null ? 1 : 0)}</span>
      </div>
    </motion.div>
  )
}
