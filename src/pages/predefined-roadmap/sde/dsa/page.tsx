import Image from 'next/image'

export default function DataStructuresAlgorithmsPage() {
  return (
    <div className="container">
      <h1 className="title">Data Structures and Algorithms</h1>
      <div className="image-container">
        <Image
          src="/roadmap_images/dsa.png"
          alt="Data Structures and Algorithms"
          width={1200}
          height={600}
          className="image"
        />
      </div>
      <p className="description">
        Data Structures and Algorithms form the foundation of computer science and are crucial for writing efficient and optimized code.
      </p>
      <div className="content">
        {[ 
          {
            title: "Basic Data Structures",
            description: "Master fundamental data structures like arrays, linked lists, stacks, and queues."
          },
          {
            title: "Advanced Data Structures",
            description: "Learn complex data structures such as trees, graphs, and hash tables."
          },
          {
            title: "Sorting and Searching Algorithms",
            description: "Understand various sorting and searching algorithms and their time complexities."
          },
          {
            title: "Dynamic Programming",
            description: "Learn to solve complex problems by breaking them down into simpler subproblems."
          },
          {
            title: "Graph Algorithms",
            description: "Explore algorithms for traversing and analyzing graph structures."
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