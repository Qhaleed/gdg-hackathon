import React from 'react';
import '../styles/Sponsors.css';

const Sponsors = () => {
    return (
        <section id="sponsors" className="sponsors">
            <h2>Sponsors</h2>
            <div className="sponsor-logos">
                <img src="./ADZU.jpg" alt="Sponsor 1" />
                <img src="./CSITE.jpg" alt="Sponsor 2" />
                <img src="./SITEAO.jpg" alt="Sponsor 3" />
            </div>
        </section>
    );
};

export default Sponsors;