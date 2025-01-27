import React, { useState, useEffect } from 'react';
import '../styles/FloatingTab.css';

const FloatingTab = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`floating-tab ${isVisible ? 'visible' : ''}`}>
            <div className="column">
                <strong>Starts On:</strong>
                <span>Jan 13, 2025 01:00 PM PST (Asia/Manila)</span>
            </div>
            <div className="column">
                <strong>Ends On:</strong>
                <span>Jan 14, 2025 01:00 PM PST (Asia/Manila)</span>
            </div>
            <div className="column">
                <button className="register-button">Register Now</button>
            </div>
        </div>
    );
};

export default FloatingTab;