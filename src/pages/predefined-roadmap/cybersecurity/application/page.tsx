import Image from 'next/image';
import { Code, Lock, Share, Shield, Search } from 'lucide-react'

export default function ApplicationSecurityPage() {
  return (
    <div className="app-security-page">
      <div className="container">
        <div className="header">
          <h1>Application Security</h1>
          <p>
            Application security focuses on protecting software applications from external threats throughout their lifecycle.
          </p>
        </div>

        <div className="main-image">
          <Image
            src="/roadmap_images/applicationsecurity.png"
            alt="Application Security Illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
          <p>Illustration showcasing the field of Application Security</p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Code className="topic-icon" />
            </div>
            <h3>Secure Coding Practices</h3>
            <p>Learn to write code that is resistant to common vulnerabilities like SQL injection and XSS.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Lock className="topic-icon" />
            </div>
            <h3>Authentication and Authorization</h3>
            <p>Implement robust user authentication and access control mechanisms.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Share className="topic-icon" />
            </div>
            <h3>API Security</h3>
            <p>Secure APIs against unauthorized access and data exposure.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Shield className="topic-icon" />
            </div>
            <h3>Vulnerability Assessment</h3>
            <p>Use tools and techniques to identify and assess security vulnerabilities in applications.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Search className="topic-icon" />
            </div>
            <h3>Security Testing</h3>
            <p>Perform penetration testing and security audits to ensure application integrity.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .app-security-page {
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