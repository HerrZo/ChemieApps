import type { Topic } from '../types'

interface SidebarProps {
  topics: Topic[]
  currentIndex: number
  completed: Set<number>
  onSelect: (index: number) => void
}

export function Sidebar({ topics, currentIndex, completed, onSelect }: SidebarProps) {
  return (
    <nav className="sidebar glass-effect">
      <div className="nav-menu">
        {topics.map((topic, i) => (
          <div
            key={topic.id}
            className={`nav-item${i === currentIndex ? ' active' : ''}`}
            onClick={() => onSelect(i)}
          >
            {topic.title}
            {completed.has(i) && <span className="nav-status">✅</span>}
          </div>
        ))}
      </div>
    </nav>
  )
}
