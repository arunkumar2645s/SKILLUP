import { TechStackDetails } from '@/components/tech-stack-details'

const aiSubdivisions = [
  { name: 'Machine Learning', slug: 'ai/machine-learning', description: 'Algorithms that improve through experience' },
  { name: 'Deep Learning', slug: 'ai/deep-learning', description: 'Neural networks with multiple layers' },
  { name: 'Natural Language Processing', slug: 'ai/nlp', description: 'Processing and analyzing human language' },
  { name: 'Computer Vision', slug: 'ai/computer-vision', description: 'Enabling computers to interpret visual information' },
]

export default function AIPage() {
  return <TechStackDetails name="Artificial Intelligence" subdivisions={aiSubdivisions} />
}

