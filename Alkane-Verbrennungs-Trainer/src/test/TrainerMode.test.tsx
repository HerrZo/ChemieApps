import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TrainerMode } from '../components/TrainerMode'

describe('TrainerMode', () => {
  const defaultProps = { score: 0, total: 0, streak: 0, onUpdate: vi.fn() }

  it('zeigt die Eingabefelder für Koeffizienten', () => {
    render(<TrainerMode {...defaultProps} />)
    const inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toBeGreaterThanOrEqual(4)
  })

  it('zeigt den Prüfen-Button', () => {
    render(<TrainerMode {...defaultProps} />)
    expect(screen.getByText('Prüfen')).toBeInTheDocument()
  })

  it('zeigt Atom-Bilanz (C, H, O)', () => {
    render(<TrainerMode {...defaultProps} />)
    expect(screen.getByText('C')).toBeInTheDocument()
    expect(screen.getByText('H')).toBeInTheDocument()
    expect(screen.getByText('O')).toBeInTheDocument()
  })

  it('ruft onUpdate nach Prüfen auf', () => {
    const onUpdate = vi.fn()
    render(<TrainerMode score={0} total={0} streak={0} onUpdate={onUpdate} />)
    fireEvent.click(screen.getByText('Prüfen'))
    expect(onUpdate).toHaveBeenCalled()
  })

  it('zeigt Feedback nach Prüfen', () => {
    render(<TrainerMode {...defaultProps} />)
    fireEvent.click(screen.getByText('Prüfen'))
    const feedback = screen.queryByText(/Korrekt|Nicht ganz richtig/)
    expect(feedback).toBeInTheDocument()
  })
})
