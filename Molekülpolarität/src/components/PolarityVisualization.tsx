import { useState } from 'react'
import { motion } from 'framer-motion'

export function PolarityVisualization() {
  const [selectedMolecule, setSelectedMolecule] = useState<'h2o' | 'ch4' | 'hcl' | 'co2'>('h2o')

  const molecules: Record<string, { name: string; formula: string; polar: boolean; electronegativity: string; description: string }> = {
    h2o: {
      name: 'Wasser',
      formula: 'H₂O',
      polar: true,
      electronegativity: 'O (3.44) > H (2.20) → Dipol',
      description: 'Gewinkeltes Molekül mit starkem Dipolmoment'
    },
    ch4: {
      name: 'Methan',
      formula: 'CH₄',
      polar: false,
      electronegativity: 'C (2.55) ≈ H (2.20) → Symmetrisch',
      description: 'Tetraedische Symmetrie → unpolar'
    },
    hcl: {
      name: 'Chlorwasserstoff',
      formula: 'HCl',
      polar: true,
      electronegativity: 'Cl (3.16) > H (2.20) → Dipol',
      description: 'Starke Elektronegativität-Differenz'
    },
    co2: {
      name: 'Kohlendioxid',
      formula: 'CO₂',
      polar: false,
      electronegativity: 'Linear & Symmetrisch → Dipole heben sich auf',
      description: 'Obwohl C-O polar, ist CO₂ insgesamt unpolar'
    }
  }

  const mol = molecules[selectedMolecule]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="polarity-visualization">
      <div className="viz-container">
        <h2>Polarität-Analyse</h2>

        {/* Molecule Selector */}
        <div className="molecule-selector">
          {(Object.entries(molecules) as [string, typeof molecules[keyof typeof molecules]][]).map(([key, molecule]) => (
            <button
              key={key}
              className={`mol-btn ${selectedMolecule === key ? 'active' : ''}`}
              onClick={() => setSelectedMolecule(key as any)}
            >
              {molecule.formula}
            </button>
          ))}
        </div>

        {/* Visualization */}
        <motion.div key={selectedMolecule} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mol-display">
          <h3>{mol.name} ({mol.formula})</h3>

          {/* SVG Molecular Diagram */}
          <svg className="mol-diagram" viewBox="0 0 300 200">
            {selectedMolecule === 'h2o' && (
              <>
                <circle cx="150" cy="100" r="15" fill="#dc2626" />
                <circle cx="100" cy="60" r="10" fill="#60a5fa" />
                <circle cx="200" cy="60" r="10" fill="#60a5fa" />
                <line x1="150" y1="100" x2="100" y2="60" stroke="#999" strokeWidth="2" />
                <line x1="150" y1="100" x2="200" y2="60" stroke="#999" strokeWidth="2" />
                {/* Dipole arrow */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
                  </marker>
                </defs>
                <path d="M 150 140 L 150 170" stroke="#f97316" strokeWidth="3" markerEnd="url(#arrowhead)" />
                <text x="160" y="155" fill="#f97316" fontWeight="bold">μ</text>
              </>
            )}
            {selectedMolecule === 'ch4' && (
              <>
                <circle cx="150" cy="100" r="12" fill="#1f2937" />
                <circle cx="100" cy="60" r="8" fill="#60a5fa" />
                <circle cx="200" cy="60" r="8" fill="#60a5fa" />
                <circle cx="120" cy="140" r="8" fill="#60a5fa" />
                <circle cx="180" cy="140" r="8" fill="#60a5fa" />
                <line x1="150" y1="100" x2="100" y2="60" stroke="#999" strokeWidth="2" />
                <line x1="150" y1="100" x2="200" y2="60" stroke="#999" strokeWidth="2" />
                <line x1="150" y1="100" x2="120" y2="140" stroke="#999" strokeWidth="2" />
                <line x1="150" y1="100" x2="180" y2="140" stroke="#999" strokeWidth="2" />
                <text x="145" y="105" fill="white" fontSize="12" fontWeight="bold">C</text>
              </>
            )}
            {selectedMolecule === 'hcl' && (
              <>
                <circle cx="150" cy="100" r="15" fill="#06b6d4" />
                <circle cx="80" cy="100" r="10" fill="#60a5fa" />
                <line x1="150" y1="100" x2="90" y2="100" stroke="#999" strokeWidth="2" />
                <defs>
                  <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
                  </marker>
                </defs>
                <path d="M 120 100 L 60 100" stroke="#f97316" strokeWidth="3" markerEnd="url(#arrowhead2)" />
                <text x="145" y="105" fontWeight="bold">Cl</text>
                <text x="75" y="105" fontWeight="bold">H</text>
              </>
            )}
            {selectedMolecule === 'co2' && (
              <>
                <circle cx="150" cy="100" r="12" fill="#1f2937" />
                <circle cx="80" cy="100" r="15" fill="#dc2626" />
                <circle cx="220" cy="100" r="15" fill="#dc2626" />
                <line x1="150" y1="100" x2="95" y2="100" stroke="#999" strokeWidth="2" />
                <line x1="150" y1="100" x2="205" y2="100" stroke="#999" strokeWidth="2" />
                <text x="145" y="105" fill="white" fontSize="12" fontWeight="bold">C</text>
                <text x="75" y="105" fontWeight="bold">O</text>
                <text x="215" y="105" fontWeight="bold">O</text>
              </>
            )}
          </svg>

          {/* Properties */}
          <div className="mol-properties">
            <div className="property">
              <strong>Elektronegativität:</strong>
              <p>{mol.electronegativity}</p>
            </div>
            <div className="property">
              <strong>Polarität:</strong>
              <p className={mol.polar ? 'polar' : 'unpolar'}>
                {mol.polar ? '🧲 Polar' : '☁️ Unpolar'}
              </p>
            </div>
            <div className="property">
              <strong>Erklärung:</strong>
              <p>{mol.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
