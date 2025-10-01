import React, { useState } from 'react'
import './NavBar.css'

function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    { icon: 'fa-solid fa-house', label: 'Home', active: true },
    { icon: 'fa-solid fa-magnifying-glass', label: 'Search' },
    { icon: 'fa-solid fa-tv', label: 'TV Shows' },
    { icon: 'fa-solid fa-film', label: 'Movies' },
    { icon: 'fa-solid fa-futbol', label: 'Sports' },
    { icon: 'fa-solid fa-gamepad', label: 'Games' },
    { icon: 'fa-solid fa-star', label: 'Watchlist' },
  ]

  return (
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Logo Section */}
      <div className='nav-header'>
        <div className='logo-container'>
          <img 
            src="https://www.keralatv.in/media/2023/05/DisneyHotstar.png" 
            alt="Disney+ Hotstar" 
            className='nav-logo'
          />
        </div>
        <button 
          className='collapse-btn'
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle navigation"
        >
          <i className={`fas fa-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
        </button>
      </div>

      {/* Navigation Items */}
      <div className='nav-items'>
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className={`nav-item ${item.active ? 'active' : ''}`}
            data-tooltip={item.label}
          >
            <i className={item.icon}></i>
            <span className='nav-label'>{item.label}</span>
            <div className='nav-indicator'></div>
          </div>
        ))}
      </div>

      {/* User Section */}
      <div className='nav-footer'>
        <div className='nav-item user-profile' data-tooltip="Profile">
          <div className='user-avatar'>
            <i className="fa-solid fa-user"></i>
          </div>
          <span className='nav-label'>Profile</span>
        </div>
        
        <div className='nav-item settings' data-tooltip="Settings">
          <i className="fa-solid fa-cog"></i>
          <span className='nav-label'>Settings</span>
        </div>
      </div>

      {/* Ambient Glow Effect */}
      <div className='nav-glow'></div>
    </nav>
  )
}

export default NavBar