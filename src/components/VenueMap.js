import React from 'react';
import '../styles/VenueMap.css';

const VenueMap = () => {
    return (
        <section id="venue" className="venue-map">
            <h2>Looking for the Hackathon Venue?</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789012!2d122.07603588682558!3d6.910306399157606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMzcuMSJOIDEyMsKwMDQnMzMuNyJF!5e0!3m2!1sen!2sph!4v1631234567890!5m2!1sen!2sph"
                title="Event Venue Map"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default VenueMap;