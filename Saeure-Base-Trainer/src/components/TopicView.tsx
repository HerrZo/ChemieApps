import type { Topic } from '../types'
import { QuizPanel } from '@shared/components/QuizPanel'
import { MiniGame } from './MiniGame'

interface TopicViewProps {
  topic: Topic
  topicIndex: number
  isCompleted: boolean
  isLast: boolean
  onQuizComplete: (correct: boolean) => void
  onMiniGameScore: (points: number) => void
  onMiniGameComplete: () => void
  onNext: () => void
  onToast: (msg: string) => void
}

export function TopicView({
  topic,
  topicIndex,
  isCompleted,
  isLast,
  onQuizComplete,
  onMiniGameScore,
  onMiniGameComplete,
  onNext,
  onToast,
}: TopicViewProps) {
  return (
    <div className="content-card">
      <h2 className="card-title">{topic.title}</h2>

      <div
        className="content-body"
        dangerouslySetInnerHTML={{ __html: topic.content }}
      />

      {topic.id === 'minigame' && (
        <MiniGame
          onScore={onMiniGameScore}
          onComplete={onMiniGameComplete}
          onToast={onToast}
        />
      )}

      {topic.quiz && (
        <QuizPanel
          quiz={topic.quiz}
          topicIndex={topicIndex}
          alreadyCompleted={isCompleted}
          onComplete={onQuizComplete}
        />
      )}

      {isCompleted && (
        <div style={{ textAlign: 'right', marginTop: 32 }}>
          <button className="btn-primary" onClick={onNext}>
            {isLast ? 'Abschluss 🎓' : 'Weiter ➔'}
          </button>
        </div>
      )}
    </div>
  )
}
