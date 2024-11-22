import Image from 'next/image'

export default function IOSDevelopmentPage() {
  return (
    <div className="container">
      <h1 className="title">iOS Development</h1>
      <div className="image-container">
        <Image
          src="/roadmap_images/mobiledev.png"
          alt="iOS Development"
          width={1200}
          height={600}
          className="image"
        />
      </div>
      <p className="description">
        iOS development involves creating applications for Apple&apos;s mobile operating system, used on devices like iPhones and iPads.
      </p>
      <div className="content">
        {[ 
          {
            title: "Swift Programming",
            description: "Master the Swift programming language, including its syntax, data types, and advanced features."
          },
          {
            title: "iOS SDK",
            description: "Learn to work with the iOS Software Development Kit and understand core frameworks like UIKit and Foundation."
          },
          {
            title: "Xcode and Interface Builder",
            description: "Become proficient with Xcode IDE and use Interface Builder for creating user interfaces."
          },
          {
            title: "App Architecture",
            description: "Understand iOS app architecture patterns like MVC, MVVM, and Clean Architecture."
          },
          {
            title: "Core iOS Features",
            description: "Learn to implement features like push notifications, Core Data for persistence, and integrating with iOS services."
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