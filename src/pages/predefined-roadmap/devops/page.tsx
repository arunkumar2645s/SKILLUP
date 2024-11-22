import { TechStackDetails } from '@/components/tech-stack-details'

const devopsSubdivisions = [
  { name: 'Continuous Integration & Deployment', slug: 'devops/ci', description: 'Automating the integration of code changes' },
  { name: 'Containerization', slug: 'devops/containerization', description: 'Packaging applications and dependencies together' },
]

export default function DevOpsPage() {
  return <TechStackDetails name="DevOps" subdivisions={devopsSubdivisions} />
}

