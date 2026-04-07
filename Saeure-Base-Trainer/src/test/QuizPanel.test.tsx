import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { QuizPanel } from '../components/QuizPanel'
import type { Quiz } from '../types'

const mockQuiz: Quiz = {
  question: 'Was macht ein Teilchen zur Base?',
  options: [
    { text: 'Es gibt Protonen ab.', isCorrect: false, error: 'Das wäre eine Säure.' },
    { text: 'Es nimmt Protonen auf.', isCorrect: true },
    { text: 'Es enthält Sauerstoff.', isCorrect: false },
  ],
}

describe('QuizPanel', () => {
  it('renders quiz question and all options', () => {
    render(
      <QuizPanel
        quiz={mockQuiz}
        topicIndex={0}
        alreadyCompleted={false}
        onComplete={vi.fn()}
      />
    )
    expect(screen.getByText(/Was macht ein Teilchen zur Base/)).toBeInTheDocument()
    expect(screen.getByText('Es gibt Protonen ab.')).toBeInTheDocument()
    expect(screen.getByText('Es nimmt Protonen auf.')).toBeInTheDocument()
    expect(screen.getByText('Es enthält Sauerstoff.')).toBeInTheDocument()
  })

  it('calls onComplete(true) when correct answer is clicked', () => {
    const onComplete = vi.fn()
    render(
      <QuizPanel
        quiz={mockQuiz}
        topicIndex={0}
        alreadyCompleted={false}
        onComplete={onComplete}
      />
    )
    fireEvent.click(screen.getByText('Es nimmt Protonen auf.'))
    expect(onComplete).toHaveBeenCalledWith(true)
  })

  it('calls onComplete(false) when wrong answer is clicked', () => {
    const onComplete = vi.fn()
    render(
      <QuizPanel
        quiz={mockQuiz}
        topicIndex={0}
        alreadyCompleted={false}
        onComplete={onComplete}
      />
    )
    fireEvent.click(screen.getByText('Es gibt Protonen ab.'))
    expect(onComplete).toHaveBeenCalledWith(false)
  })

  it('shows error feedback on wrong answer', () => {
    render(
      <QuizPanel
        quiz={mockQuiz}
        topicIndex={0}
        alreadyCompleted={false}
        onComplete={vi.fn()}
      />
    )
    fireEvent.click(screen.getByText('Es gibt Protonen ab.'))
    expect(screen.getByText('Das wäre eine Säure.')).toBeInTheDocument()
  })

  it('disables buttons after answering', () => {
    render(
      <QuizPanel
        quiz={mockQuiz}
        topicIndex={0}
        alreadyCompleted={false}
        onComplete={vi.fn()}
      />
    )
    fireEvent.click(screen.getByText('Es nimmt Protonen auf.'))
    const buttons = screen.getAllByRole('button')
    buttons.forEach(btn => expect(btn).toBeDisabled())
  })

  it('shows already-completed hint when alreadyCompleted is true', () => {
    render(
      <QuizPanel
        quiz={mockQuiz}
        topicIndex={0}
        alreadyCompleted={true}
        onComplete={vi.fn()}
      />
    )
    expect(screen.getByText(/Bereits abgeschlossen/)).toBeInTheDocument()
  })
})
