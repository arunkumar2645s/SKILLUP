import Image from 'next/image'

export default function SystemDesignPage() {
  return (
    <div className="container">
      <h1 className="title">System Design</h1>
      <div className="image-container">
        <Image
          src="/roadmap_images/systemdesign.png"
          alt="System Design"
          width={1200}
          height={600}
          className="image"
        />
      </div>
      <p className="description">
        System Design involves creating architectures for complex systems that are scalable, reliable, and efficient.
      </p>
      <div className="content">
        {[ 
          {
            title: "Scalability",
            description: "Learn techniques for designing systems that can handle increasing loads and users."
          },
          {
            title: "Distributed Systems",
            description: "Understand the principles of designing and implementing distributed systems."
          },
          {
            title: "Database Design",
            description: "Learn to design efficient database schemas and choose appropriate database systems."
          },
          {
            title: "Caching Strategies",
            description: "Explore various caching techniques to improve system performance."
          },
          {
            title: "Microservices Architecture",
            description: "Understand the principles and best practices of microservices-based system design."
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