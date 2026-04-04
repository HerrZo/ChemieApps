import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DifficultySelector } from './DifficultySelector'
import { TimerRing } from './TimerRing'
import './enhanced-quiz.css'

type QuestionType = 'multiple-choice' | 'input' | 'matching' | 'ordering'
type Difficulty = 'leicht' | 'mittel' | 'schwer'

interface Question {
  id: string
  type: QuestionType
  difficulty: Difficulty
  question: string
  options?: Array<{ label: string; explanation: string }>
  correctAnswer?: number
  correctValue?: string | string[]
  pairs?: Array<{ left: string; right: string }>
  hints?: string[]
  commonMistakes?: string[]
}

const TIMER_SECONDS = 30

const INTERACTIONS_QUESTIONS: Question[] = [
  {
    id: 'wx-mc-1',
    type: 'multiple-choice',
    difficulty: 'leicht',
    question: 'Welche Wechselwirkung tritt in Methan (CH₄) auf?',
    options: [
      { label: 'London-Kräfte', explanation: '✓ Richtig! CH₄ ist unpolar → nur London-Kräfte' },
      { label: 'Dipol-Dipol', explanation: '✗ Falsch. CH₄ ist symmetrisch und unpolar' },
      { label: 'Wasserstoffbrücken', explanation: '✗ Falsch. H-Brücken brauchen H an N/O/F' }
    ],
    correctAnswer: 0,
    commonMistakes: ['Alle Stoffe haben Wasserstoffbrücken', 'Verwechslung mit polaren Stoffen']
  },
  {
    id: 'wx-mc-2',
    type: 'multiple-choice',
    difficulty: 'mittel',
    question: 'Wasser hat einen höheren Siedepunkt als Schwefelwasserstoff (H₂S) obwohl S schwächer elektronegativ ist als O. Warum?',
    options: [
      { label: 'Wasser hat Wasserstoffbrücken', explanation: '✓ Richtig!' },
      { label: 'Wasser ist dichter', explanation: '✗ Falsch' },
      { label: 'O-H ist stärker als S-H', explanation: '✗ Falsch, aber relevant' }
    ],
    correctAnswer: 0,
    hints: ['Denke an die speziellen Wechselwirkungen in Wasser']
  },
  {
    id: 'wx-input-1',
    type: 'input',
    difficulty: 'leicht',
    question: 'Welche Art von Wechselwirkung ist die Schwächste? (London, Dipol oder Wasserstoffbrücke?)',
    correctValue: 'London',
    hints: ['Sie entsteht durch temporäre Dipole']
  },
  {
    id: 'wx-matching-1',
    type: 'matching',
    difficulty: 'mittel',
    question: 'Ordne Stoffe ihrer Hauptwechselwirkung zu',
    pairs: [
      { left: 'CH₄', right: 'London-Kräfte' },
      { left: 'H₂O', right: 'Wasserstoffbrücken' },
      { left: 'HCl', right: 'Dipol-Dipol' },
      { left: 'I₂', right: 'London-Kräfte' }
    ]
  },
  {
    id: 'wx-ordering-1',
    type: 'ordering',
    difficulty: 'schwer',
    question: 'Ordne nach Siedepunkt (aufsteigend): H₂O, HF, NH₃, CH₄',
    correctValue: ['CH₄', 'HF', 'NH₃', 'H₂O'],
    hints: ['Stärkere Wechselwirkungen → höherer Siedepunkt', 'Wasserstoffbrücken sind stärker als Dipol-Dipol']
  }
]

interface DifficultyStats {
  leicht: Question[]
  mittel: Question[]
  schwer: Question[]
}

export function EnhancedQuizPanel() {
  const [difficulty, setDifficulty] = useState<Difficulty>('leicht')
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [userAnswer, setUserAnswer] = useState<number | string | string[] | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS)

  const questionsByDifficulty = useMemo(() => {
    return INTERACTIONS_QUESTIONS.reduce<DifficultyStats>(
      (acc, q) => {
        acc[q.difficulty].push(q)
        return acc
      },
      { leicht: [], mittel: [], schwer: [] }
    )
  }, [])

  const questions = questionsByDifficulty[difficulty]
  const currentQuestion = questions[currentQuestionIdx]

  const handleAnswer = (answer: number | string | string[]) => {
    setUserAnswer(answer)
    setAnswered(true)
    const isCorrect = JSON.stringify(answer) === JSON.stringify(currentQuestion.correctAnswer ?? currentQuestion.correctValue)

    if (isCorrect) {
      setScore(score + 10)
      setStreak(streak + 1)
    } else {
      setStreak(0)
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1)
      setAnswered(false)
      setUserAnswer(null)
      setShowHint(false)
      setTimeLeft(TIMER_SECONDS)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIdx(0)
    setScore(0)
    setStreak(0)
    setAnswered(false)
    setUserAnswer(null)
    setShowHint(false)
    setTimeLeft(TIMER_SECONDS)
  }

  if (!currentQuestion) return <div>Keine Fragen für diese Schwierigkeit</div>

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="quiz-panel">
      <DifficultySelector current={difficulty} onChange={(d) => {
        setDifficulty(d)
        resetQuiz()
      }} />

      <div className="quiz-stats">
        <div className="stat">
          <span className="label">Score:</span>
          <span className="value">{score}</span>
        </div>
        <div className="stat">
          <span className="label">Streak:</span>
          <span className="value">{streak} 🔥</span>
        </div>
        <TimerRing seconds={timeLeft} />
      </div>

      <div className="quiz-container">
        <div className="progress">
          <div className="progress-text">Frage {currentQuestionIdx + 1} von {questions.length}</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={currentQuestion.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="question-card">
            <h3>{currentQuestion.question}</h3>

            {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
              <div className="options">
                {currentQuestion.options.map((option, idx) => (
                  <button key={idx} className={`option ${answered && idx === currentQuestion.correctAnswer ? 'correct' : ''} ${answered && idx !== currentQuestion.correctAnswer && userAnswer === idx ? 'incorrect' : ''}`} onClick={() => !answered && handleAnswer(idx)} disabled={answered}>
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'input' && (
              <div className="input-group">
                <input type="text" placeholder="Antwort eingeben..." value={typeof userAnswer === 'string' ? userAnswer : ''} onChange={(e) => setUserAnswer(e.target.value)} disabled={answered} />
                <button onClick={() => handleAnswer(userAnswer)} disabled={answered || !userAnswer}>
                  Antwort prüfen
                </button>
              </div>
            )}

            {currentQuestion.type === 'matching' && currentQuestion.pairs && (
              <div className="matching">
                {currentQuestion.pairs.map((pair, idx) => (
                  <div key={idx} className="pair">
                    <span>{pair.left}</span>
                    <span>{pair.right}</span>
                  </div>
                ))}
              </div>
            )}

            {answered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`feedback ${JSON.stringify(userAnswer) === JSON.stringify(currentQuestion.correctAnswer ?? currentQuestion.correctValue) ? 'correct' : 'incorrect'}`}>
                {JSON.stringify(userAnswer) === JSON.stringify(currentQuestion.correctAnswer ?? currentQuestion.correctValue) ? (
                  <>
                    <p>✓ Richtig!</p>
                    {currentQuestion.options && currentQuestion.correctAnswer !== undefined && (
                      <p>{currentQuestion.options[currentQuestion.correctAnswer].explanation}</p>
                    )}
                  </>
                ) : (
                  <>
                    <p>✗ Nicht ganz richtig</p>
                    {currentQuestion.commonMistakes && <p className="mistake">Häufiger Fehler: {currentQuestion.commonMistakes[0]}</p>}
                  </>
                )}
              </motion.div>
            )}

            {!answered && currentQuestion.hints && (
              <button className="hint-btn" onClick={() => setShowHint(!showHint)}>
                💡 Hinweis
              </button>
            )}

            {showHint && currentQuestion.hints && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hint">
                {currentQuestion.hints[0]}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="action-buttons">
          {answered && (
            <>
              {currentQuestionIdx < questions.length - 1 ? (
                <button className="btn-primary" onClick={nextQuestion}>
                  Nächste Frage →
                </button>
              ) : (
                <button className="btn-primary" onClick={resetQuiz}>
                  Quiz neu starten
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
