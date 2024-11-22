import { GitBranch, GitCommit, FileText, Cloud, Server } from 'lucide-react'
import Image from 'next/image';

export default function ContinuousIntegrationPage() {
  return (
    <div className="container">
      <h1 className="heading">Continuous Integration & Deployment</h1>
      <div className="image-container">
        <Image
            src="/roadmap_images/continuous.png"
          alt="Continuous Integration & Deployment illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
      </div>
      <p className="description">
        Continuous Integration and Continuous Deployment (CI/CD) are practices that enable frequent and reliable software releases through automation.
      </p>
      <div className="cards-container">
        {[ 
          {
            title: "Version Control",
            description: "Master Git and understand branching strategies like GitFlow or trunk-based development.",
            icon: <GitBranch className="icon" />
          },
          {
            title: "CI Tools",
            description: "Learn to use CI tools like Jenkins, GitLab CI, or GitHub Actions to automate build and test processes.",
            icon: <GitCommit className="icon" />
          },
          {
            title: "Automated Testing",
            description: "Implement various types of automated tests, including unit tests, integration tests, and end-to-end tests.",
            icon: <FileText className="icon" />
          },
          {
            title: "Deployment Strategies",
            description: "Understand different deployment strategies like blue-green deployments, canary releases, and feature flags.",
            icon: <Cloud className="icon" />
          },
          {
            title: "Infrastructure as Code",
            description: "Learn tools like Terraform or Ansible to manage and provision infrastructure through code.",
            icon: <Server className="icon" />
          }
        ].map((item, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div className="icon-container">
                {item.icon}
              </div>
              <h2 className="card-title">{item.title}</h2>
            </div>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px;
        }

        /* Heading */
        .heading {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 30px;
          text-align: center;
          color: #1a202c; /* Primary color */
        }

        /* Image Section */
        .image-container {
          text-align: center;
          margin-bottom: 40px;
        }

        .image {
          width: 100%;
          max-width: 800px;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Description Text */
        .description {
          font-size: 1.25rem;
          text-align: center;
          margin-bottom: 40px;
          color: #4a5568; /* Grey color */
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Cards Container */
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
          padding-top: 20px;
        }

        /* Card Styles */
        .card {
          background-color: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }

        .card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        /* Card Header */
        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .icon-container {
          margin-right: 15px;
          font-size: 2rem;
          color: #3182ce; /* Primary color */
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c; /* Primary color */
        }

        /* Card Description */
        .card-description {
          font-size: 1rem;
          color: #4a5568; /* Grey color */
        }
      `}</style>
    </div>
  )
}