import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { QuizPanel } from '../components/QuizPanel'
import type { Quiz } from '../types'

const mockQuiz: Quiz = {
  question: 'Was unterscheidet ein Ion von einem Atom?',
  options: [
    { text: 'Ein Ion hat eine andere Anzahl an Protonen.', isCorrect: false, error: 'Nur die Elektronenzahl ändert sich.' },
    { text: 'Ein Ion hat eine andere Anzahl an Elektronen.', isCorrect: true },
    { text: 'Ionen sind einfach größere Atome.', isCorrect: false },
  ],
}

describe('QuizPanel', () => {
  it('renders the question text', () => {
    render(<QuizPanel quiz={mockQuiz} topicIndex={0} alreadyCompleted={false} onComplete={vi.fn()} />)
    expect(screen.getByText(/Was unterscheidet ein Ion/)).toBeInTheDocument()
  })

  it('calls onComplete(true) for the correct option', () => {
    const onComplete = vi.fn()
    render(<QuizPanel quiz={mockQuiz} topicIndex={0} alreadyCompleted={false} onComplete={onComplete} />)
    fireEvent.click(screen.getByText('Ein Ion hat eine andere Anzahl an Elektronen.'))
    expect(onComplete).toHaveBeenCalledWith(true)
  })

  it('calls onComplete(false) for a wrong option', () => {
    const onComplete = vi.fn()
    render(<QuizPanel quiz={mockQuiz} topicIndex={0} alreadyCompleted={false} onComplete={onComplete} />)
    fireEvent.click(screen.getByText('Ein Ion hat eine andere Anzahl an Protonen.'))
    expect(onComplete).toHaveBeenCalledWith(false)
  })

  it('displays error text on wrong answer', () => {
    render(<QuizPanel quiz={mockQuiz} topicIndex={0} alreadyCompleted={false} onComplete={vi.fn()} />)
    fireEvent.click(screen.getByText('Ein Ion hat eine andere Anzahl an Protonen.'))
    expect(screen.getByText('Nur die Elektronenzahl ändert sich.')).toBeInTheDocument()
  })

  it('disables all buttons after an answer', () => {
    render(<QuizPanel quiz={mockQuiz} topicIndex={0} alreadyCompleted={false} onComplete={vi.fn()} />)
    fireEvent.click(screen.getByText('Ein Ion hat eine andere Anzahl an Elektronen.'))
    screen.getAllByRole('button').forEach(btn => expect(btn).toBeDisabled())
  })
})
