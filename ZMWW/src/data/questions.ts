import { Question } from '@/types'

export const ENHANCED_QUESTIONS: Question[] = [
  {
    id: 'zmww-mc-1',
    type: 'multiple-choice',
    category: 'LDWW',
    difficulty: 'leicht',
    question: 'Welche Wechselwirkung dominiert in Methan (CH₄)?',
    moleculeIds: ['methan'],
    options: [
      { label: 'London-Kräfte', explanation: '✓ Richtig! Methan ist unpolar → nur London-Kräfte' },
      { label: 'Dipol-Dipol', explanation: '✗ Falsch. Methan ist symmetrisch und unpolar' },
      { label: 'Wasserstoffbrücken', explanation: '✗ Falsch. H-Brücken nur bei H-N/O/F' }
    ],
    correctAnswer: 0,
    commonMistakes: ['Verwechslung mit Ethan', 'Annahme dass alle Alkane Dipole haben']
  },
  {
    id: 'zmww-input-1',
    type: 'input',
    category: 'LDWW',
    difficulty: 'mittel',
    question: 'Pentan (C₅H₁₂) ist ein längeres Alkan als Butan. Welcher Siedepunkt (in °C) ist realistisch?',
    correctValue: '36',
    hints: [
      'Größere Alkane haben höhere Siedepunkte',
      'Butan: -0.5°C',
      'Pentan hat 5 C-Atome → Höher als Butan'
    ],
    commonMistakes: [
      'Unterschätzung der London-Kräfte bei längeren Ketten',
      'Vergessen, dass der Siedepunkt mit der Kettenlänge steigt'
    ]
  },
  {
    id: 'zmww-matching-1',
    type: 'matching',
    category: 'WB',
    difficulty: 'mittel',
    question: 'Ordne die Moleküle ihren dominierenden Wechselwirkungen zu (Drag & Drop):',
    pairs: [
      { id: 'p1', left: 'Ethanol (C₂H₅OH)', right: 'Wasserstoffbrücken' },
      { id: 'p2', left: 'Oktan (C₈H₁₈)', right: 'London-Kräfte' },
      { id: 'p3', left: 'Chlorwasserstoff (HCl)', right: 'Dipol-Dipol' },
      { id: 'p4', left: 'Wasser (H₂O)', right: 'Wasserstoffbrücken' }
    ],
    hints: [
      'Schaue auf -OH, -NH, -FH Gruppen für H-Brücken',
      'Unpolare Alkane → London-Kräfte',
      'Polare Moleküle ohne H-Brücken → Dipol-Dipol'
    ]
  },
  {
    id: 'zmww-ordering-1',
    type: 'ordering',
    category: 'LDWW',
    difficulty: 'schwer',
    question: 'Ordne diese Alkane nach steigendem Siedepunkt (Drag & Drop)',
    correctValue: ['methan', 'ethan', 'butan', 'heptan', 'oktan'],
    moleculeIds: ['methan', 'ethan', 'butan', 'heptan', 'oktan'],
    hints: [
      'Mehr C-Atome = größere Oberfläche = stärkere Wechselwirkungen',
      'Methan hat nur 1 C-Atom, Oktan hat 8'
    ]
  }
]
