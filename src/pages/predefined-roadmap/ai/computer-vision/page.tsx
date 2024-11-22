import Image from 'next/image';
import { Eye, Box, User, Grid, Cuboid } from 'lucide-react';


const topics = [
  {
    title: 'Image Processing',
    description: 'Learn fundamental techniques for manipulating and enhancing digital images.',
    icon: <Eye className="topic-icon" />,
  },
  {
    title: 'Object Detection',
    description: 'Explore algorithms for identifying and locating objects within images or video streams.',
    icon: <Box className="topic-icon" />,
  },
  {
    title: 'Image Segmentation',
    description: 'Study methods for partitioning images into multiple segments or objects.',
    icon: <Grid className="topic-icon" />,
  },
  {
    title: 'Facial Recognition',
    description: 'Understand the principles and applications of facial recognition technology.',
    icon: <User className="topic-icon" />,
  },
  {
    title: '3D Computer Vision',
    description: 'Learn about 3D reconstruction and depth estimation from 2D images.',
    icon: <Cuboid className="topic-icon" />,
  },
];

export default function ComputerVisionPage() {
  return (
    <div className="computer-vision-page">
      <div className="container">
        <div className="header">
          <h1>Computer Vision</h1>
          <p>
            Computer Vision is a field of AI that trains computers to interpret and understand the visual world,
            enabling machines to derive meaningful information from digital images or videos.
          </p>
        </div>

        <div className="main-image">
          <Image
            src="/roadmap_images/compvision.png"
            alt="Computer Vision Illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
          <p>Illustration showcasing the landscape of Computer Vision</p>
        </div>

        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <div className="topic-icon-wrapper">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .computer-vision-page {
          font-family: 'Arial', sans-serif;
          background: linear-gradient(to bottom, #e6fffa, #f0fdf4);
          color: #065f46;
          min-height: 100vh;
          padding: 2rem 1rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #064e3b;
        }

        .header p {
          font-size: 1.25rem;
          color: #065f46;
          max-width: 800px;
          margin: 1rem auto;
        }

        .main-image {
          text-align: center;
          margin-bottom: 2rem;
        }

        .main-image img {
          border-radius: 8px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .main-image p {
          color: #065f46;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .topic-card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .topic-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .topic-icon-wrapper {
          width: 3rem;
          height: 3rem;
          background-color: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .topic-icon {
          color: white;
          width: 1.5rem;
          height: 1.5rem;
        }

        .topic-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #064e3b;
          margin-bottom: 0.5rem;
        }

        .topic-card p {
          font-size: 0.875rem;
          color: #065f46;
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
          display: inline-block;
          background-color: #10b981;
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
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