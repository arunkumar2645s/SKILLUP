import React from 'react'
import Image from 'next/image'

const OptimisticProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <header className="profile-header">
          {/* <div className="avatar"> */}
            <Image src="/profile-placeholder.jpg" alt="Jane Doe" width={110} height={110}/>
          {/* </div> */}
          <h1 className="name">Krishna Sakthi Eswar</h1>
          <p className="title">Full-stack Developer | Nature Enthusiast</p>
        </header>
        <div className="profile-content">
          <section className="about">
            <h2>About Me</h2>
            <p>
              Passionate about creating beautiful, functional web applications that make a positive impact. 
              When I&apos;m not coding, you&apos;ll find me exploring nature trails or tending to my indoor garden.
            </p>
          </section>
          <section className="skills">
            <h2>Skills</h2>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">GraphQL</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
            </div>
          </section>
          <section className="current-project">
            <h2>Current Project</h2>
            <p>Eco-friendly Task Manager App</p>
            <div className="progress-container">
              <div className="progress-label">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-indicator" style={{width: '75%'}}></div>
              </div>
            </div>
          </section>
          <section className="achievements">
            <h2>Achievements</h2>
            <ul>
              <li>Open Source Contributor of the Month</li>
              <li>1st Place in Sustainable Tech Hackathon</li>
              <li>Speaker at GreenCode Conference 2023</li>
            </ul>
          </section>
        </div>
        <footer className="profile-footer">
          <button className="btn btn-outline">Edit Profile</button>
          <button className="btn btn-primary">Connect</button>
        </footer>
      </div>
      <style jsx>{`
        .profile-page {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #f0fdf4, #dcfce7);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        .profile-card {
          width: 100%;
          max-width: 48rem;
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        .profile-header {
        display:flex;
        flex-direction:column;
          text-align: center;
          padding: 2rem;
        }
        .avatar {
          
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
         
          overflow: hidden;
          margin: 0 auto 1rem;
        }
        .avatar img {
          margin: 0 auto 1rem;
          width: 100%;
          height: 100%;
          
        }
        .name {
          font-size: 1.875rem;
          font-weight: bold;
          color: #15803d;
          margin-bottom: 0.5rem;
        }
        .title {
          color: #16a34a;
          font-size: 1rem;
        }
        .profile-content {
          padding: 0 2rem 2rem;
        }
        .profile-content section {
          margin-bottom: 1.5rem;
        }
        .profile-content h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #15803d;
          margin-bottom: 0.5rem;
        }
        .profile-content p {
          color: #4b5563;
          line-height: 1.5;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-tag {
          background-color: #f0fdf4;
          color: #16a34a;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
        }
        .progress-container {
          margin-top: 0.5rem;
        }
        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: #16a34a;
          margin-bottom: 0.25rem;
        }
        .progress-bar {
          height: 0.5rem;
          background-color: #dcfce7;
          border-radius: 9999px;
          overflow: hidden;
        }
        .progress-indicator {
          height: 100%;
          background-color: #22c55e;
          border-radius: 9999px;
        }
        .achievements ul {
          list-style-type: disc;
          padding-left: 1.25rem;
          color: #4b5563;
        }
        .achievements li {
          margin-bottom: 0.25rem;
        }
        .profile-footer {
          display: flex;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          background-color: #f9fafb;
        }
        .btn {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s, color 0.2s;
        }
        .btn-outline {
          border: 1px solid #d1d5db;
          background-color: transparent;
          color: #374151;
        }
        .btn-outline:hover {
          background-color: #f3f4f6;
        }
        .btn-primary {
          background-color: #22c55e;
          color: white;
          border: none;
        }
        .btn-primary:hover {
          background-color: #16a34a;
        }
        @media (max-width: 640px) {
          .profile-card {
            border-radius: 0;
          }
          .profile-content, .profile-footer {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default OptimisticProfilePage

