import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Difficulty } from '@/types'
import { ENHANCED_QUESTIONS } from '@/data/questions'
import { MultipleChoiceQuestion } from './quiz/MultipleChoiceQuestion'
import { InputQuestionComponent } from './quiz/InputQuestion'
import { MatchingQuestionComponent } from './quiz/MatchingQuestion'
import { OrderingQuestionComponent } from './quiz/OrderingQuestion'
import { DifficultySelector } from './DifficultySelector'
import { TimerRing } from './TimerRing'
import './enhanced-quiz.css'

export function EnhancedQuizPanel() {
  const [difficulty, setDifficulty] = useState<Difficulty | 'alle'>('alle')
  const [timeModeEnabled, setTimeModeEnabled] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  
  // State for current question
  const [answered, setAnswered] = useState<any>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [attempts, setAttempts] = useState(0)
  
  const [showHint, setShowHint] = useState(false)
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

  // Dynamic timer based on question type
  const timerSeconds = useMemo(() => {
    switch(current?.type) {
      case 'multiple-choice': return 15
      case 'input': return 30
      case 'matching': return 60
      case 'ordering': return 60
      default: return 30
    }
  }, [current?.type])

  function handleAnswer(answer: any) {
    if (answered !== null || timeExpired) return

    let isCorrect = false
    if (current.type === 'multiple-choice') {
      isCorrect = answer === current.correctAnswer
    } else if (current.type === 'input') {
      isCorrect = String(answer).trim().toLowerCase() === String(current.correctValue).trim().toLowerCase()
    } else if (current.type === 'matching' || current.type === 'ordering') {
      // Very simple deep check
      isCorrect = JSON.stringify(answer) === JSON.stringify(current.type === 'matching' ? current.pairs.map(p => ({ left: p.left, right: p.right })) : current.correctValue)
    }

    if (isCorrect) {
      setAnswered(answer)
      setScore((s) => s + 1)
      setStreak((s) => s + 1)
      setShowFeedback(true)
    } else {
      // Differentiated Feedback (Scaffolding): Wrong -> Give hint if available -> 2nd try
      if (attempts === 0 && current.hints && current.hints.length > 0) {
        setAttempts(1)
        handleRevealHint()
        // Provide visual feedback it was wrong but don't lock
      } else {
        setAnswered(answer)
        setStreak(0)
        setShowFeedback(true)
      }
    }
  }

  function handleRevealHint() {
    if (current?.hints && hints.length < current.hints.length) {
      setHints((h) => [...h, current.hints![h.length]])
      setShowHint(true)
    }
  }

  function handleExpire() {
    setTimeExpired(true)
    setAnswered('timeout')
    setShowFeedback(true)
  }

  function next() {
    setAnswered(null)
    setShowFeedback(false)
    setShowHint(false)
    setHints([])
    setAttempts(0)
    setTimeExpired(false)
    setTimerKey((k) => k + 1)
    setQuestionIndex((i) => i + 1)
  }

  if (!current) return <div className="p-8 text-center text-gray-500">Keine Fragen für diese Schwierigkeit gefunden.</div>

  const isCorrect = answered !== null && answered !== 'timeout' && (
    current.type === 'multiple-choice' ? answered === current.correctAnswer :
    current.type === 'input' ? String(answered).trim() === String(current.correctValue).trim() :
    JSON.stringify(answered) === JSON.stringify(current.type === 'matching' ? current.pairs.map(p => ({ left: p.left, right: p.right })) : current.correctValue)
  )

  return (
    <div className="enhanced-quiz">
      <div className="quiz-stats">
        <div className="stat-item">
          <span className="stat-label">Frage</span>
          <span className="stat-value">{questionIndex + 1}/{pool.length}</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: \`\${progress}%\` }}></div>
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
          <TimerRing key={timerKey} seconds={timerSeconds} onExpire={handleExpire} active={!answered && !timeExpired} />
        )}
      </div>

      <div className="quiz-controls">
        <DifficultySelector value={difficulty} onChange={setDifficulty} />
        <label className="timer-toggle">
          <input
            type="checkbox"
            checked={timeModeEnabled}
            onChange={(e) => { setTimeModeEnabled(e.target.checked); setTimerKey((k) => k + 1) }}
          />
          <span>Zeitmodus ({timerSeconds}s)</span>
        </label>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id + questionIndex}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="question-container"
        >
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

          {/* Renders decoupled sub-components */}
          <div className="mt-4">
            {current.type === 'multiple-choice' && (
              <MultipleChoiceQuestion question={current} answered={answered} onAnswer={handleAnswer} />
            )}
            
            {current.type === 'input' && (
              <InputQuestionComponent question={current} answered={answered} onAnswer={handleAnswer} showFeedback={showFeedback} />
            )}
            
            {current.type === 'matching' && (
              <MatchingQuestionComponent question={current} answered={answered} onAnswer={handleAnswer} />
            )}
            
            {current.type === 'ordering' && (
              <OrderingQuestionComponent question={current} answered={answered} onAnswer={handleAnswer} />
            )}
          </div>

          {attempts > 0 && !showFeedback && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-red-500 font-medium text-sm">
              Das war noch nicht ganz richtig. Versuch es nochmal mit diesem Tipp:
            </motion.p>
          )}

          {answered === null && current.hints && current.hints.length > 0 && (
            <button onClick={handleRevealHint} className="btn-hint mt-4">
              💡 Hinweis {hints.length > 0 && \`(\${hints.length}/\${current.hints.length})\`}
            </button>
          )}

          {hints.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hints-box mt-4">
              {hints.map((hint, idx) => (
                <div key={idx} className="hint-item">
                  <span className="hint-number">{idx + 1}.</span>
                  <span>{hint}</span>
                </div>
              ))}
            </motion.div>
          )}

          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={\`feedback-box mt-6 \${isCorrect ? 'correct' : 'wrong'}\`}
              >
                <div className="feedback-icon" style={{ fontSize: '2rem' }}>
                  {isCorrect ? '🎉' : timeExpired ? '⏰' : '💡'}
                </div>
                <div className="feedback-content">
                  <h3 className="font-bold text-lg mb-1">
                    {isCorrect ? 'Perfekt!' : timeExpired ? 'Zeit abgelaufen!' : 'Nicht ganz...'}
                  </h3>
                  <p className="text-sm">
                    {current.type === 'multiple-choice' && (current as any).options
                      ? (current as any).options[(current as any).correctAnswer].explanation
                      : isCorrect
                      ? 'Großartig gelöst!'
                      : \`Richtige Antwort war: \${current.type === 'ordering' ? (current as any).correctValue.join(' → ') : (current as any).correctValue || 'Siehe Lösung'}\`}
                  </p>
                  
                  {!isCorrect && current.commonMistakes && current.commonMistakes.length > 0 && (
                    <details className="mistake-details mt-3 text-sm">
                      <summary className="font-semibold cursor-pointer text-gray-700">Häufige Fehler bei dieser Aufgabe</summary>
                      <ul className="mt-2 text-gray-600 pl-4 list-disc">
                        {current.commonMistakes.map((mistake, idx) => (
                          <li key={idx} className="mb-1">{mistake}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {showFeedback && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={next}
              className="btn-next-question mt-6 w-full py-3 bg-gray-800 text-white font-medium rounded-xl hover:bg-gray-700 transition"
            >
              {questionIndex === pool.length - 1 ? 'Fertig!' : 'Nächste Frage →'}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
