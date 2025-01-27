import React from 'react'
import '../styles/Navbar.css'

export function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-brand">
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(265)-TBZWWbNmCltXE664UD5fGy3OTSclyO.png"
                    alt="Google Developer Groups Logo"
                    className="nav-logo"
                />
                <span className="nav-title">Google Developer Groups</span>
            </div>
            <div className="nav-links">
                <a href="#" className="nav-link">About GDG</a>
                <a href="#" className="nav-link">Chapters</a>
                <a href="#" className="nav-link">Upcoming Events</a>
                <button className="nav-search">
                </button>
                <a href="#" className="nav-link">Log in</a>
            </div>
        </nav>
    )
}

export default Navbar;