import { GlossaryTerm, ChecklistItem, CommonMistakeType } from '@/types'

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'London-Dispersionskräfte',
    definition: 'Schwache Van-der-Waals-Kräfte zwischen allen Molekülen, auch unpolaren. Entstehen durch fluktuierende Dipolmomente.',
    example: 'Alkane (CH₄, C₂H₆) halten zusammen durch London-Kräfte, obwohl sie unpolar sind.',
    relatedTerms: ['Van-der-Waals-Kräfte', 'Dipol']
  },
  {
    term: 'Dipol-Dipol-Wechselwirkung',
    definition: 'Anziehung zwischen permanenten Dipolen polarer Moleküle. Der positive Pol des einen Moleküls zieht den negativen Pol des anderen an.',
    example: 'HCl und HCl-Moleküle orientieren sich so, dass H (δ+) von Cl (δ-) angezogen wird.',
    relatedTerms: ['Polarität', 'Elektronegativität']
  },
  {
    term: 'Wasserstoffbrückenbindung',
    definition: 'Besondere starke Dipol-Dipol-Wechselwirkung zwischen H an N, O oder F und dem Elektronenpaar dieser Atome.',
    example: 'Wasser (H₂O) bildet starke H-Brücken → hoher Siedepunkt (100°C)',
    relatedTerms: ['Dipol-Dipol', 'Elektronegativität']
  },
  {
    term: 'Elektronegativität',
    definition: 'Maß für die Fähigkeit eines Atoms, Elektronen in einer chemischen Bindung anzuziehen. Höhere Elektronegativität = stärkeres Ziehen.',
    example: 'O (3.44) > Cl (3.16) > H (2.20). Deshalb ist H-O polarer als H-Cl.',
    relatedTerms: ['Polarität', 'Dipol']
  },
  {
    term: 'Siedepunkt',
    definition: 'Temperatur, bei der Dampfdruck eines Stoffs gleich dem Umgebungsdruck wird. Höhere Wechselwirkungen = höherer Siedepunkt.',
    example: 'Methan (-162°C) < Ethan (-88°C) < Butan (-0.5°C) wegen stärkerer London-Kräfte.',
    relatedTerms: ['London-Dispersionskräfte', 'Wechselwirkungen']
  }
]

export const CHECKLIST: ChecklistItem[] = [
  { id: 'check-1', text: 'Ich kann entscheiden, ob ein Molekül polar oder unpolar ist', category: 'Grundlagen' },
  { id: 'check-2', text: 'Ich kenne die Elektronegativität der Atome H, C, N, O, Cl', category: 'Grundlagen' },
  { id: 'check-3', text: 'Ich kann London-Kräfte, Dipol-Dipol und H-Brücken unterscheiden', category: 'Wechselwirkungen' },
  { id: 'check-4', text: 'Ich kann vorhersagen, welche Wechselwirkungen in einer Verbindung dominieren', category: 'Wechselwirkungen' },
  { id: 'check-5', text: 'Ich verstehe warum der Siedepunkt mit Kettenlänge steigt', category: 'Anwendung' },
  { id: 'check-6', text: 'Ich kann Siedepunkte ähnlicher Moleküle vorhersagen und begründen', category: 'Anwendung' },
  { id: 'check-7', text: 'Ich kenne mindestens 3 Beispiele für H-Brückenbindungen', category: 'Anwendung' }
]

export const COMMON_MISTAKES: CommonMistakeType[] = [
  {
    id: 'mistake-1',
    title: 'Alle Alkane sind unpolar → alle haben schwache Wechselwirkungen',
    wrongExplanation: 'Zwar sind Alkane unpolar (C und H haben ähnliche Elektronegativität), aber größere Alkane haben größere Oberflächen und daher STÄRKERE London-Kräfte.',
    correct: 'London-Kräfte hängen von der Molekülgröße ab, nicht von der Polarität.',
    why: 'Größere Moleküle haben mehr Elektronen → mehr Dipolfluktuationen → stärkere London-Kräfte.'
  },
  {
    id: 'mistake-2',
    title: 'Wasserstoffbrücken sind Bindungen (wie kovalent)',
    wrongExplanation: 'H-Brücken sind Wechselwirkungen zwischen Molekülen, NICHT chemische Bindungen innerhalb eines Moleküls.',
    correct: 'H-Brücken sind zwischen-molekular. Innerhalb eines Moleküls sind O-H, N-H, etc. kovalent gebunden.',
    why: 'H-Brücken sind schwächer (~10-40 kJ/mol) als kovalente Bindungen (~200-600 kJ/mol) und können leicht brechen.'
  },
  {
    id: 'mistake-3',
    title: 'Je mehr H-Atome, desto stärker die H-Brücken',
    wrongExplanation: 'H-Brücken entstehen nur bei H an SPEZIELLEN Atomen (N, O, F). Die Anzahl der H ist irrelevant.',
    correct: 'Nur H an N, O oder F bilden H-Brücken. C-H bildet KEINE H-Brücken.',
    why: 'Diese Atome haben hohe Elektronegativität UND Elektronenpaare zur Akzeptanz einer H-Brücke.'
  },
  {
    id: 'mistake-4',
    title: 'Wasser hat den höchsten Siedepunkt wegen seiner Größe',
    wrongExplanation: 'Wasser ist aber ein sehr kleines Molekül! Der hohe Siedepunkt (100°C) kommt von den starken H-Brücken, nicht von Größe.',
    correct: 'H₂O hat extrem hohen Sp trotz geringer Molmasse → Grund: starke H-Brücken',
    why: 'Vergleich: H₂O (18 g/mol, Sp=100°C) vs. Oktan (114 g/mol, Sp=126°C) → H-Brücken beeinflussen deutlich stärker als Größe'
  },
  {
    id: 'mistake-5',
    title: 'H-Brückenbindung = kovalente Bindung mit H',
    wrongExplanation: 'Verwechslung ist häufig! In Wasser sind O-H KOVALENT. Die H-Brücken sind zwischen verschiedenen H₂O-Molekülen.',
    correct: 'INNERHALB H₂O: O-H kovalent. ZWISCHEN H₂O-Molekülen: H-Brückenbindung (intermolekular)',
    why: 'Kovalente Bindungen halten Atome innerhalb eines Moleküls zusammen. H-Brücken halten Moleküle zusammen.'
  }
]
