import Image from 'next/image'

export default function ProgrammingLanguagesPage() {
  return (
    <div className="container">
      <h1 className="title">Programming Languages</h1>
      <div className="image-container">
        <Image
          src="/roadmap_images/proglanguages.png"
          alt="Programming Languages"
          width={1200}
          height={600}
          className="image"
        />
      </div>
      <p className="description">
        As a Software Development Engineer, it&apos;s crucial to have a strong foundation in various programming languages to tackle diverse projects and challenges.
      </p>
      <div className="content">
        {[ 
          {
            title: "Object-Oriented Languages",
            description: "Master languages like Java or C++ to understand OOP principles and design patterns."
          },
          {
            title: "Scripting Languages",
            description: "Learn Python or JavaScript for rapid prototyping, automation, and web development."
          },
          {
            title: "Functional Programming",
            description: "Explore languages like Haskell or Scala to understand functional programming paradigms."
          },
          {
            title: "Low-Level Programming",
            description: "Gain experience with C to understand memory management and system-level programming."
          },
          {
            title: "Domain-Specific Languages",
            description: "Familiarize yourself with DSLs like SQL for database management or R for statistical computing."
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