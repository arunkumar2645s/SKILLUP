import Image from 'next/image';
import { BriefcaseBusiness, Database, Server, Activity, Cloud } from 'lucide-react'

export default function DisasterRecoveryPage() {
  return (
    <div className="disaster-recovery-page">
      <div className="container">
        <div className="header">
          <h1>Disaster Recovery</h1>
          <p>
            Disaster recovery involves strategies and procedures for resuming normal operations following a catastrophic event or data loss.
          </p>
        </div>

        <div className="main-image">
          <Image
            src="/roadmap_images/disasterrecovery.png"
            alt="Disaster Recovery Illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
          <p>Illustration showcasing Disaster Recovery strategies</p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <BriefcaseBusiness className="topic-icon" />
            </div>
            <h3>Business Continuity Planning</h3>
            <p>Develop comprehensive plans to ensure critical business functions can continue during and after a disaster.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Database className="topic-icon" />
            </div>
            <h3>Backup and Recovery Systems</h3>
            <p>Implement robust backup solutions and practice data recovery procedures.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Server className="topic-icon" />
            </div>
            <h3>High Availability Architecture</h3>
            <p>Design systems with redundancy and failover capabilities to minimize downtime.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Activity className="topic-icon" />
            </div>
            <h3>Disaster Simulation and Testing</h3>
            <p>Conduct regular drills and simulations to test the effectiveness of disaster recovery plans.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon-wrapper">
              <Cloud className="topic-icon" />
            </div>
            <h3>Cloud-based Disaster Recovery</h3>
            <p>Explore cloud solutions for cost-effective and scalable disaster recovery options.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .disaster-recovery-page {
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