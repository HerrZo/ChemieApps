import { motion } from 'framer-motion'

interface CoeffBoxProps {
  value: string | number
  active?: boolean
  animate?: boolean
  onClick?: () => void
}

export function CoeffBox({ value, active = false, animate = false, onClick }: CoeffBoxProps) {
  return (
    <motion.div
      className={`coeff-box ${active ? 'active' : ''} ${animate ? 'animate' : ''}`}
      onClick={onClick}
      animate={animate ? { x: [-6, 6, -6, 6, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      {value}
    </motion.div>
  )
}
