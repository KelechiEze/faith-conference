'use client';

import './HomeSection.css';
import { Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Faith Conference 2025</h1>
          <p className="tagline"><em>&ldquo;Changing Your World!&rdquo;</em></p>

          <div className="info">
            <span><Calendar size={18} /> May 23–25, 2025</span>
            <span><MapPin size={18} /> Global Harvest Church, Lagos</span>
          </div>

          <div className="hero-buttons">
            <Link href="#register"><button className="btn-register">Register Now</button></Link>
            <button className="btn-schedule">View Schedule</button>
          </div>

          <p className="sessions">Daily Sessions: 9AM & 5PM</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
