# ChemieApps Modernisierung — Design-Dokument

**Datum:** 2026-03-20
**Projekt:** ChemieApps (Johannes-Scharrer-Gymnasium)
**Ziel:** Alle Lern-Apps auf eine einheitliche, moderne Architektur migrieren und didaktisch/visuell verbessern.

---

## 1. Kontext

Das Projekt besteht aus 5 Chemie-Lern-Apps für Gymnasiasten (Klasse 9/10), gehostet auf GitHub Pages. Die Apps sind aktuell technisch heterogen: manche sind Plain HTML/JS (`Alkane-Verbrennungs-Trainer`, `Wechselwirkungen`, `Molekülpolarität`), andere nutzen bereits React + Vite + TypeScript (`ZMWW`, `Gasreaktionen`). Ziel ist eine vollständige Vereinheitlichung.

> **Hinweis:** Die bestehenden Apps `ZMWW` und `Gasreaktionen` enthalten einen `GEMINI_API_KEY` in ihrer `vite.config.ts`. Da wir kein Backend und keine externe API-Abhängigkeit wollen, **wird dieser Key im Zuge der Migration entfernt**. Betroffene Features, die den Key nutzen, werden identifiziert und entweder durch lokale Logik ersetzt oder entfernt.

---

## 2. Architektur-Entscheidung

**Gewählter Ansatz: Monorepo mit gemeinsamem Design-Token (Ansatz A)**

Ein einziges GitHub-Repository. Jede App ist eine vollständig unabhängige Vite-Applikation. Eine `shared/`-Mappe (neu zu erstellen als Teil der Migration) enthält ausschließlich Konfigurationsdateien — keine geteilten Komponenten.

```
ChemieApps/
├── shared/                            ← NEU: zu erstellen in Schritt 1
│   ├── tailwind.config.base.js        ← gemeinsame Design-Tokens
│   ├── tsconfig.base.json             ← gemeinsame TypeScript-Einstellungen
│   ├── eslint.config.base.js          ← gemeinsame Linting-Regeln
│   └── prettier.config.js             ← gemeinsame Formatierung
├── Molekulpolaritaet/                 ← ASCII-Ordnername (siehe Abschnitt 9)
├── ZMWW/
├── Gasreaktionen/
├── Alkane-Trainer/                    ← ASCII-Ordnername
├── Wechselwirkungen/
├── index.html                         ← Startseite (Plain HTML, vorerst)
└── .github/workflows/deploy.yml
```

**Bewusst nicht gewählt:**
- pnpm Workspaces (overkill für 5 unabhängige Apps)
- Single SPA mit React Router (würde Apps koppeln)

---

## 3. Tech-Stack

### Jede App

| Tool | Version | Zweck |
|------|---------|-------|
| Vite | 5 (latest) | Build-Tool, Dev-Server |
| React | 18 | UI-Framework |
| TypeScript | 5 (strict) | Typsicherheit |
| Tailwind CSS | **v3** | Styling (siehe Abschnitt 4) |
| Framer Motion | latest | Animationen |
| Recharts | latest | Daten-Graphen (wo sinnvoll) |
| ESLint + Prettier | latest | Code-Qualität |
| fontsource/inter | latest | Font (self-hosted, siehe Abschnitt 4) |

### Bewusst weggelassen
- Kein State-Management (Redux, Zustand) — `useState`/`useReducer` reicht
- Kein Backend, keine Auth, kein Gemini API Key
- Kein LocalStorage
- Kein Testing-Framework (kann später ergänzt werden)
- Kein Three.js / 3D (2D SVG reicht für didaktische Zwecke)

---

## 4. Design-System (`shared/`)

### Tailwind CSS v3 (nicht v4)

Wir verwenden **Tailwind CSS v3**, nicht v4. Begründung: Tailwind v4 hat die Konfiguration auf ein CSS-first-Modell umgestellt (`@theme` in CSS), was die Vererbung einer gemeinsamen `tailwind.config.js` erheblich komplizierter macht. Tailwind v3 erlaubt einfaches Extending:

```js
// shared/tailwind.config.base.js
module.exports = {
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        chem: {
          50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa',
          300: '#fdba74', 400: '#fb923c', 500: '#f97316',
          600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12'
        }
      }
    }
  },
  plugins: []
}
```

```js
// tailwind.config.js in jeder App
const baseConfig = require('../shared/tailwind.config.base')
module.exports = { ...baseConfig, content: ['./src/**/*.{tsx,ts,html}'] }
```

### Shared TypeScript Config

```json
// shared/tsconfig.base.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

```json
// tsconfig.json in jeder App
{ "extends": "../shared/tsconfig.base.json", "include": ["src"] }
```

### Font-Strategie

Font `Inter` wird **nicht** über Google Fonts CDN geladen (langsam, Datenschutz, offline-Probleme in Schulnetzwerken). Stattdessen via `@fontsource/inter`:

```ts
// main.tsx in jeder App
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
```

### Design-Tokens

- **Farbe:** Orange-Palette `chem-*`, identisch zur bestehenden Startseite
- **Radius:** `rounded-2xl` (Cards), `rounded-xl` (Buttons, Inputs)
- **Schatten:** subtil, `shadow-md` als Standard
- **Spacing:** 4px-Raster (Tailwind-Standard)

---

## 5. App-Struktur

Jede App folgt dieser einheitlichen Ordnerstruktur:

```
AppName/
├── src/
│   ├── main.tsx              ← React-Root, Font-Imports
│   ├── App.tsx               ← Haupt-Komponente
│   ├── components/           ← App-spezifische React-Komponenten
│   ├── data/                 ← Chemie-Daten als TypeScript-Objekte (kein JSON)
│   └── types.ts              ← Typdefinitionen (Difficulty, Question, etc.)
├── index.html
├── vite.config.ts            ← base: '/AppName/' (ASCII, siehe Abschnitt 9)
├── tailwind.config.js        ← extends shared/
├── tsconfig.json             ← extends shared/tsconfig.base.json
└── package.json
```

---

## 6. Gamification

### Schwierigkeitsgrade

Typ in jeder App:

```ts
type Difficulty = 'leicht' | 'mittel' | 'schwer'
```

Jedes Datenelement in `data/` hat ein `difficulty`-Feld. App-spezifische Definitionen:

| App | Leicht | Mittel | Schwer |
|-----|--------|--------|--------|
| Alkane-Trainer | C1–C4 | C5–C8 | C9–C12 |
| ZMWW | 3 Moleküle sortieren | 4 Moleküle | 5–6 Moleküle mit ähnl. Siedepunkten |
| Wechselwirkungen | London vs. H-Brücken (2 Typen) | + Dipol-Dipol | Alle 4 Krafttypen |
| Gasreaktionen | 2 Edukte, einfache Koeffizienten | 2 Edukte, komplexer | 3 Edukte |
| Molekülpolarität | Lineare/gewinkelte Moleküle | + trigonal-planar | + trigonal-pyramidal, tetraedrisch |

### Zeitmodus

- Optionaler Countdown-Timer als Toggle (standardmäßig aus)
- Verfügbare Dauern: **30 / 60 / 90 Sekunden**, wählbar per Dropdown
- Timer-Defaults sind **pro App** in `data/config.ts` konfigurierbar (manche Aufgaben brauchen länger)
- Kein Speichern des Ergebnisses
- Bei Ablauf: Overlay mit korrekter Antwort und "Nochmal"-Button
- Visuell: animierter SVG-Fortschrittsring (Framer Motion `pathLength`)

---

## 7. Animationen (Framer Motion)

| Situation | Animation | Implementierung |
|-----------|-----------|-----------------|
| Quiz-Kartenwechsel | Slide-In von rechts, Slide-Out nach links | `AnimatePresence` + `motion.div` |
| Richtige Antwort | Kurzer grüner Pulse auf der Karte | `animate={{ scale: [1, 1.03, 1] }}` |
| Falsche Antwort | Horizontales Shake | `animate={{ x: [-8, 8, -8, 8, 0] }}` |
| Molekül-SVG (Idle) | Subtiles vertikales Floating | `animate={{ y: [0, -6, 0] }}`, `repeat: Infinity` |
| Timer-Ring | Fortschrittsring läuft ab | `pathLength` von 1 → 0 über Countdown-Dauer |

---

## 8. Visualisierungen

- **Eigene SVGs + Framer Motion:** Moleküldarstellungen, Bindungsanimationen, Dipol-Pfeile — alle als React-Komponenten in `src/components/`
- **Recharts:** Siedepunkt-Vergleichsdiagramme (ZMWW, Wechselwirkungen), optional Fortschritts-Stats
- **Kein Three.js:** 2D reicht didaktisch vollständig aus

---

## 9. Ordnernamen und URL-Pfade

Aktuelle Ordnernamen enthalten Sonderzeichen (`Molekülpolarität`, `Alkane-Verbrennungs-Trainer`). Diese werden im Zuge der Migration zu **ASCII-konformen Namen** umbenannt, um Percent-Encoding-Probleme in GitHub Actions, Vite `base`-Paths und URLs zu vermeiden:

| Alt | Neu |
|-----|-----|
| `Molekülpolarität` | `Molekulpolaritaet` |
| `Alkane-Verbrennungs-Trainer` | `Alkane-Trainer` |
| `Wechselwirkungen` | `Wechselwirkungen` (bereits ASCII) |
| `ZMWW` | `ZMWW` (bereits ASCII) |
| `Gasreaktionen` | `Gasreaktionen` (bereits ASCII) |

Die Startseite (`index.html`) wird entsprechend aktualisiert.

---

## 10. Deployment (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        app: [Molekulpolaritaet, ZMWW, Gasreaktionen, Alkane-Trainer, Wechselwirkungen]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
        working-directory: ${{ matrix.app }}
      - run: npm run build
        working-directory: ${{ matrix.app }}
      - uses: actions/upload-artifact@v4
        with:
          name: dist-${{ matrix.app }}
          path: ${{ matrix.app }}/dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
    steps:
      - uses: actions/checkout@v4
      - name: Download all artifacts
        uses: actions/download-artifact@v4
        with: { path: staging/ }
      - name: Assemble site
        run: |
          cp index.html staging/
          for app in Molekulpolaritaet ZMWW Gasreaktionen Alkane-Trainer Wechselwirkungen; do
            mkdir -p site/$app
            cp -r staging/dist-$app/* site/$app/
          done
          cp index.html site/
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with: { path: site/ }
      - uses: actions/deploy-pages@v4
```

Jede App hat in `vite.config.ts`:
```ts
export default defineConfig({ base: '/ChemieApps/Molekulpolaritaet/' })
```

---

## 11. Migrations-Reihenfolge

1. **`shared/` aufsetzen** — Tailwind-Base, tsconfig.base, ESLint, Prettier, fontsource
2. **Pilot-App migrieren: `ZMWW`** — bereits Vite/TS, überschaubar, repräsentativ
3. **GitHub Actions Deployment einrichten** und mit ZMWW testen
4. **`Gasreaktionen` migrieren** — zweite bestehende Vite-App, Gemini-Key entfernen
5. **Plain-HTML-Apps migrieren:** `Wechselwirkungen`, `Molekulpolaritaet`, `Alkane-Trainer`
6. **Startseite updaten** — Links auf neue ASCII-Pfade anpassen
7. **Optional:** Startseite als eigene Vite-App migrieren

---

## 12. Nicht im Scope

- Lehrer-Dashboard / Klassenverwaltung
- Backend / Datenbank / externe APIs
- LocalStorage / Fortschritts-Tracking
- Mehrsprachigkeit
- PWA / Offline-Modus
- KI-Chatbot / Gemini-Integration
- Three.js / 3D-Visualisierungen
