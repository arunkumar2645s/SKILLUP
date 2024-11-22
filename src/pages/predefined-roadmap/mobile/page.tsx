import { TechStackDetails } from '@/components/tech-stack-details'

const mobileSubdivisions = [
  { name: 'iOS Development', slug: 'mobile/ios', description: 'Building applications for Apple devices' },
]

export default function MobilePage() {
  return <TechStackDetails name="Mobile Development" subdivisions={mobileSubdivisions} />
}

