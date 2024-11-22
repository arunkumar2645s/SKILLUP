import Image from 'next/image';

export default function NLPPage() {
  return (
    <div className="nlp-page">
      <div className="container">
        <div className="header">
          <h1>Natural Language Processing</h1>
          <p>
            Natural Language Processing (NLP) focuses on the interaction between computers and human language, enabling machines to understand, interpret, and generate human language.
          </p>
        </div>

        <div className="main-image">
          <Image
            src="/roadmap_images/nlp.png"
            alt="Natural Language Processing Illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
          <p>Illustration showcasing the field of Natural Language Processing</p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for Text Preprocessing */}
            </div>
            <h3>Text Preprocessing</h3>
            <p>Learn techniques for cleaning and preparing text data for NLP tasks.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for Language Modeling */}
            </div>
            <h3>Language Modeling</h3>
            <p>Understand statistical and neural language models for text generation and prediction.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for Named Entity Recognition */}
            </div>
            <h3>Named Entity Recognition</h3>
            <p>Explore methods for identifying and classifying named entities in text.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for Sentiment Analysis */}
            </div>
            <h3>Sentiment Analysis</h3>
            <p>Learn to determine the sentiment or emotion expressed in text data.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for Machine Translation */}
            </div>
            <h3>Machine Translation</h3>
            <p>Study techniques for translating text from one language to another using neural networks.</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Explore NLP?</h2>
          <p>Start learning about how machines can understand and interact with human language!</p>
          <a href="#" className="cta-button">
            Get Started
          </a>
        </div>
      </div>

      <style jsx>{`
        .nlp-page {
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