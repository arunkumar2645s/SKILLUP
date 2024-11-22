import Image from 'next/image';
import { Shield, Lock, Key, FileLock, Clipboard } from 'lucide-react'

export default function InformationSecurityPage() {
  return (
    <div className="information-security-page">
      <div className="container">
        <div className="header">
          <h1>Information Security</h1>
          <p>
            Information security is about protecting sensitive data from unauthorized access, use, disclosure, disruption, modification, or destruction.
          </p>
        </div>

        <div className="main-image">
          <Image
            src="/roadmap_images/infosecurity.png"
            alt="Information Security Illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
          <p>Illustration showcasing Information Security practices</p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Shield className="topic-icon" />
            </div>
            <h3>Data Classification</h3>
            <p>Learn to categorize data based on sensitivity and implement appropriate security controls.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Lock className="topic-icon" />
            </div>
            <h3>Encryption</h3>
            <p>Understand various encryption algorithms and their applications in securing data at rest and in transit.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Key className="topic-icon" />
            </div>
            <h3>Access Control</h3>
            <p>Implement and manage access control systems to ensure data is only accessible to authorized individuals.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <FileLock className="topic-icon" />
            </div>
            <h3>Data Loss Prevention</h3>
            <p>Learn strategies and tools to prevent unauthorized data exfiltration.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Clipboard className="topic-icon" />
            </div>
            <h3>Compliance and Regulations</h3>
            <p>Understand key data protection regulations like GDPR, HIPAA, and PCI DSS.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .information-security-page {
          font-family: 'Arial', sans-serif;
          background: linear-gradient(to bottom, #f3f4f6, #e3f2fd);
          color: #1e3a8a;
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
          color: #1e3a8a;
        }

        .header p {
          font-size: 1.25rem;
          color: #1e3a8a;
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
          color: #1e3a8a;
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
          background-color: #3b82f6;
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
          color: #1e3a8a;
          margin-bottom: 0.5rem;
        }

        .topic-card p {
          font-size: 0.875rem;
          color: #1e3a8a;
        }
      `}</style>
    </div>
  )
}