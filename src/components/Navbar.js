import React from 'react'
import '../styles/Navbar.css'

export function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-brand">
                <img
                    src="./heading1.png"

                    alt="Google Developer Groups Logo"
                    className="nav-logo"
                />
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