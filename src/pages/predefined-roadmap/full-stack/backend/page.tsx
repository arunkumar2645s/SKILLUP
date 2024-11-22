import Image from 'next/image';
import { ArrowRight, Server, Lock, Share, Zap, Terminal } from 'lucide-react';

const topics = [
  {
    title: 'Node.js',
    description: 'Learn to build scalable and high-performance server-side applications using JavaScript.',
    icon: <Server className="topic-icon" />,
  },
  {
    title: 'Authentication',
    description: 'Understand user authentication strategies using OAuth, JWT, and session-based methods.',
    icon: <Lock className="topic-icon" />,
  },
  {
    title: 'API Development',
    description: 'Master RESTful and GraphQL API design, implementation, and integration.',
    icon: <Share className="topic-icon" />,
  },
  {
    title: 'Real-time Applications',
    description: 'Develop real-time apps using WebSockets and libraries like Socket.IO.',
    icon: <Zap className="topic-icon" />,
  },
  {
    title: 'Serverless Computing',
    description: 'Dive into cloud-based serverless architectures with AWS Lambda, Azure Functions, etc.',
    icon: <Terminal className="topic-icon" />,
  },
];

export default function BackendPage() {
  return (
    <div className="frontend-page">
      <div className="container">
        <div className="header">
          <h1>Backend Development</h1>
          <p>Build robust and efficient server-side systems to power modern applications.</p>
        </div>

        <div className="journey-start">
          <div className="line"></div>
          <span>Your Backend Journey Starts Here</span>
        </div>

        <div className="main-image">
          <Image
            src="/roadmap_images/backend.png"
            alt="Backend Development Illustration"
            width={1100}
            height={800}
          />
          <p>Illustration of the Backend Development landscape</p>
        </div>

        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <div className="topic-content">
                <div className="topic-icon-wrapper">
                  {topic.icon}
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
              <div className="topic-footer">
                <a href="#" className="learn-more">
                  Learn more <ArrowRight className="arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .frontend-page {
          min-height: 100vh;
          background: linear-gradient(to bottom, #f0fdf4, #dcfce7);
          font-family: Arial, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1rem;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .header h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #064e3b;
          margin-bottom: 1rem;
        }

        .header p {
          font-size: 1.25rem;
          color: #065f46;
          max-width: 600px;
          margin: 0 auto;
        }

        .journey-start {
          position: relative;
          text-align: center;
          margin-bottom: 4rem;
        }

        .journey-start .line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background-color: #34d399;
        }

        .journey-start span {
          position: relative;
          background-color: #f0fdf4;
          padding: 0 1rem;
          color: #064e3b;
          font-weight: 600;
        }

        .main-image {
          text-align: center;
          margin-bottom: 4rem;
        }

        .main-image img {
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .main-image p {
          margin-top: 1rem;
          color: #065f46;
          font-size: 0.875rem;
        }

        .topics-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          margin-bottom: 4rem;
        }

        .topic-card {
          background-color: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .topic-card:hover {
          transform: translateY(-5px);
        }

        .topic-content {
          padding: 1.5rem;
        }

        .topic-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          background-color: #10b981;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }

        .topic-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }

        .topic-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #064e3b;
          margin-bottom: 0.5rem;
        }

        .topic-card p {
          color: #065f46;
          font-size: 0.875rem;
        }

        .topic-footer {
          background-color: #f0fdf4;
          padding: 1rem 1.5rem;
        }

        .learn-more {
          display: flex;
          align-items: center;
          color: #059669;
          font-weight: 500;
          text-decoration: none;
        }

        .learn-more:hover {
          color: #047857;
        }

        .arrow-icon {
          width: 1rem;
          height: 1rem;
          margin-left: 0.5rem;
        }

        .cta-section {
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #064e3b;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.125rem;
          color: #065f46;
          margin-bottom: 2rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          background-color: #10b981;
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #059669;
        }
      `}</style>
    </div>
  );
}