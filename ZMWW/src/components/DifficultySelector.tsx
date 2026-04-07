import { memo } from 'react'
import { motion } from 'framer-motion'
import type { Difficulty } from '@/types'

interface Props {
  value: Difficulty | 'alle'
  onChange: (d: Difficulty | 'alle') => void
}

const options: { value: Difficulty | 'alle'; label: string }[] = [
  { value: 'alle',   label: 'Alle' },
  { value: 'leicht', label: '⭐ Leicht' },
  { value: 'mittel', label: '⭐⭐ Mittel' },
  { value: 'schwer', label: '⭐⭐⭐ Schwer' },
]

export const DifficultySelector = memo(function DifficultySelector({ value, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => (
        <motion.button
          key={opt.value}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${
            value === opt.value
              ? 'bg-chem-500 text-white shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-chem-300'
          }`}
        >
          {opt.label}
        </motion.button>
      ))}
    </div>
  )
})
