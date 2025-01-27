import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-brand">
                <img
                    src="./heading1.png"
                    alt="Google Developer Groups Logo"
                    className="footer-logo"
                />
                <img
                    src="./AICG2.png"
                    alt="Ateneo Informatics and Computing Guild Logo"
                    className="footer-logo"
                />
            </div>
            <div className="footer-links">
                <a href="#" className="footer-link">About GDG</a>
                <a href="#" className="footer-link">Chapters</a>
                <a href="#" className="footer-link">Upcoming Events</a>
            </div>
            <div className="social-links">
                <a href="https://twitter.com/gdgateneo" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://facebook.com/gdgateneo" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com/gdgateneo" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <p className="footer-copyright">&copy; 2025 GDG Ateneo. All rights reserved.</p>
        </footer>
    );
};

export default Footer;