import Image from 'next/image'

export default function RiskManagementPage() {
  return (
    <div className="container">
      <h1 className="title">Trading & Risk Management</h1>
      <div className="image-container">
        <Image
          src="/roadmap_images/riskmanagement.png"
          alt="Risk Management illustration"
          width={1200}
          height={600}
          className="image"
        />
      </div>
      <p className="description">
        Trading and Risk Management in finance involves using technology to make informed trading decisions and manage financial risks effectively.
      </p>
      <div className="content">
        {[ 
          {
            title: "Algorithmic Trading",
            description: "Learn to develop and implement automated trading strategies using algorithms."
          },
          {
            title: "Risk Modeling",
            description: "Understand techniques for modeling and quantifying various types of financial risks."
          },
          {
            title: "Portfolio Optimization",
            description: "Explore methods for optimizing investment portfolios to balance risk and return."
          },
          {
            title: "Market Analysis Tools",
            description: "Learn to use and develop tools for analyzing market trends and making predictions."
          },
          {
            title: "Regulatory Compliance",
            description: "Understand the technological aspects of ensuring compliance with financial regulations."
          }
        ].map((item, index) => (
          <div key={index} className="content-item">
            <h2 className="content-title">{item.title}</h2>
            <p className="content-description">{item.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .title {
          text-align: center;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }

        .image-container {
          text-align: center;
          margin-bottom: 20px;
        }

        .image {
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .description {
          text-align: center;
          font-size: 18px;
          color: #555;
          margin-bottom: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .content {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }

        .content-item {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .content-item:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .content-title {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }

        .content-description {
          font-size: 16px;
          color: #666;
        }
      `}</style>
    </div>
  )
}