import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './learning-resources.css'

interface GlossaryTerm {
  term: string
  definition: string
  example: string
}

const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'London-Kräfte',
    definition: 'Schwache intermolekulare Kräfte, die durch spontane Elektronenfluktuationen entstehen. Erzeugen temporäre Dipole.',
    example: 'Ar, CH₄, I₂: Alle Stoffe haben London-Kräfte'
  },
  {
    term: 'Dipol-Dipol-Wechselwirkung',
    definition: 'Anziehung zwischen permanenten Dipolen polarer Moleküle. Stärker als London-Kräfte, schwächer als H-Brücken.',
    example: 'HCl, CO, NO haben Dipol-Dipol-WW'
  },
  {
    term: 'Wasserstoffbrückenbindung',
    definition: 'Spezialfall der Dipol-Dipol-WW. Tritt auf, wenn H an hochelektronegativen Atomen (N, O, F) gebunden ist.',
    example: 'H₂O, HF, NH₃ haben H-Brücken'
  },
  {
    term: 'Elektronegativität',
    definition: 'Maß für die Fähigkeit eines Atoms, Elektronendichte zu sich zu ziehen. Bestimmt Polarität von Bindungen.',
    example: 'F (4.0) > O (3.44) > N (3.04) > C (2.55)'
  },
  {
    term: 'Siedepunkt',
    definition: 'Temperatur, bei der ein Stoff siedet. Korreliert mit Stärke der Wechselwirkungen zwischen Molekülen.',
    example: 'H₂O (100°C) > HF (20°C) > H₂S (-60°C)'
  }
]

const CHECKLIST = [
  {
    item: 'Molekülart bestimmen',
    description: 'Polar oder unpolar? Alle Stoffe oder nur polare?'
  },
  {
    item: 'Elektronegativität vergleichen',
    description: 'Unterschied > 0,4 deutet auf polare Bindungen hin'
  },
  {
    item: 'H an N, O oder F?',
    description: 'Wenn ja: Wasserstoffbrücken möglich!'
  },
  {
    item: 'Art der Wechselwirkung identifizieren',
    description: 'London, Dipol-Dipol oder H-Brücken?'
  },
  {
    item: 'Stärke einschätzen',
    description: 'WB > DDWW > London-Kräfte'
  },
  {
    item: 'Siedepunkt vorhersagen',
    description: 'Stärkere WW → höherer Siedepunkt'
  }
]

const COMMON_MISTAKES = [
  {
    mistake: 'Alle Stoffe haben Wasserstoffbrücken',
    correction: 'Nur H-N, H-O, H-F können H-Brücken bilden',
    explanation: 'CH₄ hat z.B. nur London-Kräfte, HCl nur Dipol-Dipol'
  },
  {
    mistake: 'London-Kräfte sind unbedeutend',
    correction: 'Wichtig für unpolare Stoffe und Aggregate',
    explanation: 'Auch Edelgase und Alkane haben Siedepunkte wegen London-Kräften'
  },
  {
    mistake: 'Wasserstoffbrücken sind chemische Bindungen',
    correction: 'Es sind intermolekulare Kräfte!',
    explanation: 'Viel schwächer als kovalente Bindungen, aber stärker als andere Wechselwirkungen'
  },
  {
    mistake: 'H₂S hat höheren Siedepunkt als H₂O weil S größer ist',
    correction: 'H₂O hat höheren Siedepunkt wegen Wasserstoffbrücken',
    explanation: 'Größere Atome = stärkere London-Kräfte, aber H-Brücken sind noch stärker'
  },
  {
    mistake: 'Alle polaren Stoffe haben denselben Siedepunkt',
    correction: 'Verschiedene Stärken von Dipol-Dipol und H-Brücken',
    explanation: 'H₂O (100°C) > HF (20°C) > HCl (-85°C) trotz aller polar'
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
