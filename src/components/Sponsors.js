import React from 'react';
import '../styles/Sponsors.css';

const Sponsors = () => {
    return (
        <section id="sponsors" className="sponsors">
            <h2>Partners</h2>
            <div className="sponsor-logos" >
                <img src={`${process.env.PUBLIC_URL}/ADZU.png`} alt="Sponsor 2" />
                <img src={`${process.env.PUBLIC_URL}/CSITE.png`} alt="Sponsor 2" />
                <img src={`${process.env.PUBLIC_URL}/AICG1.png`} alt="Sponsor 2" />
                <img src={`${process.env.PUBLIC_URL}/wmsu2.jpg`} alt="Sponsor 2" />
                <img src={`${process.env.PUBLIC_URL}/PILLAR.png`} alt="Sponsor 2" />
                <img src={`${process.env.PUBLIC_URL}/ZPPSU.jpg`} alt="Sponsor 2" />
                <img src={`${process.env.PUBLIC_URL}/UZ.png`} alt="Sponsor 2" style={{ borderRadius: "0%" }} />
            </div>
        </section>
    );
};

export default Sponsors;