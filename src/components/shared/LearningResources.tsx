import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './learning-resources.css'

/**
 * GlossaryTerm Interface
 * Data shape representing words, definitions, and inter-connected terms 
 * across the entire ChemieApps ecosystem.
 */
interface GlossaryTerm {
  term: string
  definition: string
  example?: string
  relatedTerms?: string[]
}

/**
 * ChecklistItem Interface
 * Defines self-assessment milestones for educational progression.
 */
interface ChecklistItem {
  id: string
  text: string
  category: string
}

/**
 * CommonMistake Interface
 * Used to explicitly break down common student misconceptions 
 * and render a structured 'Correction' UI.
 */
interface CommonMistake {
  id: string
  title: string
  wrongExplanation: string
  correct: string
  why: string
}

const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'London-Dispersionskräfte',
    definition: 'Schwache Van-der-Waals-Kräfte zwischen allen Molekülen, auch unpolaren. Entstehen durch fluktuierende Dipolmomente.',
    example: 'Alkane (CH₄, C₂H₆) halten zusammen durch London-Kräfte, obwohl sie unpolar sind.',
    relatedTerms: ['Van-der-Waals-Kräfte', 'Dipol']
  },
  {
    term: 'Dipol-Dipol-Wechselwirkung',
    definition: 'Anziehung zwischen permanenten Dipolen polarer Moleküle. Der positive Pol des einen Moleküls zieht den negativen Pol des anderen an.',
    example: 'HCl und HCl-Moleküle orientieren sich so, dass H (δ+) von Cl (δ-) angezogen wird.',
    relatedTerms: ['Polarität', 'Elektronegativität']
  },
  {
    term: 'Wasserstoffbrückenbindung',
    definition: 'Besondere starke Dipol-Dipol-Wechselwirkung zwischen H an N, O oder F und dem Elektronenpaar dieser Atome.',
    example: 'Wasser (H₂O) bildet starke H-Brücken → hoher Siedepunkt (100°C)',
    relatedTerms: ['Dipol-Dipol', 'Elektronegativität']
  },
  {
    term: 'Elektronegativität',
    definition: 'Maß für die Fähigkeit eines Atoms, Elektronen in einer chemischen Bindung anzuziehen. Höhere Elektronegativität = stärkeres Ziehen.',
    example: 'O (3.44) > Cl (3.16) > H (2.20). Deshalb ist H-O polarer als H-Cl.',
    relatedTerms: ['Polarität', 'Dipol']
  },
  {
    term: 'Siedepunkt',
    definition: 'Temperatur, bei der Dampfdruck eines Stoffs gleich dem Umgebungsdruck wird. Höhere Wechselwirkungen = höherer Siedepunkt.',
    example: 'Methan (-162°C) < Ethan (-88°C) < Butan (-0.5°C) wegen stärkerer London-Kräfte.',
    relatedTerms: ['London-Dispersionskräfte', 'Wechselwirkungen']
  }
]

const CHECKLIST: ChecklistItem[] = [
  {
    id: 'check-1',
    text: 'Ich kann entscheiden, ob ein Molekül polar oder unpolar ist',
    category: 'Grundlagen'
  },
  {
    id: 'check-2',
    text: 'Ich kenne die Elektronegativität der Atome H, C, N, O, Cl',
    category: 'Grundlagen'
  },
  {
    id: 'check-3',
    text: 'Ich kann London-Kräfte, Dipol-Dipol und H-Brücken unterscheiden',
    category: 'Wechselwirkungen'
  },
  {
    id: 'check-4',
    text: 'Ich kann vorhersagen, welche Wechselwirkungen in einer Verbindung dominieren',
    category: 'Wechselwirkungen'
  },
  {
    id: 'check-5',
    text: 'Ich verstehe warum der Siedepunkt mit Kettenlänge steigt',
    category: 'Anwendung'
  },
  {
    id: 'check-6',
    text: 'Ich kann Siedepunkte ähnlicher Moleküle vorhersagen und begründen',
    category: 'Anwendung'
  },
  {
    id: 'check-7',
    text: 'Ich kenne mindestens 3 Beispiele für H-Brückenbindungen',
    category: 'Anwendung'
  }
]

const COMMON_MISTAKES: CommonMistake[] = [
  {
    id: 'mistake-1',
    title: 'Alle Alkane sind unpolar → alle haben schwache Wechselwirkungen',
    wrongExplanation: 'Zwar sind Alkane unpolar (C und H haben ähnliche Elektronegativität), aber größere Alkane haben größere Oberflächen und daher STÄRKERE London-Kräfte.',
    correct: 'London-Kräfte hängen von der Molekülgröße ab, nicht von der Polarität.',
    why: 'Größere Moleküle haben mehr Elektronen → mehr Dipolfluktuationen → stärkere London-Kräfte.'
  },
  {
    id: 'mistake-2',
    title: 'Wasserstoffbrücken sind Bindungen (wie kovalent)',
    wrongExplanation: 'H-Brücken sind Wechselwirkungen zwischen Molekülen, NICHT chemische Bindungen innerhalb eines Moleküls.',
    correct: 'H-Brücken sind zwischen-molekular. Innerhalb eines Moleküls sind O-H, N-H, etc. kovalent gebunden.',
    why: 'H-Brücken sind schwächer (~10-40 kJ/mol) als kovalente Bindungen (~200-600 kJ/mol) und können leicht brechen.'
  },
  {
    id: 'mistake-3',
    title: 'Je mehr H-Atome, desto stärker die H-Brücken',
    wrongExplanation: 'H-Brücken entstehen nur bei H an SPEZIELLEN Atomen (N, O, F). Die Anzahl der H ist irrelevant.',
    correct: 'Nur H an N, O oder F bilden H-Brücken. C-H bildet KEINE H-Brücken.',
    why: 'Diese Atome haben hohe Elektronegativität UND Elektronenpaare zur Akzeptanz einer H-Brücke.'
  },
  {
    id: 'mistake-4',
    title: 'Wasser hat den höchsten Siedepunkt wegen seiner Größe',
    wrongExplanation: 'Wasser ist aber ein sehr kleines Molekül! Der hohe Siedepunkt (100°C) kommt von den starken H-Brücken, nicht von Größe.',
    correct: 'H₂O hat extrem hohen Sp trotz geringer Molmasse → Grund: starke H-Brücken',
    why: 'Vergleich: H₂O (18 g/mol, Sp=100°C) vs. Oktan (114 g/mol, Sp=126°C) → H-Brücken beeinflussen deutlich stärker als Größe'
  },
  {
    id: 'mistake-5',
    title: 'H-Brückenbindung = kovalente Bindung mit H',
    wrongExplanation: 'Verwechslung ist häufig! In Wasser sind O-H KOVALENT. Die H-Brücken sind zwischen verschiedenen H₂O-Molekülen.',
    correct: 'INNERHALB H₂O: O-H kovalent. ZWISCHEN H₂O-Molekülen: H-Brückenbindung (intermolekular)',
    why: 'Kovalente Bindungen halten Atome innerhalb eines Moleküls zusammen. H-Brücken halten Moleküle zusammen.'
  }
]

type TabType = 'glossary' | 'checklist' | 'mistakes'

/**
 * LearningResources Component
 * Shared global widget providing searchable glossaries, interactive self-assessment 
 * checklists, and common mistake breakdowns. 
 * Designed to be dropped into any App routing system.
 * 
 * @returns {JSX.Element} Interactive tabbed view of resources.
 */
export function LearningResources() {
  const [activeTab, setActiveTab] = useState<TabType>('glossary')
  const [searchTerm, setSearchTerm] = useState('')
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [expandedMistake, setExpandedMistake] = useState<string | null>(null)

  const filteredGlossary = GLOSSARY.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleChecklistToggle = (id: string) => {
    const newCompleted = new Set(completed)
    if (newCompleted.has(id)) {
      newCompleted.delete(id)
    } else {
      newCompleted.add(id)
    }
    setCompleted(newCompleted)
  }

  const progress = (completed.size / CHECKLIST.length) * 100

  return (
    <div className="learning-resources">
      {/* Tab Navigation */}
      <div className="resource-tabs">
        <button
          className={`tab-button ${activeTab === 'glossary' ? 'active' : ''}`}
          onClick={() => setActiveTab('glossary')}
        >
          📚 Glossar
        </button>
        <button
          className={`tab-button ${activeTab === 'checklist' ? 'active' : ''}`}
          onClick={() => setActiveTab('checklist')}
        >
          ✓ Checkliste
        </button>
        <button
          className={`tab-button ${activeTab === 'mistakes' ? 'active' : ''}`}
          onClick={() => setActiveTab('mistakes')}
        >
          ⚠️ Häufige Fehler
        </button>
      </div>

      {/* GLOSSARY Tab */}
      <AnimatePresence mode="wait">
        {activeTab === 'glossary' && (
          <motion.div
            key="glossary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="tab-content"
          >
            <div className="glossary-search">
              <input
                type="text"
                placeholder="Begriff durchsuchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="glossary-terms">
              {filteredGlossary.map((term, idx) => (
                <motion.div
                  key={term.term}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glossary-card"
                >
                  <h3 className="term-title">{term.term}</h3>
                  <p className="term-definition">{term.definition}</p>
                  {term.example && (
                    <div className="term-example">
                      <strong>Beispiel:</strong> {term.example}
                    </div>
                  )}
                  {term.relatedTerms && term.relatedTerms.length > 0 && (
                    <div className="related-terms">
                      <strong>Verwandte Begriffe:</strong>
                      <div className="tags">
                        {term.relatedTerms.map((relatedTerm) => (
                          <span
                            key={relatedTerm}
                            className="tag"
                            onClick={() => setSearchTerm(relatedTerm)}
                          >
                            {relatedTerm}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CHECKLIST Tab */}
      <AnimatePresence mode="wait">
        {activeTab === 'checklist' && (
          <motion.div
            key="checklist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="tab-content"
          >
            <div className="checklist-progress">
              <h3>Dein Fortschritt</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
              <p className="progress-text">
                {completed.size} von {CHECKLIST.length} Themen verstanden ({Math.round(progress)}%)
              </p>
            </div>

            {/* Group checklist by category */}
            {Array.from(new Set(CHECKLIST.map((item) => item.category))).map((category) => (
              <div key={category} className="checklist-category">
                <h4 className="category-title">{category}</h4>
                <div className="checklist-items">
                  {CHECKLIST.filter((item) => item.category === category).map((item) => (
                    <label key={item.id} className="checklist-item">
                      <input
                        type="checkbox"
                        checked={completed.has(item.id)}
                        onChange={() => handleChecklistToggle(item.id)}
                        className="checklist-checkbox"
                      />
                      <span className={completed.has(item.id) ? 'checked' : ''}>{item.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMMON MISTAKES Tab */}
      <AnimatePresence mode="wait">
        {activeTab === 'mistakes' && (
          <motion.div
            key="mistakes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="tab-content"
          >
            <div className="mistakes-list">
              {COMMON_MISTAKES.map((mistake, idx) => (
                <motion.div
                  key={mistake.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="mistake-card"
                >
                  <button
                    className="mistake-header"
                    onClick={() =>
                      setExpandedMistake(expandedMistake === mistake.id ? null : mistake.id)
                    }
                  >
                    <span className="mistake-title">⚠️ {mistake.title}</span>
                    <span className={`toggle-arrow ${expandedMistake === mistake.id ? 'open' : ''}`}>
                      ▼
                    </span>
                  </button>

                  <AnimatePresence>
                    {expandedMistake === mistake.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mistake-content"
                      >
                        <div className="mistake-section wrong">
                          <h4>❌ Falsches Verständnis:</h4>
                          <p>{mistake.wrongExplanation}</p>
                        </div>

                        <div className="mistake-section correct">
                          <h4>✓ Richtig:</h4>
                          <p>{mistake.correct}</p>
                        </div>

                        <div className="mistake-section why">
                          <h4>💡 Warum:</h4>
                          <p>{mistake.why}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
