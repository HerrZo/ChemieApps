import React, { useState, useEffect } from 'react'
import { InputQuestion } from '@/types'

interface Props {
  question: InputQuestion
  answered: string | null
  onAnswer: (value: string) => void
  showFeedback: boolean
}

export function InputQuestionComponent({ question, answered, onAnswer, showFeedback }: Props) {
  const [inputValue, setInputValue] = useState(answered || '')

  useEffect(() => {
    setInputValue(answered || '')
  }, [answered])

  return (
    <div className="input-question">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Deine Antwort eingeben (z.B. 36)..."
        disabled={showFeedback}
        className="answer-input"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputValue && !showFeedback) {
            onAnswer(inputValue)
          }
        }}
      />
      <button 
        onClick={() => onAnswer(inputValue)} 
        disabled={!inputValue || showFeedback} 
        className="btn-submit"
      >
        Prüfen
      </button>
    </div>
  )
}
