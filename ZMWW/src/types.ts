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

// Neue Quiz-Typen
export type QuestionType = 'multiple-choice' | 'input' | 'matching' | 'ordering'

export interface BaseQuestion {
  id: string
  type: QuestionType
  category: ForceType
  difficulty: Difficulty
  question: string
  hints?: string[]
  commonMistakes?: string[]
}

export interface MCQuestion extends BaseQuestion {
  type: 'multiple-choice'
  options: Array<{ label: string; explanation: string }>
  correctAnswer: number
  moleculeIds?: string[] // Optional für visuellen Anker
}

export interface InputQuestion extends BaseQuestion {
  type: 'input'
  correctValue: string
  moleculeIds?: string[]
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching'
  pairs: Array<{ id: string; left: string; right: string }>
}

export interface OrderingQuestion extends BaseQuestion {
  type: 'ordering'
  correctValue: string[] // Liste von Molekül-IDs in richtiger Reihenfolge
  moleculeIds: string[]
}

export type Question = MCQuestion | InputQuestion | MatchingQuestion | OrderingQuestion

// Typen für Lernressourcen
export interface GlossaryTerm {
  term: string
  definition: string
  example?: string
  relatedTerms?: string[]
}

export interface ChecklistItem {
  id: string
  text: string
  category: string
}

export interface CommonMistakeType {
  id: string
  title: string
  wrongExplanation: string
  correct: string
  why: string
}
