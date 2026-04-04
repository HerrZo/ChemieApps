import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { molecules, forceLabels } from '@/data/molecules'
import type { Difficulty, ForceType } from '@/types'
import { DifficultySelector } from './DifficultySelector'
import { TimerRing } from './TimerRing'

const FORCE_OPTIONS: ForceType[] = ['LDWW', 'DDWW', 'WB']
const TIMER_SECONDS = 30

export function QuizPanel() {
  const [difficulty, setDifficulty] = useState<Difficulty | 'alle'>('alle')
  const [timeModeEnabled, setTimeModeEnabled] = useState(false)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState<ForceType | null>(null)
  const [timerKey, setTimerKey] = useState(0)
  const [timeExpired, setTimeExpired] = useState(false)

  const pool = useMemo(
    () => difficulty === 'alle' ? molecules : molecules.filter((m) => m.difficulty === difficulty),
    [difficulty]
  )
  const shuffled = useMemo(() => [...pool].sort(() => Math.random() - 0.5), [pool])
  const current = shuffled[index % shuffled.length]

  function handleAnswer(force: ForceType) {
    if (answered || timeExpired) return
    setAnswered(force)
    if (force === current.force) setScore((s) => s + 1)
  }

  function handleExpire() {
    setTimeExpired(true)
    setAnswered(current.force)
  }

  function next() {
    setAnswered(null)
    setTimeExpired(false)
    setTimerKey((k) => k + 1)
    setIndex((i) => i + 1)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <DifficultySelector value={difficulty} onChange={setDifficulty} />
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={timeModeEnabled}
              onChange={(e) => { setTimeModeEnabled(e.target.checked); setTimerKey((k) => k + 1) }}
              className="rounded accent-chem-500"
            />
            Zeitmodus (30s)
          </label>
          {timeModeEnabled && (
            <TimerRing key={timerKey} seconds={TIMER_SECONDS} onExpire={handleExpire} active={!answered && !timeExpired} />
          )}
          <span className="bg-chem-100 text-chem-700 font-semibold px-3 py-1 rounded-xl text-sm">
            {score} Punkte
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id + index}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-2xl shadow-card p-6 space-y-4"
        >
          {timeExpired && <div className="text-sm font-medium text-red-500">Zeit abgelaufen!</div>}
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{current.name}</p>
            <p className="text-lg text-gray-500 font-mono">{current.formula}</p>
          </div>
          <p className="text-sm text-center text-gray-500">Welche Wechselwirkung dominiert?</p>
          <div className="grid grid-cols-3 gap-3">
            {FORCE_OPTIONS.map((force) => {
              const isCorrect = force === current.force
              const isChosen = force === answered
              let style = 'bg-gray-50 border-gray-200 text-gray-700 hover:border-chem-300'
              if (answered) {
                if (isCorrect) style = 'bg-green-50 border-green-400 text-green-700'
                else if (isChosen) style = 'bg-red-50 border-red-400 text-red-700'
              }
              return (
                <motion.button
                  key={force}
                  onClick={() => handleAnswer(force)}
                  animate={answered && isChosen && !isCorrect ? { x: [-6, 6, -6, 6, 0] } : {}}
                  transition={{ duration: 0.3 }}
                  whileTap={!answered ? { scale: 0.96 } : {}}
                  className={`border-2 rounded-xl py-2.5 px-2 text-sm font-medium transition-colors ${style}`}
                >
                  {isCorrect && answered ? `${current.emoji} ` : ''}{forceLabels[force]}
                </motion.button>
              )
            })}
          </div>
          {answered && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-gray-50 rounded-xl p-3 text-sm text-gray-600">
              {current.description}
            </motion.div>
          )}
          {answered && (
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={next} className="w-full py-2.5 bg-chem-500 hover:bg-chem-600 text-white rounded-xl font-medium transition-colors">
              Weiter
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
