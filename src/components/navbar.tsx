import Link from 'next/link'
import { LogOut } from 'lucide-react'
import './navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        SkillUp
      </Link>
      <div className="navbar-buttons">
        <button className="button button-outline">SkillUp Forums</button>
        <button className="button button-icon">
          <LogOut />
          <span className="sr-only">Logout</span>
        </button>
      </div>
    </nav>
  )
}

