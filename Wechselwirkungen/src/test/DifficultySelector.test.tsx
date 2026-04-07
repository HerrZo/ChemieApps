import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DifficultySelector } from '../components/DifficultySelector'

describe('DifficultySelector', () => {
  it('rendert alle Schwierigkeitsstufen', () => {
    render(<DifficultySelector current="leicht" onChange={vi.fn()} />)
    expect(screen.getByText(/Leicht/)).toBeInTheDocument()
    expect(screen.getByText(/Mittel/)).toBeInTheDocument()
    expect(screen.getByText(/Schwer/)).toBeInTheDocument()
  })

  it('ruft onChange mit der gewählten Schwierigkeit auf', () => {
    const onChange = vi.fn()
    render(<DifficultySelector current="leicht" onChange={onChange} />)
    fireEvent.click(screen.getByText(/Mittel/))
    expect(onChange).toHaveBeenCalledWith('mittel')
  })

  it('markiert die aktuelle Schwierigkeit als aktiv', () => {
    render(<DifficultySelector current="schwer" onChange={vi.fn()} />)
    const schwerBtn = screen.getByText(/Schwer/)
    expect(schwerBtn.closest('button')).toHaveClass('active')
  })
})
