export interface QuizOption {
  text: string
  isCorrect: boolean
  error?: string
}

export interface Quiz {
  question: string
  options: QuizOption[]
  mistakes?: string[]
}

export interface Topic {
  id: string
  title: string
  content: string
  quiz?: Quiz
}

export interface AppState {
  currentIndex: number
  score: number
  streak: number
  completed: Set<number>
}

export interface GameItem {
  label: string
  type: 'Säure' | 'Base'
}
