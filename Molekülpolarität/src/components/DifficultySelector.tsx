import { motion } from 'framer-motion'

type Difficulty = 'leicht' | 'mittel' | 'schwer'

interface Props {
  current: Difficulty
  onChange: (d: Difficulty) => void
}

const options: { value: Difficulty; label: string }[] = [
  { value: 'leicht', label: '⭐ Leicht' },
  { value: 'mittel', label: '⭐⭐ Mittel' },
  { value: 'schwer', label: '⭐⭐⭐ Schwer' },
]

export function DifficultySelector({ current, onChange }: Props) {
  return (
    <div className="difficulty-selector">
      {options.map((opt) => (
        <motion.button
          key={opt.value}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(opt.value)}
          className={`difficulty-btn ${current === opt.value ? 'active' : ''}`}
        >
          {opt.label}
        </motion.button>
      ))}
    </div>
  )
}
