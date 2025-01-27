import React from 'react';
import '../styles/Schedule.css';

const Schedule = () => {
    return (
        <section id="schedule" className="schedule">
            <h2>Schedule</h2>
            <ul>
                <li><strong>9:00 AM</strong> - Registration</li>
                <li><strong>10:00 AM</strong> - Opening Ceremony</li>
                <li><strong>12:00 PM</strong> - Coding Begins</li>
                <li><strong>6:00 PM</strong> - Dinner</li>
                <li><strong>12:00 AM</strong> - Midnight Snack</li>
                <li><strong>6:00 AM</strong> - Breakfast</li>
                <li><strong>12:00 PM</strong> - Coding Ends</li>
                <li><strong>1:00 PM</strong> - Project Presentations</li>
                <li><strong>3:00 PM</strong> - Awards Ceremony</li>
            </ul>
        </section>
    );
};

export default Schedule;