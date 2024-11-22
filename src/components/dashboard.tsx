import { RoadmapCard } from './roadmap-card'
import './dashboard.css'

export function Dashboard() {
  const roadmaps = [
    {
      title: 'Web Development',
      description: 'Learn frontend and backend technologies to become a full-stack developer.',
      type: 'predefined' as const,
      route: '/predefined-roadmap/full-stack/page',
    },
    {
      title: 'Data Science',
      description: 'Master data analysis, machine learning, classification and statistical modeling.',
      type: 'predefined' as const,
      route: '/predefined-roadmap/data-science/page',
    },
    {
      title: 'AI',
      description: 'Learn the basics of NLP, Computer Vision, Machine learning and Deep learning.',
      type: 'predefined' as const,
      route: '/predefined-roadmap/ai/page',
    },
    {
      title: 'Custom Learning Path',
      description: 'Create your own personalized learning journey based on your goals.',
      type: 'custom' as const,
      route: '/custom-roadmap/page',
    },
  ]

  return (
    <div className="dashboard container">
      <h1 className="dashboard-title">Your Learning Dashboard</h1>
      <div className="dashboard-grid">
        {roadmaps.map((roadmap, index) => (
          <RoadmapCard key={index} {...roadmap} />
        ))}
      </div>
    </div>
  )
}

