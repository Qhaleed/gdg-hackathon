import React, { useState } from 'react';
import '../styles/Navbar.css';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="nav">
            <div className="nav-brand">
                <img
                    src="./heading1.png"
                    alt="Google Developer Groups Logo"
                    className="nav-logo"
                    style={{ marginRight: '10px' }}
                />
                <img src="./AICG2.png" alt='Ateneo Informatics and Computing Guild Logo' className='nav-logo'></img>
            </div>
            <button className="hamburger-menu" onClick={toggleMobileMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
            <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <a href="#" className="nav-link">About GDG</a>
                <a href="#" className="nav-link">Chapters</a>
                <a href="#" className="nav-link">Upcoming Events</a>
            </div>
        </nav>
    );
}

export default Navbar;
