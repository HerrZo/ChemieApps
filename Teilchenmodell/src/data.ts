export interface ParticleStateInfo {
  id: 'solid' | 'liquid' | 'gas';
  name: string;
  nameWithSymbol: string;
  tempRange: string;
  arrangement: string;
  motion: string;
  forces: string;
  shape: string;
  volume: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  iconName: string;
}

export const STATES_INFO: Record<'solid' | 'liquid' | 'gas', ParticleStateInfo> = {
  solid: {
    id: 'solid',
    name: 'Fest',
    nameWithSymbol: 'Fest (Solidus, s)',
    tempRange: 'T < 0 °C (bei Wasser)',
    arrangement: 'Regelmäßiges Kristallgitter mit minimalen Hohlräumen',
    motion: 'Teilchen zittern/schwingen nur um feste Gleichgewichtslagen',
    forces: 'Sehr starke zwischenmolekulare Anziehungskräfte (Gitterbindung)',
    shape: 'Beständig (eigene feste Form)',
    volume: 'Konstant (nahezu inkompressibel)',
    color: '#0284c7',
    badgeBg: 'bg-sky-100 dark:bg-sky-950/60',
    badgeText: 'text-sky-800 dark:text-sky-200',
    iconName: 'cube'
  },
  liquid: {
    id: 'liquid',
    name: 'Flüssig',
    nameWithSymbol: 'Flüssig (Liquiditas, l)',
    tempRange: '0 °C ≤ T < 100 °C (bei Wasser)',
    arrangement: 'Dichte, unregelmäßige Packung; keine Fernordnung',
    motion: 'Teilchen berühren sich ständig, gleiten aber frei aneinander vorbei',
    forces: 'Mittlere Anziehungskräfte (Kohäsion hält Teilchen zusammen)',
    shape: 'Variabel (passt sich der Gefäßform an)',
    volume: 'Konstant (kaum komprimierbar)',
    color: '#06b6d4',
    badgeBg: 'bg-cyan-100 dark:bg-cyan-950/60',
    badgeText: 'text-cyan-800 dark:text-cyan-200',
    iconName: 'droplet'
  },
  gas: {
    id: 'gas',
    name: 'Gasförmig',
    nameWithSymbol: 'Gasförmig (Gaseus, g)',
    tempRange: 'T ≥ 100 °C (bei Wasser)',
    arrangement: 'Völlig ungeordnet, extrem große mittlere Abstände',
    motion: 'Freie, ungeordnete Bewegung mit hoher Geschwindigkeit',
    forces: 'Vernachlässigbar gering (nur bei kurzen Stößen spürbar)',
    shape: 'Variabel (verteilt sich im gesamten Raum)',
    volume: 'Variabel (leicht komprimierbar)',
    color: '#ea580c',
    badgeBg: 'bg-orange-100 dark:bg-orange-950/60',
    badgeText: 'text-orange-800 dark:text-orange-200',
    iconName: 'wind'
  }
};

export interface PhaseTransition {
  from: string;
  to: string;
  name: string;
  energyChange: 'endotherm' | 'exotherm';
  description: string;
}

export const PHASE_TRANSITIONS: PhaseTransition[] = [
  { from: 'fest', to: 'flüssig', name: 'Schmelzen', energyChange: 'endotherm', description: 'Gitterenergie wird durch Wärmezufuhr überwunden; Teilchen lösen sich aus festen Plätzen.' },
  { from: 'flüssig', to: 'fest', name: 'Erstarren', energyChange: 'exotherm', description: 'Bei Wärmeabgabe sinkt die Teilchenbewegung; Anziehungskräfte fesseln Teilchen wieder ins Gitter.' },
  { from: 'flüssig', to: 'gasförmig', name: 'Verdampfen / Sieden', energyChange: 'endotherm', description: 'Kinetische Energie überwindet Kohäsionskräfte vollständig; Teilchen verlassen den Verband.' },
  { from: 'gasförmig', to: 'flüssig', name: 'Kondensieren', energyChange: 'exotherm', description: 'Teilchen verlangsamen sich und lagern sich unter Energieabgabe wieder aneinander.' },
  { from: 'fest', to: 'gasförmig', name: 'Sublimieren', energyChange: 'endotherm', description: 'Direkter Übergang von fest zu gasförmig (z. B. Trockeneis, Iod) ohne Verflüssigung.' },
  { from: 'gasförmig', to: 'fest', name: 'Resublimieren', energyChange: 'exotherm', description: 'Direkter Übergang von Gas in Kristallform (z. B. Raureif im Winter).' }
];

export interface MisconceptionItem {
  id: number;
  falseBelief: string;
  scientificFact: string;
  explanation: string;
  category: string;
}

export const MISCONCEPTIONS: MisconceptionItem[] = [
  {
    id: 1,
    falseBelief: '„Die Teilchen schmelzen bei Erwärmung und werden flüssig.“',
    scientificFact: 'Teilchen selbst schmelzen niemals! Sie bleiben unveränderlich starr und unteilbar.',
    explanation: '„Schmelzen“ ist eine Eigenschaft des Stoffes (Makroebene), nicht der einzelnen Teilchen (Submikroebene). Beim Schmelzen bricht lediglich die feste Gitteranordnung auf; die Teilchen gleiten aneinander vorbei.',
    category: 'Ebenen-Verwechslung'
  },
  {
    id: 2,
    falseBelief: '„Beim Verdampfen dehnen sich die Wasserteilchen aus.“',
    scientificFact: 'Die Teilchen selbst behalten exakt dieselbe Größe und Masse.',
    explanation: 'Die Volumenzunahme eines Gases (Faktor ~1700 bei Wasser) beruht ausschließlich auf der Vergrößerung der leeren Zwischenräume zwischen den Teilchen, niemals auf einer Größenzunahme der Teilchen selbst.',
    category: 'Volumen & Teilchengröße'
  },
  {
    id: 3,
    falseBelief: '„Zwischen den Gas- oder Wasserteilchen befindet sich Luft.“',
    scientificFact: 'Zwischen den Teilchen ist absolut NICHTS – reines Vakuum.',
    explanation: 'Luft besteht selbst aus Teilchen (Stickstoff-, Sauerstoff-, Edelgasmolekülen). Zwischen Wasserteilchen kann daher keine Luft sein; dort existiert schlichtweg leerer Raum.',
    category: 'Vakuum & Leerer Raum'
  },
  {
    id: 4,
    falseBelief: '„Diffusion geschieht, weil Teilchen sich gleichmäßig verteilen wollen.“',
    scientificFact: 'Teilchen haben kein Ziel oder Bewusstsein. Die Durchmischung erfolgt rein statistisch.',
    explanation: 'Aufgrund der Brownschen Molekularbewegung kollidieren Teilchen völlig ungerichtet (Zufallsweg). Die makroskopisch sichtbare gleichmäßige Durchmischung ist das statistisch wahrscheinlichste Ergebnis (Entropiezunahme).',
    category: 'Teleologie / Zweckdenken'
  },
  {
    id: 5,
    falseBelief: '„In warmem Wasser bewegen sich Teilchen langsamer, weil sie träge werden.“',
    scientificFact: 'Temperatur ist direkt proportional zur mittleren kinetischen Energie der Teilchen.',
    explanation: 'Je höher die Temperatur, desto heftiger zittern bzw. rasen die Teilchen. Bei 100 °C bewegen sich Wasserteilchen mit durchschnittlich über 600 m/s.',
    category: 'Temperatur & Kinetik'
  }
];

export interface WaterDensityDataPoint {
  temp: number;
  density: number; // g/cm³
  state: string;
  structure: string;
}

export const WATER_DENSITY_POINTS: WaterDensityDataPoint[] = [
  { temp: -10, density: 0.917, state: 'Eis (fest)', structure: 'Starres hexagonales Kristallgitter mit großen Hohlraum-Kanälen' },
  { temp: -5, density: 0.917, state: 'Eis (fest)', structure: 'Hexagonales Gitter dehnt sich thermisch minimal aus' },
  { temp: 0, density: 0.917, state: 'Eis (0 °C)', structure: 'Schmelzpunkt: Gitter beginnt zusammenzubrechen' },
  { temp: 0.01, density: 0.9998, state: 'Flüssig (0 °C)', structure: 'Gitterbruchstücke rücken dichter zusammen' },
  { temp: 2, density: 0.9999, state: 'Flüssig (2 °C)', structure: 'Hohlräume schrumpfen schneller als die thermische Ausdehnung' },
  { temp: 4, density: 1.0000, state: 'Flüssig (4 °C)', structure: 'DICHTEMAXIMUM: Perfekte Balance aus Gitterzerfall und dichter Packung' },
  { temp: 8, density: 0.9998, state: 'Flüssig (8 °C)', structure: 'Thermische Eigenbewegung überwiegt -> Dichte sinkt wieder' },
  { temp: 15, density: 0.9991, state: 'Flüssig (15 °C)', structure: 'Zunehmende thermische Expansion des Molekülverbands' },
  { temp: 20, density: 0.9982, state: 'Flüssig (20 °C)', structure: 'Zimmertemperatur: Weiter sinkende Dichte' },
  { temp: 100, density: 0.9584, state: 'Flüssig (100 °C)', structure: 'Siedepunkt: Größte Ausdehnung im flüssigen Zustand' }
];

export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  conceptTag: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Was geschieht auf submikroskopischer Ebene, wenn ein Eiswürfel bei Raumtemperatur schmilzt?',
    context: 'Fehlkonzept-Check: Teilchen vs. Stoff',
    options: [
      { key: 'A', text: 'Die einzelnen Wasserteilchen werden weich, verflüssigen sich und schrumpfen.' },
      { key: 'B', text: 'Die Teilchen selbst bleiben völlig unverändert; nur ihre Gitterordnung löst sich auf und sie gleiten aneinander vorbei.' },
      { key: 'C', text: 'Die Wasserteilchen nehmen Wärme auf und teilen sich in kleinere Tröpfchenteilchen.' },
      { key: 'D', text: 'Die chemischen Bindungen zwischen Wasserstoff und Sauerstoff im Wassermolekül werden gespalten.' }
    ],
    correctKey: 'B',
    explanation: 'Richtig ist B! Teilchen selbst sind starr, unveränderlich und schmelzen niemals. Schmelzen bedeutet lediglich, dass die thermische Bewegung die Gitterbindung überwindet und die geordnete Struktur in eine ungeordnete, gleitende Packung übergeht.',
    conceptTag: 'Fehlkonzept-Prävention'
  },
  {
    id: 2,
    question: 'Warum verdoppelt sich der gemessene Druck in einem Zylinder, wenn man das Gasvolumen mit einem Stempel halbiert (Temperatur bleibt konstant)?',
    context: 'Gesetz von Boyle-Mariotte & Druckentstehung',
    options: [
      { key: 'A', text: 'Weil die Gasteilchen durch die Kompression doppelt so groß und schwer werden.' },
      { key: 'B', text: 'Weil die Teilchen durch das Zusammenpressen plötzlich viel schneller fliegen.' },
      { key: 'C', text: 'Weil die Reibung der Teilchen aneinander den Gasdruck erzeugt.' },
      { key: 'D', text: 'Weil sich die Teilchendichte verdoppelt und daher pro Zeiteinheit doppelt so viele Teilchen gegen die Zylinderwand prallen.' }
    ],
    correctKey: 'D',
    explanation: 'Richtig ist D! Gasdruck entsteht mikroskopisch durch die elastischen Stöße der Teilchen gegen die Gefäßwand (Impulsübertrag). Bei halbiertem Volumen ist der Weg zwischen den Wänden kürzer; die Stoßrate pro Wandfläche verdoppelt sich bei gleicher Geschwindigkeit.',
    conceptTag: 'Boyle-Mariotte'
  },
  {
    id: 3,
    question: 'Was ist die eigentliche Ursache für die spontane Diffusion zweier Gase, nachdem eine Trennwand hochgezogen wurde?',
    context: 'Diffusionsmechanismus & Brownsche Molekularbewegung',
    options: [
      { key: 'A', text: 'Die ständige, ungerichtete thermische Eigenbewegung aller Teilchen und ihre rein zufälligen elastischen Stöße.' },
      { key: 'B', text: 'Ein aktives Bestreben der Gasteilchen, sich möglichst gleichmäßig im Gefäß zu verteilen.' },
      { key: 'C', text: 'Die elektrostatische Anziehung zwischen den verschiedenen Gasteilchen.' },
      { key: 'D', text: 'Der Auftrieb der schwereren Teilchen, der sie nach oben drückt.' }
    ],
    correctKey: 'A',
    explanation: 'Richtig ist A! Diffusion geschieht nicht, weil Teilchen „wollen“, sondern rein statistisch durch ungerichtete Brownsche Bewegung. Die gleichmäßige Durchmischung ist unter allen denkbaren mikroskopischen Zuständen die mit Abstand wahrscheinlichste (Entropiemaximum).',
    conceptTag: 'Diffusion'
  },
  {
    id: 4,
    question: 'Welche physikalische Aussage zur Dichteanomalie des Wassers ist fachlich korrekt?',
    context: 'Dichteanomalie & Kristallstruktur',
    options: [
      { key: 'A', text: 'Eis ist dichter als flüssiges Wasser, weshalb Eiswürfel immer auf den Grund sinken.' },
      { key: 'B', text: 'Flüssiges Wasser hat bei 0 °C seine größte Dichte, weil sich dort noch die meisten Gitterreste befinden.' },
      { key: 'C', text: 'Wasser besitzt bei 4 °C seine maximale Dichte, weil hier der Hohlraumverlust des zusammenbrechenden Eisgitters und die thermische Expansion im Gleichgewicht stehen.' },
      { key: 'D', text: 'Die Dichteanomalie entsteht dadurch, dass Wasserteilchen bei 4 °C ihr Eigengewicht verdoppeln.' }
    ],
    correctKey: 'C',
    explanation: 'Richtig ist C! Das Kristallgitter von Eis ist durch gerichtete Wasserstoffbrücken sehr weitmaschig mit großen Hohlräumen. Beim Schmelzen brechen Gitterteile zusammen und Moleküle rücken näher zusammen. Ab 4 °C überwiegt die normale thermische Ausdehnung.',
    conceptTag: 'Dichteanomalie'
  },
  {
    id: 5,
    question: 'Was befindet sich im Raum zwischen den Teilchen eines reinen Gases wie Sauerstoff (O₂)?',
    context: 'Teilchenmodell: Vakuum zwischen Teilchen',
    options: [
      { key: 'A', text: 'Normale Luft, die die Sauerstoffteilchen umspült.' },
      { key: 'B', text: 'Absolut gar nichts (Vakuum / leerer Raum).' },
      { key: 'C', text: 'Feinste Wasserdampf-Reste und Wärmestrahlungssubstanz.' },
      { key: 'D', text: 'Geringe Mengen von Reibungsflüssigkeit, die Stöße abfedert.' }
    ],
    correctKey: 'B',
    explanation: 'Richtig ist B! Im submikroskopischen Teilchenmodell gibt es zwischen den Teilchen weder Luft noch andere Materie – dort herrscht vollkommenes Vakuum. Das Volumen eines Gases besteht zu über 99,9 % aus leerem Raum.',
    conceptTag: 'Leerer Raum'
  },
  {
    id: 6,
    question: 'Wie ändert sich die Bewegung der Teilchen, wenn ein Stoff von 20 °C auf 80 °C erwärmt wird?',
    context: 'Temperatur & Kinetische Energie',
    options: [
      { key: 'A', text: 'Die Teilchen dehnen sich aus, bewegen sich aber im gleichen Tempo weiter.' },
      { key: 'B', text: 'Die Teilchen rotieren nur noch um sich selbst und stoppen die Translationsbewegung.' },
      { key: 'C', text: 'Die Schwingungsamplitude nimmt ab, weil die Wärme den Teilchen Energie entzieht.' },
      { key: 'D', text: 'Die mittlere kinetische Energie (Geschwindigkeit bzw. Schwingungsamplitude) der Teilchen nimmt spürbar zu.' }
    ],
    correctKey: 'D',
    explanation: 'Richtig ist D! Temperatur ist ein direktes Maß für die mittlere kinetische Energie der Teilchen ($E_{kin} = \\frac{1}{2} m v^2 \\sim T$). Höhere Temperatur bedeutet immer höhere mittlere Geschwindigkeit und heftigere Schwingungen.',
    conceptTag: 'Kinetische Energie'
  }
];

export interface GlossaryEntry {
  term: string;
  definition: string;
  example: string;
}

export const GLOSSARY_ENTRIES: GlossaryEntry[] = [
  {
    term: 'Teilchenmodell der Materie',
    definition: 'Didaktisches Modell: Alle Stoffe bestehen aus kleinsten, unveränderlichen Teilchen (Atome, Moleküle oder Ionen), die sich in ständiger ungerichteter Bewegung befinden und zwischen denen leerer Raum herrscht.',
    example: 'Erklärt Aggregatzustände, Lösevorgänge, Diffusion und Druckentstehung ohne Kenntnis des inneren Atombaus.'
  },
  {
    term: 'Kinetische Energie (E_kin)',
    definition: 'Bewegungsenergie der Teilchen. Auf der makroskopischen Ebene entspricht die mittlere kinetische Energie der Teilchen der Temperatur des Stoffes.',
    example: 'Je wärmer ein Glas Wasser, desto schneller bewegen sich die Wassermoleküle.'
  },
  {
    term: 'Zwischenmolekulare Kräfte (Kohäsion)',
    definition: 'Anziehungskräfte zwischen gleichartigen Teilchen (z. B. van-der-Waals-Kräfte, Wasserstoffbrücken), die im festen und flüssigen Zustand den Zusammenhalt bewirken.',
    example: 'Im Eisgitter halten starke Bindungen die Moleküle fest; im Gaszustand sind sie überwunden.'
  },
  {
    term: 'Boyle-Mariotte-Gesetz',
    definition: 'Für eine gegebene Gasmenge bei konstanter Temperatur ist das Produkt aus Druck und Volumen konstant: p · V = const. Druck und Volumen verhalten sich umgekehrt proportional.',
    example: 'Halbiert man das Zylindervolumen mit einer Fahrradpumpe, verdoppelt sich der Druck.'
  },
  {
    term: 'Brownsche Molekularbewegung',
    definition: 'Die unaufhörliche, völlig ungerichtete Zickzack-Bewegung kleinster Teilchen in Flüssigkeiten oder Gasen infolge zahlloser thermischer Stöße.',
    example: '1827 von Robert Brown an Pollenkörnern im Wassertropfen unter dem Mikroskop entdeckt.'
  },
  {
    term: 'Diffusion',
    definition: 'Der selbsttätig ablaufende Prozess der vollständigen Durchmischung von Stoffen infolge der ungerichteten thermischen Eigenbewegung der Teilchen entlang eines Konzentrationsgefälles.',
    example: 'Verteilung eines Parfümduftes im Zimmer oder eines Teefarbstoffs im heißen Wasser.'
  },
  {
    term: 'Dichteanomalie des Wassers',
    definition: 'Die physikalische Besonderheit, dass flüssiges Wasser bei +4 °C seine größte Dichte (1,000 g/cm³) besitzt und sich bei weiterer Abkühlung bis zum Gefrierpunkt wieder ausdehnt.',
    example: 'Deshalb schwimmt Eis auf dem Wasser und frieren Gewässer von der Oberfläche nach unten zu.'
  },
  {
    term: 'Sublimation / Resublimation',
    definition: 'Phasenübergang unmittelbar vom festen in den gasförmigen Zustand (Sublimation) bzw. vom gasförmigen direkt in den festen Kristallzustand (Resublimation) unter Umgehung der flüssigen Phase.',
    example: 'Trockeneis (festes CO₂) sublimiert bei Raumtemperatur direkt zu gasförmigem Kohlendioxid.'
  },
  {
    term: 'Aggregatzustand',
    definition: 'Erscheinungsform eines Stoffes: fest (s), flüssig (l) oder gasförmig (g), bestimmt durch das Wechselspiel zwischen thermischer Teilchenenergie und zwischenmolekularen Anziehungskräften.',
    example: 'Wasser existiert als Eis (s), flüssiges Wasser (l) oder Wasserdampf (g).'
  },
  {
    term: 'Vakuum zwischen Teilchen',
    definition: 'Der materiefreie, vollkommen leere Raum zwischen den diskreten Teilchen eines Stoffes.',
    example: 'In einem 1 Liter Gasbehälter bei Normaldruck nehmen die Moleküle selbst nur ca. 1 cm³ ein; 99,9 % sind leerer Raum.'
  }
];
