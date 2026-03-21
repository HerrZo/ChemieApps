import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import { molecules } from '@/data/molecules'
import type { Molecule } from '@/types'

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function RankingLab() {
  const [pool] = useState<Molecule[]>(() => shuffle(molecules).slice(0, 4))
  const [order, setOrder] = useState<Molecule[]>(() => shuffle(pool))
  const [checked, setChecked] = useState(false)

  const correctOrder = useMemo(() => [...pool].sort((a, b) => a.boilingPoint - b.boilingPoint), [pool])
  const isCorrect = useMemo(() => order.every((m, i) => m.id === correctOrder[i].id), [order, correctOrder])

  function move(from: number, to: number) {
    if (checked) return
    const next = [...order]
    const [item] = next.splice(from, 1)
    next.splice(to, 0, item)
    setOrder(next)
  }

  const chartData = correctOrder.map((m) => ({ name: m.formula, bp: m.boilingPoint }))

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Ordne die Moleküle nach <strong>steigendem Siedepunkt</strong> (links = kältester).
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {order.map((mol, i) => (
          <motion.div key={mol.id} layout className="bg-white border-2 border-gray-200 rounded-2xl p-3 text-center shadow-card select-none">
            <p className="text-lg">{mol.emoji}</p>
            <p className="font-semibold text-gray-700 text-sm">{mol.name}</p>
            <p className="text-xs text-gray-400 font-mono">{mol.formula}</p>
            <div className="flex gap-1 mt-2 justify-center">
              {i > 0 && <button onClick={() => move(i, i - 1)} className="text-xs bg-gray-100 hover:bg-chem-100 rounded px-1.5">←</button>}
              {i < order.length - 1 && <button onClick={() => move(i, i + 1)} className="text-xs bg-gray-100 hover:bg-chem-100 rounded px-1.5">→</button>}
            </div>
          </motion.div>
        ))}
      </div>
      <button onClick={() => setChecked(true)} className="w-full py-2.5 bg-chem-500 hover:bg-chem-600 text-white rounded-xl font-medium transition-colors">
        Überprüfen
      </button>
      <AnimatePresence>
        {checked && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={`rounded-2xl p-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
            <p className="font-semibold mb-3">{isCorrect ? 'Richtig!' : 'Nicht ganz – hier die richtige Reihenfolge:'}</p>
            {!isCorrect && <p className="text-sm text-gray-600 mb-3">{correctOrder.map((m) => m.name).join(' → ')}</p>}
            <ResponsiveContainer width="100%" height={140}>
              <BarChart data={chartData} margin={{ top: 4, right: 8, bottom: 4, left: 0 }}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} unit="°C" />
                <Tooltip formatter={(v: number) => [`${v}°C`, 'Siedepunkt']} />
                <Bar dataKey="bp" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.bp < 0 ? '#60a5fa' : '#f97316'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
