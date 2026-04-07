import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MiniGame } from '../components/MiniGame'

describe('MiniGame (Formel ↔ Name)', () => {
  it('renders the input field and submit button', () => {
    render(<MiniGame onScore={vi.fn()} onComplete={vi.fn()} onToast={vi.fn()} />)
    expect(screen.getByPlaceholderText('Deine Antwort...')).toBeInTheDocument()
    expect(screen.getByText('✓')).toBeInTheDocument()
  })

  it('shows round counter starting at 1', () => {
    render(<MiniGame onScore={vi.fn()} onComplete={vi.fn()} onToast={vi.fn()} />)
    expect(screen.getByText(/Frage 1\/12/)).toBeInTheDocument()
  })

  it('shows toast when submitting empty input', () => {
    const onToast = vi.fn()
    render(<MiniGame onScore={vi.fn()} onComplete={vi.fn()} onToast={onToast} />)
    fireEvent.click(screen.getByText('✓'))
    expect(onToast).toHaveBeenCalledWith('Bitte eine Antwort eingeben!')
  })

  it('accepts Enter key to submit', () => {
    const onToast = vi.fn()
    render(<MiniGame onScore={vi.fn()} onComplete={vi.fn()} onToast={onToast} />)
    const input = screen.getByPlaceholderText('Deine Antwort...')
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onToast).toHaveBeenCalled()
  })
})
