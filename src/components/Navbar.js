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
                    src={`${process.env.PUBLIC_URL}/heading1.png`}
                    alt="Google Developer Groups Logo"
                    className="nav-logo"
                    style={{ marginRight: '10px' }}
                />
                <img src={`${process.env.PUBLIC_URL}/AICG2.png`} alt="Ateneo Informatics and Computing Guild Logo" className="nav-logo" />
                <img src={`${process.env.PUBLIC_URL}/ADZU.jpg`} alt="ADZU Logo" className="nav-logo" style={{ borderRadius: "50%", marginRight: "5px" }} />
                <img src={`${process.env.PUBLIC_URL}/CSITE.jpg`} alt="CSITE Logo" className="nav-logo" style={{ borderRadius: "50%" }} />

            </div>
            <button className="hamburger-menu" onClick={toggleMobileMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
            <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <a href="https://www.facebook.com/gdgocblueeagle" target='self' className="nav-link">About GDG</a>
                <a href="https://gdg.community.dev/chapters/" target='self' className="nav-link">Chapters</a>
                <a href="gdgocblueeagle" target='self' className="nav-link">Upcoming Events</a>
            </div>
        </nav>
    );
}

export default Navbar;
