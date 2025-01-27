import React from 'react';
import '../styles/Sponsors.css';

const Sponsors = () => {
    return (
        <section id="sponsors" className="sponsors">
            <h2>Sponsors</h2>
            <div className="sponsor-logos">
                <img src="/assets/sponsors/sponsor1.png" alt="Sponsor 1" />
                <img src="/assets/sponsors/sponsor2.png" alt="Sponsor 2" />
                <img src="/assets/sponsors/sponsor3.png" alt="Sponsor 3" />
            </div>
        </section>
    );
};

export default Sponsors;