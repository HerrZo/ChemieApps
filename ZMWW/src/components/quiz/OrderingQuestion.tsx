import React, { useState, useEffect } from 'react'
import { Reorder, motion } from 'framer-motion'
import { OrderingQuestion } from '@/types'
import { molecules } from '@/data/molecules'

interface Props {
  question: OrderingQuestion
  answered: string[] | null
  onAnswer: (order: string[]) => void
}

export function OrderingQuestionComponent({ question, answered, onAnswer }: Props) {
  // Start with shuffled array
  const [items, setItems] = useState<string[]>(() => {
    return [...question.moleculeIds].sort(() => Math.random() - 0.5)
  })

  // If already answered, show the exact order that was answered
  useEffect(() => {
    if (answered) setItems(answered)
  }, [answered])

  return (
    <div className="ordering-question">
      <p className="ordering-hint">
        {answered ? 'Die Reihenfolge der Moleküle:' : 'Ziehe die Elemente in die richtige Reihenfolge (Drag & Drop):'}
      </p>
      
      <Reorder.Group axis="y" values={items} onReorder={setItems} className="molecule-list" style={{ listStyle: 'none', padding: 0 }}>
        {items.map((molId, idx) => {
          const mol = molecules.find((m) => m.id === molId)
          return (
            <Reorder.Item 
              key={molId} 
              value={molId} 
              className="molecule-item" 
              style={{ cursor: answered ? 'default' : 'grab', background: 'white', border: '2px solid #e5e7eb', marginBottom: 8, padding: 12, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12 }}
              dragListener={!answered}
            >
              <div style={{ fontWeight: 'bold', width: '20px', color: '#9ca3af' }}>{idx + 1}.</div>
              <div style={{ flex: 1, fontWeight: 600 }}>{mol?.name}</div>
              <div style={{ fontFamily: 'monospace', color: '#6b7280' }}>{mol?.formula}</div>
              {!answered && <div style={{ opacity: 0.3 }}>☰</div>}
            </Reorder.Item>
          )
        })}
      </Reorder.Group>
      
      {answered === null && (
        <button onClick={() => onAnswer(items)} className="btn-check mt-4 w-full py-3 bg-chem-500 text-white rounded-xl font-medium transition hover:bg-chem-600">
          Reihenfolge Prüfen
        </button>
      )}
    </div>
  )
}
