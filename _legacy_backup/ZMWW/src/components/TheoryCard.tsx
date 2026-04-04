import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TheoryItem {
  title: string
  emoji: string
  color: string
  summary: string
  detail: string
  example: string
}

const THEORY: TheoryItem[] = [
  {
    title: 'London-Kräfte (LDWW)', emoji: '☁️', color: 'blue',
    summary: 'Wirken zwischen ALLEN Molekülen, auch unpolaren.',
    detail: 'Entstehen durch kurzzeitige Ladungsverschiebungen (Dipole). Je größer das Molekül (mehr Elektronen, längere Kette), desto stärker die London-Kräfte und desto höher der Siedepunkt.',
    example: 'Butan (−0,5°C) siedet höher als Methan (−162°C) – gleiche Klasse, aber längere Kette.',
  },
  {
    title: 'Dipol-Dipol-WW (DDWW)', emoji: '🧲', color: 'purple',
    summary: 'Wirken zwischen polaren Molekülen zusätzlich zu London.',
    detail: 'Permanente Dipole ziehen sich gegenseitig an. Voraussetzung: Das Molekül ist insgesamt polar (Ladungsschwerpunkte fallen auseinander).',
    example: 'HCl (−85°C) siedet höher als H₂ (−253°C) – trotz ähnlicher Größe wegen permanentem Dipol.',
  },
  {
    title: 'Wasserstoffbrücken (WB)', emoji: '💧', color: 'orange',
    summary: 'Stärkste intermolekulare Kraft. Nur N–H, O–H, F–H.',
    detail: 'H ist kovalent an ein sehr elektronegatives Atom (N, O, F) gebunden. Das H ist dann stark δ+ und wird vom freien Elektronenpaar des Nachbarmoleküls angezogen.',
    example: 'Wasser (100°C) siedet weit höher als H₂S (−60°C) – Wasserstoffbrücken vs. nur DDWW.',
  },
]

const colorMap: Record<string, string> = {
  blue:   'border-blue-200 bg-blue-50',
  purple: 'border-purple-200 bg-purple-50',
  orange: 'border-chem-200 bg-chem-50',
}

export function TheoryCard() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {THEORY.map((item, i) => (
        <div key={i} className={`border-2 rounded-2xl overflow-hidden ${colorMap[item.color]}`}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-500">{item.summary}</p>
              </div>
            </div>
            <motion.span animate={{ rotate: open === i ? 180 : 0 }} className="text-gray-400">▼</motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-sm text-gray-700">{item.detail}</p>
                  <p className="text-sm text-gray-500 italic">{item.example}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
