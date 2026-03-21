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

const POLARITY_QUESTIONS: Question[] = [
  {
    id: 'pol-mc-1',
    type: 'multiple-choice',
    difficulty: 'leicht',
    question: 'Welches Molekül ist polar?',
    options: [
      { label: 'H₂O', explanation: '✓ Richtig! Gewinkelt + unterschiedliche Elektronegativität' },
      { label: 'CH₄', explanation: '✗ Falsch. Tetraedisch symmetrisch' },
      { label: 'CO₂', explanation: '✗ Falsch. Linear und symmetrisch' }
    ],
    correctAnswer: 0,
    commonMistakes: ['Konfusion mit Molekülform', 'Alle zweiatomigen Moleküle sind polar']
  },
  {
    id: 'pol-mc-2',
    type: 'multiple-choice',
    difficulty: 'mittel',
    question: 'Warum ist CO₂ unpolar, obwohl C-O Bindungen polar sind?',
    options: [
      { label: 'Die Dipole heben sich durch lineare Geometrie auf', explanation: '✓ Richtig!' },
      { label: 'Kohlenstoff hat keine Elektronegativität', explanation: '✗ Falsch' },
      { label: 'CO₂ ist tatsächlich polar', explanation: '✗ Falsch' }
    ],
    correctAnswer: 0,
    hints: ['Denke an die Geometrie von CO₂', 'Vektoraddition von Dipolen']
  },
  {
    id: 'pol-input-1',
    type: 'input',
    difficulty: 'leicht',
    question: 'Welcher Stoff hat den höchsten Dipolmoment? (H₂O, NH₃, oder HCl?)',
    correctValue: 'H₂O',
    hints: ['Wasser ist sehr polar'],
    commonMistakes: ['HCl wird oft überschätzt']
  },
  {
    id: 'pol-matching-1',
    type: 'matching',
    difficulty: 'mittel',
    question: 'Ordne Moleküle ihren Polaritäten zu',
    pairs: [
      { left: 'H₂O', right: 'Polar' },
      { left: 'CH₄', right: 'Unpolar' },
      { left: 'HCl', right: 'Polar' },
      { left: 'CO₂', right: 'Unpolar' }
    ]
  },
  {
    id: 'pol-ordering-1',
    type: 'ordering',
    difficulty: 'schwer',
    question: 'Ordne Stoffe nach Dipolmoment (aufsteigend): H₂O, CH₄, HCl, CO₂',
    correctValue: ['CH₄', 'CO₂', 'HCl', 'H₂O'],
    hints: ['Unpolare Stoffe zuerst', 'H₂O hat das höchste Dipolmoment']
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
    return POLARITY_QUESTIONS.reduce<DifficultyStats>(
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
                    <span className={answered ? (JSON.stringify([pair.left, pair.right]) === JSON.stringify(currentQuestion.correctValue?.[idx]) ? 'correct' : 'incorrect') : ''}>{pair.right}</span>
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
