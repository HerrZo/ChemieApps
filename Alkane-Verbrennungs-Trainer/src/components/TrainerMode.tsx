import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactionDisplay } from './ReactionDisplay'

const getAlkaneFormula = (n: number) => ({ c: n, h: 2 * n + 2 })
const ALKANE_NAMES = ['', 'Methan', 'Ethan', 'Propan', 'Butan', 'Pentan', 'Hexan', 'Heptan', 'Oktan', 'Nonan', 'Decan']

interface AppStateUpdate {
  score?: number
  total?: number
  streak?: number
  mode?: string
  carbonCount?: number
  level?: number
}

interface TrainerModeProps {
  score: number
  total: number
  streak: number
  onUpdate: (updates: AppStateUpdate) => void
}

interface TrainerState {
  n: number
  inputs: { a: string; b: string; c: string; d: string }
  feedback: 'correct' | 'wrong' | null
  solution: { a: number; b: number; c: number; d: number }
}

export function TrainerMode({ score, total, streak, onUpdate }: TrainerModeProps) {
  const [state, setState] = useState<TrainerState>(() => generateNewProblem())

  function generateNewProblem() {
    const n = Math.floor(Math.random() * 11) + 1
    const alkan = getAlkaneFormula(n)
    const co2 = n
    const h2o = n + 1
    const oTotal = 2 * co2 + h2o
    const solution = oTotal % 2 === 0
      ? { a: 1, b: oTotal / 2, c: co2, d: h2o }
      : { a: 2, b: oTotal, c: co2 * 2, d: h2o * 2 }

    return {
      n,
      inputs: { a: '', b: '', c: '', d: '' },
      feedback: null,
      solution
    }
  }

  const handleInputChange = (field: 'a' | 'b' | 'c' | 'd', value: string) => {
    setState(prev => ({
      ...prev,
      inputs: { ...prev.inputs, [field]: value }
    }))
  }

  const checkSolution = () => {
    const isCorrect =
      (parseInt(state.inputs.a) || 1) === state.solution.a &&
      (parseFloat(state.inputs.b) || 0) === state.solution.b &&
      (parseInt(state.inputs.c) || 0) === state.solution.c &&
      (parseInt(state.inputs.d) || 0) === state.solution.d

    setState(prev => ({ ...prev, feedback: isCorrect ? 'correct' : 'wrong' }))

    if (isCorrect) {
      onUpdate({ score: score + 1, total: total + 1, streak: streak + 1 })
    } else {
      onUpdate({ total: total + 1, streak: 0 })
    }
  }

  const nextProblem = () => {
    setState(generateNewProblem())
  }

  const alkan = getAlkaneFormula(state.n)
  const leftC = (parseInt(state.inputs.a) || 1) * state.n
  const rightC = parseInt(state.inputs.c) || 0
  const leftH = (parseInt(state.inputs.a) || 1) * alkan.h
  const rightH = (parseInt(state.inputs.d) || 0) * 2
  const leftO = (parseFloat(state.inputs.b) || 0) * 2
  const rightO = (parseInt(state.inputs.c) || 0) * 2 + (parseInt(state.inputs.d) || 0)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="trainer-mode">
      <div className="trainer-header">
        <h2>Setze die Koeffizienten:</h2>
        <div className="trainer-score">
          Score: {score}/{total}
        </div>
      </div>

      {/* Reaction Input */}
      <div className="reaction-input">
        <div className="molecule-input">
          <input
            type="text"
            value={state.inputs.a}
            onChange={(e) => handleInputChange('a', e.target.value)}
            placeholder="1"
            className="coeff-input"
            disabled={state.feedback !== null}
          />
          <span className="formula">C{state.n}H{alkan.h}</span>
        </div>

        <span className="op">+</span>

        <div className="molecule-input">
          <input
            type="text"
            value={state.inputs.b}
            onChange={(e) => handleInputChange('b', e.target.value)}
            placeholder="?"
            className="coeff-input"
            disabled={state.feedback !== null}
          />
          <span className="formula">O₂</span>
        </div>

        <span className="op">→</span>

        <div className="molecule-input">
          <input
            type="text"
            value={state.inputs.c}
            onChange={(e) => handleInputChange('c', e.target.value)}
            placeholder="?"
            className="coeff-input"
            disabled={state.feedback !== null}
          />
          <span className="formula">CO₂</span>
        </div>

        <span className="op">+</span>

        <div className="molecule-input">
          <input
            type="text"
            value={state.inputs.d}
            onChange={(e) => handleInputChange('d', e.target.value)}
            placeholder="?"
            className="coeff-input"
            disabled={state.feedback !== null}
          />
          <span className="formula">H₂O</span>
        </div>
      </div>

      {/* Atom Balance */}
      <div className="atom-balance">
        <div className="balance-row">
          <span className="atom">C</span>
          <span className={`count ${leftC === rightC && leftC > 0 ? 'correct' : ''}`}>{leftC}</span>
          <span className="sep">=</span>
          <span className={`count ${leftC === rightC && leftC > 0 ? 'correct' : ''}`}>{rightC}</span>
        </div>
        <div className="balance-row">
          <span className="atom">H</span>
          <span className={`count ${leftH === rightH && leftH > 0 ? 'correct' : ''}`}>{leftH}</span>
          <span className="sep">=</span>
          <span className={`count ${leftH === rightH && leftH > 0 ? 'correct' : ''}`}>{rightH}</span>
        </div>
        <div className="balance-row">
          <span className="atom">O</span>
          <span className={`count ${leftO === rightO && leftO > 0 ? 'correct' : ''}`}>{leftO}</span>
          <span className="sep">=</span>
          <span className={`count ${leftO === rightO && leftO > 0 ? 'correct' : ''}`}>{rightO}</span>
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {state.feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`feedback ${state.feedback}`}
          >
            {state.feedback === 'correct' ? '✓ Korrekt!' : '✗ Nicht ganz richtig'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <div className="trainer-buttons">
        {state.feedback === null ? (
          <button onClick={checkSolution} className="btn-check">
            Prüfen
          </button>
        ) : (
          <>
            <button onClick={nextProblem} className="btn-next">
              Neue Aufgabe
            </button>
            {state.feedback === 'wrong' && (
              <button onClick={() => setState(prev => ({ ...prev, feedback: null }))} className="btn-retry">
                Nochmal versuchen
              </button>
            )}
          </>
        )}
      </div>
    </motion.div>
  )
}
