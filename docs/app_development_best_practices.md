# 🚀 Blueprint: Entwicklung interaktiver Chemie-Apps

Dieses Dokument fasst die wichtigsten "Best Practices" und Architektur-Erkenntnisse aus der sehr erfolgreichen Erstellung des **Säure-Base-Trainers** zusammen. Wenn du dich an dieses Muster hältst, kannst du zukünftige Lern-Apps extrem schnell, ressourcenschonend und auf professionellem Niveau hochziehen.

## 1. Architektur & Setup (Zero-Build SPA)
- **Vanilla Tech-Stack**: Ein moderner Stack ohne komplizierte Build-Umgebungen (kein Webpack, kein npm/Vite). Du brauchst nur HTML, CSS und JS. Das Deployment (z.B. auf GitHub Pages) ist out-of-the-box möglich.
- **Single Page Application (SPA)**: Eine einzige statische `index.html` dient als Hülle (App-Shell). Der spezifische Fach-Content (die Kapitel) wird dynamisch mittels JavaScript in den DOM (`#content-area`) gepusht. Positiver Nebeneffekt: Es gibt keine Seitenladezeiten während der Bearbeitung ("App Feeling").

## 2. JavaScript: Objektorientiert (ES6 Classes)
Verzichte künftig auf globale Variablen und "Spaghetti-Code". Optimiere den Code durch strikte Aufteilung in übersichtliche, isolierte **Klassen**:

* **`AppController`**: Orchestriert den Zustand (z.B. aktuelles Kapitel, `state.score`, `state.streak`), die Event-Listener der Menüpunkte und das Injezieren des HTMLs.
* **`ThemeManager`**: Steuert zentral den Dark/Light Mode. Wertet `window.matchMedia` und `localStorage` aus.
* **`ToastService`**: Globales Modul zur Anzeige temporärer Status-Meldungen (z.B. "Richtig gemerkt!").
* **`MiniGame`**: Eine separate Klasse, die eventuelle Gamification-Module (wie das Drop-Game) kapselt.
* **Das Daten-Modell (`TOPICS_DATA`)**: Trenne den Fachinhalt vom Code. Lagere das Array mit den fachlichen HTML-Strings und strukturierten Quiz-Fragen nach ganz oben aus.

## 3. Design-System & Visuals (CSS)
- **CSS-Custom-Properties (`:root`)**: Farben, Margins und Shadows immer zentral definieren. 
  - *Dark Mode Trick*: Definiere einfach das Set an Variablen unter `:root[data-theme="dark"]` noch einmal um. Der Browser erledigt den Rest via CSS-Propagation.
- **Glassmorphism**: Nutze halbtransparente Hintergründe in Kombination mit `backdrop-filter: blur(16px)`. Das erzeugt sofort einen Premium-Eindruck.
- **Tipp für Chemie-Grafiken**: Vermeide statische JPG/PNG Bilder für Prozesse. **CSS Keyframe-Animationen (`@keyframes`)** eignen sich überragend gut, um Protonenübergänge (Translate-Animation), Ionengitterzerfall (Scale + Blur Animation) oder einfache Stöße von Molekülen interaktiv und auf jedem Handydisplay scharf darzustellen.

## 4. Fachdidaktik & Gamification 🧠
- **Micro-Learning**: Präsentiere nie eine endlose Scroll-Seite (wie bei Wikipedia). Portioniere Konzepte in kleine `Cards`, die nacheinander freigeschaltet und bearbeitet werden.
- **Targeted Feedback ("Fehlerteufel")**: Im Quiz-Abschnitt reicht es nicht, Antworten rot zu markieren. Hinterlege im JSON-Datenmodell zu *jeder typischen falschen Antwort* eine spezifische Rückmeldung, warum der Schüler falsch denkt.
- **XP & Streaks**: Binde direkt oben einen Highscore, ein "Streak"-Feuer-Symbol und einen Progress-Balken ein, um unbewusste Gamification-Anreize zu setzen.

## 5. Dein Workflow für die nächste App
Um in Zukunft eine ähnliche App z.B. zum Thema "Redoxreaktionen" aufzusetzen, machst du nur noch folgendes:
1. Kopiere und verwende die drei Blueprint-Dateien (`index.html`, `style.css`, `app.js`).
2. Ersetze in `app.js` das Array `TOPICS_DATA` mit den Texten & Quizzes der Redox-Kapitel.
3. Lege in der `style.css` eine zur App passende Primär- und Akzentfarbe für die Header/Buttons fest.
4. Bastele optional neue CSS-Klassen für spezifische Teilchenanimationen (z.B. tanzende e⁻-Ionen in `@keyframes`).
