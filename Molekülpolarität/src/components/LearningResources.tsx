import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './learning-resources.css'

interface GlossaryTerm {
  term: string
  definition: string
  example: string
}

interface ChecklistItem {
  item: string
  description: string
}

interface CommonMistake {
  mistake: string
  correction: string
  explanation: string
}

const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Dipol',
    definition: 'Trennung von positiven und negativen Ladungszentren in einem Molekül',
    example: 'H₂O hat ein permanentes Dipolmoment'
  },
  {
    term: 'Elektronegativität',
    definition: 'Fähigkeit eines Atoms, Elektronendichte zu sich zu ziehen',
    example: 'Fluor (F) ist das elektronegativste Element'
  },
  {
    term: 'Polare Bindung',
    definition: 'Bindung mit ungleicher Elektronenverteilung zwischen Atomen',
    example: 'H-O Bindung in Wasser ist polar'
  },
  {
    term: 'Geometrie',
    definition: 'Räumliche Anordnung von Atomen in einem Molekül',
    example: 'H₂O ist gewinkelt, CO₂ ist linear'
  },
  {
    term: 'Dipolmoment',
    definition: 'Quantitatives Maß für die Polarität eines Moleküls',
    example: 'H₂O: 1.85 D, CH₄: 0 D'
  }
]

const CHECKLIST: ChecklistItem[] = [
  {
    item: 'Elektronegativität der Atome bestimmen',
    description: 'Nutze das PSE um EN-Werte zu finden oder merke dir: F > O > N > Cl > I'
  },
  {
    item: 'Polare Bindungen identifizieren',
    description: 'Unterschied > 0,4 bedeutet meist polare Bindung'
  },
  {
    item: 'Molekülgeometrie zeichnen',
    description: 'VSEPR-Theorie anwenden (Valenzelektronen, Geometrie bestimmen)'
  },
  {
    item: 'Dipolpfeile einzeichnen',
    description: 'Pfeile vom weniger zum elektronegativeren Atom'
  },
  {
    item: 'Vektoraddition durchführen',
    description: 'Dipole kombinieren → resultierendes Dipolmoment bestimmen'
  },
  {
    item: 'Geometrie prüfen',
    description: 'Symmetrische Geometrie → unpolar (dipole heben sich auf)'
  },
  {
    item: 'Ergebnis überprüfen',
    description: 'Polar: hat Dipolmoment | Unpolar: kein permanentes Dipolmoment'
  }
]

const COMMON_MISTAKES: CommonMistake[] = [
  {
    mistake: 'Alle Moleküle mit polaren Bindungen sind polar',
    correction: 'Nur wenn die Dipolmomente nicht aufgehoben werden',
    explanation: 'CO₂ hat polare C=O Bindungen, aber linear → Dipole heben sich auf'
  },
  {
    mistake: 'Molekülform ist unwichtig für Polarität',
    correction: 'Geometrie ist entscheidend!',
    explanation: 'CH₄ (tetrahedral) ist unpolar, aber H₂S (gewinkelt) ist polar'
  },
  {
    mistake: 'Unpolar = alle Bindungen sind unpolar',
    correction: 'Unpolar = Dipole heben sich geometrisch auf',
    explanation: 'CH₄ hat polare C-H Bindungen, aber das Molekül ist unpolar'
  },
  {
    mistake: 'Dipolmoment ist nur die Summe der EN-Unterschiede',
    correction: 'Dipolmoment ist Vektoraddition der Bindungsdipole',
    explanation: 'Richtung und Geometrie sind genauso wichtig wie Magnitude'
  },
  {
    mistake: 'Alle dreiatomigen Moleküle sind gleich',
    correction: 'Geometrie variiert: linear (CO₂) vs. gewinkelt (H₂O)',
    explanation: 'Form bestimmt Dipolaufhebung oder -verstärkung'
  }
]

type Tab = 'glossary' | 'checklist' | 'mistakes'

export function LearningResources() {
  const [activeTab, setActiveTab] = useState<Tab>('glossary')
  const [expandedGlossary, setExpandedGlossary] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGlossary = GLOSSARY.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="learning-resources">
      <div className="resources-container">
        <div className="resource-tabs">
          <button
            className={`tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
            onClick={() => setActiveTab('glossary')}
          >
            📚 Glossar
          </button>
          <button
            className={`tab-btn ${activeTab === 'checklist' ? 'active' : ''}`}
            onClick={() => setActiveTab('checklist')}
          >
            ✓ Checkliste
          </button>
          <button
            className={`tab-btn ${activeTab === 'mistakes' ? 'active' : ''}`}
            onClick={() => setActiveTab('mistakes')}
          >
            ⚠️ Häufige Fehler
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'glossary' && (
            <motion.div key="glossary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="tab-content">
              <input
                type="text"
                placeholder="Glossar durchsuchen..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="glossary-items">
                {filteredGlossary.map((item) => (
                  <motion.div
                    key={item.term}
                    className="glossary-item"
                    onClick={() =>
                      setExpandedGlossary(
                        expandedGlossary === item.term ? null : item.term
                      )
                    }
                  >
                    <div className="glossary-header">
                      <h4>{item.term}</h4>
                      <span className="toggle">
                        {expandedGlossary === item.term ? '−' : '+'}
                      </span>
                    </div>

                    <AnimatePresence>
                      {expandedGlossary === item.term && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="glossary-content"
                        >
                          <p className="definition">{item.definition}</p>
                          <p className="example">
                            <strong>Beispiel:</strong> {item.example}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'checklist' && (
            <motion.div key="checklist" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="tab-content">
              <div className="checklist-items">
                {CHECKLIST.map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} className="checklist-item">
                    <div className="checkbox">{idx + 1}</div>
                    <div className="checklist-text">
                      <p className="checklist-main">{item.item}</p>
                      <p className="checklist-desc">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'mistakes' && (
            <motion.div key="mistakes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="tab-content">
              <div className="mistakes-items">
                {COMMON_MISTAKES.map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="mistake-card">
                    <div className="mistake-section">
                      <h4>❌ Häufiger Fehler</h4>
                      <p>{item.mistake}</p>
                    </div>
                    <div className="correction-section">
                      <h4>✅ Richtig</h4>
                      <p>{item.correction}</p>
                    </div>
                    <div className="explanation-section">
                      <h4>💡 Erklärung</h4>
                      <p>{item.explanation}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
