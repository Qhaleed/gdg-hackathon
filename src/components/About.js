import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About the <span className='hck'>Hackathon</span></h2>
            <p>
                The BlueCode: Zamboanga Hackathon 2025 will be an onsite two-day event.
                The Dates are April 2, 2025 (Day 1) and April 3, 2025 (Day 2),
                and an online seminar on March 31 (Day 0).
                The proposed venue would be on the Ateneo de Zamboanga University-Main Campus,
                Carlos Dominguez Conference Hall (CDCH).
            </p>
            <br />
            <br />
            <br />
            <p>The hackathon will feature invited teams from various universities, eliminating the need for an open registration or selection process. Each university will be allocated a specific number of slots, and teams will comprise up to five (5) members. </p>
        </section>
    );
};

export default About;