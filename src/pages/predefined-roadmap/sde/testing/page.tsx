import Image from 'next/image'

export default function SoftwareTestingPage() {
  return (
    <div className="container">
      <h1 className="title">Software Testing</h1>
      <div className="image-container">
        <Image
          src="/roadmap_images/testing.jpg"
          alt="Software Testing"
          width={800}
          height={400}
          className="image"
        />
      </div>
      <p className="description">
        Software Testing is a crucial part of the development process that ensures the quality and reliability of software applications.
      </p>
      <div className="content">
        {[ 
          {
            title: "Unit Testing",
            description: "Learn to write and run tests for individual components or functions of your code."
          },
          {
            title: "Integration Testing",
            description: "Understand how to test the interaction between different components or systems."
          },
          {
            title: "Test-Driven Development (TDD)",
            description: "Explore the practice of writing tests before implementing the actual code."
          },
          {
            title: "Automated Testing",
            description: "Learn to use tools and frameworks for automating the testing process."
          },
          {
            title: "Performance Testing",
            description: "Understand techniques for testing the speed, responsiveness, and stability of software under various conditions."
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