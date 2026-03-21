import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MatchingQuestion } from '@/types'

interface Props {
  question: MatchingQuestion
  answered: Array<{ left: string; right: string }> | null
  onAnswer: (pairs: Array<{ left: string; right: string }>) => void
}

export function MatchingQuestionComponent({ question, answered, onAnswer }: Props) {
  // Für Einfachheit und Performance ohne schwere Libs: Wir verwenden ein Click-To-Match System, 
  // das oft sogar nutzerfreundlicher auf Mobile ist als Drag&Drop zwischen zwei großen Listen.
  // Links: Feste Reihenfolge. Rechts: Buttons, die man anklickt, um sie einer linken Box zuzuordnen
  
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [matches, setMatches] = useState<Record<string, string>>({}) // leftId -> rightId
  
  const leftItems = question.pairs.map(p => ({ id: p.id, text: p.left }))
  
  // Mischen der rechten Optionen initial
  const [rightItems] = useState(() => {
    return question.pairs.map(p => ({ id: `r-${p.id}`, text: p.right })).sort(() => Math.random() - 0.5)
  })

  // Wenn alles fertig zugeordnet ist, oder answered existiert
  const isComplete = Object.keys(matches).length === leftItems.length

  const handleRightClick = (rightId: string) => {
    if (selectedLeft !== null) {
      setMatches(prev => ({
        ...prev,
        [selectedLeft]: rightId
      }))
      setSelectedLeft(null)
    }
  }

  const unassign = (leftId: string) => {
    if (answered) return
    setMatches(prev => {
      const copy = { ...prev }
      delete copy[leftId]
      return copy
    })
  }

  // Bereits benutzte rechts
  const usedRightIds = new Set(Object.values(matches))

  return (
    <div className="matching-question" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {answered ? (
        <div className="matching-pairs">
          {question.pairs.map((pair, idx) => {
            const userRightId = matches[pair.id]
            const userRightText = rightItems.find(r => r.id === userRightId)?.text || ''
            
            // Answered is passed as the pairs from question if correct, or user answers if wrong
            // For simplicity, we just look at what user assigned:
            const isCorrectMatch = userRightText === pair.right
            return (
              <div key={idx} className="pair-row" style={{ display: 'flex', justifyContent: 'space-between', padding: 10, background: isCorrectMatch ? '#ecfdf5' : '#fef2f2', border: \`2px solid \${isCorrectMatch ? '#34d399' : '#f87171'}\`, borderRadius: 8, marginBottom: 8 }}>
                <div className="pair-left" style={{ fontWeight: 600 }}>{pair.left}</div>
                <div className="pair-arrow">→</div>
                <div className="pair-right" style={{ color: isCorrectMatch ? '#059669' : '#dc2626' }}>{userRightText || '(leer)'}</div>
              </div>
            )
          })}
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-2">Wähle erst ein Molekül links, dann die passende Wechselwirkung rechts aus.</p>
          <div style={{ display: 'flex', gap: 16 }}>
            {/* Linke Seite */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {leftItems.map(left => {
                const isSelected = selectedLeft === left.id
                const assignedRightId = matches[left.id]
                const assignedRight = rightItems.find(r => r.id === assignedRightId)

                return (
                  <div 
                    key={left.id}
                    onClick={() => !assignedRight && setSelectedLeft(left.id)}
                    style={{
                      padding: 12, border: \`2px solid \${isSelected ? '#3b82f6' : '#e5e7eb'}\`, borderRadius: 12, 
                      cursor: assignedRight ? 'default' : 'pointer',
                      background: isSelected ? '#eff6ff' : 'white', boxShadow: isSelected ? '0 0 0 2px #bfdbfe' : 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ fontWeight: 600, marginBottom: assignedRight ? 8 : 0 }}>{left.text}</div>
                    {assignedRight && (
                      <div 
                        onClick={(e) => { e.stopPropagation(); unassign(left.id) }}
                        style={{ background: '#f3f4f6', padding: '6px 12px', borderRadius: 8, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
                      >
                        {assignedRight.text} <span style={{ color: '#ef4444', fontWeight: 'bold' }}>×</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Rechte Seite */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {rightItems.map(right => {
                if (usedRightIds.has(right.id)) return null // Ausblenden wenn zugeordnet
                
                return (
                  <motion.button
                    key={right.id}
                    onClick={() => handleRightClick(right.id)}
                    disabled={selectedLeft === null}
                    whileTap={selectedLeft !== null ? { scale: 0.95 } : {}}
                    style={{
                      padding: 12, border: '2px dashed #9ca3af', borderRadius: 12, background: 'white',
                      cursor: selectedLeft !== null ? 'pointer' : 'not-allowed', opacity: selectedLeft !== null ? 1 : 0.5,
                      textAlign: 'center', fontWeight: 500
                    }}
                  >
                    {right.text}
                  </motion.button>
                )
              })}
            </div>
          </div>
          
          <button 
            onClick={() => {
              // Format user answer as array of { left: string, right: string }
              const result = leftItems.map(left => {
                const rId = matches[left.id]
                return {
                  left: left.text,
                  right: rightItems.find(r => r.id === rId)?.text || ''
                }
              })
              onAnswer(result)
            }} 
            disabled={!isComplete} 
            className="btn-check w-full py-3 bg-chem-500 text-white rounded-xl font-medium transition hover:bg-chem-600 disabled:opacity-50"
          >
            Überprüfen
          </button>
        </>
      )}
    </div>
  )
}
