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
                <span>April 1, 2025 09:00 AM PST (Asia/Manila)</span>
            </div>
            <div className="column">
                <strong>Ends On:</strong>
                <span>April 3, 2025 09:00 AM PST (Asia/Manila)</span>
            </div>
            <div className="column">
                <button className="register-button" onClick={() => window.location.href = "https://www.facebook.com/search/top?q=google%20developer%20groups%20on%20campus%20blue%20eagle"}>Learn More</button>
            </div>
        </div>
    );
};

export default FloatingTab;