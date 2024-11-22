import { BarChart, Group, Cpu, Search, Filter } from 'lucide-react'
import Image from 'next/image';

export default function MachineLearningPage() {
  return (
    <div className="machine-learning-page">
      <div className="container">
        <div className="header">
          <h1>Machine Learning</h1>
          <p>
            Machine Learning is a subset of AI that focuses on the development of algorithms and statistical models that enable computer systems to improve their performance on a specific task through experience.
          </p>
        </div>

        <div className="main-image">
          <Image
            src="/roadmap_images/machinelearning.png"
            alt="Machine Learning Illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
          <p>Illustration showcasing the field of Machine Learning</p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <BarChart className="topic-icon" />
            </div>
            <h3>Supervised Learning</h3>
            <p>Understand algorithms like linear regression, logistic regression, and support vector machines.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Group className="topic-icon" />
            </div>
            <h3>Unsupervised Learning</h3>
            <p>Explore clustering algorithms, dimensionality reduction techniques, and anomaly detection.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Cpu className="topic-icon" />
            </div>
            <h3>Deep Learning</h3>
            <p>Learn about neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Search className="topic-icon" />
            </div>
            <h3>Model Evaluation</h3>
            <p>Master techniques for evaluating and improving machine learning models, including cross-validation and hyperparameter tuning.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Filter className="topic-icon" />
            </div>
            <h3>Feature Engineering</h3>
            <p>Understand the importance of feature selection and creation in improving model performance.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .machine-learning-page {
          font-family: 'Arial', sans-serif;
          background: linear-gradient(to bottom, #e6f7ff, #e6f9ff);
          color: #064e3b;
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
          color: #064e3b;
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
          color: #064e3b;
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
          color: #064e3b;
        }
      `}</style>
    </div>
  )
}