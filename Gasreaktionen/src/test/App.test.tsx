import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from '../App'

// localStorage mock
beforeEach(() => {
  localStorage.clear()
})

describe('Gasreaktionen App', () => {
  it('rendert den Titel', () => {
    render(<App />)
    expect(screen.getByText(/Volumen & Masse|Avogadro/i)).toBeInTheDocument()
  })

  it('zeigt die Start-Navigation', () => {
    render(<App />)
    expect(screen.getByText(/Start/i)).toBeInTheDocument()
    expect(screen.getByText(/Lernen/i)).toBeInTheDocument()
    expect(screen.getByText(/Üben/i)).toBeInTheDocument()
  })

  it('zeigt den Intro-Text mit dem Gesetz von Avogadro', () => {
    render(<App />)
    expect(screen.getByText(/Avogadro/i)).toBeInTheDocument()
  })

  it('wechselt zum Lernbereich beim Klick auf Starten', () => {
    render(<App />)
    const startBtn = screen.getByText(/Starten →/)
    fireEvent.click(startBtn)
    expect(screen.getByText(/Beispiel/i)).toBeInTheDocument()
  })

  it('Dark Mode Toggle ist vorhanden', () => {
    render(<App />)
    const toggle = screen.getByRole('button', { name: /Dark Mode|Light Mode/i })
    expect(toggle).toBeInTheDocument()
  })

  it('wechselt zu Üben', () => {
    render(<App />)
    fireEvent.click(screen.getByText(/Üben/))
    expect(screen.getByText(/Aufgabe/i)).toBeInTheDocument()
  })
})
