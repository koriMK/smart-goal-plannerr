import './Navbar.css';
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo">
          <i className="fas fa-coins"></i>
          <span>Tiki's Financial Freedom</span>
        </a>
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#" className="active">Dashboard</a></li>
          <li><a href="#">Goals</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </nav>
  )
}