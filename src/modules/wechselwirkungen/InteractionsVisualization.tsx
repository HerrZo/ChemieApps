import { useState } from 'react'
import { motion } from 'framer-motion'

type Interaction = 'ldww' | 'ddww' | 'wb'

interface InteractionData {
  name: string
  german: string
  strength: string
  requirements: string
  example: string
  description: string
}

export function InteractionsVisualization() {
  const [selectedType, setSelectedType] = useState<Interaction>('ldww')

  const interactions: Record<Interaction, InteractionData> = {
    ldww: {
      name: 'London Dispersion Forces',
      german: 'London-Kräfte (LDWW)',
      strength: 'Schwach (1-10 kJ/mol)',
      requirements: 'Alle Moleküle (unpolar & polar)',
      example: 'CH₄, Ar, I₂',
      description: 'Entstehen durch spontane Elektronenfluktuationen, erzeugen temporäre Dipole'
    },
    ddww: {
      name: 'Dipole-Dipole Interactions',
      german: 'Dipol-Dipol-Wechselwirkungen (DDWW)',
      strength: 'Mittel (5-20 kJ/mol)',
      requirements: 'Polare Moleküle',
      example: 'HCl, CO, NO',
      description: 'Permanente Dipole orientieren sich gegenseitig. Stärker als London-Kräfte'
    },
    wb: {
      name: 'Hydrogen Bonding',
      german: 'Wasserstoffbrückenbindung (WB)',
      strength: 'Stark (10-40 kJ/mol)',
      requirements: 'H-N, H-O, H-F',
      example: 'H₂O, HF, NH₃',
      description: 'Spezialfall der DDWW. H an hochelektronegativen Atomen. Stärkste intermolekulare Kraft'
    }
  }

  const data = interactions[selectedType]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="interactions-visualization">
      <div className="viz-container">
        <h2>Wechselwirkungstypen</h2>

        {/* Type Selector */}
        <div className="type-selector">
          <button
            className={`type-btn ${selectedType === 'ldww' ? 'active' : ''}`}
            onClick={() => setSelectedType('ldww')}
          >
            London-Kräfte
          </button>
          <button
            className={`type-btn ${selectedType === 'ddww' ? 'active' : ''}`}
            onClick={() => setSelectedType('ddww')}
          >
            Dipol-Dipol
          </button>
          <button
            className={`type-btn ${selectedType === 'wb' ? 'active' : ''}`}
            onClick={() => setSelectedType('wb')}
          >
            Wasserstoffbrücke
          </button>
        </div>

        {/* Visualization */}
        <motion.div key={selectedType} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="interaction-display">
          <h3>{data.german}</h3>

          {/* SVG Visualization */}
          <svg className="interaction-diagram" viewBox="0 0 300 200">
            {selectedType === 'ldww' && (
              <>
                {/* Random electron clouds */}
                <circle cx="80" cy="80" r="25" fill="none" stroke="#6b7280" strokeWidth="2" opacity="0.3" />
                <circle cx="80" cy="80" r="22" fill="none" stroke="#6b7280" strokeWidth="2" opacity="0.5" />
                <circle cx="80" cy="80" r="19" fill="none" stroke="#f97316" strokeWidth="2" />
                <circle cx="80" cy="80" r="8" fill="#1f2937" />

                <circle cx="220" cy="80" r="25" fill="none" stroke="#6b7280" strokeWidth="2" opacity="0.3" />
                <circle cx="220" cy="80" r="22" fill="none" stroke="#6b7280" strokeWidth="2" opacity="0.5" />
                <circle cx="220" cy="80" r="19" fill="none" stroke="#f97316" strokeWidth="2" />
                <circle cx="220" cy="80" r="8" fill="#1f2937" />

                {/* Weak attraction */}
                <path d="M 110 80 L 190 80" stroke="#0891b2" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowend)" />
                <defs>
                  <marker id="arrowend" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#0891b2" />
                  </marker>
                </defs>

                <text x="150" y="120" textAnchor="middle" fill="#0891b2" fontWeight="bold">
                  Schwache Anziehung
                </text>
              </>
            )}

            {selectedType === 'ddww' && (
              <>
                {/* Molecule 1 - Polar */}
                <circle cx="80" cy="100" r="15" fill="#dc2626" />
                <circle cx="110" cy="80" r="8" fill="#60a5fa" />
                <line x1="80" y1="100" x2="110" y2="80" stroke="#999" strokeWidth="2" />
                <path d="M 85 95 L 105 75" stroke="#f97316" strokeWidth="3" markerEnd="url(#arrowdipol1)" />

                {/* Molecule 2 - Polar */}
                <circle cx="220" cy="100" r="15" fill="#dc2626" />
                <circle cx="190" cy="80" r="8" fill="#60a5fa" />
                <line x1="220" y1="100" x2="190" y2="80" stroke="#999" strokeWidth="2" />
                <path d="M 215 95 L 195 75" stroke="#f97316" strokeWidth="3" markerEnd="url(#arrowdipol2)" />

                <defs>
                  <marker id="arrowdipol1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
                  </marker>
                  <marker id="arrowdipol2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
                  </marker>
                </defs>

                {/* Attraction */}
                <path d="M 135 100 L 185 100" stroke="#0891b2" strokeWidth="3" markerEnd="url(#arrowatr)" />
                <defs>
                  <marker id="arrowatr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#0891b2" />
                  </marker>
                </defs>

                <text x="150" y="140" textAnchor="middle" fill="#0891b2" fontWeight="bold">
                  Dipol-Anziehung
                </text>
              </>
            )}

            {selectedType === 'wb' && (
              <>
                {/* H₂O molecule 1 */}
                <circle cx="70" cy="100" r="12" fill="#dc2626" />
                <circle cx="45" cy="70" r="8" fill="#60a5fa" />
                <circle cx="95" cy="70" r="8" fill="#60a5fa" />
                <line x1="70" y1="100" x2="45" y2="70" stroke="#999" strokeWidth="2" />
                <line x1="70" y1="100" x2="95" y2="70" stroke="#999" strokeWidth="2" />
                <text x="30" y="105" fill="#60a5fa" fontWeight="bold" fontSize="12">
                  H
                </text>

                {/* H₂O molecule 2 */}
                <circle cx="230" cy="100" r="12" fill="#dc2626" />
                <circle cx="205" cy="70" r="8" fill="#60a5fa" />
                <circle cx="255" cy="70" r="8" fill="#60a5fa" />
                <line x1="230" y1="100" x2="205" y2="70" stroke="#999" strokeWidth="2" />
                <line x1="230" y1="100" x2="255" y2="70" stroke="#999" strokeWidth="2" />

                {/* H-Bond */}
                <path d="M 100 95 L 200 95" stroke="#ef4444" strokeWidth="4" strokeDasharray="3,3" markerEnd="url(#arrowhbond)" />
                <defs>
                  <marker id="arrowhbond" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
                  </marker>
                </defs>

                <text x="150" y="140" textAnchor="middle" fill="#ef4444" fontWeight="bold">
                  Wasserstoffbrücke (H-Bond)
                </text>
              </>
            )}
          </svg>

          {/* Properties */}
          <div className="interaction-properties">
            <div className="property">
              <strong>Stärke:</strong>
              <p>{data.strength}</p>
            </div>
            <div className="property">
              <strong>Voraussetzungen:</strong>
              <p>{data.requirements}</p>
            </div>
            <div className="property">
              <strong>Beispiele:</strong>
              <p>{data.example}</p>
            </div>
            <div className="property full">
              <strong>Beschreibung:</strong>
              <p>{data.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
