import './roadmap-card.css'
import { useRouter } from 'next/router'

interface RoadmapCardProps {
  title: string
  description: string
  type: 'predefined' | 'custom'
  route: string // Ensure the route prop is defined
}

export function RoadmapCard({ title, description, type, route }: RoadmapCardProps) {
  const router = useRouter()

  // Wrap the route handling logic
  const handleRoute = () => {
    router.push(route)
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">
          {type === 'predefined' ? 'Predefined Roadmap' : 'Custom Roadmap'}
        </p>
      </div>
      <div className="card-content">
        <p className="card-text">{description}</p>
        <button onClick={handleRoute} className="card-button">
          {type === 'predefined' ? 'Start Learning' : 'Customize'}
        </button>
      </div>
    </div>
  )
}
