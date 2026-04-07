import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { GuideMode } from '../components/GuideMode'

describe('GuideMode', () => {
  it('rendert die Alkan-Auswahl', () => {
    render(<GuideMode carbonCount={3} onCarbonCountChange={() => {}} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('zeigt die Reaktionsgleichung', () => {
    render(<GuideMode carbonCount={1} onCarbonCountChange={() => {}} />)
    expect(screen.getByText(/CH₄|CH4|Methan/i)).toBeInTheDocument()
  })

  it('ändert den Kohlenstoffzähler', () => {
    const onChange = vi.fn()
    render(<GuideMode carbonCount={3} onCarbonCountChange={onChange} />)
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: '5' } })
    expect(onChange).toHaveBeenCalledWith(5)
  })
})
