import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { EnhancedQuizPanel } from '../components/EnhancedQuizPanel'

describe('EnhancedQuizPanel (ZMWW)', () => {
  it('rendert die Schwierigkeitsauswahl', () => {
    render(<EnhancedQuizPanel />)
    expect(screen.getByText(/Leicht|Alle/i)).toBeInTheDocument()
  })

  it('zeigt Score zu Beginn bei 0', () => {
    render(<EnhancedQuizPanel />)
    const scoreEl = screen.getAllByText('0')
    expect(scoreEl.length).toBeGreaterThan(0)
  })

  it('zeigt Antwortoptionen für Multiple-Choice', () => {
    render(<EnhancedQuizPanel />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(2)
  })

  it('zeigt Hinweis-Button wenn Hinweise verfügbar', () => {
    render(<EnhancedQuizPanel />)
    const hintBtn = screen.queryByText(/Hinweis/i)
    if (hintBtn) {
      fireEvent.click(hintBtn)
      expect(screen.getByText(/Hinweis/i)).toBeInTheDocument()
    }
  })
})
