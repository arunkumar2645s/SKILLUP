import Image from 'next/image'

interface RoadmapContentProps {
  title: string
  description: string
  content: {
    title: string
    description: string
  }[]
  imagePath?: string
}

export function RoadmapContent({ title, description, content, imagePath }: RoadmapContentProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">{title}</h1>
      <div className="mb-12">
        <Image
          src={imagePath || `/placeholder.svg?height=300&width=800`}
          alt={`${title} illustration`}
          width={800}
          height={300}
          className="rounded-lg shadow-md mx-auto"
        />
      </div>
      <p className="text-xl mb-12 text-center text-gray-700 max-w-3xl mx-auto">{description}</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {content.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-primary">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

