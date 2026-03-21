# ChemieApps Modernization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate all 5 chemistry learning apps from inline-JSX/CDN HTML to proper React + Vite + TypeScript, with unified design system, Framer Motion animations, Recharts data visualizations, difficulty levels, and time mode — one PR per app.

**Architecture:** Each app is a self-contained Vite project under its own directory, sharing a common Tailwind base config from `shared/`. No LocalStorage, no backend — all state is in-session React state only.

**Tech Stack:** React 18, Vite 6, TypeScript 5.8, Tailwind CSS 3, Framer Motion, Recharts, GitHub Actions (deploy), gh CLI (PRs)

---

## File Map

```
ChemieApps/
├── shared/
│   ├── tailwind.config.base.ts       CREATE  – design tokens (colors, fonts, spacing)
│   └── prettier.config.js            CREATE  – shared formatting rules
│
├── .github/
│   └── workflows/
│       └── deploy.yml                CREATE  – parallel build + deploy to gh-pages
│
├── ZMWW/                             REWRITE – proper src/ structure
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── types.ts
│   │   ├── data/molecules.ts
│   │   └── components/
│   │       ├── TheoryCard.tsx
│   │       ├── RankingLab.tsx        – uses Recharts BarChart inline
│   │       ├── QuizPanel.tsx
│   │       ├── TimerRing.tsx
│   │       └── DifficultySelector.tsx
│   ├── index.html                    REWRITE – clean Vite template
│   ├── package.json                  MODIFY  – add framer-motion, recharts, tailwindcss
│   ├── tsconfig.json                 MODIFY  – ensure paths alias @/* → ./src/*
│   ├── vite.config.ts                MODIFY  – base path for gh-pages
│   └── tailwind.config.ts            MODIFY  – extend shared base
│
├── Wechselwirkungen/                 REWRITE – same structure as ZMWW
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── types.ts
│   │   ├── data/molecules.ts
│   │   └── components/
│   │       ├── TheoryPanel.tsx
│   │       ├── QuizPanel.tsx
│   │       ├── RankingExercise.tsx   – uses Recharts BarChart (same as RankingLab)
│   │       ├── TimerRing.tsx
│   │       └── DifficultySelector.tsx
│   ├── index.html
│   ├── package.json                  CREATE
│   ├── tsconfig.json                 CREATE
│   ├── vite.config.ts                CREATE
│   └── tailwind.config.ts            CREATE
│
├── Gasreaktionen/                    REWRITE – Avogadro gas reactions
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── types.ts
│   │   ├── data/reactions.ts
│   │   └── components/
│   │       ├── IntroView.tsx
│   │       ├── LearnView.tsx
│   │       ├── PracticeView.tsx
│   │       ├── MoleculeSVG.tsx
│   │       ├── VolumeChart.tsx       – Recharts bar chart for volume ratios
│   │       ├── TimerRing.tsx
│   │       └── DifficultySelector.tsx
│   ├── index.html
│   ├── package.json                  MODIFY
│   ├── tsconfig.json                 MODIFY  – ensure paths alias @/* → ./src/*
│   ├── vite.config.ts                MODIFY
│   ├── tailwind.config.ts            CREATE
│   └── postcss.config.js             CREATE
│
├── Alkane-Verbrennungs-Trainer/      REWRITE – full Vite scaffold + improved trainer
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── types.ts
│   │   ├── data/alkanes.ts
│   │   └── components/
│   │       ├── GuideMode.tsx
│   │       ├── TrainerMode.tsx
│   │       ├── AtomBalance.tsx
│   │       ├── TimerRing.tsx
│   │       └── DifficultySelector.tsx
│   ├── index.html                    CREATE
│   ├── package.json                  CREATE
│   ├── tsconfig.json                 CREATE
│   ├── vite.config.ts                CREATE
│   ├── tailwind.config.ts            CREATE
│   └── postcss.config.js             CREATE
│
└── Molekülpolarität/                 REWRITE – most complex app
    ├── src/
    │   ├── main.tsx
    │   ├── App.tsx
    │   ├── index.css
    │   ├── types.ts
    │   ├── data/atoms.ts
    │   ├── data/molecules.ts
    │   └── components/
    │       ├── TugOfWar.tsx
    │       ├── DipoleQuiz.tsx
    │       ├── GeometryLab.tsx
    │       ├── MoleculeSVG.tsx
    │       ├── DipoleArrow.tsx
    │       ├── TimerRing.tsx
    │       └── DifficultySelector.tsx
    ├── index.html                    CREATE
    ├── package.json                  CREATE
    ├── tsconfig.json                 CREATE
    ├── vite.config.ts                CREATE
    ├── tailwind.config.ts            CREATE
    └── postcss.config.js             CREATE
```

---

## Cross-Cutting Patterns

### Difficulty System
Every quiz data item gets a `difficulty` field:
```ts
type Difficulty = 'leicht' | 'mittel' | 'schwer'
```
`DifficultySelector` component filters displayed questions accordingly.

### Time Mode
- Optional toggle: `timeModeEnabled: boolean`
- Countdown in seconds: `timeLeft: number` (e.g. 30/60/90)
- Visual: circular SVG progress ring animated with Framer Motion
- On expiry → show correct answer screen, no score penalty

### Animation patterns (Framer Motion)
- Quiz card slide: `AnimatePresence` + `initial={{ x: 60, opacity: 0 }}`
- Correct answer: scale pulse green (`scale: [1, 1.08, 1]`, green tint)
- Wrong answer: shake (`x: [-8, 8, -8, 8, 0]`)
- Timer ring: SVG `strokeDashoffset` animated via Framer Motion `animate`

### Tailwind shared base (excerpt)
```ts
// shared/tailwind.config.base.ts
export const baseConfig = {
  theme: {
    extend: {
      colors: {
        'chem-50':  '#fff7ed',
        'chem-100': '#ffedd5',
        'chem-500': '#f97316',
        'chem-600': '#ea580c',
        'chem-700': '#c2410c',
        'chem-900': '#7c2d12',
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      borderRadius: { '2xl': '1rem', '3xl': '1.5rem' },
    },
  },
}
```

---

## Task 0: Shared Setup

**Branch:** `feat/shared-setup`

**Files:**
- Create: `shared/tailwind.config.base.ts`
- Create: `shared/prettier.config.js`
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 0: Create feature branch**

```bash
git checkout -b feat/shared-setup
```

- [ ] **Step 1: Create shared/ directory and Tailwind base config**

```ts
// shared/tailwind.config.base.ts
export const baseConfig = {
  theme: {
    extend: {
      colors: {
        'chem-50':  '#fff7ed',
        'chem-100': '#ffedd5',
        'chem-200': '#fed7aa',
        'chem-300': '#fdba74',
        'chem-400': '#fb923c',
        'chem-500': '#f97316',
        'chem-600': '#ea580c',
        'chem-700': '#c2410c',
        'chem-800': '#9a3412',
        'chem-900': '#7c2d12',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 2px 16px 0 rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px 0 rgba(0,0,0,0.14)',
      },
    },
  },
}
```

- [ ] **Step 2: Create prettier config**

```js
// shared/prettier.config.js
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
}
```

- [ ] **Step 3: Create GitHub Actions deploy workflow**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

permissions:
  contents: write   # required by peaceiris/actions-gh-pages

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Build all apps
        run: |
          for app in ZMWW Wechselwirkungen Gasreaktionen Alkane-Verbrennungs-Trainer "Molekülpolarität"; do
            cd "$app"
            npm install
            npm run build
            cd ..
          done
      - name: Assemble dist
        run: |
          mkdir -p dist
          cp index.html dist/
          # Map: "App Directory" → "vite base slug" (must match vite.config.ts base)
          declare -A SLUG_MAP=(
            ["ZMWW"]="zmww"
            ["Wechselwirkungen"]="wechselwirkungen"
            ["Gasreaktionen"]="gasreaktionen"
            ["Alkane-Verbrennungs-Trainer"]="alkane-verbrennungs-trainer"
            ["Molekülpolarität"]="molekulpolaritat"
          )
          for app in "ZMWW" "Wechselwirkungen" "Gasreaktionen" "Alkane-Verbrennungs-Trainer" "Molekülpolarität"; do
            slug="${SLUG_MAP[$app]}"
            cp -r "$app/dist" "dist/$slug"
          done
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

> **Important:** Each app's `vite.config.ts` `base` value must exactly match its slug in `SLUG_MAP`. `Molekülpolarität` → `molekulpolaritat` (ASCII, no umlaut, no accent).

- [ ] **Step 4: Commit, push, and open PR**

```bash
git add shared/ .github/
git commit -m "feat: add shared tailwind base config and GitHub Actions deploy workflow"
git push -u origin feat/shared-setup
gh pr create --title "feat: add shared design tokens and GitHub Actions deploy workflow" --body "$(cat <<'EOF'
## Änderungen
- `shared/tailwind.config.base.ts` – Design-Tokens (orange chem-* Palette, Inter, border-radius, shadows)
- `shared/prettier.config.js` – einheitliche Formatierung
- `.github/workflows/deploy.yml` – baut alle 5 Apps parallel und deployed auf gh-pages

## Testen
- [ ] Workflow-Syntax valide (`act` oder push auf Branch)
- [ ] `shared/tailwind.config.base.ts` exportiert `baseConfig` korrekt

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

- [ ] **Step 5: Merge PR and return to main**

```bash
gh pr merge --squash --delete-branch
git checkout main && git pull
```

---

## Task 1: ZMWW — Intermolecular Forces (Full Rewrite)

**Branch:** `feat/zmww-modernization`

**Files:**
- Rewrite: `ZMWW/index.html`
- Create: `ZMWW/src/main.tsx`
- Create: `ZMWW/src/App.tsx`
- Create: `ZMWW/src/types.ts`
- Create: `ZMWW/src/data/molecules.ts`
- Create: `ZMWW/src/components/TheoryCard.tsx`
- Create: `ZMWW/src/components/RankingLab.tsx`
- Create: `ZMWW/src/components/QuizPanel.tsx`
- Create: `ZMWW/src/components/TimerRing.tsx`
- Create: `ZMWW/src/components/DifficultySelector.tsx`
- Modify: `ZMWW/package.json`
- Modify: `ZMWW/vite.config.ts`
- Create: `ZMWW/tailwind.config.ts`
- Create: `ZMWW/postcss.config.js`

- [ ] **Step 1: Create feature branch**

```bash
git checkout -b feat/zmww-modernization
```

- [ ] **Step 2: Update package.json with all dependencies**

```json
{
  "name": "zmww",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.0.0",
    "recharts": "^2.12.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.0",
    "@types/node": "^22.14.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

Run: `cd ZMWW && npm install`

- [ ] **Step 3: Update vite.config.ts**

```ts
// ZMWW/vite.config.ts
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/zmww/',
  plugins: [react()],
  server: { port: 3000, host: '0.0.0.0' },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
})
```

- [ ] **Step 4: Create tailwind.config.ts**

```ts
// ZMWW/tailwind.config.ts
import { baseConfig } from '../shared/tailwind.config.base'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      ...(baseConfig.theme?.extend ?? {}),
    },
  },
  plugins: [],
}
```

> **Pattern note:** All apps use this same structure. Never spread `baseConfig` at the root level — that drops the `content` array. Always merge via `theme.extend`.

- [ ] **Step 5: Create postcss.config.js**

```js
// ZMWW/postcss.config.js
export default { plugins: { tailwindcss: {}, autoprefixer: {} } }
```

- [ ] **Step 6: Rewrite index.html (clean Vite template)**

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ZMWW – Zwischenmolekulare Wechselwirkungen</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-gray-50 font-sans antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Create types.ts**

```ts
// ZMWW/src/types.ts
export type ForceType = 'LDWW' | 'DDWW' | 'WB'
export type Difficulty = 'leicht' | 'mittel' | 'schwer'
export type AppTab = 'grundlagen' | 'ranking' | 'quiz'

export interface Molecule {
  id: string
  name: string
  formula: string
  boilingPoint: number   // °C
  force: ForceType
  difficulty: Difficulty
  description: string
  emoji: string
}
```

- [ ] **Step 8: Create data/molecules.ts (expand to 15 molecules)**

```ts
// ZMWW/src/data/molecules.ts
import { Molecule } from '@/types'

export const molecules: Molecule[] = [
  { id: 'methan',    name: 'Methan',           formula: 'CH₄',      boilingPoint: -162, force: 'LDWW', difficulty: 'leicht', description: 'Kleinstes Alkan, unpolar, sehr flüchtig', emoji: '☁️' },
  { id: 'butan',     name: 'Butan',            formula: 'C₄H₁₀',   boilingPoint: -0.5, force: 'LDWW', difficulty: 'leicht', description: 'Feuerzeuggas, größer als Methan → stärkere London-Kräfte', emoji: '☁️' },
  { id: 'pentan',    name: 'Pentan',           formula: 'C₅H₁₂',   boilingPoint: 36,   force: 'LDWW', difficulty: 'leicht', description: 'Lösungsmittel, flüssig bei RT', emoji: '☁️' },
  { id: 'octan',     name: 'Octan',            formula: 'C₈H₁₈',   boilingPoint: 126,  force: 'LDWW', difficulty: 'mittel', description: 'Benzin-Hauptbestandteil, lange Kette', emoji: '☁️' },
  { id: 'heptan',    name: 'Heptan',           formula: 'C₇H₁₆',   boilingPoint: 98,   force: 'LDWW', difficulty: 'mittel', description: 'Lösungsmittel, unpolares Alkan', emoji: '☁️' },
  { id: 'helium',    name: 'Helium',           formula: 'He',       boilingPoint: -269, force: 'LDWW', difficulty: 'leicht', description: 'Edelgas, kleinste mögliche London-Kräfte', emoji: '☁️' },
  { id: 'hcl',       name: 'Chlorwasserstoff', formula: 'HCl',      boilingPoint: -85,  force: 'DDWW', difficulty: 'mittel', description: 'Polares Molekül → Dipol-Dipol-Wechselwirkungen', emoji: '🧲' },
  { id: 'propanon',  name: 'Propanon (Aceton)',formula: 'C₃H₆O',   boilingPoint: 56,   force: 'DDWW', difficulty: 'mittel', description: 'Polares Keton, C=O-Gruppe sorgt für starke Dipole', emoji: '🧲' },
  { id: 'h2s',       name: 'Schwefelwasserstoff', formula: 'H₂S', boilingPoint: -60,  force: 'DDWW', difficulty: 'schwer', description: 'Analog zu Wasser, aber S weniger elektronegativ → nur DDWW', emoji: '🧲' },
  { id: 'so2',       name: 'Schwefeldioxid',   formula: 'SO₂',     boilingPoint: -10,  force: 'DDWW', difficulty: 'schwer', description: 'Gewinkeltes polares Molekül, signifikante Dipole', emoji: '🧲' },
  { id: 'ammoniak',  name: 'Ammoniak',         formula: 'NH₃',      boilingPoint: -33,  force: 'WB',   difficulty: 'mittel', description: 'N-H-Bindungen ermöglichen H-Brücken', emoji: '💧' },
  { id: 'ethanol',   name: 'Ethanol',          formula: 'C₂H₅OH',  boilingPoint: 78,   force: 'WB',   difficulty: 'leicht', description: 'O-H-Gruppe bildet starke H-Brücken', emoji: '💧' },
  { id: 'wasser',    name: 'Wasser',           formula: 'H₂O',      boilingPoint: 100,  force: 'WB',   difficulty: 'leicht', description: 'Zwei O-H-Bindungen → sehr starke H-Brücken', emoji: '💧' },
  { id: 'essigsäure',name: 'Essigsäure',       formula: 'CH₃COOH', boilingPoint: 118,  force: 'WB',   difficulty: 'schwer', description: 'Bildet sogar H-Brücken-Dimere', emoji: '💧' },
  { id: 'methanol',  name: 'Methanol',         formula: 'CH₃OH',   boilingPoint: 65,   force: 'WB',   difficulty: 'mittel', description: 'Kleinster Alkohol, O-H-Gruppe vorhanden', emoji: '💧' },
]

export const forceLabels: Record<string, string> = {
  LDWW: 'London-Kräfte',
  DDWW: 'Dipol-Dipol',
  WB: 'Wasserstoffbrücken',
}
```

- [ ] **Step 9: Create DifficultySelector.tsx**

```tsx
// ZMWW/src/components/DifficultySelector.tsx
import { motion } from 'framer-motion'
import { Difficulty } from '@/types'

interface Props {
  value: Difficulty | 'alle'
  onChange: (d: Difficulty | 'alle') => void
}

const options: { value: Difficulty | 'alle'; label: string }[] = [
  { value: 'alle',    label: 'Alle' },
  { value: 'leicht',  label: '⭐ Leicht' },
  { value: 'mittel',  label: '⭐⭐ Mittel' },
  { value: 'schwer',  label: '⭐⭐⭐ Schwer' },
]

export function DifficultySelector({ value, onChange }: Props) {
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
}
```

- [ ] **Step 10: Create TimerRing.tsx**

```tsx
// ZMWW/src/components/TimerRing.tsx
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

  useEffect(() => {
    setTimeLeft(seconds)
  }, [seconds, active])

  useEffect(() => {
    if (!active) return
    if (timeLeft <= 0) { onExpire(); return }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(id)
  }, [timeLeft, active, onExpire])

  const color = timeLeft > seconds * 0.5 ? '#22c55e' : timeLeft > seconds * 0.25 ? '#f97316' : '#ef4444'

  return (
    <div className="flex items-center gap-2">
      <svg width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="4" />
        <motion.circle
          cx="30" cy="30" r={radius}
          fill="none" stroke={color} strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          strokeLinecap="round"
          transform="rotate(-90 30 30)"
          animate={{ strokeDashoffset: circumference * (1 - progress) }}
          transition={{ duration: 0.5 }}
        />
        <text x="30" y="35" textAnchor="middle" fontSize="14" fontWeight="600" fill={color}>{timeLeft}</text>
      </svg>
    </div>
  )
}
```

- [ ] **Step 11: Create QuizPanel.tsx (with animations + difficulty + optional timer)**

```tsx
// ZMWW/src/components/QuizPanel.tsx
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { molecules, forceLabels } from '@/data/molecules'
import { Difficulty, ForceType } from '@/types'
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
    setAnswered(current.force) // show correct answer
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
          {timeExpired && (
            <div className="text-sm font-medium text-red-500">⏰ Zeit abgelaufen!</div>
          )}
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
                  {current.emoji && isCorrect && answered ? `${current.emoji} ` : ''}{forceLabels[force]}
                </motion.button>
              )
            })}
          </div>

          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-xl p-3 text-sm text-gray-600"
            >
              {current.description}
            </motion.div>
          )}

          {answered && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={next}
              className="w-full py-2.5 bg-chem-500 hover:bg-chem-600 text-white rounded-xl font-medium transition-colors"
            >
              Weiter →
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
```

- [ ] **Step 12: Create RankingLab.tsx (with Recharts boiling point chart)**

```tsx
// ZMWW/src/components/RankingLab.tsx
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts'
import { molecules } from '@/data/molecules'
import { Molecule } from '@/types'

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function RankingLab() {
  const [pool] = useState(() => shuffle(molecules).slice(0, 4))
  const [order, setOrder] = useState<Molecule[]>(() => shuffle(pool))
  const [checked, setChecked] = useState(false)

  const correctOrder = useMemo(() => [...pool].sort((a, b) => a.boilingPoint - b.boilingPoint), [pool])
  const isCorrect = useMemo(
    () => order.every((m, i) => m.id === correctOrder[i].id),
    [order, correctOrder]
  )

  function move(from: number, to: number) {
    if (checked) return
    const next = [...order]
    const [item] = next.splice(from, 1)
    next.splice(to, 0, item)
    setOrder(next)
  }

  const chartData = correctOrder.map((m) => ({
    name: m.formula,
    bp: m.boilingPoint,
  }))

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Ordne die Moleküle nach <strong>steigendem Siedepunkt</strong> (links = kältester).
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {order.map((mol, i) => (
          <motion.div
            key={mol.id}
            layout
            className="bg-white border-2 border-gray-200 rounded-2xl p-3 text-center shadow-card cursor-pointer select-none"
          >
            <p className="text-lg font-bold text-gray-800">{mol.emoji}</p>
            <p className="font-semibold text-gray-700 text-sm">{mol.name}</p>
            <p className="text-xs text-gray-400 font-mono">{mol.formula}</p>
            <div className="flex gap-1 mt-2 justify-center">
              {i > 0 && (
                <button onClick={() => move(i, i - 1)} className="text-xs bg-gray-100 hover:bg-chem-100 rounded px-1.5">←</button>
              )}
              {i < order.length - 1 && (
                <button onClick={() => move(i, i + 1)} className="text-xs bg-gray-100 hover:bg-chem-100 rounded px-1.5">→</button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setChecked(true)}
        className="w-full py-2.5 bg-chem-500 hover:bg-chem-600 text-white rounded-xl font-medium transition-colors"
      >
        Überprüfen
      </button>

      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}
          >
            <p className="font-semibold mb-3">
              {isCorrect ? '✅ Richtig!' : '❌ Nicht ganz – hier die richtige Reihenfolge:'}
            </p>
            {!isCorrect && (
              <p className="text-sm text-gray-600 mb-3">
                {correctOrder.map((m) => m.name).join(' → ')}
              </p>
            )}
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
```

- [ ] **Step 13: Create TheoryCard.tsx**

```tsx
// ZMWW/src/components/TheoryCard.tsx
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
    title: 'London-Kräfte (LDWW)',
    emoji: '☁️',
    color: 'blue',
    summary: 'Wirken zwischen ALLEN Molekülen, auch unpolaren.',
    detail: 'Entstehen durch kurzzeitige Ladungsverschiebungen (Dipole). Je größer das Molekül (mehr Elektronen, längere Kette), desto stärker die London-Kräfte und desto höher der Siedepunkt.',
    example: 'Butan (−0,5°C) siedet höher als Methan (−162°C) – gleiche Klasse, aber längere Kette.',
  },
  {
    title: 'Dipol-Dipol-WW (DDWW)',
    emoji: '🧲',
    color: 'purple',
    summary: 'Wirken zwischen polaren Molekülen zusätzlich zu London.',
    detail: 'Permanente Dipole ziehen sich gegenseitig an. Voraussetzung: Das Molekül ist insgesamt polar (Ladungsschwerpunkte fallen auseinander).',
    example: 'HCl (−85°C) siedet höher als H₂ (−253°C) – trotz ähnlicher Größe wegen permanentem Dipol.',
  },
  {
    title: 'Wasserstoffbrücken (WB)',
    emoji: '💧',
    color: 'orange',
    summary: 'Stärkste intermolekulare Kraft. Nur N–H, O–H, F–H.',
    detail: 'H ist kovalent an ein sehr elektronegatives Atom (N, O, F) gebunden. Das H ist dann stark δ+ und wird vom freien Elektronenpaar des Nachbarmoleküls angezogen.',
    example: 'Wasser (100°C) siedet weit höher als H₂S (−60°C) – W-Brücken vs. nur DDWW.',
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
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
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
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-sm text-gray-700">{item.detail}</p>
                  <p className="text-sm text-gray-500 italic">💡 {item.example}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 14: Create App.tsx**

```tsx
// ZMWW/src/App.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TheoryCard } from '@/components/TheoryCard'
import { RankingLab } from '@/components/RankingLab'
import { QuizPanel } from '@/components/QuizPanel'
import { AppTab } from '@/types'
import './index.css'

const TABS: { id: AppTab; label: string; emoji: string }[] = [
  { id: 'grundlagen', label: 'Grundlagen', emoji: '📖' },
  { id: 'ranking',    label: 'Ranking-Labor', emoji: '🧪' },
  { id: 'quiz',       label: 'Quiz', emoji: '⚡' },
]

export function App() {
  const [tab, setTab] = useState<AppTab>('grundlagen')

  return (
    <div className="min-h-screen bg-gradient-to-br from-chem-50 to-orange-50">
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Zwischenmolekulare WW</h1>
            <p className="text-xs text-gray-400">Chemie 10</p>
          </div>
          <span className="text-2xl">🧲</span>
        </div>
        <div className="max-w-2xl mx-auto px-4 pb-0 flex gap-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative px-4 py-2.5 text-sm font-medium rounded-t-xl transition-colors ${
                tab === t.id ? 'text-chem-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.emoji} {t.label}
              {tab === t.id && (
                <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-chem-500" />
              )}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {tab === 'grundlagen' && <TheoryCard />}
          {tab === 'ranking'    && <RankingLab />}
          {tab === 'quiz'       && <QuizPanel />}
        </motion.div>
      </main>
    </div>
  )
}
```

- [ ] **Step 15: Create main.tsx and index.css**

```tsx
// ZMWW/src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>
)
```

```css
/* ZMWW/src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 16: Run dev server and verify visually**

```bash
cd ZMWW && npm run dev
```
Open http://localhost:3000 — verify all 3 tabs render, quiz works, animations play.

- [ ] **Step 17: Build and verify no errors**

```bash
npm run build
```
Expected: clean build output in `ZMWW/dist/`

- [ ] **Step 18: Commit and push**

```bash
git add ZMWW/
git commit -m "feat(zmww): migrate to React+Vite+TS, add Framer Motion, Recharts, difficulty levels, time mode"
git push -u origin feat/zmww-modernization
```

- [ ] **Step 19: Open PR**

```bash
gh pr create --title "feat(zmww): modernize to Vite+TS with animations, difficulty & time mode" --body "$(cat <<'EOF'
## Änderungen
- Migration von CDN/Babel zu Vite + React + TypeScript
- 15 Moleküle (vorher 12), alle mit `difficulty`-Feld
- Framer Motion: Card-Transitions, Shake/Pulse-Feedback, AnimatePresence
- Recharts: Siedepunkt-Balkendiagramm im Ranking-Labor
- Schwierigkeitsgrade: leicht / mittel / schwer
- Zeitmodus: 30s-Countdown mit animiertem SVG-Ring
- Unified Tailwind Design System (extends shared/tailwind.config.base.ts)

## Testen
- [ ] Alle 3 Tabs funktionieren
- [ ] Quiz-Animationen bei richtig/falsch
- [ ] Zeitmodus startet und endet korrekt
- [ ] Recharts-Diagramm erscheint nach Ranking-Check
- [ ] `npm run build` ohne Fehler

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

- [ ] **Step 20: Merge PR and checkout main**

```bash
gh pr merge --squash --delete-branch
git checkout main && git pull
```

---

## Task 2: Wechselwirkungen — Intermolecular Forces Trainer (Full Rewrite)

**Branch:** `feat/wechselwirkungen-modernization`

**Files:**
- Rewrite: `Wechselwirkungen/index.html`
- Create: `Wechselwirkungen/src/main.tsx`
- Create: `Wechselwirkungen/src/App.tsx`
- Create: `Wechselwirkungen/src/types.ts`
- Create: `Wechselwirkungen/src/data/molecules.ts` (reuse ZMWW data, extend)
- Create: `Wechselwirkungen/src/components/TheoryPanel.tsx`
- Create: `Wechselwirkungen/src/components/QuizPanel.tsx`
- Create: `Wechselwirkungen/src/components/RankingExercise.tsx`
- Create: `Wechselwirkungen/src/components/TimerRing.tsx` (copy from ZMWW)
- Create: `Wechselwirkungen/src/components/DifficultySelector.tsx` (copy from ZMWW)
- Create: `Wechselwirkungen/package.json`
- Create: `Wechselwirkungen/vite.config.ts`
- Create: `Wechselwirkungen/tailwind.config.ts`
- Create: `Wechselwirkungen/postcss.config.js`
- Create: `Wechselwirkungen/tsconfig.json`

> **Note:** Wechselwirkungen and ZMWW cover overlapping content (both teach intermolecular forces). The key difference: Wechselwirkungen includes Ion-Dipol-WW and is simpler/faster (Chemie 10 intro), while ZMWW goes deeper. Wechselwirkungen should be kept as a simpler, faster-paced quiz app.

- [ ] **Step 1: Create feature branch**

```bash
git checkout -b feat/wechselwirkungen-modernization
```

- [ ] **Step 2: Create package.json** (same deps as ZMWW, name: "wechselwirkungen")

Run: `cd Wechselwirkungen && npm install`

- [ ] **Step 3: Create vite.config.ts** (base: '/wechselwirkungen/')

- [ ] **Step 4: Create tailwind.config.ts, postcss.config.js, tsconfig.json** (copy from ZMWW pattern)

- [ ] **Step 5: Create types.ts**

```ts
// Wechselwirkungen/src/types.ts
export type ForceType = 'London' | 'Dipol-Dipol' | 'H-Brücken' | 'Ion-Dipol'
export type Difficulty = 'leicht' | 'mittel' | 'schwer'

export interface Molecule {
  id: string
  name: string
  formula: string
  force: ForceType
  difficulty: Difficulty
  boilingPoint: number
  explanation: string
}
```

- [ ] **Step 6: Create data/molecules.ts (15+ molecules including Ion-Dipol)**

Include all ZMWW molecules plus:
- NaCl in Wasser → Ion-Dipol (schwer)
- KBr → Ion-Dipol (schwer)
- MgCl₂ in Wasser → Ion-Dipol (schwer)

- [ ] **Step 7: Create TheoryPanel.tsx** (4 force cards: London, Dipol-Dipol, H-Brücken, Ion-Dipol — animated accordion, same pattern as ZMWW TheoryCard)

- [ ] **Step 8: Create QuizPanel.tsx** (same pattern as ZMWW QuizPanel but with 4 force options, include Ion-Dipol)

- [ ] **Step 9: Create RankingExercise.tsx** (simplified version of ZMWW RankingLab — 3 molecules instead of 4, good for beginners. Include Recharts `BarChart` for the boiling-point reveal, same pattern as ZMWW's `RankingLab.tsx`)

- [ ] **Step 10: Create App.tsx** (3 tabs: Theorie / Quiz / Siedepunkte)

- [ ] **Step 11: Create main.tsx + index.css + index.html**

- [ ] **Step 12: Run dev, verify visually, build**

- [ ] **Step 13: Commit, push, open PR**

```bash
git add Wechselwirkungen/
git commit -m "feat(wechselwirkungen): migrate to Vite+TS, add Ion-Dipol, animations, difficulty, time mode"
git push -u origin feat/wechselwirkungen-modernization
gh pr create --title "feat(wechselwirkungen): modernize to Vite+TS with animations, difficulty & time mode" --body "$(cat <<'EOF'
## Änderungen
- Migration von CDN/Babel zu Vite + React + TypeScript
- 15+ Moleküle inkl. Ion-Dipol-WW (vorher 5)
- Framer Motion: Animationen, Shake/Pulse, AnimatePresence
- Recharts: Siedepunkt-Balkendiagramm im Ranking-Exercise
- Schwierigkeitsgrade: leicht / mittel / schwer
- Zeitmodus: 30s-Countdown mit SVG-Ring

## Testen
- [ ] Alle 3 Tabs funktionieren
- [ ] Ion-Dipol erscheint als 4. Option im Quiz
- [ ] Recharts-Diagramm nach Ranking-Check sichtbar
- [ ] `npm run build` ohne Fehler

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

- [ ] **Step 14: Merge PR, checkout main**

---

## Task 3: Gasreaktionen — Avogadro's Law (Full Rewrite)

**Branch:** `feat/gasreaktionen-modernization`

**Files:**
- Rewrite: `Gasreaktionen/index.html`
- Create: `Gasreaktionen/src/main.tsx`
- Create: `Gasreaktionen/src/App.tsx`
- Create: `Gasreaktionen/src/types.ts`
- Create: `Gasreaktionen/src/data/reactions.ts`
- Create: `Gasreaktionen/src/components/IntroView.tsx`
- Create: `Gasreaktionen/src/components/LearnView.tsx`
- Create: `Gasreaktionen/src/components/PracticeView.tsx`
- Create: `Gasreaktionen/src/components/MoleculeSVG.tsx`
- Create: `Gasreaktionen/src/components/VolumeChart.tsx`
- Create: `Gasreaktionen/src/components/TimerRing.tsx`
- Create: `Gasreaktionen/src/components/DifficultySelector.tsx`
- Create: `Gasreaktionen/tailwind.config.ts`
- Create: `Gasreaktionen/postcss.config.js`
- Modify: `Gasreaktionen/package.json`
- Modify: `Gasreaktionen/vite.config.ts`

- [ ] **Step 1: Create feature branch**

```bash
git checkout -b feat/gasreaktionen-modernization
```

- [ ] **Step 2: Update package.json** (same deps as ZMWW, name: "gasreaktionen")

Run: `cd Gasreaktionen && npm install`

- [ ] **Step 3: Create types.ts**

```ts
// Gasreaktionen/src/types.ts
export type Difficulty = 'leicht' | 'mittel' | 'schwer'

export interface GasReaction {
  id: string
  name: string
  equation: string      // display string e.g. "H₂ + Cl₂ → 2 HCl"
  reactants: GasMolecule[]
  products: GasMolecule[]
  difficulty: Difficulty
  explanation: string
}

export interface GasMolecule {
  formula: string
  coefficient: number   // stoichiometric coefficient
  color: string         // for SVG fill
}
```

- [ ] **Step 4: Create data/reactions.ts (expand to 12 reactions)**

Existing 8 + add:
- N₂ + O₂ → NO (schwer)
- CO₂ + H₂ → CH₃OH (schwer, Methanol-Synthese)
- SO₂ + O₂ → SO₃ (schwer, Kontaktverfahren)
- HCl → H₂ + Cl₂ (Elektrolyse, schwer)

- [ ] **Step 5: Create MoleculeSVG.tsx** (SVG renderer — migrate and type the existing one from index.html, clean up bond rendering)

- [ ] **Step 6: Create VolumeChart.tsx (Recharts)**

```tsx
// Gasreaktionen/src/components/VolumeChart.tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, LabelList } from 'recharts'

interface Props {
  reactants: { formula: string; coefficient: number; color: string }[]
  products:  { formula: string; coefficient: number; color: string }[]
}

export function VolumeChart({ reactants, products }: Props) {
  const data = [
    ...reactants.map((r) => ({ name: r.formula, vol: r.coefficient, color: r.color, side: 'Edukt' })),
    ...products.map((p)  => ({ name: p.formula, vol: p.coefficient, color: p.color, side: 'Produkt' })),
  ]
  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: -20 }}>
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} label={{ value: 'Volumina', angle: -90, position: 'insideLeft', fontSize: 11 }} />
        <Tooltip formatter={(v: number) => [`${v} Vol.`, 'Verhältnis']} />
        <Bar dataKey="vol" radius={[6, 6, 0, 0]}>
          <LabelList dataKey="vol" position="top" fontSize={12} />
          {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
```

- [ ] **Step 7: Create LearnView.tsx** (interactive slider 1-4 for H₂+Cl₂→HCl, animated particle display, VolumeChart)

- [ ] **Step 8: Create PracticeView.tsx** (quiz: given reaction, set correct coefficients via sliders, check answer, show VolumeChart on success, difficulty filter, optional timer)

- [ ] **Step 9: Create IntroView.tsx** (Avogadro's law explanation with animated gas particle illustration using Framer Motion floating circles)

- [ ] **Step 10: Create App.tsx** (view state machine: intro → learn → practice → finish, animated transitions)

- [ ] **Step 11: Create main.tsx, index.css, index.html**

- [ ] **Step 12: Run dev, verify visually, build**

- [ ] **Step 13: Commit, push, open PR**

```bash
git commit -m "feat(gasreaktionen): migrate to Vite+TS, 12 reactions, Recharts volume chart, animations"
```

- [ ] **Step 14: Merge PR, checkout main**

---

## Task 4: Alkane-Verbrennungs-Trainer (Full Rewrite)

**Branch:** `feat/alkane-modernization`

**Files:**
- Create: `Alkane-Verbrennungs-Trainer/src/main.tsx`
- Create: `Alkane-Verbrennungs-Trainer/src/App.tsx`
- Create: `Alkane-Verbrennungs-Trainer/src/types.ts`
- Create: `Alkane-Verbrennungs-Trainer/src/data/alkanes.ts`
- Create: `Alkane-Verbrennungs-Trainer/src/components/GuideMode.tsx`
- Create: `Alkane-Verbrennungs-Trainer/src/components/TrainerMode.tsx`
- Create: `Alkane-Verbrennungs-Trainer/src/components/AtomBalance.tsx`
- Create: `Alkane-Verbrennungs-Trainer/src/components/TimerRing.tsx`
- Create: `Alkane-Verbrennungs-Trainer/src/components/DifficultySelector.tsx`
- Rewrite: `Alkane-Verbrennungs-Trainer/index.html`
- Create: `Alkane-Verbrennungs-Trainer/package.json`
- Create: `Alkane-Verbrennungs-Trainer/vite.config.ts`
- Create: `Alkane-Verbrennungs-Trainer/tailwind.config.ts`
- Create: `Alkane-Verbrennungs-Trainer/postcss.config.js`
- Create: `Alkane-Verbrennungs-Trainer/tsconfig.json`

- [ ] **Step 1: Create feature branch**

```bash
git checkout -b feat/alkane-modernization
```

- [ ] **Step 2: Create project config files** (package.json, vite.config.ts with `base: '/alkane-verbrennungs-trainer/'`, tailwind.config.ts, postcss.config.js, tsconfig.json)

Run: `cd Alkane-Verbrennungs-Trainer && npm install`

- [ ] **Step 3: Create types.ts**

```ts
// Alkane-Verbrennungs-Trainer/src/types.ts
export type Difficulty = 'leicht' | 'mittel' | 'schwer'

export interface Alkane {
  n: number              // carbon count
  name: string           // e.g. "Methan"
  formula: string        // e.g. "CH₄"
  difficulty: Difficulty
}

export interface CombustionEquation {
  alkane: Alkane
  coeffAlkane: number    // always 1 for unbalanced, 2 if doubled
  coeffO2: number
  coeffCO2: number
  coeffH2O: number
  needsDoubling: boolean
}
```

- [ ] **Step 4: Create data/alkanes.ts (C1–C15)**

```ts
// Alkane-Verbrennungs-Trainer/src/data/alkanes.ts
import { Alkane } from '@/types'

const names = ['Methan','Ethan','Propan','Butan','Pentan','Hexan','Heptan','Octan','Nonan','Decan','Undecan','Dodecan','Tridecan','Tetradecan','Pentadecan']

export const alkanes: Alkane[] = names.map((name, i) => ({
  n: i + 1,
  name,
  formula: i === 0 ? 'CH₄' : `C${i+1}H${2*(i+1)+2}`,
  difficulty: i < 4 ? 'leicht' : i < 9 ? 'mittel' : 'schwer',
}))

export function balanceCombustion(n: number): { a: number; b: number; c: number; d: number; doubled: boolean } {
  // CₙH(2n+2) + b O₂ → c CO₂ + d H₂O
  // c = n, d = n+1, b = (3n+1)/2
  const b_double = 3 * n + 1  // coefficient for O₂ × 2
  const doubled = b_double % 2 !== 0
  if (!doubled) return { a: 1, b: b_double / 2, c: n, d: n + 1, doubled: false }
  // Multiply everything by 2
  return { a: 2, b: b_double, c: 2 * n, d: 2 * (n + 1), doubled: true }
}
```

- [ ] **Step 5: Create AtomBalance.tsx** (visual atom count — C, H, O — with color-coded matching. Green when correct, red when wrong, animated with Framer Motion)

- [ ] **Step 6: Create GuideMode.tsx** (step-by-step walkthrough: select alkane, walk through 6 steps with AnimatePresence, highlight current coefficient with motion.div layout animation)

- [ ] **Step 7: Create TrainerMode.tsx** (random alkane generator, 4 number inputs, real-time AtomBalance, shake on wrong, pulse on correct, score counter, difficulty filter, optional timer)

- [ ] **Step 8: Create App.tsx** (toggle between GuideMode/TrainerMode, difficulty selector)

- [ ] **Step 9: Create main.tsx, index.css, index.html**

- [ ] **Step 10: Run dev, verify, build**

- [ ] **Step 11: Commit, push, open PR**

```bash
git commit -m "feat(alkane): migrate to Vite+TS, C1-C15, animated AtomBalance, difficulty, time mode"
```

- [ ] **Step 12: Merge PR, checkout main**

---

## Task 5: Molekülpolarität — Molecular Polarity (Full Rewrite)

**Branch:** `feat/molekulpolaritat-modernization`

> This is the most complex app — VSEPR theory, SVG dipole vectors, electronegativity. Take care with the geometry calculations.

**Files:**
- Create: `Molekülpolarität/src/main.tsx`
- Create: `Molekülpolarität/src/App.tsx`
- Create: `Molekülpolarität/src/types.ts`
- Create: `Molekülpolarität/src/data/atoms.ts`
- Create: `Molekülpolarität/src/data/molecules.ts`
- Create: `Molekülpolarität/src/components/TugOfWar.tsx`
- Create: `Molekülpolarität/src/components/DipoleQuiz.tsx`
- Create: `Molekülpolarität/src/components/GeometryLab.tsx`
- Create: `Molekülpolarität/src/components/MoleculeSVG.tsx`
- Create: `Molekülpolarität/src/components/DipoleArrow.tsx`
- Create: `Molekülpolarität/src/components/TimerRing.tsx`
- Create: `Molekülpolarität/src/components/DifficultySelector.tsx`
- Rewrite: `Molekülpolarität/index.html`
- Create: all config files (package.json, vite.config.ts etc.)

- [ ] **Step 1: Create feature branch**

```bash
git checkout -b feat/molekulpolaritat-modernization
```

- [ ] **Step 2: Create all config files** (same pattern as previous apps, `base: '/molekulpolaritat/'`)

Run: `cd "Molekülpolarität" && npm install`

- [ ] **Step 3: Create types.ts**

```ts
// Molekülpolarität/src/types.ts
export type Difficulty = 'leicht' | 'mittel' | 'schwer'
export type Geometry = 'linear' | 'bent' | 'trigonal-planar' | 'pyramidal' | 'tetrahedral' | 'trigonal-bipyramidal'
export type AppTab = 'tauziehen' | 'quiz' | 'labor'

export interface Atom {
  symbol: string
  name: string
  electronegativity: number
  color: string
  radius: number
}

export interface QuizMolecule {
  id: string
  name: string
  formula: string
  geometry: Geometry
  isPolar: boolean
  centralAtom: string
  ligands: string[]
  difficulty: Difficulty
  explanation: string
}

export interface Vector2D { x: number; y: number }
```

- [ ] **Step 4: Create data/atoms.ts** (10 atoms: H, C, N, O, F, S, Cl, Br, P, Si — with EN values and colors)

- [ ] **Step 5: Create data/molecules.ts (expand to 15 quiz molecules)**

Existing 8 + add:
- BF₃ (trigonal-planar, unpolar)
- PH₃ (pyramidal, polar)
- CCl₄ (tetrahedral, unpolar)
- SO₃ (trigonal-planar, unpolar — schwer)
- CHCl₃ (tetrahedral, polar — schwer)
- NF₃ (pyramidal, polar — schwer)
- H₂S (bent, polar — mittel)

- [ ] **Step 6: Create MoleculeSVG.tsx** (typed SVG renderer: given geometry + atom list, renders 2D structure with bond lines, atom circles, and EN labels)

- [ ] **Step 7: Create DipoleArrow.tsx** (SVG arrow component for bond polarity vectors + net dipole, animated with Framer Motion)

- [ ] **Step 8: Create TugOfWar.tsx** (atom selector A and B, calculates ΔEN, animated balance scale, bond type classification leicht/mittel/schwer)

- [ ] **Step 9: Create DipoleQuiz.tsx** (15-molecule quiz, difficulty filter, timer, MoleculeSVG + DipoleArrow on reveal, AnimatePresence transitions)

- [ ] **Step 10: Create GeometryLab.tsx** (geometry selector, central atom selector, ligand selector, real-time net dipole calculation and SVG display)

- [ ] **Step 11: Create App.tsx** (3 tabs: Tauziehen / Quiz / Labor)

- [ ] **Step 12: Create main.tsx, index.css, index.html**

- [ ] **Step 13: Run dev, verify visually, build**

- [ ] **Step 14: Commit, push, open PR**

```bash
git commit -m "feat(molekulpolaritat): migrate to Vite+TS, 15 molecules, animated dipoles, difficulty, time mode"
```

- [ ] **Step 15: Merge PR, checkout main**

---

## Task 6: Update Root index.html Links

**Branch:** `feat/update-root-links`

- [ ] **Step 1:** Create feature branch

```bash
git checkout -b feat/update-root-links
```

- [ ] **Step 2:** Update the 5 app card links in `index.html` to point to the new gh-pages subdirectory URLs:
  - Alkane-Verbrennungs-Trainer → `/alkane-verbrennungs-trainer/`
  - Gasreaktionen → `/gasreaktionen/`
  - Molekülpolarität → `/molekulpolaritat/`
  - Wechselwirkungen → `/wechselwirkungen/`
  - ZMWW → `/zmww/`

- [ ] **Step 3:** Commit, push, open PR

```bash
git add index.html
git commit -m "fix: update root index.html app links to gh-pages subdirectory paths"
git push -u origin feat/update-root-links
gh pr create --title "fix: update root landing page links to gh-pages paths" --body "$(cat <<'EOF'
## Änderungen
- Alle 5 App-Karten in index.html zeigen jetzt auf die korrekten gh-pages-Unterverzeichnisse

## Testen
- [ ] Alle 5 Karten verlinken korrekt
- [ ] Kein toter Link

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

- [ ] **Step 4:** Merge PR and return to main

```bash
gh pr merge --squash --delete-branch
git checkout main && git pull
```

---

## Completion Checklist

After all tasks:
- [ ] All 5 apps build without TypeScript errors (`tsc -b && vite build`)
- [ ] All apps use shared Tailwind design tokens (consistent orange `chem-*` palette)
- [ ] All quiz apps have DifficultySelector + optional TimerRing
- [ ] All apps have Framer Motion transitions (slide, shake, pulse)
- [ ] ZMWW, Wechselwirkungen, and Gasreaktionen have Recharts boiling-point / volume charts
- [ ] GitHub Actions workflow deploys on push to main
- [ ] Root index.html links updated
