import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { EnhancedQuizPanel } from '../components/EnhancedQuizPanel'
import { DifficultySelector } from '../components/DifficultySelector'

describe('EnhancedQuizPanel (Molekülpolarität)', () => {
  it('rendert die Schwierigkeitsauswahl', () => {
    render(<EnhancedQuizPanel />)
    expect(screen.getByText(/Leicht/i)).toBeInTheDocument()
  })

  it('zeigt Frage 1 zu Beginn', () => {
    render(<EnhancedQuizPanel />)
    expect(screen.getByText(/Frage 1/)).toBeInTheDocument()
  })

  it('zeigt Score und Streak', () => {
    render(<EnhancedQuizPanel />)
    expect(screen.getByText(/Score/i)).toBeInTheDocument()
    expect(screen.getByText(/Streak/i)).toBeInTheDocument()
  })

  it('rendert Antwortoptionen als Buttons', () => {
    render(<EnhancedQuizPanel />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(2)
  })
})

describe('DifficultySelector (Molekülpolarität)', () => {
  it('rendert alle 3 Schwierigkeitsstufen', () => {
    render(<DifficultySelector current="leicht" onChange={vi.fn()} />)
    expect(screen.getAllByRole('button').length).toBe(3)
  })

  it('ruft onChange beim Klick auf eine Stufe auf', () => {
    const onChange = vi.fn()
    render(<DifficultySelector current="leicht" onChange={onChange} />)
    fireEvent.click(screen.getByText(/Schwer/i))
    expect(onChange).toHaveBeenCalledWith('schwer')
  })
})
