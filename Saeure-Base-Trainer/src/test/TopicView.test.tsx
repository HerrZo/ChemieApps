import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TopicView } from '../components/TopicView'
import type { Topic } from '../types'

const mockTopic: Topic = {
  id: 'topic1',
  title: 'Test Topic Title',
  content: '<p>Test content body</p>',
  quiz: {
    question: 'Test Quiz Question',
    options: [
      { text: 'Option 1', isCorrect: true },
      { text: 'Option 2', isCorrect: false },
    ],
  },
}

const mockProps = {
  topic: mockTopic,
  topicIndex: 0,
  isCompleted: false,
  isLast: false,
  onQuizComplete: vi.fn(),
  onMiniGameScore: vi.fn(),
  onMiniGameComplete: vi.fn(),
  onNext: vi.fn(),
  onToast: vi.fn(),
}

describe('TopicView', () => {
  it('renders topic title and content', () => {
    render(<TopicView {...mockProps} />)
    expect(screen.getByText('Test Topic Title')).toBeInTheDocument()
    expect(screen.getByText('Test content body')).toBeInTheDocument()
  })

  it('renders QuizPanel when quiz is present', () => {
    render(<TopicView {...mockProps} />)
    expect(screen.getByText(/Quiz: Test Quiz Question/)).toBeInTheDocument()
  })

  it('does not render QuizPanel when quiz is absent', () => {
    const topicWithoutQuiz = { ...mockTopic, quiz: undefined }
    render(<TopicView {...mockProps} topic={topicWithoutQuiz} />)
    expect(screen.queryByText(/Quiz:/)).not.toBeInTheDocument()
  })

  it('renders MiniGame when topic id is "minigame"', () => {
    const minigameTopic = { ...mockTopic, id: 'minigame', quiz: undefined }
    render(<TopicView {...mockProps} topic={minigameTopic} />)
    // MiniGame renders buttons "Ist Säure" and "Ist Base"
    expect(screen.getByText('Ist Säure')).toBeInTheDocument()
    expect(screen.getByText('Ist Base')).toBeInTheDocument()
  })

  it('renders "Weiter" button when completed and not last', () => {
    render(<TopicView {...mockProps} isCompleted={true} />)
    const nextButton = screen.getByText('Weiter ➔')
    expect(nextButton).toBeInTheDocument()

    fireEvent.click(nextButton)
    expect(mockProps.onNext).toHaveBeenCalled()
  })

  it('renders "Abschluss" button when completed and last', () => {
    render(<TopicView {...mockProps} isCompleted={true} isLast={true} />)
    const lastButton = screen.getByText('Abschluss 🎓')
    expect(lastButton).toBeInTheDocument()

    fireEvent.click(lastButton)
    expect(mockProps.onNext).toHaveBeenCalled()
  })

  it('does not render next button when not completed', () => {
    render(<TopicView {...mockProps} isCompleted={false} />)
    expect(screen.queryByRole('button', { name: /Weiter/ })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Abschluss/ })).not.toBeInTheDocument()
  })
})
