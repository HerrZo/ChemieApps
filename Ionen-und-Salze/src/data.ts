import type { Topic, SaltItem } from './types'

export const TOPICS: Topic[] = [
  {
    id: 'ionen_einfuehrung',
    title: '1. Was sind Ionen?',
    content: `
      <p>Ein <strong>Ion</strong> ist ein elektrisch geladenes Teilchen, das entsteht, wenn ein Atom Elektronen aufnimmt oder abgibt.</p>
      <h3>Atom → Ion</h3>
      <p>Metalle geben Elektronen ab → <strong>Kationen</strong> (positiv).<br>
      Nichtmetalle nehmen Elektronen auf → <strong>Anionen</strong> (negativ).</p>
      <div class="ion-vis-container">
        <div class="atom-ion-compare">
          <div class="particle-card">
            <div class="particle-sphere neutral">Li</div>
            <div class="particle-label">Lithium-Atom<br>3 p⁺, 3 e⁻ → neutral</div>
          </div>
          <div style="font-size:2rem;color:var(--primary);font-weight:700;">→ −1 e⁻ →</div>
          <div class="particle-card">
            <div class="particle-sphere cation">Li<span class="charge-badge">+</span></div>
            <div class="particle-label">Lithium-<strong>Ion</strong><br>3 p⁺, 2 e⁻ → positiv</div>
          </div>
        </div>
      </div>
      <div class="callout">
        <div class="callout-title">💡 Wichtiger Unterschied</div>
        Ein Lithium-<strong>Atom</strong> (Li) ist elektrisch neutral. Ein Lithium-<strong>Ion</strong> (Li⁺) hat ein Elektron weniger und ist positiv geladen.
      </div>`,
    quiz: {
      question: 'Was unterscheidet ein Ion von einem Atom?',
      options: [
        { text: 'Ein Ion hat eine andere Anzahl an Protonen.', isCorrect: false, error: 'Die Protonenzahl ändert sich nicht – sonst wäre es ein anderes Element! Nur die Elektronenzahl ändert sich.' },
        { text: 'Ein Ion hat eine andere Anzahl an Elektronen und damit eine elektrische Ladung.', isCorrect: true },
        { text: 'Ionen sind einfach größere Atome.', isCorrect: false, error: 'Ionen haben eine Ladung – das ist das entscheidende Merkmal.' },
      ],
    },
  },
  {
    id: 'aufbau_salze',
    title: '2. Aufbau von Salzen',
    content: `
      <p>Salze bestehen aus zwei Arten von Ionen:</p>
      <ul>
        <li><strong>Kationen</strong> (positiv) – meist Metall-Ionen, z. B. Na⁺, Ca²⁺, Al³⁺</li>
        <li><strong>Anionen</strong> (negativ) – meist Nichtmetall-Ionen, z. B. Cl⁻, O²⁻, S²⁻</li>
      </ul>
      <div class="ion-vis-container">
        <div class="atom-ion-compare">
          <div class="particle-card">
            <div class="particle-sphere cation">Na<span class="charge-badge">+</span></div>
            <div class="particle-label">Natrium-Kation</div>
          </div>
          <div style="font-size:2.5rem;font-weight:700;">+</div>
          <div class="particle-card">
            <div class="particle-sphere anion">Cl<span class="charge-badge">−</span></div>
            <div class="particle-label">Chlorid-Anion</div>
          </div>
          <div style="font-size:2.5rem;font-weight:700;">→</div>
          <div class="particle-card">
            <div class="particle-sphere" style="background:linear-gradient(135deg,#ef4444 50%,#3b82f6 50%);color:white;font-size:1.1rem;">NaCl</div>
            <div class="particle-label"><strong>Natriumchlorid</strong></div>
          </div>
        </div>
      </div>
      <div class="callout">
        <div class="callout-title">🔑 Merke</div>
        Die Summe aller positiven Ladungen ist gleich der Summe aller negativen → das Salz ist insgesamt <strong>elektrisch neutral</strong>.
      </div>`,
    quiz: {
      question: 'Woraus bestehen Salze?',
      options: [
        { text: 'Aus Molekülen wie bei Wasser.', isCorrect: false, error: 'Salze bestehen NICHT aus Molekülen, sondern aus Ionen!' },
        { text: 'Aus Metall-Kationen und Nichtmetall-Anionen, die sich gegenseitig anziehen.', isCorrect: true },
        { text: 'Aus neutralen Atomen in einem festen Gitter.', isCorrect: false, error: 'Die Teilchen im Salz sind geladen (Ionen), nicht neutral!' },
      ],
    },
  },
  {
    id: 'ionengitter',
    title: '3. Ionengitter & Ionenbindung',
    content: `
      <p>Ionen ordnen sich in einem regelmäßigen, dreidimensionalen Muster an – dem <strong>Ionengitter</strong>. Die Anziehungskraft zwischen entgegengesetzt geladenen Ionen heißt <strong>Ionenbindung</strong>.</p>
      <div class="ion-vis-container">
        <p style="font-weight:600;margin-bottom:12px;">Ionengitter von NaCl (vereinfachte 2D-Darstellung)</p>
        <div class="lattice-grid" id="lattice-nacl"></div>
        <p style="margin-top:12px;font-size:0.9rem;opacity:0.7;">🔴 Na⁺ &nbsp; 🔵 Cl⁻</p>
      </div>
      <ul>
        <li>Jedes Ion ist von <strong>Gegenionen</strong> umgeben → maximale Anziehung.</li>
        <li>Es gibt <strong>keine einzelnen Moleküle</strong> im Ionengitter!</li>
      </ul>
      <div class="callout">
        <div class="callout-title">💡 Ungerichtet</div>
        Die Ionenbindung ist <strong>ungerichtet</strong> – jedes Ion zieht alle Gegenionen in seiner Umgebung an.
      </div>`,
    quiz: {
      question: 'Warum gibt es im Ionengitter keine einzelnen Moleküle?',
      options: [
        { text: 'Weil die Ionen flüssig sind.', isCorrect: false, error: 'Im festen Salzkristall sind Ionen NICHT flüssig.' },
        { text: 'Weil jedes Ion von mehreren Gegenionen umgeben ist und die Bindung ungerichtet wirkt.', isCorrect: true },
        { text: 'Weil Salze nur aus einem Element bestehen.', isCorrect: false, error: 'Salze bestehen aus mindestens zwei verschiedenen Elementen.' },
      ],
    },
  },
  {
    id: 'modelle_gitter',
    title: '4. Modelle des Ionengitters',
    content: `
      <p>Es gibt zwei wichtige Modelle zur Darstellung eines Ionengitters:</p>
      <h3>1. Kugelpackungsmodell</h3>
      <p>Zeigt die tatsächlichen Größenverhältnisse: Na⁺ ist <strong>kleiner</strong> als Cl⁻!</p>
      <div class="ion-vis-container">
        <div class="packing-container" id="packing-nacl"></div>
        <p style="font-size:0.85rem;opacity:0.7;margin-top:8px;">🔴 Na⁺ (klein) &nbsp; 🔵 Cl⁻ (groß)</p>
      </div>
      <h3>2. Kugel-Stab-Modell</h3>
      <p>Zeigt die Abstände und Verbindungen zwischen Ionen deutlicher.</p>
      <div class="ion-vis-container" id="ball-stick-model"></div>`,
    quiz: {
      question: 'Was zeigt das Kugelpackungsmodell besonders gut?',
      options: [
        { text: 'Die Ladungen der Ionen.', isCorrect: false, error: 'Die Ladung lässt sich nicht direkt ablesen.' },
        { text: 'Die tatsächlichen Größenverhältnisse der Ionen.', isCorrect: true },
        { text: 'Die chemische Formel des Salzes.', isCorrect: false },
      ],
    },
  },
  {
    id: 'verhaeltnisformel',
    title: '5. Verhältnisformel & Überkreuzregel',
    content: `
      <p>Die <strong>Verhältnisformel</strong> gibt an, in welchem ganzzahligen Verhältnis Kationen und Anionen im Salz vorliegen.</p>
      <p>Die <strong>Überkreuzregel</strong>: Die Ladungszahl des Kations wird zur Anzahl der Anionen und umgekehrt.</p>
      <div class="cross-rule-animated" id="cross-rule-anim">
        <div class="cr-example">
          <span class="cr-ion cr-cat-ex">Al³⁺</span>
          <span style="font-size:1.5rem;margin:0 8px;">+</span>
          <span class="cr-ion cr-an-ex">O²⁻</span>
          <span style="font-size:1.5rem;margin:0 8px;">→</span>
          <span class="cr-result-ex">Al₂O₃</span>
        </div>
        <p style="font-size:0.9rem;opacity:0.7;margin-top:8px;">3 kreuzt → 2 Sauerstoffe; 2 kreuzt → 2 Aluminiums</p>
      </div>`,
    quiz: {
      question: 'Welche Formel ergibt sich für ein Salz aus Ca²⁺ und Cl⁻?',
      options: [
        { text: 'CaCl (1:1)', isCorrect: false, error: 'Ein Ca²⁺ muss zwei Cl⁻ binden, damit die Ladungen ausgeglichen sind.' },
        { text: 'CaCl₂ (1:2)', isCorrect: true },
        { text: 'Ca₂Cl (2:1)', isCorrect: false, error: 'Überkreuzregel: Die Ladung 2 von Ca²⁺ gibt 2 Cl⁻ und die Ladung 1 von Cl⁻ gibt 1 Ca²⁺.' },
      ],
    },
  },
  {
    id: 'molekuelionen',
    title: '6. Molekülionen (Polyatomare Ionen)',
    content: `
      <p><strong>Molekülionen</strong> (auch polyatomare Ionen) sind Ionengruppen, die aus mehreren Atomen bestehen und gemeinsam eine Ladung tragen.</p>
      <p>Wichtige Beispiele:</p>
      <table class="ion-table">
        <tr><th>Ion</th><th>Name</th><th>Ladung</th></tr>
        <tr><td>SO₄²⁻</td><td>Sulfat</td><td>2−</td></tr>
        <tr><td>NH₄⁺</td><td>Ammonium</td><td>1+</td></tr>
        <tr><td>OH⁻</td><td>Hydroxid</td><td>1−</td></tr>
        <tr><td>NO₃⁻</td><td>Nitrat</td><td>1−</td></tr>
        <tr><td>CO₃²⁻</td><td>Carbonat</td><td>2−</td></tr>
        <tr><td>PO₄³⁻</td><td>Phosphat</td><td>3−</td></tr>
      </table>`,
    quiz: {
      question: 'Welche Aussage über Molekülionen (polyatomare Ionen) ist korrekt?',
      options: [
        { text: 'Sie bestehen immer aus nur einem Atom.', isCorrect: false, error: 'Das wären einfache Ionen. Molekülionen bestehen aus mehreren Atomen!' },
        { text: 'Sie sind immer negativ geladen.', isCorrect: false, error: 'NH₄⁺ ist ein positiv geladenes Molekülion!' },
        { text: 'Sie bestehen aus mehreren Atomen, die gemeinsam eine Ladung tragen.', isCorrect: true },
      ],
    },
  },
  {
    id: 'nomenklatur',
    title: '7. Benennung von Salzen',
    content: `
      <p>Der Name eines Salzes setzt sich zusammen aus:</p>
      <ol>
        <li><strong>Name des Anions</strong> (zuerst) – meistens Nichtmetall-Name mit Endung <strong>-id</strong> (oder bei Molekülionen der Eigenname)</li>
        <li><strong>Name des Kations</strong> (danach) – Metallname</li>
      </ol>
      <div class="callout">
        <div class="callout-title">📌 Beispiele</div>
        <ul>
          <li>NaCl → Natrium<strong>chlorid</strong> (Chlor → Chlorid)</li>
          <li>CaO → Calcium<strong>oxid</strong> (Sauerstoff → Oxid)</li>
          <li>MgS → Magnesium<strong>sulfid</strong> (Schwefel → Sulfid)</li>
          <li>K₂SO₄ → Kalium<strong>sulfat</strong> (Sulfat-Ion)</li>
        </ul>
      </div>`,
    quiz: {
      question: 'Wie lautet der Name des Salzes MgO?',
      options: [
        { text: 'Magnesiumsulfid', isCorrect: false, error: 'Sulfid wäre S²⁻. Hier ist O²⁻ das Anion.' },
        { text: 'Magnesiumoxid', isCorrect: true },
        { text: 'Oxid-Magnesium', isCorrect: false, error: 'Die Reihenfolge ist: Anionname + Metallname, zusammengeschrieben.' },
      ],
    },
  },
  {
    id: 'eigenschaften',
    title: '8. Eigenschaften von Salzen',
    content: `
      <p>Salze haben charakteristische Eigenschaften, die direkt aus ihrem Ionengitter folgen:</p>
      <ul>
        <li><strong>Hohe Schmelzpunkte:</strong> Das Gitter muss aufgebrochen werden → viel Energie nötig.</li>
        <li><strong>Sprödigkeit:</strong> Beim Verschieben stoßen gleichnamige Ionen aneinander → das Gitter bricht.</li>
        <li><strong>Elektrische Leitfähigkeit:</strong> Nur wenn Ionen beweglich sind (geschmolzen oder gelöst)!</li>
      </ul>
      <h3>Elektrische Leitfähigkeit im Vergleich</h3>
      <div class="cond-container" id="conductivity-demo"></div>`,
    quiz: {
      question: 'Wann leitet festes NaCl den elektrischen Strom?',
      options: [
        { text: 'Immer, da es Ionen enthält.', isCorrect: false, error: 'Im festen Kristall sind die Ionen fixiert und können sich nicht bewegen.' },
        { text: 'Niemals.', isCorrect: false, error: 'Wenn NaCl schmilzt oder sich in Wasser löst, werden die Ionen beweglich und leiten Strom.' },
        { text: 'Nicht im festen Zustand – nur wenn es schmilzt oder sich in Wasser löst.', isCorrect: true },
      ],
    },
  },
  {
    id: 'minigame',
    title: '9. Minispiel: Formel ↔ Name',
    content: `<p>Teste dein Wissen! Gib entweder die chemische Formel oder den deutschen Namen des Salzes ein.</p>`,
  },
]

export const SALT_ITEMS: SaltItem[] = [
  { name: 'Natriumchlorid', formula: 'NaCl' },
  { name: 'Calciumoxid', formula: 'CaO' },
  { name: 'Magnesiumoxid', formula: 'MgO' },
  { name: 'Kaliumsulfat', formula: 'K2SO4' },
  { name: 'Calciumchlorid', formula: 'CaCl2' },
  { name: 'Aluminiumoxid', formula: 'Al2O3' },
  { name: 'Natriumhydroxid', formula: 'NaOH' },
  { name: 'Ammoniumchlorid', formula: 'NH4Cl' },
  { name: 'Calciumhydroxid', formula: 'Ca(OH)2' },
  { name: 'Natriumsulfat', formula: 'Na2SO4' },
  { name: 'Kaliumnitrat', formula: 'KNO3' },
  { name: 'Magnesiumbromid', formula: 'MgBr2' },
]
