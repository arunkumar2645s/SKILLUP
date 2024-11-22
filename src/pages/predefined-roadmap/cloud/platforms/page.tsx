import Image from 'next/image';

export default function CloudPlatformsPage() {
  return (
    <div className="cloud-platforms-page">
      <div className="container">
        <div className="header">
          <h1>Cloud Platforms</h1>
          <p>
            Cloud platforms provide a range of services for computing, storage, networking, and more, enabling scalable and flexible application deployment.
          </p>
        </div>

        <div className="main-image">
          <Image
            src="/roadmap_images/cloudcomputing.png"
            alt="Cloud Computing Illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
          <p>Illustration showcasing the field of Cloud Platforms</p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for AWS */}
            </div>
            <h3>Amazon Web Services (AWS)</h3>
            <p>Learn core AWS services like EC2, S3, and Lambda, and how to architect solutions using AWS.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for Microsoft Azure */}
            </div>
            <h3>Microsoft Azure</h3>
            <p>Understand Azure&apos;s offerings, including virtual machines, App Service, and Azure Functions.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for Google Cloud Platform */}
            </div>
            <h3>Google Cloud Platform (GCP)</h3>
            <p>Explore GCP services like Compute Engine, Cloud Storage, and Cloud Functions.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for Cloud Service Models */}
            </div>
            <h3>Cloud Service Models</h3>
            <p>Understand the differences between IaaS, PaaS, and SaaS, and when to use each model.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              {/* Add icon here for Multi-Cloud Strategies */}
            </div>
            <h3>Multi-Cloud Strategies</h3>
            <p>Learn about the benefits and challenges of using multiple cloud providers and how to implement multi-cloud architectures.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cloud-platforms-page {
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
          background-color: #0ea5e9;
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
  );
}