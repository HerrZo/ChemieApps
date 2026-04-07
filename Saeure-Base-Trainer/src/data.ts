import type { Topic } from './types'

export const TOPICS: Topic[] = [
  {
    id: 'broensted',
    title: '1. Brønsted-Theorie',
    content: `
      <p>Die klassische Säure-Base-Theorie nach Arrhenius wurde durch Johannes Nicolaus Brønsted und Thomas Martin Lowry erweitert. Diese Theorie legt den Fokus auf die Übertragung von Protonen (Wasserstoff-Ionen, H⁺).</p>
      <div class="proton-transfer-scene" style="margin: 32px 0;">
        <div class="block-entity" style="border-color: var(--error);">SÄURE<div class="proton-circle">H⁺</div></div>
        <div style="font-size: 2rem; opacity: 0.5;">⇌</div>
        <div class="block-entity" style="border-color: var(--accent);">BASE</div>
      </div>
      <ul>
        <li><strong>Säuren</strong> sind Protonendonatoren (Spender). Sie geben H⁺ ab.</li>
        <li><strong>Basen</strong> sind Protonenakzeptoren (Empfänger). Sie nehmen H⁺ auf.</li>
      </ul>
      <div class="callout">
        <div class="callout-title">💡 Protonenübergang</div>
        Damit eine Säure ein Proton abgeben kann, muss eine Base vorhanden sein, die es aufnimmt. Eine Säure-Base-Reaktion ist daher immer eine <strong>Protolyse</strong> (Protonenübertragung).
      </div>`,
    quiz: {
      question: 'Was macht ein Teilchen nach Brønsted zu einer Base?',
      options: [
        { text: 'Es gibt Protonen ab.', isCorrect: false, error: 'Das wäre eine Säure (Protonendonator).' },
        { text: 'Es nimmt Protonen auf.', isCorrect: true },
        { text: 'Es enthält Sauerstoff.', isCorrect: false, error: 'Sauerstoff ist nicht zwingend erforderlich (z.B. NH₃ ist eine Base).' },
      ],
    },
  },
  {
    id: 'reaktion_wasser',
    title: '2. Reaktion mit Wasser',
    content: `
      <p>Säuren und Basen reagieren mit Wasser. Das Wasser agiert dabei als Reaktionspartner.</p>
      <h3>Reaktion einer Säure mit Wasser</h3>
      <p>Die Säure gibt ein Proton an das Wasser ab. Es entsteht das <strong>Oxonium-Ion (H₃O⁺)</strong>. Die Lösung wird sauer.</p>
      <div class="equation-row">
        <span class="eq-part">HCl</span> + <span class="eq-part">H₂O</span> ⇌
        <span class="eq-part proton">H₃O⁺</span> + <span class="eq-part">Cl⁻</span>
      </div>
      <h3>Reaktion einer Base mit Wasser</h3>
      <p>Die Base nimmt ein Proton vom Wasser auf. Es entsteht das <strong>Hydroxid-Ion (OH⁻)</strong>. Die Lösung wird basisch.</p>
      <div class="equation-row">
        <span class="eq-part">NH₃</span> + <span class="eq-part">H₂O</span> ⇌
        <span class="eq-part">NH₄⁺</span> + <span class="eq-part proton" style="color:var(--accent)">OH⁻</span>
      </div>`,
    quiz: {
      question: 'Welches Ion ist für die saure Eigenschaft einer Lösung verantwortlich?',
      options: [
        { text: 'Hydroxid-Ion (OH⁻)', isCorrect: false, error: 'OH⁻ ist charakteristisch für basische Lösungen.' },
        { text: 'Oxonium-Ion (H₃O⁺)', isCorrect: true },
        { text: 'Chlorid-Ion (Cl⁻)', isCorrect: false, error: 'Cl⁻ ist das Gegenion und neutral.' },
      ],
    },
  },
  {
    id: 'stoff_loesung',
    title: '3. Stoff vs. Lösung',
    content: `
      <p>Es ist wichtig, zwischen dem reinen Stoff und seiner wässrigen Lösung zu unterscheiden.</p>
      <div class="callout error">
        <div class="callout-title">⚠️ Häufiger Fehler</div>
        Oft wird "Säure" und "saure Lösung" als Synonym verwendet. Das ist chemisch unpräzise!
      </div>
      <ul>
        <li><strong>Säure / Base (Stoff):</strong> Der Reinstoff, z. B. Chlorwasserstoff-Gas (HCl) oder festes Natriumhydroxid (NaOH). In diesem Zustand messen wir keinen pH-Wert.</li>
        <li><strong>Saure / basische Lösung:</strong> Das Gemisch, das entsteht, wenn der Stoff mit Wasser reagiert. Erst durch die Bildung von H₃O⁺- oder OH⁻-Ionen wird die Lösung sauer oder basisch. Z.B. "Salzsäure" ist die wässrige Lösung des Gases HCl.</li>
      </ul>`,
    quiz: {
      question: "Was ist 'Salzsäure' im chemischen Sinne?",
      options: [
        { text: 'Der Reinstoff Chlorwasserstoff (HCl)', isCorrect: false, error: 'Das ist das reine Gas (die Säure), aber keine Lösung.' },
        { text: 'Eine wässrige Lösung, die H₃O⁺ und Cl⁻ Ionen enthält', isCorrect: true },
        { text: 'Flüssiges Wasserstoffgas', isCorrect: false },
      ],
    },
  },
  {
    id: 'molekuelbau',
    title: '4. Acidität und Molekülbau',
    content: `
      <p>Warum geben manche Moleküle leicht Protonen ab (starke Säuren), während andere es kaum tun?</p>
      <p>Die <strong>Acidität</strong> (Säurestärke) und Basenstärke hängt stark vom Molekülbau ab:</p>
      <ol>
        <li><strong>Elektronegativität:</strong> Je polarer die Bindung zum Wasserstoffatom, desto leichter kann sich das H⁺-Ion abspalten. (Z.B. H-Cl ist stärker polar als H-C, deshalb ist HCl sauer und CH₄ nicht).</li>
        <li><strong>Atomgröße &amp; Bindungslänge:</strong> Bei längeren und schwächeren Bindungen löst sich das Proton leichter (HI ist stärkere Säure als HF, da die H-I Bindung viel länger ist).</li>
        <li><strong>Stabilität des Säurerest-Ions:</strong> Wird die negative Ladung des entstehenden Ions (z.B. durch Mesomerie/Delokalisierung) gut stabilisiert, gibt das Molekül das Proton bereitwilliger ab.</li>
      </ol>`,
    quiz: {
      question: 'Welcher Faktor erleichtert die Abspaltung eines Protons (hohe Acidität)?',
      options: [
        { text: 'Eine unpolare C-H Bindung', isCorrect: false, error: 'Unpolare Bindungen spalten keine H⁺-Ionen ab.' },
        { text: 'Eine kurze und extrem starke H-F Bindung', isCorrect: false, error: 'Starke Bindungen verhindern die Abspaltung. HF ist schwächer als HCl.' },
        { text: 'Eine hohe Polarität der H-X Bindung und Stabilität des Restions', isCorrect: true },
      ],
    },
  },
  {
    id: 'salze',
    title: '5. Sauer & basisch wirkende Salze',
    content: `
      <p>Salzlösungen sind nicht immer pH-neutral! Manche Ionen können mit Wasser als Säure oder Base reagieren.</p>
      <p><strong>Sauer wirkendes Salz:</strong> Ammoniumchlorid (NH₄Cl)</p>
      <div class="solution-scene">
        <div class="crystal-block">NH₄Cl (s)</div>
        <div class="ion-block ion-cation ion-split-left">NH₄⁺ (aq)</div>
        <div class="ion-block ion-anion ion-split-right">Cl⁻ (aq)</div>
      </div>
      <div class="equation-row">NH₄⁺ + H₂O ⇌ NH₃ + <span class="proton">H₃O⁺</span></div>
      <p style="margin-bottom: 24px;">Das Ammonium-Ion (NH₄⁺) ist eine schwache Säure und gibt ein Proton an Wasser ab.</p>
      <p><strong>Basisch wirkendes Salz:</strong> Natriumcarbonat (Na₂CO₃)</p>
      <div class="solution-scene">
        <div class="crystal-block">Na₂CO₃ (s)</div>
        <div class="ion-block ion-cation ion-split-left">2 Na⁺ (aq)</div>
        <div class="ion-block ion-anion ion-split-right" style="background:var(--accent-light); color:var(--neutral-900);">CO₃²⁻ (aq)</div>
      </div>
      <div class="equation-row">CO₃²⁻ + H₂O ⇌ HCO₃⁻ + <span class="proton" style="color:var(--accent)">OH⁻</span></div>
      <p>Das Carbonat-Ion (CO₃²⁻) ist eine Base und nimmt ein Proton von Wasser auf.</p>`,
    quiz: {
      question: 'Warum reagiert eine Lösung von Natriumacetat (NaCH₃COO) leicht basisch?',
      options: [
        { text: 'Weil Natriumionen OH⁻ bilden.', isCorrect: false, error: 'Na⁺ Ionen reagieren in Wasser neutral.' },
        { text: 'Das Acetat-Ion (CH₃COO⁻) nimmt ein Proton vom Wasser auf, wobei OH⁻ entsteht.', isCorrect: true },
        { text: 'Weil das Salz stark alkalisch riecht.', isCorrect: false },
      ],
    },
  },
  {
    id: 'ampholyte',
    title: '6. Ampholyte',
    content: `
      <p>Manche Teilchen können sowohl Protonen aufnehmen als auch abgeben. Sie heißen <strong>Ampholyte</strong>.</p>
      <p>Das wichtigste Beispiel ist Wasser (H₂O):</p>
      <ul>
        <li>Als <strong>Base</strong>: reagiert mit HCl zu H₃O⁺.</li>
        <li>Als <strong>Säure</strong>: reagiert mit NH₃ zu OH⁻.</li>
      </ul>
      <div class="callout">
        <div class="callout-title">💧 Weitere Ampholyte</div>
        Ionen aus mehrprotonigen Säuren, z.B. Hydrogencarbonat (HCO₃⁻) oder Dihydrogenphosphat (H₂PO₄⁻). Sie haben immer <strong>mindestens ein abspaltbares H-Atom</strong> und eine <strong>negative Ladung / freies Elektronenpaar</strong>.
      </div>`,
    quiz: {
      question: 'Welche Eigenschaft macht ein Teilchen zum Ampholyt?',
      options: [
        { text: 'Es ist zwingend flüssig wie Wasser.', isCorrect: false },
        { text: 'Es kann sowohl als Protonendonator als auch als Protonenakzeptor wirken.', isCorrect: true },
        { text: 'Es hat einen neutralen pH-Wert von 7.', isCorrect: false, error: 'Ampholytlösungen wie NaHCO₃ können je nach Gleichgewicht leicht basisch oder sauer sein.' },
      ],
    },
  },
  {
    id: 'neutralisation',
    title: '7. Umkehrbarkeit & Neutralisation',
    content: `
      <p>Protolyse-Reaktionen sind meist <strong>umkehrbar</strong> und führen zu einem chemischen Gleichgewicht (⇌).</p>
      <h3>Die Neutralisation</h3>
      <p>Wenn eine saure und eine basische Lösung im richtigen Verhältnis vermischt werden, neutralisieren sie sich. Die eigentliche Neutralisationsreaktion ist die Kombination von Oxonium- und Hydroxidionen zu Wasser:</p>
      <div class="neutralization-scene">
        <div class="ion-block ion-h3o">H₃O⁺</div>
        <div class="ion-block ion-oh">OH⁻</div>
        <div class="flash-bang">💥</div>
        <div class="water-molecule wm-left">H₂O</div>
        <div class="water-molecule wm-right">H₂O</div>
      </div>
      <div class="equation-row" style="font-weight:bold;">H₃O⁺ + OH⁻ ⟶ 2 H₂O</div>
      <p>Diese Reaktion ist <strong>exotherm</strong> (setzt Wärmeenergie frei).</p>
      <p>Das verbleibende Metallkation (aus der Base) und der Säurerest ergeben zusammen gelöstes <strong>Salz</strong>.</p>`,
    quiz: {
      question: 'Was ist die entscheidende Teilchenreaktion bei einer typischen Neutralisation?',
      options: [
        { text: 'Reaktion von Säurerestionen mit Metallkationen', isCorrect: false, error: 'Diese bilden lediglich das gelöste Salz, sind aber für die pH-Änderung nicht ausschlaggebend.' },
        { text: 'Sauerstoff und Wasserstoff reagieren zu Wasser', isCorrect: false },
        { text: 'Oxonium-Ionen reagieren mit Hydroxid-Ionen zu Wasser (H₃O⁺ + OH⁻ ⟶ 2 H₂O)', isCorrect: true },
      ],
    },
  },
  {
    id: 'minigame',
    title: '8. Minispiel: Drop-Game',
    content: `<p>Wende dein Wissen spielerisch an! Handelt es sich bei dem gezeigten Teilchen eher um eine typische Brønsted-Säure oder Base?</p>`,
  },
]

export const GAME_ITEMS = [
  { label: 'HCl', type: 'Säure' as const },
  { label: 'NaOH', type: 'Base' as const },
  { label: 'H₂SO₄', type: 'Säure' as const },
  { label: 'NH₃', type: 'Base' as const },
  { label: 'H₃O⁺', type: 'Säure' as const },
  { label: 'OH⁻', type: 'Base' as const },
  { label: 'HNO₃', type: 'Säure' as const },
  { label: 'CO₃²⁻', type: 'Base' as const },
  { label: 'NH₄⁺', type: 'Säure' as const },
  { label: 'CH₃COO⁻', type: 'Base' as const },
]
