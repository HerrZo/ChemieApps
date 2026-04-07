import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { EnhancedQuizPanel } from '../components/EnhancedQuizPanel'

describe('EnhancedQuizPanel (Wechselwirkungen)', () => {
  it('rendert Schwierigkeitsauswahl', () => {
    render(<EnhancedQuizPanel />)
    expect(screen.getByText(/Leicht/i)).toBeInTheDocument()
    expect(screen.getByText(/Mittel/i)).toBeInTheDocument()
    expect(screen.getByText(/Schwer/i)).toBeInTheDocument()
  })

  it('zeigt die erste Frage', () => {
    render(<EnhancedQuizPanel />)
    expect(screen.getByText(/Frage 1/)).toBeInTheDocument()
  })

  it('zeigt Score zu Beginn bei 0', () => {
    render(<EnhancedQuizPanel />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('zeigt Antwortoptionen für Multiple-Choice', () => {
    render(<EnhancedQuizPanel />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(3)
  })

  it('wechselt Schwierigkeitsgrad', () => {
    render(<EnhancedQuizPanel />)
    const mittelBtn = screen.getByText(/Mittel/i)
    fireEvent.click(mittelBtn)
    expect(screen.getByText(/Frage 1/)).toBeInTheDocument()
  })
})
