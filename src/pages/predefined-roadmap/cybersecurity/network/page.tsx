import { Shield, Wifi, Lock, Server, CheckCircle } from 'lucide-react'
import Image from 'next/image';

export default function NetworkSecurityPage() {
  return (
    <div className="container">
      <h1 className="heading">Network Security</h1>
      <div className="image-container">
        <Image
            src="/roadmap_images/networksecurity.png"
          alt="Network Security illustration"
            width={1200}
            height={600}
            className="image-rounded"
          />
      </div>
      <p className="description">
        Network security focuses on protecting the usability and integrity of your network and data. It includes both hardware and software technologies.
      </p>
      <div className="cards-container">
        {[ 
          {
            title: "Firewalls",
            description: "Learn about different types of firewalls and how to configure them to protect network boundaries.",
            icon: <Shield className="icon" />
          },
          {
            title: "Intrusion Detection Systems (IDS)",
            description: "Understand how to set up and manage IDS to monitor network traffic for suspicious activity.",
            icon: <Lock className="icon" />
          },
          {
            title: "Virtual Private Networks (VPN)",
            description: "Explore VPN technologies for secure remote access and site-to-site connections.",
            icon: <Wifi className="icon" />
          },
          {
            title: "Network Protocols",
            description: "Study secure network protocols and how to implement them in various network architectures.",
            icon: <Server className="icon" />
          },
          {
            title: "Wireless Security",
            description: "Learn about securing Wi-Fi networks and the latest wireless security standards.",
            icon: <CheckCircle className="icon" />
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