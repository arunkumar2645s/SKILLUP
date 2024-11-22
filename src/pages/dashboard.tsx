import { Navbar } from '@/components/navbar'
import { Dashboard } from '../components/dashboard'
import '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Dashboard />
      </main>
    </div>
  )
}

