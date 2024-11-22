import { TechStackDetails } from '@/components/tech-stack-details'

const iotSubdivisions = [
  { name: 'Embedded Systems', slug: 'iot/embedded', description: 'Programming for small, specialized devices' },
]

export default function IoTPage() {
  return <TechStackDetails name="Internet of Things" subdivisions={iotSubdivisions} />
}

