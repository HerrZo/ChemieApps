import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { useTheme } from '../hooks/useTheme'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
})

describe('useTheme', () => {
  it('defaults to light mode when no preference is stored', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: () => ({ matches: false }),
    })
    const { result } = renderHook(() => useTheme())
    expect(result.current.isDark).toBe(false)
  })

  it('toggle switches between dark and light', () => {
    const { result } = renderHook(() => useTheme())
    const initial = result.current.isDark
    act(() => result.current.toggle())
    expect(result.current.isDark).toBe(!initial)
  })

  it('sets data-theme attribute on documentElement', () => {
    const { result } = renderHook(() => useTheme())
    const theme = result.current.isDark ? 'dark' : 'light'
    expect(document.documentElement.getAttribute('data-theme')).toBe(theme)
  })

  it('persists theme to localStorage', () => {
    const { result } = renderHook(() => useTheme())
    act(() => result.current.toggle())
    const stored = localStorage.getItem('ab-theme')
    expect(stored).toBe(result.current.isDark ? 'dark' : 'light')
  })
})
