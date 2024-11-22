import { MessageSquare, Share2, Edit3, Video } from 'lucide-react'
import '../styles/study-forum.css'

export default function StudyForums() {
  return (
    <div className="study-forums-container">
      <header className="study-forums-header">
        <h1 className="study-forums-title">SkillUp Study Forums</h1>
        <p className="study-forums-subtitle">Collaborate, Learn, and Grow Together</p>
      </header>

      <div className="feature-grid">
        <div className="feature-card">
          <MessageSquare className="feature-icon" />
          <h2 className="feature-title">Real-Time Chat</h2>
          <p className="feature-description">
            Engage in instant, real-time conversations with fellow learners and mentors. Our chat feature supports text, emojis, and rich media, allowing you to express ideas clearly and build a strong learning community. Create topic-specific channels or have private discussions to focus your learning experience.
          </p>
        </div>

        <div className="feature-card">
          <Share2 className="feature-icon" />
          <h2 className="feature-title">File Sharing</h2>
          <p className="feature-description">
            Seamlessly share documents, code snippets, images, and other learning materials with your study group. Our advanced file sharing system supports version control, allowing you to track changes and collaborate on projects effectively. Organize shared resources in folders and use tags for easy retrieval.
          </p>
        </div>

        <div className="feature-card">
          <Edit3 className="feature-icon" />
          <h2 className="feature-title">Interactive Whiteboards</h2>
          <p className="feature-description">
            Visualize complex concepts and brainstorm ideas using our interactive whiteboards. These digital canvases support real-time collaboration, allowing multiple users to draw, type, and annotate simultaneously. Save and share your whiteboard sessions for future reference or continue working on them in your next study meeting.
          </p>
        </div>

        <div className="feature-card">
          <Video className="feature-icon" />
          <h2 className="feature-title">Video Meetings</h2>
          <p className="feature-description">
            Host or join face-to-face video meetings with crystal-clear audio and video quality. Share your screen, present slides, or demonstrate coding techniques in real-time. Our video meetings feature breakout rooms for small group discussions, a raise hand function for orderly participation, and meeting recordings for those who couldn&apos;t attend live.
          </p>
        </div>
      </div>

      <div className="cta-section">
        <a href="#" className="cta-button">Join a Study Forum Now</a>
      </div>
    </div>
  )
}

