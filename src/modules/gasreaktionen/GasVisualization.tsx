import { useState } from 'react'
import { motion } from 'framer-motion'

export function GasVisualization() {
  const [h2Vol, setH2Vol] = useState(2)
  const [o2Vol, setO2Vol] = useState(1)

  const h2oVol = Math.min(h2Vol, o2Vol * 2)
  const h2Remaining = Math.max(0, h2Vol - h2oVol / 2)
  const o2Remaining = Math.max(0, o2Vol - h2oVol / 2)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="gas-visualization">
      <div className="visualization-container">
        <h2>Avogadro-Gesetz: 2H₂ + O₂ → 2H₂O</h2>

        {/* Sliders */}
        <div className="slider-group">
          <div className="slider">
            <label>H₂ Volumen: {h2Vol}L</label>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={h2Vol}
              onChange={(e) => setH2Vol(parseInt(e.target.value))}
              className="slider-input"
            />
          </div>

          <div className="slider">
            <label>O₂ Volumen: {o2Vol}L</label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={o2Vol}
              onChange={(e) => setO2Vol(parseFloat(e.target.value))}
              className="slider-input"
            />
          </div>
        </div>

        {/* Gas Containers */}
        <div className="containers">
          {/* H2 */}
          <div className="container h2-container">
            <h3>H₂ (Wasserstoff)</h3>
            <div className="gas-display">
              <motion.div
                className="gas-volume"
                animate={{ height: `${(h2Remaining / 10) * 100}%` }}
                style={{ backgroundColor: '#60a5fa' }}
              />
              <span className="volume-label">{h2Remaining.toFixed(1)}L</span>
            </div>
            <p className="unit-label">1L = 1 Mol</p>
          </div>

          {/* O2 */}
          <div className="container o2-container">
            <h3>O₂ (Sauerstoff)</h3>
            <div className="gas-display">
              <motion.div
                className="gas-volume"
                animate={{ height: `${(o2Remaining / 5) * 100}%` }}
                style={{ backgroundColor: '#fb923c' }}
              />
              <span className="volume-label">{o2Remaining.toFixed(1)}L</span>
            </div>
            <p className="unit-label">1L = 1 Mol</p>
          </div>

          {/* H2O */}
          <div className="container h2o-container">
            <h3>H₂O (Wasser)</h3>
            <div className="gas-display">
              <motion.div
                className="gas-volume"
                animate={{ height: `${(h2oVol / 10) * 100}%` }}
                style={{ backgroundColor: '#10b981' }}
              />
              <span className="volume-label">{h2oVol.toFixed(1)}L</span>
            </div>
            <p className="unit-label">1L = 1 Mol</p>
          </div>
        </div>

        {/* Explanation */}
        <div className="explanation">
          <h4>Avogadro-Gesetz:</h4>
          <p>
            Gleiche Volumen von Gasen enthalten gleiche Anzahl von Molekülen (bei gleicher Temperatur/Druck).
          </p>
          <p className="highlight">
            2 Volumen H₂ + 1 Volumen O₂ → 2 Volumen H₂O (dampfförmig)
          </p>
          {h2Remaining > 0 && <p className="warning">⚠️ H₂ im Überschuss ({h2Remaining.toFixed(1)}L)</p>}
          {o2Remaining > 0 && <p className="warning">⚠️ O₂ im Überschuss ({o2Remaining.toFixed(1)}L)</p>}
        </div>
      </div>
    </motion.div>
  )
}
