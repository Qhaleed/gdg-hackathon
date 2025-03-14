import React from 'react';
import '../styles/VenueMap.css';

const VenueMap = () => {
    return (
        <section id="venue" className="venue-map">
            <h2>Venue</h2>
            <iframe
                title="Hackathon Venue"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.705869324543!2d122.07609516187577!3d6.910341147733155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMzcuMiJOIDEyMsKwMDQnMzQuMCJF!5e0!3m2!1sen!2sph!4v1631234567890!5m2!1sen!2sph"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default VenueMap;
