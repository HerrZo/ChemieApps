import { useState, useEffect, useMemo, Fragment } from 'react'

const ATOM_MASS: Record<string, number> = { H: 1, C: 12, N: 14, O: 16, F: 19, S: 32, Cl: 35.5 }
const ATOM_COLORS: Record<string, string> = { H: '#e2e8f0', C: '#334155', N: '#3b82f6', O: '#ef4444', F: '#22c55e', S: '#fbbf24', Cl: '#10b981' }

interface ReactionSubstance { f: string; n: number }
interface Reaction { id: number; reactants: ReactionSubstance[]; products: ReactionSubstance[]; info: string }

const parseFormula = (formula: string): Record<string, number> => {
  const regex = /([A-Z][a-z]?)(\d*)/g
  const comp: Record<string, number> = {}
  let match
  while ((match = regex.exec(formula)) !== null) {
    comp[match[1]] = (comp[match[1]] || 0) + (match[2] ? parseInt(match[2]) : 1)
  }
  return comp
}

const calculateMolarMass = (formula: string) =>
  Object.entries(parseFormula(formula)).reduce((acc, [el, count]) => acc + (ATOM_MASS[el] || 0) * count, 0)

const reactions: Reaction[] = [
  { id: 1, reactants: [{ f: 'H2', n: 1 }, { f: 'Cl2', n: 1 }], products: [{ f: 'HCl', n: 2 }], info: 'Chlorwasserstoff-Bildung' },
  { id: 2, reactants: [{ f: 'H2', n: 2 }, { f: 'O2', n: 1 }], products: [{ f: 'H2O', n: 2 }], info: 'Wasserbildung' },
  { id: 3, reactants: [{ f: 'N2', n: 1 }, { f: 'H2', n: 3 }], products: [{ f: 'NH3', n: 2 }], info: 'Ammoniaksynthese' },
  { id: 4, reactants: [{ f: 'CO', n: 2 }, { f: 'O2', n: 1 }], products: [{ f: 'CO2', n: 2 }], info: 'CO-Verbrennung' },
  { id: 5, reactants: [{ f: 'CH4', n: 1 }, { f: 'O2', n: 2 }], products: [{ f: 'CO2', n: 1 }, { f: 'H2O', n: 2 }], info: 'Methan-Verbrennung' },
  { id: 6, reactants: [{ f: 'C2H4', n: 1 }, { f: 'O2', n: 3 }], products: [{ f: 'CO2', n: 2 }, { f: 'H2O', n: 2 }], info: 'Ethen-Verbrennung' },
  { id: 7, reactants: [{ f: 'H2', n: 1 }, { f: 'F2', n: 1 }], products: [{ f: 'HF', n: 2 }], info: 'Fluorwasserstoff' },
  { id: 8, reactants: [{ f: 'C3H8', n: 1 }, { f: 'O2', n: 5 }], products: [{ f: 'CO2', n: 3 }, { f: 'H2O', n: 4 }], info: 'Propan-Verbrennung' },
]

const ArrowIcon = () => (
  <svg className="w-8 h-8 text-chem-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
)

const FormulaText = ({ text }: { text: string }) => (
  <span className="font-mono font-bold">
    {text.split(/(\d+)/).map((part, i) =>
      /^\d+$/.test(part) ? <sub key={i} className="text-xs">{part}</sub> : part
    )}
  </span>
)

const MoleculeSVG = ({ formula, size = 50 }: { formula: string; size?: number }) => {
  const comp = useMemo(() => parseFormula(formula), [formula])
  const atoms: string[] = []
  Object.entries(comp).forEach(([el, count]) => {
    for (let i = 0; i < count; i++) atoms.push(el)
  })

  const getPositions = () => {
    if (atoms.length === 1) return [{ x: 50, y: 50, el: atoms[0] }]
    if (atoms.length === 2) return [{ x: 35, y: 50, el: atoms[0] }, { x: 65, y: 50, el: atoms[1] }]
    const positions = [{ x: 50, y: 50, el: atoms[0] }]
    const radius = 25
    for (let i = 1; i < atoms.length; i++) {
      const angle = ((i - 1) / (atoms.length - 1)) * Math.PI * 2 - Math.PI / 2
      positions.push({ x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle), el: atoms[i] })
    }
    return positions
  }

  const positions = getPositions()

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {positions.length > 1 && positions.slice(1).map((atom, i) => (
        <line key={i} x1={positions[0].x} y1={positions[0].y} x2={atom.x} y2={atom.y} stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      ))}
      {positions.map((atom, i) => (
        <g key={i}>
          <circle cx={atom.x} cy={atom.y} r={12} fill={ATOM_COLORS[atom.el] || '#64748b'} stroke="#1e293b" strokeWidth="1.5" />
          <text x={atom.x} y={atom.y + 4} textAnchor="middle" fontSize="10" fontWeight="bold" fill={['H', 'C', 'S'].includes(atom.el) ? '#1e293b' : '#fff'}>{atom.el}</text>
        </g>
      ))}
    </svg>
  )
}

const ParticleBox = ({ formula }: { formula: string }) => (
  <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-chem-200 bg-white rounded-lg flex items-center justify-center shadow-sm">
    <MoleculeSVG formula={formula} size={40} />
  </div>
)

const SubstanceBlock = ({
  formula, coef, setCoef, showMass, isInteractive = true,
}: {
  formula: string; coef: number; setCoef?: (v: number) => void; showMass: boolean; isInteractive?: boolean
}) => {
  const singleMass = calculateMolarMass(formula)
  const totalMass = (singleMass * coef).toFixed(1)

  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-chem-100">
      <div className="text-lg font-bold font-mono"><FormulaText text={formula} /></div>
      <div className="flex flex-wrap justify-center gap-1 min-h-[60px]">
        {Array.from({ length: coef }, (_, i) => <ParticleBox key={i} formula={formula} />)}
      </div>
      {isInteractive ? (
        <div className="w-full max-w-[120px] mt-2">
          <input type="range" min="1" max="6" value={coef} onChange={(e) => setCoef?.(parseInt(e.target.value))} className="w-full" />
          <div className="text-center text-xs font-medium text-chem-700 mt-1">{coef} {coef === 1 ? 'Volumen' : 'Volumina'}</div>
        </div>
      ) : (
        <div className="text-xs font-bold text-chem-800 bg-chem-100 px-3 py-1 rounded-full">{coef} {coef === 1 ? 'Volumen' : 'Volumina'}</div>
      )}
      {showMass && (
        <div className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border">{coef} × {singleMass}u = <span className="font-bold">{totalMass} u</span></div>
      )}
    </div>
  )
}

const IntroView = ({ onStart }: { onStart: () => void }) => (
  <div className="space-y-6 animate-fade-in text-center py-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-chem-700">Das Gesetz von Avogadro</h2>
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-chem-100 text-left">
      <p className="text-slate-700 mb-4">Im Jahr 1811 stellte Amedeo Avogadro eine wichtige Hypothese auf:</p>
      <blockquote className="my-4 p-4 bg-chem-50 border-l-4 border-chem-500 italic text-slate-700 rounded-r-lg">
        "Gleiche Volumina aller Gase enthalten bei gleicher Temperatur und gleichem Druck die gleiche Anzahl an Teilchen."
      </blockquote>
      <p className="text-slate-600 text-sm">
        Das bedeutet: Wenn wir wissen, wie viele Teilchen reagieren, wissen wir auch, in welchem Volumenverhältnis die Gase zueinander stehen.
        <br /><br />
        <strong>1 Molekül ≙ 1 Box (Volumeneinheit)</strong>
      </p>
    </div>
    <button onClick={onStart} className="px-8 py-3 bg-chem-500 hover:bg-chem-600 text-white text-lg font-bold rounded-xl shadow-lg transition transform hover:scale-105">
      Starten →
    </button>
  </div>
)

const LearnView = () => {
  const [scale, setScale] = useState(1)
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-chem-100 mb-6">
        <h3 className="text-xl font-bold text-chem-700 mb-4">📖 Beispiel: Chlorwasserstoff-Bildung</h3>
        <p className="text-slate-600 mb-6 text-sm">Beobachte, wie sich das Volumenverhältnis ändert, wenn wir mehr Teilchen reagieren lassen.</p>
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Reaktions-Umsatz: {scale}x</label>
          <input type="range" min="1" max="4" value={scale} onChange={(e) => setScale(parseInt(e.target.value))} className="w-full max-w-md" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-slate-50 p-6 rounded-2xl">
          <div className="flex gap-3">
            <SubstanceBlock formula="H2" coef={scale} showMass={false} isInteractive={false} />
            <div className="self-center text-2xl text-slate-300">+</div>
            <SubstanceBlock formula="Cl2" coef={scale} showMass={false} isInteractive={false} />
          </div>
          <div className="self-center transform rotate-90 md:rotate-0"><ArrowIcon /></div>
          <SubstanceBlock formula="HCl" coef={2 * scale} showMass={false} isInteractive={false} />
        </div>
        <div className="mt-6 text-center text-slate-700 bg-chem-50 p-3 rounded-lg border border-chem-100">
          Verhältnis: <span className="font-bold text-chem-700">{scale}</span> : <span className="font-bold text-chem-700">{scale}</span> → <span className="font-bold text-chem-700">{2 * scale}</span>
        </div>
      </div>
    </div>
  )
}

const PracticeView = ({ reaction, onNext, setScore }: { reaction: Reaction; onNext: () => void; score: number; setScore: React.Dispatch<React.SetStateAction<number>> }) => {
  const [coefs, setCoefs] = useState<Record<string, number>>({})
  const [status, setStatus] = useState<'correct' | 'wrong' | null>(null)
  const [showMass, setShowMass] = useState(false)
  const [errorDetails, setErrorDetails] = useState<string[]>([])

  useEffect(() => {
    const init: Record<string, number> = {}
    reaction.reactants.forEach(r => { init[r.f] = 1 })
    reaction.products.forEach(p => { init[p.f] = 1 })
    setCoefs(init)
    setStatus(null)
    setErrorDetails([])
  }, [reaction])

  const updateCoef = (formula: string, val: number) => {
    setCoefs(prev => ({ ...prev, [formula]: val }))
    setStatus(null)
    setErrorDetails([])
  }

  const checkAnswer = () => {
    const wrong: string[] = []
    reaction.reactants.forEach(r => {
      if (coefs[r.f] !== r.n) wrong.push(`${r.f}: erwartet ${r.n}, eingestellt ${coefs[r.f] || 1}`)
    })
    reaction.products.forEach(p => {
      if (coefs[p.f] !== p.n) wrong.push(`${p.f}: erwartet ${p.n}, eingestellt ${coefs[p.f] || 1}`)
    })
    if (wrong.length === 0) {
      setStatus('correct')
      setScore(prev => {
        const next = prev + 1
        try { localStorage.setItem('gasreaktionenScore', String(next)) } catch { /* noop */ }
        return next
      })
    } else {
      setStatus('wrong')
      setErrorDetails(wrong)
    }
  }

  return (
    <div className="animate-fade-in pb-8">
      <div className="flex justify-between items-center mb-6 bg-chem-50 p-3 rounded-lg">
        <span className="text-chem-800 font-bold text-sm">Aufgabe {reaction.id} von {reactions.length}</span>
        <span className="text-xs text-slate-500 italic">{reaction.info}</span>
      </div>
      <div className="flex justify-end mb-4">
        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
          <input type="checkbox" checked={showMass} onChange={e => setShowMass(e.target.checked)} className="w-4 h-4 text-chem-500 rounded" aria-label="Massenverhältnisse anzeigen" />
          Massenverhältnisse anzeigen
        </label>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-8 mb-8" role="group" aria-label="Reaktionsgleichung">
        <div className="flex flex-wrap justify-center gap-3">
          {reaction.reactants.map((r, idx) => (
            <Fragment key={r.f}>
              <SubstanceBlock formula={r.f} coef={coefs[r.f] || 1} setCoef={(v) => updateCoef(r.f, v)} showMass={showMass} />
              {idx < reaction.reactants.length - 1 && <div className="self-center text-2xl text-slate-300" aria-hidden="true">+</div>}
            </Fragment>
          ))}
        </div>
        <div className="self-center transform rotate-90 xl:rotate-0 py-2" aria-hidden="true"><ArrowIcon /></div>
        <div className="flex flex-wrap justify-center gap-3">
          {reaction.products.map((p, idx) => (
            <Fragment key={p.f}>
              <SubstanceBlock formula={p.f} coef={coefs[p.f] || 1} setCoef={(v) => updateCoef(p.f, v)} showMass={showMass} />
              {idx < reaction.products.length - 1 && <div className="self-center text-2xl text-slate-300" aria-hidden="true">+</div>}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        {status === 'wrong' && (
          <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm border border-red-100 w-full max-w-lg" role="alert" aria-live="assertive">
            <p className="font-bold mb-1">Folgende Stoffe stimmen noch nicht:</p>
            <ul className="list-disc list-inside space-y-0.5">
              {errorDetails.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        )}
        {status === 'correct' && (
          <div className="bg-green-50 text-green-700 px-6 py-3 rounded-lg flex items-center gap-2 font-bold border border-green-100" role="status" aria-live="polite">
            <CheckIcon /> Richtig! Das Volumenverhältnis stimmt.
          </div>
        )}
        {status !== 'correct' ? (
          <button onClick={checkAnswer} aria-label="Antwort prüfen" className="px-8 py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl shadow-md transition">
            Prüfen
          </button>
        ) : (
          <button onClick={onNext} aria-label="Zur nächsten Aufgabe" className="px-8 py-3 bg-chem-500 hover:bg-chem-600 text-white font-bold rounded-xl shadow-md transition">
            Nächste Aufgabe →
          </button>
        )}
      </div>
    </div>
  )
}

const FinishScreen = ({ onRestart }: { onRestart: () => void }) => (
  <div className="text-center py-12 animate-fade-in">
    <div className="inline-block p-4 bg-green-100 rounded-full text-green-600 mb-6">
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
    </div>
    <h2 className="text-3xl font-bold text-slate-800 mb-4">Großartig!</h2>
    <p className="text-slate-600 mb-8">Du hast alle Reaktionsgleichungen erfolgreich ausgeglichen.</p>
    <button onClick={onRestart} className="px-6 py-3 bg-chem-500 text-white rounded-xl hover:bg-chem-600 font-bold transition">
      Neustarten
    </button>
  </div>
)

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('chemDarkMode') === 'true')
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('chemDarkMode', String(darkMode))
  }, [darkMode])

  const [view, setView] = useState<'intro' | 'learn' | 'practice' | 'finish'>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(() => {
    try { return parseInt(localStorage.getItem('gasreaktionenScore') || '0', 10) } catch { return 0 }
  })

  const handleNext = () => {
    if (currentIndex < reactions.length - 1) {
      setCurrentIndex(i => i + 1)
    } else {
      setView('finish')
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setScore(0)
    try { localStorage.removeItem('gasreaktionenScore') } catch { /* noop */ }
    setView('intro')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow max-w-5xl mx-auto w-full p-4 sm:p-6">
        <header className="mb-6">
          <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 50 }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
              className="w-10 h-10 rounded-full bg-chem-100 dark:bg-chem-900 text-chem-700 dark:text-chem-300 border border-chem-200 dark:border-chem-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <a href="../index.html" className="inline-block mb-4 text-sm text-chem-600 hover:text-chem-700 transition">
            ← Zurück zur Übersicht
          </a>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Volumen & Masse</h1>
              <p className="text-xs text-chem-600 font-medium uppercase tracking-wide">Gesetz von Avogadro</p>
            </div>
            <div className="flex gap-2 text-sm bg-white p-1 rounded-xl shadow-sm border border-chem-100" role="navigation" aria-label="Bereiche">
              <button onClick={() => setView('intro')} aria-current={view === 'intro' ? 'page' : undefined} className={`px-4 py-2 rounded-lg transition ${view === 'intro' ? 'bg-chem-500 text-white shadow' : 'text-slate-500 hover:bg-chem-50'}`}>Start</button>
              <button onClick={() => setView('learn')} aria-current={view === 'learn' ? 'page' : undefined} className={`px-4 py-2 rounded-lg transition ${view === 'learn' ? 'bg-chem-500 text-white shadow' : 'text-slate-500 hover:bg-chem-50'}`}>Lernen</button>
              <button
                onClick={() => setView('practice')}
                aria-current={view === 'practice' || view === 'finish' ? 'page' : undefined}
                className={`px-4 py-2 rounded-lg transition ${view === 'practice' || view === 'finish' ? 'bg-chem-500 text-white shadow' : 'text-slate-500 hover:bg-chem-50'}`}>
                Üben {score > 0 && <span className="ml-1 bg-white/30 rounded-full px-1.5 text-xs">{score}</span>}
              </button>
            </div>
          </div>
        </header>
        <main className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-100 min-h-[400px]">
          {view === 'intro' && <IntroView onStart={() => setView('learn')} />}
          {view === 'learn' && <LearnView />}
          {view === 'practice' && <PracticeView reaction={reactions[currentIndex]} onNext={handleNext} score={score} setScore={setScore} />}
          {view === 'finish' && <FinishScreen onRestart={handleRestart} />}
        </main>
      </div>
      <footer className="w-full py-4 border-t border-chem-200 bg-white/50 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-xs text-slate-400">
          <span className="font-medium">Johannes-Scharrer-Gymnasium</span> · Zollfrank
        </div>
      </footer>
    </div>
  )
}
