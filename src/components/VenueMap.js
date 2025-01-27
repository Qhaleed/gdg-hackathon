import React from 'react';
import '../styles/VenueMap.css';

const VenueMap = () => {
    return (
        <section id="venue" className="venue-map">
            <h2>Venue</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.758179041835!2d121.07531531532018!3d14.554928781997312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f1a8a8a8a9%3A0x8a8a8a8a8a8a8a8a!2sAteneo%20de%20Manila%20University!5e0!3m2!1sen!2sph!4v1631234567890!5m2!1sen!2sph"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default VenueMap;