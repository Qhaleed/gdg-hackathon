import React from 'react';
import '../styles/Schedule.css';

const Schedule = () => {
    // Placeholder content for Day 1
    const day1Schedule = [
        { time: '9:00 AM', event: 'Registration', location: 'Main Hall' },
        { time: '10:00 AM', event: 'Opening Ceremony', location: 'Auditorium' },
        { time: '11:00 AM', event: 'Team Formation', location: 'Workshop Room' },
        { time: '12:00 PM', event: 'Lunch Break', location: 'Cafeteria' },
        { time: '1:00 PM', event: 'Coding Begins', location: 'Hackathon Hall' },
        { time: '6:00 PM', event: 'Dinner', location: 'Cafeteria' },
        { time: '12:00 AM', event: 'Midnight Snack', location: 'Hackathon Hall' },
    ];

    // Placeholder content for Day 2
    const day2Schedule = [
        { time: '6:00 AM', event: 'Breakfast', location: 'Cafeteria' },
        { time: '12:00 PM', event: 'Coding Ends', location: 'Hackathon Hall' },
        { time: '1:00 PM', event: 'Project Presentations', location: 'Auditorium' },
        { time: '3:00 PM', event: 'Awards Ceremony', location: 'Auditorium' },
        { time: '4:00 PM', event: 'Closing Remarks', location: 'Auditorium' },
    ];

    return (
        <section id="schedule" className="schedule">
            <h2>Schedule</h2>
            <div className="schedule-container">
                <div className="schedule-column">
                    <h3>Day 1</h3>
                    <div className="scrollable-content">
                        {day1Schedule.map((item, index) => (
                            <div key={index} className="schedule-item">
                                <span className="schedule-time">{item.time}</span>
                                <span className="schedule-event">{item.event}</span>
                                <span className="schedule-location">{item.location}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="schedule-column">
                    <h3>Day 2</h3>
                    <div className="scrollable-content">
                        {day2Schedule.map((item, index) => (
                            <div key={index} className="schedule-item">
                                <span className="schedule-time">{item.time}</span>
                                <span className="schedule-event">{item.event}</span>
                                <span className="schedule-location">{item.location}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;