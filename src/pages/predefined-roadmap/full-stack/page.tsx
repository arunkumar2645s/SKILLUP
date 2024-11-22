import { TechStackDetails } from '@/components/tech-stack-details'

const fullStackSubdivisions = [
  { name: 'Frontend', slug: 'full-stack/frontend', description: 'Client-side development with HTML, CSS, and JavaScript' },
  { name: 'Backend', slug: 'full-stack/backend', description: 'Server-side development with various programming languages and frameworks' },
  { name: 'Database', slug: 'full-stack/database', description: 'Data storage and management systems' },
]

export default function FullStackPage() {
  return <TechStackDetails name="Full Stack" subdivisions={fullStackSubdivisions} />
}

