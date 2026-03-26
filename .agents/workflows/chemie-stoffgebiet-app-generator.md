---
description: Blueprint und Best-Practices zur Erstellung neuer interaktiver Chemie-Apps (Vanilla JS/CSS/HTML)
---

# Generierung einer neuen Chemie-App

Immer wenn du (Antigravity) eine neue chemische Lern-App in diesem Repository generieren sollst, MUSST du strikt nach diesen Vorgaben vorgehen. Nutze diesen Architektur-Blueprint als "Best Practice".

## 1. Zero-Build Architektur
Verwende Vanilla HTML, CSS und JavaScript. **Nutze keine Build-Tools wie npm, Vite oder Webpack, sofern nicht ausdrücklich anders verlangt.** Verzichte nach Möglichkeit auf Tailwind, es sei denn, der User wünscht dies explizit. Das Design soll sich am bestehenden ChemieApps-Stil (Orange `primary`, Cyan `accent`, Glassmorphism) orientieren.

## 2. Struktur und Dateianforderungen
Erstelle für jede neue App im Root-Verzeichnis einen eigenen Ordner mit folgendem Inhalt:
- **`index.html`**: Hülle inkl. Header, Progress-Bar, Score-Display, Sidebar für Themen und Main Content-Area. Inkludiere einen Theme-Toggle (Light/Dark).
- **`style.css`**: Zentrale Datei mit CSS-Custom-Properties (`:root` und `:root[data-theme="dark"]`). Implementiere chemische Prozesse **ausschließlich** als CSS-Keyframe-Animationen (`@keyframes`). Nutze keine statischen Platzhalter-Bilder, sondern gestalte Molecule/Protonen real in CSS.
- **`app.js`**: Moderne ES6-Architektur (ohne globale Variablen). Kapsele die Logik in eindeutige Klassen:
  - `ThemeManager`
  - `ToastService`
  - `MiniGame` (mit Interaktion)
  - `AppController` (Zustandssteuerung)
  - Trennung von Daten und Logik: Sammle alle Texte und Quiz-Optionen im Array `TOPICS_DATA`.

## 3. Didaktische Vorgaben
Jede App muss folgendes beinhalten:
1. **Micro-Learning**: Jedes Thema auf einer eigenen Subseite/Card (dynamisch gerendert).
2. **Sofort-Feedback ("Fehlerteufel")**: Wenn der Schüler falsch antwortet, **muss** ein Callout angezeigt werden, der den spezifischen Denkfehler ("Mistake") erklärt.
3. **Gamification**: Baue ein Minispiel (z.B. Sortieren/Drop-Game) als letztes Kapitel ein, um den Lernstoff anzuwenden. Punkte/Highscore-Mechanismus implementieren.

## 4. Workaround-Ablauf beim Erstellen
1. Erstelle das Verzeichnis für das neue Thema.
2. Generiere `index.html`, `style.css` und `app.js` iterativ.
3. Trage die neue App anschließend ordnungsgemäß in die `index.html` des Haupt-Verzeichnisses ein.
// turbo-all
4. Checke den aktuellen Status per `git status` ein.
5. Commite die neuen Dateien (z.B. `git commit -am "feat: Add [Thema] App"`).
6. Pushe die Änderungen ins GitHub Repo.
