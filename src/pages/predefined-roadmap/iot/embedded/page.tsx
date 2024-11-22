import Image from 'next/image'

export default function EmbeddedSystemsPage() {
  return (
    <div className="container">
      <h1 className="title">Embedded Systems for IoT</h1>
      <div className="image-container">
        <Image
          src="/roadmap_images/iot.png"
          alt="Embedded Systems for IoT"
          width={1200}
          height={600}
          className="image"
        />
      </div>
      <p className="description">
        Embedded systems in IoT are specialized computing systems designed to perform dedicated functions within larger mechanical or electrical systems.
      </p>
      <div className="content">
        {[ 
          {
            title: "Microcontrollers",
            description: "Learn about popular microcontrollers like Arduino and ESP32, and how to program them for IoT applications."
          },
          {
            title: "Real-Time Operating Systems (RTOS)",
            description: "Understand the principles of RTOS and how they're used in IoT devices for time-critical operations."
          },
          {
            title: "Sensor Interfacing",
            description: "Learn how to interface various sensors with microcontrollers to collect data from the physical world."
          },
          {
            title: "Low-Power Design",
            description: "Explore techniques for designing low-power embedded systems to extend battery life in IoT devices."
          },
          {
            title: "Firmware Development",
            description: "Develop skills in writing efficient and reliable firmware for embedded IoT devices."
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