import Image from 'next/image';
import { Brain, Box, Circle, Cuboid, Github } from 'lucide-react';

const topics = [
  {
    title: 'Neural Network Fundamentals',
    description: 'Understand the basic building blocks of neural networks, including neurons, layers, and activation functions.',
    icon: <Brain className="topic-icon" />,
  },
  {
    title: 'Convolutional Neural Networks (CNNs)',
    description: 'Learn about CNNs and their applications in image and video processing tasks.',
    icon: <Box className="topic-icon" />,
  },
  {
    title: 'Recurrent Neural Networks (RNNs)',
    description: 'Explore RNNs and their variants like LSTM and GRU for sequential data processing.',
    icon: <Circle className="topic-icon" />,
  },
  {
    title: 'Generative Models',
    description: 'Study generative models like GANs and VAEs for creating new data samples.',
    icon: <Cuboid className="topic-icon" />,
  },
  {
    title: 'Deep Learning Frameworks',
    description: 'Gain proficiency in popular deep learning frameworks such as TensorFlow and PyTorch.',
    icon: <Github className="topic-icon" />,
  },
];

export default function DeepLearningPage() {
  return (
    <div className="deep-learning-page">
      <div className="container">
        <div className="header">
          <h1>Deep Learning</h1>
          <p>
            Deep Learning is a subset of machine learning that uses neural networks with multiple layers to learn complex patterns in data.
          </p>
        </div>

        <div className="main-image">
          <Image
            src="/roadmap_images/Deeplearning.png"
            alt="Deep Learning Illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
          <p>Illustration showcasing the landscape of Deep Learning</p>
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
        .deep-learning-page {
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