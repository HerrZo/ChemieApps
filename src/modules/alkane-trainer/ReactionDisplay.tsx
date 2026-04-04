import { motion } from 'framer-motion'
import { CoeffBox } from './CoeffBox'

const getAlkaneFormula = (n: number) => ({ c: n, h: 2 * n + 2 })
const ALKANE_NAMES = ['', 'Methan', 'Ethan', 'Propan', 'Butan', 'Pentan', 'Hexan', 'Heptan', 'Oktan', 'Nonan', 'Decan']

interface ReactionDisplayProps {
  n: number
  step: number
  isDoubling?: boolean
  onCoefficientChange?: (coeffs: { a: number; b: number; c: number; d: number }) => void
  interactive?: boolean
  coefficients?: { a: string; b: string; c: string; d: string }
}

export function ReactionDisplay({
  n,
  step,
  isDoubling = false,
  onCoefficientChange,
  interactive = false,
  coefficients
}: ReactionDisplayProps) {
  const alkan = getAlkaneFormula(n)
  const co2 = n
  const h2o = n + 1
  const oTotal = 2 * co2 + h2o
  const isFraction = oTotal % 2 !== 0

  // Calculate display values
  const displayCoeffs = interactive
    ? coefficients
    : {
        a: step >= 5 && isFraction ? '2' : '1',
        b: step < 3 ? '?' : isFraction && step < 5 ? String(oTotal) : String(oTotal / 2),
        c: step < 1 ? '?' : isFraction && step < 5 ? String(co2 * 2) : String(co2),
        d: step < 2 ? '?' : isFraction && step < 5 ? String(h2o * 2) : String(h2o)
      }

  return (
    <motion.div
      className={`reaction-display ${isDoubling ? 'doubling' : ''}`}
      animate={isDoubling ? { scale: 1.05 } : { scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Alkan + O2 */}
      <div className="molecule-group">
        {interactive ? (
          <input
            type="text"
            value={coefficients?.a || ''}
            onChange={(e) => onCoefficientChange?.({ a: parseInt(e.target.value) || 1, b: 0, c: 0, d: 0 })}
            placeholder="1"
            className="coeff-input"
          />
        ) : (
          <CoeffBox value={displayCoeffs.a} active={step >= 4 && isFraction} />
        )}
        <span className="molecule-formula">C{n}H{alkan.h}</span>
      </div>

      <span className="operator">+</span>

      <div className="molecule-group">
        {interactive ? (
          <input
            type="text"
            value={coefficients?.b || ''}
            onChange={(e) => onCoefficientChange?.({ a: 0, b: parseInt(e.target.value) || 0, c: 0, d: 0 })}
            placeholder="?"
            className="coeff-input"
          />
        ) : (
          <CoeffBox value={displayCoeffs.b} active={step === 3 || (step === 4 && isFraction)} />
        )}
        <span className="molecule-formula">O<span className="subscript">2</span></span>
      </div>

      <span className="operator arrow">→</span>

      {/* Products */}
      <div className="molecule-group">
        {interactive ? (
          <input
            type="text"
            value={coefficients?.c || ''}
            onChange={(e) => onCoefficientChange?.({ a: 0, b: 0, c: parseInt(e.target.value) || 0, d: 0 })}
            placeholder="?"
            className="coeff-input"
          />
        ) : (
          <CoeffBox value={displayCoeffs.c} active={step === 1} />
        )}
        <span className="molecule-formula">CO<span className="subscript">2</span></span>
      </div>

      <span className="operator">+</span>

      <div className="molecule-group">
        {interactive ? (
          <input
            type="text"
            value={coefficients?.d || ''}
            onChange={(e) => onCoefficientChange?.({ a: 0, b: 0, c: 0, d: parseInt(e.target.value) || 0 })}
            placeholder="?"
            className="coeff-input"
          />
        ) : (
          <CoeffBox value={displayCoeffs.d} active={step === 2} />
        )}
        <span className="molecule-formula">H<span className="subscript">2</span>O</span>
      </div>
    </motion.div>
  )
}
