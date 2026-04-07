import { Component, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; message: string }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 32, textAlign: 'center' }}>
          <div style={{ fontSize: '3rem' }}>⚠️</div>
          <h2 style={{ marginBottom: 8 }}>Ein Fehler ist aufgetreten</h2>
          <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{this.state.message}</p>
          <button
            style={{ marginTop: 16, padding: '8px 20px', cursor: 'pointer' }}
            onClick={() => this.setState({ hasError: false, message: '' })}
          >
            Neu laden
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
