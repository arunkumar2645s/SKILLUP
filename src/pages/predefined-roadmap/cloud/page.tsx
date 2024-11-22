import { TechStackDetails } from '@/components/tech-stack-details'

const cloudSubdivisions = [
  { name: 'Cloud Platforms', slug: 'cloud/platforms', description: 'Understanding major cloud service providers' },

]

export default function CloudPage() {
  return <TechStackDetails name="Cloud Computing" subdivisions={cloudSubdivisions} />
}

