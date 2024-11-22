import Image from 'next/image'

export default function ContainerizationPage() {
  return (
    <div className="container">
      <h1 className="title">Containerization</h1>
      <div className="image-container">
        <Image
          src="/roadmap_images/containerisation.png"
          alt="Containerization illustration"
          width={800}
          height={400}
          className="image"
        />
      </div>
      <p className="description">
        Containerization is a lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating environment.
      </p>
      <div className="content">
        {[ 
          {
            title: "Docker Fundamentals",
            description: "Learn the basics of Docker, including containers, images, and Dockerfiles."
          },
          {
            title: "Container Orchestration",
            description: "Explore container orchestration platforms like Kubernetes for managing containerized applications."
          },
          {
            title: "Microservices Architecture",
            description: "Understand how containerization enables and supports microservices-based applications."
          },
          {
            title: "Container Security",
            description: "Learn best practices for securing containerized applications and environments."
          },
          {
            title: "CI/CD with Containers",
            description: "Implement continuous integration and deployment pipelines using containerized applications."
          }
        ].map((item, index) => (
          <div key={index} className="content-item">
            <h2 className="content-title">{item.title}</h2>
            <p className="content-description">{item.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .title {
          text-align: center;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }

        .image-container {
          text-align: center;
          margin-bottom: 20px;
        }

        .image {
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .description {
          text-align: center;
          font-size: 18px;
          color: #555;
          margin-bottom: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .content {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }

        .content-item {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .content-item:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .content-title {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }

        .content-description {
          font-size: 16px;
          color: #666;
        }
      `}</style>
    </div>
  )
}