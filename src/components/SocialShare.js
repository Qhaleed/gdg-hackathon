import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../styles/SocialShare.css';

const SocialShare = () => {
    const eventUrl = encodeURIComponent(window.location.href);
    const eventTitle = encodeURIComponent('GDG Ateneo Hackathon 2025');

    return (
        <section className="social-share">
            <h3>Share the Event</h3>
            <div className="share-buttons">
                <a
                    href={`https://twitter.com/intent/tweet?url=${eventUrl}&text=${eventTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter />
                </a>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${eventUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook />
                </a>
                <a
                    href={`https://www.linkedin.com/shareArticle?url=${eventUrl}&title=${eventTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </div>
        </section>
    );
};

export default SocialShare;