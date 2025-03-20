import React from 'react';
import '../styles/Schedule.css';

const Schedule = () => {
    // Placeholder content for Day 1
    const day1Schedule = [
        { time: '8:00 AM - 8:30 AM', event: 'Registration & Check-in', location: 'TBA' },
        { time: '8:30 AM - 8:35 AM', event: 'Preliminaries', location: 'TBA' },
        { time: '8:35 AM - 8:45 AM', event: 'Host greetings and short kamustahan from the participants', location: 'TBA' },
        { time: '8:45 AM - 9:00 AM', event: 'Opening remarks by DR. JOCELYN D. PARTOSA', location: 'TBA' },
        { time: '9:00 AM - 9:15 AM', event: 'Orientation proper by GABRIELLE TATEL', location: 'TBA' },
        { time: '9:15 AM - 9:30 AM', event: 'Run down of competition rules and conduct', location: 'TBA' },
        { time: '9:50 AM', event: 'Announcement of the competition theme', location: 'TBA' },
        { time: '11:00 AM and onwards', event: 'Project Development Begins', location: 'TBA' },
        { time: '12:00 PM', event: 'Distribution of packed lunch', location: 'TBA' }
    ];

    // Placeholder content for Day 2
    const day2Schedule = [
        { time: '12:00 PM', event: 'Deadline for Project Submission to Public Repository', location: 'TBA' },
        { time: '12:00 PM - 12:15 PM', event: 'Call time and registration', location: 'TBA' },
        { time: '12:15 PM - 12:30 PM', event: 'Preliminaries', location: 'TBA' },
        { time: '12:30 PM - 12:40 PM', event: 'Introduction of judges', location: 'TBA' },
        { time: '12:40 PM - 12:50 PM', event: 'Opening remarks', location: 'TBA' },
        { time: '12:50 PM - 1:00 PM', event: 'Run down of pitching rules and mechanics', location: 'TBA' },
        { time: '1:00 PM - 1:20 PM', event: 'First presentation', location: 'TBA' },
        { time: '1:20 PM - 1:40 PM', event: 'Second presentation', location: 'TBA' },
        { time: '1:40 PM - 2:00 PM', event: 'Third presentation', location: 'TBA' },
        { time: '2:00 PM - 2:20 PM', event: 'Fourth presentation', location: 'TBA' },
        { time: '2:20 PM - 2:40 PM', event: 'Fifth presentation', location: 'TBA' },
        { time: '2:40 PM - 3:10 PM', event: 'Talks / Judge Deliberations', location: 'TBA' },
        { time: '3:10 PM - 3:30 PM', event: 'Announcement of BlueCode:2025 winners', location: 'TBA' },
        { time: '3:30 PM - 3:40 PM', event: 'Closing program & Closing remarks', location: 'TBA' }
    ];

    return (
        <section id="schedule" className="schedule">
            <h2>Schedule</h2>
            <div className="schedule-overview">
                <h3>Hackathon Overview</h3>
                <p>
                    <strong>Day 0: Pre-Hackathon Seminar</strong> serves as a preparatory session where industry experts and mentors share insights on ideation, project pitching, and teamwork to equip participants for the competition.

                    <br />
                    <br />
                    <strong>Day 1: Kickoff & Development</strong> marks the official start, beginning with an orientation, competition rules, and the announcement of the theme, which is inspired by <strong> Quality Education</strong> from the United Nations Sustainable Development Goals (SDGs).
                    Teams will then develop their projects within a set timeframe and submit their final work to a designated public repository.

                    <br />
                    <br />
                    <strong>Day 2: Pitching & Closing</strong> features team presentations, where each group has five minutes to pitch their project followed by a Q&A session with the judges.
                    Winners will be selected based on innovation, functionality, feasibility, and alignment with the theme.
                    The event concludes with an awarding ceremony and closing remarks, celebrating creativity, collaboration, and skill development while giving participants an opportunity to showcase their technical abilities and problem-solving skills.
                </p>
            </div>

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