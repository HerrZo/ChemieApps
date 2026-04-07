import { memo } from 'react'
import type { Topic } from '../types'

interface SidebarProps {
  topics: Topic[]
  currentIndex: number
  completed: Set<number>
  onSelect: (index: number) => void
}

export const Sidebar = memo(function Sidebar({ topics, currentIndex, completed, onSelect }: SidebarProps) {
  return (
    <nav className="sidebar glass-effect" aria-label="Themennavigation">
      <div className="nav-menu">
        {topics.map((topic, i) => (
          <div
            key={topic.id}
            className={`nav-item${i === currentIndex ? ' active' : ''}`}
            onClick={() => onSelect(i)}
            role="button"
            tabIndex={0}
            aria-current={i === currentIndex ? 'page' : undefined}
            onKeyDown={(e) => e.key === 'Enter' && onSelect(i)}
          >
            {topic.title}
            {completed.has(i) && <span className="nav-status" aria-label="Abgeschlossen">✅</span>}
          </div>
        ))}
      </div>
    </nav>
  )
})
