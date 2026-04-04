export type ForceType = 'LDWW' | 'DDWW' | 'WB'
export type Difficulty = 'leicht' | 'mittel' | 'schwer'
export type AppTab = 'grundlagen' | 'ranking' | 'quiz'

export interface Molecule {
  id: string
  name: string
  formula: string
  boilingPoint: number
  force: ForceType
  difficulty: Difficulty
  description: string
  emoji: string
}
