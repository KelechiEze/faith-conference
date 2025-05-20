'use client';

import React, { useState } from 'react';
import './HomeSection.css';
import { Calendar, MapPin, Clock3, X } from 'lucide-react';
import Link from 'next/link';

const allSchedules = {
  'May 23, 2025': [
    {
      time: '8:00 AM',
      session: 'Registration & Check-in',
      speaker: '-',
      location: 'Main Lobby',
    },
    {
      time: '9:00 AM',
      session: 'Opening Ceremony & Worship',
      speaker: 'Worship Team',
      location: 'Main Auditorium',
    },
    {
      time: '10:30 AM',
      session: 'Morning Session: "The Power of Faith"',
      speaker: 'Rev. Victor Adeyemi',
      location: 'Main Auditorium',
    },
    {
      time: '12:30 PM',
      session: 'Lunch Break',
      speaker: '-',
      location: 'Fellowship Hall',
    },
    {
      time: '2:00 PM',
      session: 'Workshop: "Applying Faith in Daily Life"',
      speaker: 'Pastor Dare Kolawole',
      location: 'Seminar Room A',
    },
  ],
  'May 24, 2025': [
    {
      time: '8:30 AM',
      session: 'Morning Worship',
      speaker: 'Praise Team',
      location: 'Main Auditorium',
    },
    {
      time: '10:00 AM',
      session: 'Panel Discussion: "Faith & Modern Challenges"',
      speaker: 'Panelists',
      location: 'Main Auditorium',
    },
    {
      time: '12:00 PM',
      session: 'Lunch Break',
      speaker: '-',
      location: 'Courtyard',
    },
    {
      time: '1:30 PM',
      session: 'Afternoon Session: "Unshakable Belief"',
      speaker: 'Pastor Funke Felix-Adejumo',
      location: 'Main Auditorium',
    },
  ],
  'May 25, 2025': [
    {
      time: '9:00 AM',
      session: 'Sunday Worship Service',
      speaker: 'Lead Pastor',
      location: 'Main Auditorium',
    },
    {
      time: '11:00 AM',
      session: 'Faith in Action: Testimonies',
      speaker: 'Various Members',
      location: 'Main Auditorium',
    },
    {
      time: '1:00 PM',
      session: 'Thanksgiving & Closing Ceremony',
      speaker: 'Organizing Committee',
      location: 'Main Auditorium',
    },
  ],
};

const HomeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('May 23, 2025');

  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Faith Conference 2025</h1>
          <h2 className="tagline"><em>&ldquo;Changing Your World!&rdquo;</em></h2>

          <div className="info">
            <span><Calendar size={18} /> May 23–25, 2025</span>
            <span><Clock3 size={18} /> Daily Sessions: 9AM & 5PM</span>
            <span><MapPin size={18} /> Global Harvest Church, Lagos</span>
          </div>

          <div className="hero-buttons">
            <Link href="#register"><button className="btn-register">Register Now</button></Link>
            <button className="btn-schedule" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Schedule modal is no longer active since button is disabled */}
      {/* You can re-enable this block in the future if needed */}
      {false && isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>
            <h2>{selectedDay}</h2>

            <div className="day-tabs">
              {Object.keys(allSchedules).map((day) => (
                <button
                  key={day}
                  className={`day-tab ${selectedDay === day ? 'active' : ''}`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>

            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Session</th>
                  <th>Speaker</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {allSchedules[selectedDay].map((item, index) => (
                  <tr key={index}>
                    <td>{item.time}</td>
                    <td>{item.session}</td>
                    <td>{item.speaker}</td>
                    <td>{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeSection;
