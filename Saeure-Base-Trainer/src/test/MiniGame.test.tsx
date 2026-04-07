import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MiniGame } from '../components/MiniGame'

describe('MiniGame', () => {
  it('renders the first molecule and action buttons', () => {
    render(
      <MiniGame
        onScore={vi.fn()}
        onComplete={vi.fn()}
        onToast={vi.fn()}
      />
    )
    expect(screen.getByText('Ist Säure')).toBeInTheDocument()
    expect(screen.getByText('Ist Base')).toBeInTheDocument()
    expect(screen.getByText(/Partikel 1\/10/)).toBeInTheDocument()
  })

  it('shows score starting at 0', () => {
    render(
      <MiniGame
        onScore={vi.fn()}
        onComplete={vi.fn()}
        onToast={vi.fn()}
      />
    )
    expect(screen.getByText(/Punkte: 0/)).toBeInTheDocument()
  })

  it('calls onToast after an answer', () => {
    const onToast = vi.fn()
    render(
      <MiniGame
        onScore={vi.fn()}
        onComplete={vi.fn()}
        onToast={onToast}
      />
    )
    fireEvent.click(screen.getByText('Ist Säure'))
    expect(onToast).toHaveBeenCalled()
  })
})
