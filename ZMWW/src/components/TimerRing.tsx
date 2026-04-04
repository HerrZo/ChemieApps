import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  seconds: number
  onExpire: () => void
  active: boolean
}

export function TimerRing({ seconds, onExpire, active }: Props) {
  const [timeLeft, setTimeLeft] = useState(seconds)
  const radius = 24
  const circumference = 2 * Math.PI * radius
  const progress = timeLeft / seconds
  const color = timeLeft > seconds * 0.5 ? '#22c55e' : timeLeft > seconds * 0.25 ? '#f97316' : '#ef4444'

  useEffect(() => { setTimeLeft(seconds) }, [seconds, active])

  useEffect(() => {
    if (!active) return
    if (timeLeft <= 0) { onExpire(); return }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(id)
  }, [timeLeft, active, onExpire])

  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="4" />
      <motion.circle
        cx="30" cy="30" r={radius}
        fill="none" stroke={color} strokeWidth="4"
        strokeDasharray={circumference}
        strokeLinecap="round"
        transform="rotate(-90 30 30)"
        animate={{ strokeDashoffset: circumference * (1 - progress) }}
        transition={{ duration: 0.5 }}
      />
      <text x="30" y="35" textAnchor="middle" fontSize="14" fontWeight="600" fill={color}>{timeLeft}</text>
    </svg>
  )
}
