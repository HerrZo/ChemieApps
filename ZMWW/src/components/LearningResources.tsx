import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './learning-resources.css'
import { GLOSSARY, CHECKLIST, COMMON_MISTAKES } from '@/data/learning'

type TabType = 'glossary' | 'checklist' | 'mistakes'

export function LearningResources() {
  const [activeTab, setActiveTab] = useState<TabType>('glossary')
  const [searchTerm, setSearchTerm] = useState('')
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [expandedMistake, setExpandedMistake] = useState<string | null>(null)

  const filteredGlossary = React.useMemo(() => {
    return GLOSSARY.filter(
      (term) =>
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

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
