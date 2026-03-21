import { motion } from 'framer-motion'

interface Props {
  seconds: number
}

export function TimerRing({ seconds }: Props) {
  const radius = 24
  const circumference = 2 * Math.PI * radius
  const progress = seconds / 30
  const color = seconds > 15 ? '#22c55e' : seconds > 8 ? '#f97316' : '#ef4444'

  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="4" />
      <motion.circle
        cx="30"
        cy="30"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeLinecap="round"
        transform="rotate(-90 30 30)"
        animate={{ strokeDashoffset: circumference * (1 - progress) }}
        transition={{ duration: 0.5 }}
      />
      <text x="30" y="35" textAnchor="middle" fontSize="14" fontWeight="600" fill={color}>
        {seconds}
      </text>
    </svg>
  )
}
