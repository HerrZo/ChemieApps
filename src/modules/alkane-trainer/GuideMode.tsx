import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ReactionDisplay } from './ReactionDisplay'
import { CoeffBox } from './CoeffBox'

const ALKANE_NAMES = ['', 'Methan', 'Ethan', 'Propan', 'Butan', 'Pentan', 'Hexan', 'Heptan', 'Oktan', 'Nonan', 'Decan']
const getAlkaneFormula = (n: number) => ({ c: n, h: 2 * n + 2 })

interface GuideModeProps {
  carbonCount: number
  onCarbonCountChange: (n: number) => void
}

export function GuideMode({ carbonCount, onCarbonCountChange }: GuideModeProps) {
  const [step, setStep] = useState(0)
  const [isDoubling, setIsDoubling] = useState(false)

  const alkan = getAlkaneFormula(carbonCount)
  const co2 = carbonCount
  const h2o = carbonCount + 1
  const oTotal = 2 * co2 + h2o
  const o2 = oTotal % 2 === 0 ? oTotal / 2 : oTotal
  const isFraction = oTotal % 2 !== 0

  const steps = [
    {
      title: 'Grundgerüst',
      explanation: `Die Verbrennung von ${ALKANE_NAMES[carbonCount]} folgt diesem Schema:\n${ALKANE_NAMES[carbonCount]} + O₂ → CO₂ + H₂O`
    },
    {
      title: 'C-Atome ausgleichen',
      explanation: `${ALKANE_NAMES[carbonCount]} hat ${carbonCount} Kohlenstoffe.\nWir benötigen also ${co2} Moleküle CO₂ auf der rechten Seite.`
    },
    {
      title: 'H-Atome ausgleichen',
      explanation: `${ALKANE_NAMES[carbonCount]} hat ${alkan.h} Wasserstoffe.\nJedes H wird zu ½ H₂O → ${h2o} Moleküle H₂O nötig.`
    },
    {
      title: 'Sauerstoff zählen',
      explanation: `Rechts haben wir:\n${2 * co2} O (aus CO₂) + ${h2o} O (aus H₂O) = ${oTotal} O-Atome gesamt.`
    },
    {
      title: isFraction ? 'Verdoppeln wegen Bruch' : 'Sauerstoff anpassen',
      explanation: isFraction
        ? `${oTotal} O-Atome ergeben ${o2} O₂. Das ist ein Bruch!\nMultipliziere die GANZE Gleichung mit 2.`
        : `${oTotal} O-Atome ergeben genau ${o2} O₂. Perfekt! ✓`
    },
    {
      title: '✓ Fertig!',
      explanation: 'Die Gleichung ist nun stöchiometrisch ausgeglichen.'
    }
  ]

  useEffect(() => {
    setStep(0)
  }, [carbonCount])

  const handleDouble = () => {
    setIsDoubling(true)
    setTimeout(() => {
      setIsDoubling(false)
      setStep(5)
    }, 600)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="guide-mode">
      {/* Alkan Selector */}
      <div className="alkan-selector">
        <label htmlFor="alkan-select">Alkan wählen:</label>
        <select
          id="alkan-select"
          value={carbonCount}
          onChange={(e) => onCarbonCountChange(parseInt(e.target.value))}
          className="select-field"
        >
          {ALKANE_NAMES.slice(1).map((name, i) => (
            <option key={name} value={i + 1}>
              {name} (C{i + 1}H{2 * (i + 1) + 2})
            </option>
          ))}
        </select>
        <span className="info-badge">
          {carbonCount} C-Atome · {carbonCount % 2 === 0 ? 'Gerade' : 'Ungerade'}
        </span>
      </div>

      {/* Reaction Display */}
      <ReactionDisplay
        n={carbonCount}
        step={step}
        isDoubling={isDoubling}
      />

      {/* Step Explanation */}
      <div className="step-explanation">
        <div className="step-header">
          <div className="step-number">{step + 1}</div>
          <h2>{steps[step].title}</h2>
        </div>
        <p className="explanation-text">{steps[step].explanation}</p>

        {/* Special button for doubling */}
        {step === 4 && isFraction && !isDoubling && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="double-button-container">
            <button onClick={handleDouble} className="btn-double">
              <span className="flame">🔥</span> Alles verdoppeln! (×2)
            </button>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="step-buttons">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="btn-nav"
          >
            ← Zurück
          </button>
          {step === 4 && isFraction ? (
            <span className="waiting-text">Klicke "Verdoppeln"</span>
          ) : step < 5 ? (
            <button
              onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
              className="btn-nav primary"
            >
              Weiter →
            </button>
          ) : (
            <button
              onClick={() => setStep(0)}
              className="btn-nav secondary"
            >
              Neu starten
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
