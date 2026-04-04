import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { molecules } from '@/data/molecules'
import type { Difficulty, ForceType } from '@/types'
import { DifficultySelector } from './DifficultySelector'
import { TimerRing } from './TimerRing'
import './enhanced-quiz.css'

/**
 * Defines the generic shape of supported interactive quiz questions.
 * Adding a new question type requires modifying this union, 
 * expanding the `Question` interface, and updating `handleAnswer` matching logic.
 */
// Neue Aufgabentypen
type QuestionType = 'multiple-choice' | 'input' | 'matching' | 'ordering'

/**
 * Question Interface
 * Maps the data shape for individual quiz objects. 
 * Use this as the blueprint when seeding new questions into the game.
 */
interface Question {
  id: string
  type: QuestionType
  category: ForceType
  difficulty: Difficulty
  question: string
  moleculeIds?: string[]
  // MC
  options?: Array<{ label: string; explanation: string }>
  correctAnswer?: number
  // Input/Ordering
  correctValue?: string | string[]
  // Matching
  pairs?: Array<{ left: string; right: string }>
  hints?: string[]
  commonMistakes?: string[]
}

// const FORCE_OPTIONS: ForceType[] = ['LDWW', 'DDWW', 'WB'] // aktuell ungenutzt
const TIMER_SECONDS = 30

// Neue vielfältigere Aufgaben
const ENHANCED_QUESTIONS: Question[] = [
  // MC
  {
    id: 'zmww-mc-1',
    type: 'multiple-choice',
    category: 'LDWW',
    difficulty: 'leicht',
    question: 'Welche Wechselwirkung dominiert in Methan (CH₄)?',
    moleculeIds: ['methan'],
    options: [
      { label: 'London-Kräfte', explanation: '✓ Richtig! Methan ist unpolar → nur London-Kräfte' },
      { label: 'Dipol-Dipol', explanation: '✗ Falsch. Methan ist symmetrisch und unpolar' },
      { label: 'Wasserstoffbrücken', explanation: '✗ Falsch. H-Brücken nur bei H-N/O/F' }
    ],
    correctAnswer: 0,
    commonMistakes: ['Verwechslung mit Ethan', 'Annahme dass alle Alkane Dipole haben']
  },

  // Input-Aufgabe: Siedepunkt schätzen
  {
    id: 'zmww-input-1',
    type: 'input',
    category: 'LDWW',
    difficulty: 'mittel',
    question: 'Pentan (C₅H₁₂) ist ein Alkan mit London-Kräften. Welcher Siedepunkt ist realistisch?',
    correctValue: '36',
    hints: [
      'Größere Alkane haben höhere Siedepunkte',
      'Methan: -162°C, Butan: -0.5°C',
      'Pentan hat 5 Kohlenstoffe → noch höher'
    ],
    commonMistakes: [
      'Verwechslung mit Methan-Siedepunkt',
      'Unterschätzung der London-Kraft-Stärke bei längeren Ketten',
      'Vergessen dass Siedepunkt mit Kettenlänge steigt'
    ]
  },

  // Zuordnungs-Aufgabe
  {
    id: 'zmww-matching-1',
    type: 'matching',
    category: 'WB',
    difficulty: 'mittel',
    question: 'Ordne die Moleküle ihren dominierenden Wechselwirkungen zu:',
    pairs: [
      { left: 'Ethanol (C₂H₅OH)', right: 'Wasserstoffbrücken' },
      { left: 'Oktan (C₈H₁₈)', right: 'London-Kräfte' },
      { left: 'Chlorwasserstoff (HCl)', right: 'Dipol-Dipol' },
      { left: 'Wasser (H₂O)', right: 'Wasserstoffbrücken' }
    ],
    hints: [
      'Schaue auf -OH, -NH, -FH Gruppen für H-Brücken',
      'Unpolare Alkane → London-Kräfte',
      'Polare Moleküle ohne H-Brücken → Dipol-Dipol'
    ]
  },

  // Lückentext / Ordering
  {
    id: 'zmww-ordering-1',
    type: 'ordering',
    category: 'LDWW',
    difficulty: 'schwer',
    question: 'Ordne diese Alkane nach steigendem Siedepunkt (London-Kräfte nehmen zu mit Kettenlänge)',
    correctValue: ['methan', 'ethan', 'butan', 'heptan', 'oktan'],
    moleculeIds: ['methan', 'ethan', 'butan', 'heptan', 'oktan'],
    hints: [
      'Mehr C-Atome = größere Oberfläche = stärkere Wechselwirkungen',
      'Methan hat nur 1 C-Atom',
      'Oktan hat 8 C-Atome'
    ]
  }
]

/**
 * EnhancedQuizPanel Component
 * Main driver for gamification logic (streak, timers, scoring).
 * Tracks application state internally.
 * 
 * @returns {JSX.Element} The rendered quiz panel interface with Framer Motion animations.
 */
export function EnhancedQuizPanel() {
  const [difficulty, setDifficulty] = useState<Difficulty | 'alle'>('alle')
  const [timeModeEnabled, setTimeModeEnabled] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<any>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [, setShowHint] = useState(false) // showHint entfernt, da ungenutzt
  const [hints, setHints] = useState<string[]>([])
  const [streak, setStreak] = useState(0)
  const [timerKey, setTimerKey] = useState(0)
  const [timeExpired, setTimeExpired] = useState(false)

  const pool = useMemo(
    () => difficulty === 'alle' ? ENHANCED_QUESTIONS : ENHANCED_QUESTIONS.filter((q) => q.difficulty === difficulty),
    [difficulty]
  )
  const current = pool[questionIndex % pool.length]
  const progress = ((questionIndex + 1) / pool.length) * 100

  function handleAnswer(answer: any) {
    if (answered !== null || timeExpired) return

    setAnswered(answer)

    let isCorrect = false
    if (current.type === 'multiple-choice') {
      isCorrect = answer === current.correctAnswer
    } else if (current.type === 'input') {
      isCorrect = String(answer).trim() === String(current.correctValue).trim()
    } else if (current.type === 'matching' || current.type === 'ordering') {
      isCorrect = JSON.stringify(answer) === JSON.stringify(current.correctValue)
    }

    if (isCorrect) {
      setScore((s) => s + 1)
      setStreak((s) => s + 1)
    } else {
      setStreak(0)
    }

    setShowFeedback(true)
  }

  function handleRevealHint() {
    if (current.hints && hints.length < current.hints.length) {
      setHints((h) => [...h, current.hints![h.length]])
      setShowHint(true)
    }
  }

  function handleExpire() {
    setTimeExpired(true)
    setAnswered('timeout')
  }

  function next() {
    setAnswered(null)
    setShowFeedback(false)
    setShowHint(false)
    setHints([])
    setTimeExpired(false)
    setTimerKey((k) => k + 1)
    setQuestionIndex((i) => i + 1)
  }

  const isCorrect = answered !== null && answered !== 'timeout' && (
    current.type === 'multiple-choice' ? answered === current.correctAnswer :
    current.type === 'input' ? String(answered).trim() === String(current.correctValue).trim() :
    JSON.stringify(answered) === JSON.stringify(current.correctValue)
  )

  return (
    <div className="enhanced-quiz">
      {/* Top Stats */}
      <div className="quiz-stats">
        <div className="stat-item">
          <span className="stat-label">Frage</span>
          <span className="stat-value">{questionIndex + 1}/{pool.length}</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="stat-item">
          <span className="stat-label">Punkte</span>
          <span className="stat-value">{score}</span>
        </div>
        {streak > 0 && (
          <div className="stat-item streak">
            <span className="flame">🔥</span>
            <span className="stat-value">{streak}</span>
          </div>
        )}
        {timeModeEnabled && (
          <TimerRing key={timerKey} seconds={TIMER_SECONDS} onExpire={handleExpire} active={!answered && !timeExpired} />
        )}
      </div>

      {/* Difficulty & Timer Toggle */}
      <div className="quiz-controls">
        <DifficultySelector value={difficulty} onChange={setDifficulty} />
        <label className="timer-toggle">
          <input
            type="checkbox"
            checked={timeModeEnabled}
            onChange={(e) => { setTimeModeEnabled(e.target.checked); setTimerKey((k) => k + 1) }}
          />
          <span>Zeitmodus (30s)</span>
        </label>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id + questionIndex}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="question-container"
        >
          {/* Category Badge + Type Indicator */}
          <div className="question-header">
            <span className="category-badge">{current.category}</span>
            <span className="question-type">
              {current.type === 'multiple-choice' && '❓ Multiple Choice'}
              {current.type === 'input' && '✏️ Eingabe'}
              {current.type === 'matching' && '🔗 Zuordnung'}
              {current.type === 'ordering' && '📊 Sortieren'}
            </span>
          </div>

          <h2 className="question-text">{current.question}</h2>

          {/* Question Type: Multiple Choice */}
          {current.type === 'multiple-choice' && current.options && (
            <div className="mc-options">
              {current.options.map((option, idx) => {
                const isChosen = answered === idx
                const isCorrectOption = idx === current.correctAnswer
                let state = 'default'

                if (answered !== null) {
                  if (isCorrectOption) state = 'correct'
                  else if (isChosen) state = 'wrong'
                  else state = 'disabled'
                }

                return (
                  <motion.button
                    key={idx}
                    className={`option-button ${state}`}
                    onClick={() => handleAnswer(idx)}
                    disabled={answered !== null}
                    whileTap={answered === null ? { scale: 0.98 } : {}}
                    animate={isChosen && !isCorrect ? { x: [-6, 6, -6, 6, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="option-text">{option.label}</span>
                    {state === 'correct' && <span className="option-check">✓</span>}
                    {state === 'wrong' && <span className="option-check">✗</span>}
                  </motion.button>
                )
              })}
            </div>
          )}

          {/* Question Type: Input */}
          {current.type === 'input' && (
            <div className="input-question">
              <input
                type="text"
                value={answered || ''}
                onChange={(e) => setAnswered(e.target.value)}
                placeholder="Deine Antwort eingeben..."
                disabled={showFeedback}
                className="answer-input"
              />
              <button onClick={() => handleAnswer(answered)} disabled={!answered || showFeedback} className="btn-submit">
                Prüfen
              </button>
            </div>
          )}

          {/* Question Type: Matching */}
          {current.type === 'matching' && current.pairs && (
            <div className="matching-pairs">
              {current.pairs.map((pair, idx) => (
                <div key={idx} className="pair-row">
                  <div className="pair-left">{pair.left}</div>
                  <div className="pair-arrow">→</div>
                  <div className="pair-right">{pair.right}</div>
                </div>
              ))}
              {answered === null && (
                <p className="matching-hint">Ordne die Paare mental zu und überprüfe dann</p>
              )}
              {answered === null && (
                <button onClick={() => handleAnswer(current.pairs)} className="btn-check">
                  Prüfen
                </button>
              )}
            </div>
          )}

          {/* Question Type: Ordering */}
          {current.type === 'ordering' && current.moleculeIds && (
            <div className="ordering-question">
              <p className="ordering-hint">Sortiere vom kleinsten zum größten Siedepunkt:</p>
              <div className="molecule-list">
                {current.moleculeIds.map((molId, idx) => {
                  const mol = molecules.find((m) => m.id === molId)
                  return (
                    <div key={molId} className="molecule-item">
                      <span className="rank">{idx + 1}.</span>
                      <span className="mol-name">{mol?.name}</span>
                      <span className="mol-formula">{mol?.formula}</span>
                    </div>
                  )
                })}
              </div>
              {answered === null && (
                <button onClick={() => handleAnswer(current.moleculeIds)} className="btn-check">
                  Überprüfen
                </button>
              )}
            </div>
          )}

          {/* Hints */}
          {answered === null && current.hints && current.hints.length > 0 && (
            <button onClick={handleRevealHint} className="btn-hint">
              💡 Hinweis {hints.length > 0 && `(${hints.length}/${current.hints.length})`}
            </button>
          )}

          {hints.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hints-box">
              {hints.map((hint, idx) => (
                <div key={idx} className="hint-item">
                  <span className="hint-number">{idx + 1}.</span>
                  <span>{hint}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`feedback-box ${isCorrect ? 'correct' : 'wrong'}`}
              >
                <div className="feedback-icon">
                  {isCorrect ? '🎉' : timeExpired ? '⏰' : '💡'}
                </div>
                <div className="feedback-content">
                  <h3>
                    {isCorrect ? 'Perfekt!' : timeExpired ? 'Zeit abgelaufen!' : 'Nicht ganz...'}
                  </h3>
                  <p>
                    {current.type === 'multiple-choice' && current.options
                      ? current.options[current.correctAnswer!].explanation
                      : isCorrect
                      ? 'Großartig gelöst!'
                      : `Richtige Antwort: ${current.correctValue}`}
                  </p>
                  {!isCorrect && current.commonMistakes && current.commonMistakes.length > 0 && (
                    <details className="mistake-details">
                      <summary>Häufige Fehler bei dieser Aufgabe</summary>
                      <ul>
                        {current.commonMistakes.map((mistake, idx) => (
                          <li key={idx}>• {mistake}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {showFeedback && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={next}
              className="btn-next-question"
            >
              {questionIndex === pool.length - 1 ? 'Fertig!' : 'Nächste Frage →'}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
