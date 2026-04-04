import type { Molecule } from '@/types'

export const molecules: Molecule[] = [
  { id: 'methan',     name: 'Methan',              formula: 'CH₄',      boilingPoint: -162, force: 'LDWW', difficulty: 'leicht', description: 'Kleinstes Alkan, unpolar, sehr flüchtig', emoji: '☁️' },
  { id: 'butan',      name: 'Butan',               formula: 'C₄H₁₀',   boilingPoint: -0.5, force: 'LDWW', difficulty: 'leicht', description: 'Feuerzeuggas, größer als Methan → stärkere London-Kräfte', emoji: '☁️' },
  { id: 'pentan',     name: 'Pentan',              formula: 'C₅H₁₂',   boilingPoint: 36,   force: 'LDWW', difficulty: 'leicht', description: 'Lösungsmittel, flüssig bei RT', emoji: '☁️' },
  { id: 'octan',      name: 'Octan',               formula: 'C₈H₁₈',   boilingPoint: 126,  force: 'LDWW', difficulty: 'mittel', description: 'Benzin-Hauptbestandteil, lange Kette', emoji: '☁️' },
  { id: 'heptan',     name: 'Heptan',              formula: 'C₇H₁₆',   boilingPoint: 98,   force: 'LDWW', difficulty: 'mittel', description: 'Lösungsmittel, unpolares Alkan', emoji: '☁️' },
  { id: 'helium',     name: 'Helium',              formula: 'He',       boilingPoint: -269, force: 'LDWW', difficulty: 'leicht', description: 'Edelgas, kleinste mögliche London-Kräfte', emoji: '☁️' },
  { id: 'hcl',        name: 'Chlorwasserstoff',    formula: 'HCl',      boilingPoint: -85,  force: 'DDWW', difficulty: 'mittel', description: 'Polares Molekül → Dipol-Dipol-Wechselwirkungen', emoji: '🧲' },
  { id: 'propanon',   name: 'Propanon (Aceton)',   formula: 'C₃H₆O',   boilingPoint: 56,   force: 'DDWW', difficulty: 'mittel', description: 'Polares Keton, C=O-Gruppe sorgt für starke Dipole', emoji: '🧲' },
  { id: 'h2s',        name: 'Schwefelwasserstoff', formula: 'H₂S',      boilingPoint: -60,  force: 'DDWW', difficulty: 'schwer', description: 'Analog zu Wasser, aber S weniger elektronegativ → nur DDWW', emoji: '🧲' },
  { id: 'so2',        name: 'Schwefeldioxid',      formula: 'SO₂',      boilingPoint: -10,  force: 'DDWW', difficulty: 'schwer', description: 'Gewinkeltes polares Molekül, signifikante Dipole', emoji: '🧲' },
  { id: 'ammoniak',   name: 'Ammoniak',            formula: 'NH₃',      boilingPoint: -33,  force: 'WB',   difficulty: 'mittel', description: 'N-H-Bindungen ermöglichen H-Brücken', emoji: '💧' },
  { id: 'ethanol',    name: 'Ethanol',             formula: 'C₂H₅OH',  boilingPoint: 78,   force: 'WB',   difficulty: 'leicht', description: 'O-H-Gruppe bildet starke H-Brücken', emoji: '💧' },
  { id: 'wasser',     name: 'Wasser',              formula: 'H₂O',      boilingPoint: 100,  force: 'WB',   difficulty: 'leicht', description: 'Zwei O-H-Bindungen → sehr starke H-Brücken', emoji: '💧' },
  { id: 'essig',      name: 'Essigsäure',          formula: 'CH₃COOH', boilingPoint: 118,  force: 'WB',   difficulty: 'schwer', description: 'Bildet sogar H-Brücken-Dimere', emoji: '💧' },
  { id: 'methanol',   name: 'Methanol',            formula: 'CH₃OH',   boilingPoint: 65,   force: 'WB',   difficulty: 'mittel', description: 'Kleinster Alkohol, O-H-Gruppe vorhanden', emoji: '💧' },
]

export const forceLabels: Record<string, string> = {
  LDWW: 'London-Kräfte',
  DDWW: 'Dipol-Dipol',
  WB: 'Wasserstoffbrücken',
}
