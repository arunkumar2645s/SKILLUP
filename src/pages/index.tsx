import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from '../components/Button'
import '../styles/landing-page.css'


const Home: React.FC = () => {
  const [showButton, setShowButton] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setShowButton(true)
  }, [])

  const handleAuth = (action: 'login' | 'signup') => {
    const token = localStorage.getItem('token')
    if (token) {
      router.push('/dashboard')
    } else {
      router.push(`/auth/${action}`)
    }
  }

  const handleFeatureClick = () => {
    const token = localStorage.getItem('authToken')
    if (token) {
      router.push('/profile')
    } else {
      router.push('/auth/login')
    }
  }

  const handlepredefinedroadmap = () => {
    router.push('/predefined-roadmap/page')
  }

  return (
    <div className="min-h-screen bg-green-50">
      <Head>
        <title>SkillUp - Level Up Your Tech Skills</title>
        <meta name="description" content="SkillUp provides personalized learning roadmaps and a community to help you level up your tech skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600 transform hover:scale-105 transition-transform duration-300">SkillUp</h1>
          <div className="space-x-4">
            <Button variant="secondary" onClick={() => handleAuth('login')}>Log In</Button>
            <Button onClick={() => handleAuth('signup')}>Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 skillup-animate-fade-in">Level Up Your Tech Skills</h2>
          <p className="text-xl text-gray-600 mb-8 skillup-animate-fade-in skillup-animation-delay-200">Personalized roadmaps and a supportive community.</p>
          <div className="h-12">
            {showButton && (
              <Button 
                className="text-lg px-8 py-3 skillup-animate-fall-in"
                onClick={() => handleAuth('login')}
              >
                Get Started
              </Button>
            )}
          </div>
          <div className="absolute top-0 left-0 w-16 h-16 skillup-animate-float">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4CAF50" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.7,74.7C27.6,82.7,13.8,87.4,-0.3,87.9C-14.4,88.4,-28.8,84.6,-41.2,77.2C-53.6,69.8,-64,58.8,-71.6,45.9C-79.1,33,-83.9,16.5,-83.5,0.2C-83.2,-16,-77.8,-32.1,-69.2,-46.3C-60.6,-60.5,-48.9,-72.9,-35.3,-80.4C-21.7,-87.9,-6.1,-90.5,9.2,-86.1C24.5,-81.7,49,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="absolute top-20 right-0 w-20 h-20 skillup-animate-rotate">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M47.7,-73.2C62.9,-66.3,76.9,-55.4,84.6,-41.1C92.4,-26.8,93.9,-9.1,90.4,7.2C86.9,23.5,78.4,38.4,67.5,50.9C56.6,63.4,43.3,73.5,28.5,78.3C13.7,83.1,-2.6,82.6,-18.6,78.7C-34.6,74.8,-50.3,67.5,-62.1,56.2C-73.9,44.9,-81.8,29.7,-85.7,13C-89.6,-3.7,-89.5,-21.9,-83.2,-37.5C-76.9,-53.1,-64.4,-66.2,-49.6,-73C-34.8,-79.8,-17.4,-80.4,-0.2,-80.1C17,-79.8,32.5,-80.1,47.7,-73.2Z" transform="translate(100 100)" />
            </svg>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 transform hover:-translate-y-2 transition-all duration-300 ease-in-out skillup-animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Predefined Roadmaps</h3>
            <p className="text-gray-600 mb-4">
              Expert-curated learning paths for popular tech skills and roles.
            </p>
            <div className="flex justify-center mb-4">
              <svg className="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <Button variant="secondary" className="skillup-animate-pulse-slow" onClick={handlepredefinedroadmap}>Explore Roadmaps</Button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 transform hover:-translate-y-2 transition-all duration-300 ease-in-out skillup-animate-slide-up skillup-animation-delay-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tailored Roadmaps</h3>
            <p className="text-gray-600 mb-4">
              Personalized learning plans based on your skills and goals.
            </p>
            <div className="flex justify-center mb-4">
              <svg className="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <Button variant="secondary" className="skillup-animate-pulse-slow" onClick={handleFeatureClick}>Create Your Roadmap</Button>
          </div>
        </section>

        <section className="text-center mb-16 skillup-animate-slide-up skillup-animation-delay-400">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Track Your Progress</h2>
          <p className="text-xl text-gray-600 mb-8">Earn XP, level up, and showcase your achievements.</p>
          <div className="bg-white rounded-lg shadow-md p-8 inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">250</div>
                <div className="text-sm text-gray-500">XP Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5</div>
                <div className="text-sm text-gray-500">Current Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-500">Skills Mastered</div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mb-16 skillup-animate-slide-up skillup-animation-delay-600">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Vibrant Learning Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect, share, and grow with fellow tech enthusiasts.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
              <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Discussion Forums</h3>
              <p className="text-gray-600">Engage in discussions with peers and experts.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
              <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Study Groups</h3>
              <p className="text-gray-600">Collaborate on projects and prepare for certifications.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
              <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mentorship</h3>
              <p className="text-gray-600">Get guidance and support from experienced professionals.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SkillUp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home

