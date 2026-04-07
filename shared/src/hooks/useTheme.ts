import { useState, useEffect } from 'react'

export function useTheme(storageKey = 'chem-theme') {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem(storageKey)
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem(storageKey, isDark ? 'dark' : 'light')
  }, [isDark, storageKey])

  const toggle = () => setIsDark(d => !d)

  return { isDark, toggle }
}
