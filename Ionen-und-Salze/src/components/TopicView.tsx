import type { Topic } from '../types'
import { QuizPanel } from '@shared/components/QuizPanel'
import { MiniGame } from './MiniGame'

interface TopicViewProps {
  topic: Topic
  topicIndex: number
  isCompleted: boolean
  isLast: boolean
  onQuizComplete: (correct: boolean) => void
  onMiniGameScore: (points: number) => void
  onMiniGameComplete: () => void
  onNext: () => void
  onToast: (msg: string) => void
}

// ─── Gitterzellen-Komponente ──────────────────────────────────────────────────
function IonLattice() {
  const ions = Array.from({ length: 15 }, (_, i) => ({ isCat: i % 2 === 0, delay: i * 0.05 }))
  return (
    <div id="lattice-nacl" className="lattice-container">
      {ions.map((ion, i) => (
        <div
          key={i}
          className={`lattice-ion ${ion.isCat ? 'cat' : 'an'}`}
          style={{ animationDelay: `${ion.delay}s` }}
        >
          {ion.isCat ? 'Na⁺' : 'Cl⁻'}
        </div>
      ))}
    </div>
  )
}

// ─── Kugelpackungsmodell ──────────────────────────────────────────────────────
function PackingModel() {
  const rows = [
    [true, false, true, false, true],
    [false, true, false, true, false],
    [true, false, true, false, true],
  ]
  return (
    <div id="packing-nacl">
      {rows.map((row, ri) => (
        <div key={ri} className={`packing-row${ri % 2 !== 0 ? ' offset' : ''}`}>
          {row.map((isCat, ci) => (
            <div
              key={ci}
              className={`packing-sphere ${isCat ? 'cat-pack' : 'an-pack'}`}
              style={{ width: isCat ? 28 : 40, height: isCat ? 28 : 40 }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

// ─── Kugelstabmodell (SVG) ────────────────────────────────────────────────────
function BallStickModel() {
  const cols = 4, rows = 3
  const w = cols * 50, h = rows * 50
  const nodes: { x: number; y: number; isCat: boolean }[] = []
  const hlines: { x1: number; y1: number; x2: number; y2: number }[] = []
  const vlines: { x1: number; y1: number; x2: number; y2: number }[] = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 25 + c * 50, y = 25 + r * 50
      nodes.push({ x, y, isCat: (r + c) % 2 === 0 })
      if (c < cols - 1) hlines.push({ x1: x, y1: y, x2: x + 50, y2: y })
      if (r < rows - 1) vlines.push({ x1: x, y1: y, x2: x, y2: y + 50 })
    }
  }

  return (
    <svg id="ball-stick-model" viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
      {hlines.map((l, i) => (
        <line key={`h${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#94a3b8" strokeWidth="2" />
      ))}
      {vlines.map((l, i) => (
        <line key={`v${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#94a3b8" strokeWidth="2" />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={14} fill={n.isCat ? '#ef4444' : '#3b82f6'} stroke="#1e293b" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="700">
            {n.isCat ? 'Na⁺' : 'Cl⁻'}
          </text>
        </g>
      ))}
    </svg>
  )
}

// ─── Leitfähigkeitsdemonstration ──────────────────────────────────────────────
function ConductivityDemo() {
  const cells = [
    { label: 'Kristallin (fest)', result: 'Nicht leitfähig', isYes: false },
    { label: 'Geschmolzen', result: 'Leitfähig ✓', isYes: true },
    { label: 'Gelöst in Wasser', result: 'Leitfähig ✓', isYes: true },
  ]
  return (
    <div id="conductivity-demo">
      {cells.map((cell, i) => (
        <div key={i} className="cond-cell">
          <div className="cell-label">{cell.label}</div>
          <div className={`cell-result ${cell.isYes ? 'yes' : 'no'}`}>{cell.result}</div>
        </div>
      ))}
    </div>
  )
}

export function TopicView({
  topic,
  topicIndex,
  isCompleted,
  isLast,
  onQuizComplete,
  onMiniGameScore,
  onMiniGameComplete,
  onNext,
  onToast,
}: TopicViewProps) {
  return (
    <div className="content-card">
      <h2 className="card-title">{topic.title}</h2>

      {/* Statischer HTML-Inhalt aus data.ts – interner, vertrauenswürdiger Inhalt */}
      <div className="content-body" dangerouslySetInnerHTML={{ __html: topic.content }} />

      {topic.id === 'ionengitter' && <IonLattice />}
      {topic.id === 'modelle_gitter' && (
        <>
          <PackingModel />
          <BallStickModel />
        </>
      )}
      {topic.id === 'eigenschaften' && <ConductivityDemo />}

      {topic.id === 'minigame' && (
        <MiniGame
          onScore={onMiniGameScore}
          onComplete={onMiniGameComplete}
          onToast={onToast}
        />
      )}

      {topic.quiz && (
        <QuizPanel
          quiz={topic.quiz}
          topicIndex={topicIndex}
          alreadyCompleted={isCompleted}
          onComplete={onQuizComplete}
        />
      )}

      {isCompleted && (
        <div style={{ textAlign: 'right', marginTop: 32 }}>
          <button className="btn-primary" onClick={onNext}>
            {isLast ? 'Abschluss 🎓' : 'Weiter ➔'}
          </button>
        </div>
      )}
    </div>
  )
}
