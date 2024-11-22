import { TechStackDetails } from '@/components/tech-stack-details'

const dataScienceSubdivisions = [
  { name: 'Data Analysis', slug: 'data-science/analysis', description: 'Exploring and analyzing data to find insights' },
]

export default function DataSciencePage() {
  return <TechStackDetails name="Data Science" subdivisions={dataScienceSubdivisions} />
}

