export interface QuizOption {
  text: string
  isCorrect: boolean
  error?: string
}

export interface Quiz {
  question: string
  options: QuizOption[]
}

export interface Topic {
  id: string
  title: string
  content: string
  quiz?: Quiz
}

export interface SaltItem {
  name: string
  formula: string
}

export interface GameQuestion extends SaltItem {
  mode: 'name-to-formula' | 'formula-to-name'
}
