import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2025 GDG Ateneo. All rights reserved.</p>
            <div className="social-links">
                <a href="https://twitter.com/gdgateneo" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://facebook.com/gdgateneo" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com/gdgateneo" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;