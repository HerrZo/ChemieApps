import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ALKANE_NAMES = ['', 'Methan', 'Ethan', 'Propan', 'Butan', 'Pentan', 'Hexan', 'Heptan', 'Oktan', 'Nonan', 'Decan']
const getAlkaneFormula = (n: number) => ({ c: n, h: 2 * n + 2 })

type TrainerMode = 'guide' | 'trainer' | 'practice'

interface TrainerState {
  n: number
  mode: TrainerMode
  score: number
  total: number
  streak: number
  level: number
}

export function AlkaneTrainer() {
  const [state, setState] = useState<TrainerState>({
    n: 3,
    mode: 'guide',
    score: 0,
    total: 0,
    streak: 0,
    level: 1
  })

  const alkan = getAlkaneFormula(state.n)
  const co2 = state.n
  const h2o = state.n + 1
  const oTotal = 2 * co2 + h2o
  const isFraction = oTotal % 2 !== 0
  const o2 = isFraction ? oTotal : oTotal / 2

  return (
    <div className="alkane-trainer">
      {/* Header */}
      <header className="trainer-header">
        <div className="header-left">
          <a href="/" className="btn-back">← Zurück</a>
          <h1>🔥 Alkan-Verbrennung Trainer</h1>
        </div>
        <div className="header-right">
          <div className="level-badge">
            <span className="level-number">Level {state.level}</span>
            <div className="xp-bar">
              <div className="xp-fill" style={{ width: `${(state.score % 10) * 10}%` }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Mode Tabs */}
      <div className="mode-tabs">
        <button
          className={`tab ${state.mode === 'guide' ? 'active' : ''}`}
          onClick={() => setState(s => ({ ...s, mode: 'guide' }))}
        >
          📖 Guide
        </button>
        <button
          className={`tab ${state.mode === 'trainer' ? 'active' : ''}`}
          onClick={() => setState(s => ({ ...s, mode: 'trainer' }))}
        >
          🎯 Trainer
        </button>
        <button
          className={`tab ${state.mode === 'practice' ? 'active' : ''}`}
          onClick={() => setState(s => ({ ...s, mode: 'practice' }))}
        >
          💪 Praxis-Quiz
        </button>
      </div>

      {/* Content */}
      <main className="trainer-content">
        <AnimatePresence mode="wait">
          {state.mode === 'guide' && (
            <GuideMode key="guide" n={state.n} setN={(n) => setState(s => ({ ...s, n }))} />
          )}
          {state.mode === 'trainer' && (
            <TrainerMode
              key="trainer"
              score={state.score}
              total={state.total}
              streak={state.streak}
              onUpdate={(updates) => setState(s => ({ ...s, ...updates }))}
            />
          )}
          {state.mode === 'practice' && (
            <PracticeQuizMode
              key="practice"
              level={state.level}
              onLevelUp={() => setState(s => ({ ...s, level: s.level + 1 }))}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

// GUIDE MODE - Schrittweise Erklärung
function GuideMode({ n, setN }: { n: number; setN: (n: number) => void }) {
  const [step, setStep] = useState(0)
  const alkan = getAlkaneFormula(n)
  const co2 = n
  const h2o = n + 1
  const oTotal = 2 * co2 + h2o
  const o2 = oTotal % 2 === 0 ? oTotal / 2 : oTotal
  const isFraction = oTotal % 2 !== 0

  const steps = [
    {
      title: 'Grundgerüst aufbauen',
      explanation: `Die Verbrennung von ${ALKANE_NAMES[n]} folgt diesem Schema: Alkan + O₂ → CO₂ + H₂O`
    },
    {
      title: 'C-Atome ausgleichen',
      explanation: `${ALKANE_NAMES[n]} hat ${n} Kohlenstoffe. Jedes C wird zu einem CO₂. Also ${n} CO₂ auf der rechten Seite.`,
      highlight: 'c'
    },
    {
      title: 'H-Atome ausgleichen',
      explanation: `${ALKANE_NAMES[n]} hat ${alkan.h} Wasserstoffe. Jedes H-Atom wird zu ½ H₂O. Also ${h2o} H₂O nötig.`,
      highlight: 'h'
    },
    {
      title: 'O-Atome zählen',
      explanation: `Rechts brauchst du: ${2 * co2} O (aus CO₂) + ${h2o} O (aus H₂O) = ${oTotal} O-Atome insgesamt.`,
      highlight: 'o'
    },
    {
      title: isFraction ? 'Verdoppeln wegen Bruch' : 'Sauerstoff anpassen',
      explanation: isFraction
        ? `${oTotal} Sauerstoff-Atome ergeben ${o2} O₂-Moleküle. Das ist ein Bruch! Multipliziere die GANZE Gleichung mit 2.`
        : `${oTotal} Sauerstoff-Atome ergeben genau ${o2} O₂-Moleküle. Perfekt!`,
      highlight: 'o2'
    },
    {
      title: '✓ Fertig!',
      explanation: 'Die Gleichung ist nun stöchiometrisch ausgeglichen.'
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="guide-mode">
      <div className="guide-alkan-selector">
        <label>Alkan wählen:</label>
        <select value={n} onChange={(e) => setN(parseInt(e.target.value))} className="select-field">
          {ALKANE_NAMES.slice(1).map((name, i) => (
            <option key={name} value={i + 1}>
              {name} (C{i + 1}H{2 * (i + 1) + 2})
            </option>
          ))}
        </select>
      </div>

      <ReactionDisplay n={n} step={step} />

      <div className="step-explanation">
        <h3 className="step-number">
          Schritt {step + 1}: {steps[step].title}
        </h3>
        <p className="explanation-text">{steps[step].explanation}</p>

        <div className="step-buttons">
          <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="btn-nav">
            ← Zurück
          </button>
          <button
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            disabled={step === steps.length - 1}
            className="btn-nav primary"
          >
            Weiter →
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// TRAINER MODE - Interaktive Übung
function TrainerMode({
  score,
  total,
  streak,
  onUpdate
}: {
  score: number
  total: number
  streak: number
  onUpdate: (updates: Partial<TrainerState>) => void
}) {
  const [n] = useState(() => Math.floor(Math.random() * 11) + 1)
  const [inputs, setInputs] = useState({ a: '', b: '', c: '', d: '' })
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)

  const alkan = getAlkaneFormula(n)
  const correctA = 1
  const correctB = (2 * n + n + 1) % 2 === 0 ? (2 * n + n + 1) / 2 : 2 * n + n + 1
  const correctC = (2 * n + n + 1) % 2 === 0 ? n : 2 * n
  const correctD = (2 * n + n + 1) % 2 === 0 ? n + 1 : 2 * (n + 1)

  const checkSolution = () => {
    const isCorrect =
      (parseInt(inputs.a) || 1) === correctA &&
      (parseFloat(inputs.b) || 0) === correctB &&
      (parseInt(inputs.c) || 0) === correctC &&
      (parseInt(inputs.d) || 0) === correctD

    setFeedback(isCorrect ? 'correct' : 'wrong')

    if (isCorrect) {
      onUpdate({ score: score + 1, total: total + 1, streak: streak + 1 })
    } else {
      onUpdate({ total: total + 1, streak: 0 })
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="trainer-mode">
      <div className="trainer-stats">
        <div>Score: {score}/{total}</div>
        {streak > 0 && <div>🔥 {streak} Streak</div>}
      </div>

      <ReactionDisplay n={n} step={6} />

      <div className="trainer-inputs">
        <InputCoeff value={inputs.a} onChange={(a) => setInputs(s => ({ ...s, a }))} placeholder="1" />
        C{n}H{alkan.h} +
        <InputCoeff value={inputs.b} onChange={(b) => setInputs(s => ({ ...s, b }))} placeholder="?" />
        O₂ →
        <InputCoeff value={inputs.c} onChange={(c) => setInputs(s => ({ ...s, c }))} placeholder="?" />
        CO₂ +
        <InputCoeff value={inputs.d} onChange={(d) => setInputs(s => ({ ...s, d }))} placeholder="?" />
        H₂O
      </div>

      <div className="atom-balance">
        {/* Show atom balance here */}
      </div>

      {feedback && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`feedback ${feedback}`}>
          {feedback === 'correct' ? '✓ Korrekt!' : '✗ Nochmal versuchen'}
        </motion.div>
      )}

      <button onClick={checkSolution} className="btn-check">
        Prüfen
      </button>
    </motion.div>
  )
}

// PRACTICE QUIZ MODE - Quiz mit verschiedenen Fragen
function PracticeQuizMode({ level, onLevelUp }: { level: number; onLevelUp: () => void }) {
  const [score, setScore] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const questionsPerLevel = 5

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="practice-mode">
      <div className="practice-header">
        <h2>Level {level} - Praxis-Quiz</h2>
        <p>
          Frage {questionIndex + 1}/{questionsPerLevel}
        </p>
      </div>

      {/* Quiz questions */}
      <div className="practice-question">
        <p>Frage {questionIndex + 1}...</p>
        {/* Dynamic questions based on level */}
      </div>

      <div className="practice-footer">
        {questionIndex === questionsPerLevel - 1 ? (
          <button onClick={onLevelUp} className="btn-primary">
            Level {level + 1} freischalten
          </button>
        ) : (
          <button onClick={() => setQuestionIndex(q => q + 1)} className="btn-primary">
            Weiter
          </button>
        )}
      </div>
    </motion.div>
  )
}

// Helper Components
function ReactionDisplay({ n, step }: { n: number; step: number }) {
  const alkan = getAlkaneFormula(n)
  const co2 = n
  const h2o = n + 1
  const oTotal = 2 * co2 + h2o
  const isFraction = oTotal % 2 !== 0

  const coeffA = step >= 5 && isFraction ? 2 : 1
  const coeffB = step < 3 ? '?' : isFraction ? oTotal : oTotal / 2
  const coeffC = step < 1 ? '?' : isFraction && step < 5 ? co2 * 2 : co2
  const coeffD = step < 2 ? '?' : isFraction && step < 5 ? h2o * 2 : h2o

  return (
    <div className="reaction-display">
      <div className="coeff">{coeffA}</div>
      <div className="molecule">C{n}H{alkan.h}</div>
      <span className="operator">+</span>
      <div className="coeff">{coeffB}</div>
      <div className="molecule">O₂</div>
      <span className="operator">→</span>
      <div className="coeff">{coeffC}</div>
      <div className="molecule">CO₂</div>
      <span className="operator">+</span>
      <div className="coeff">{coeffD}</div>
      <div className="molecule">H₂O</div>
    </div>
  )
}

function InputCoeff({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="input-coeff"
    />
  )
}
