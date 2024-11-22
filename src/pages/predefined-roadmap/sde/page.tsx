import { TechStackDetails } from '@/components/tech-stack-details'

const sdeSubdivisions = [
  { name: 'Programming Languages', slug: 'sde/languages', description: 'Mastering various programming languages' },
  { name: 'Data Structures and Algorithms', slug: 'sde/dsa', description: 'Understanding fundamental computer science concepts' },
  { name: 'System Design', slug: 'sde/system-design', description: 'Designing scalable and efficient software systems' },
  { name: 'Software Testing', slug: 'sde/testing', description: 'Ensuring software quality through various testing methods' },
 
]

export default function SDEPage() {
  return <TechStackDetails name="Software Development Engineer" subdivisions={sdeSubdivisions} />
}

