import Image from 'next/image'
import Link from 'next/link'
import './tech-stack-details.css'
import '../styles/globals.css'

interface Subdivision {
  name: string
  slug: string
  description: string
}

interface TechStackDetailsProps {
  name: string
  subdivisions: Subdivision[]
}

export function TechStackDetails({ name, subdivisions }: TechStackDetailsProps) {
  return (
    <div className="tech-stack-container">
      <div className="floating-bubble bubble-1"></div>
      <div className="floating-bubble bubble-2"></div>
      <div className="floating-bubble bubble-3"></div>
      <div className="floating-bubble bubble-4"></div>
      
      <h1 className="tech-stack-title">{name} Roadmap</h1>
      <div className="tech-stack-image-container">
        <Image
          src="/roadmap_images/general-image.jpeg"
          alt={`${name} illustration`}
          width={800}
          height={400}
          className="tech-stack-image"
        />
      </div>
      <p className="tech-stack-description">
        This is a comprehensive roadmap for {name}. It covers all the essential topics and skills you need to master to become proficient in this field.
      </p>
      <div className="tech-stack-subdivisions">
        {subdivisions.map((subdivision) => (
          <Link href={`/predefined-roadmap/${subdivision.slug}/page`} key={subdivision.slug}>
            <div className="tech-stack-card">
              <div className="tech-stack-card-header">
                <h2 className="tech-stack-card-title">{subdivision.name}</h2>
                <p className="tech-stack-card-description">{subdivision.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

