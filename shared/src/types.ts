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
