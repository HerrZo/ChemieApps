import React from 'react'
import { motion } from 'framer-motion'
import { MCQuestion } from '@/types'

interface Props {
  question: MCQuestion
  answered: number | null
  onAnswer: (idx: number) => void
}

export function MultipleChoiceQuestion({ question, answered, onAnswer }: Props) {
  return (
    <div className="mc-options">
      {question.options.map((option, idx) => {
        const isChosen = answered === idx
        const isCorrectOption = idx === question.correctAnswer
        let state = 'default'

        if (answered !== null) {
          if (isCorrectOption) state = 'correct'
          else if (isChosen) state = 'wrong'
          else state = 'disabled'
        }

        return (
          <motion.button
            key={idx}
            className={`option-button ${state}`}
            onClick={() => onAnswer(idx)}
            disabled={answered !== null}
            whileTap={answered === null ? { scale: 0.98 } : {}}
            animate={isChosen && state === 'wrong' ? { x: [-6, 6, -6, 6, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
            <span className="option-text">{option.label}</span>
            {state === 'correct' && <span className="option-check">✓</span>}
            {state === 'wrong' && <span className="option-check">✗</span>}
          </motion.button>
        )
      })}
    </div>
  )
}
