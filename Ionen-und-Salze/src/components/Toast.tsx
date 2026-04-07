import { useState, useCallback, useRef } from 'react'

interface ToastState {
  message: string
  visible: boolean
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({ message: '', visible: false })
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = useCallback((msg: string, duration = 3000) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setToast({ message: msg, visible: true })
    timeoutRef.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), duration)
  }, [])

  return { toast, show }
}

interface ToastProps {
  message: string
  visible: boolean
}

export function Toast({ message, visible }: ToastProps) {
  if (!visible) return null
  return (
    <div className="toast-container">
      <div className="toast">{message}</div>
    </div>
  )
}
