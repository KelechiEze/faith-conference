'use client';

import React from 'react';
import Image from 'next/image';
import './FaithSupportSection.css';
import Link from 'next/link';

import { Facebook, Instagram, Gift } from 'lucide-react';

const FaithSupportSection = () => {
  return (
    <section id="give" className="faithSupportWrapper">
      <div className="supportContent">
        <h2>Support The Faith Conference</h2>
        <p>Your generous giving helps us continue to bring life-changing faith teachings to people around the world.</p>
        <div className="underline" />
       <Link href="https://www.gharvestisland.org/give/"> <button className="giveButton">
          <Gift size={18} style={{ marginRight: '8px' }} />
          Give now
        </button></Link>
        <small>You will be redirected to the Global Harvest Church giving page</small>
      </div>

      <footer className="footer">
        <div className="footerColumn">
          <Image src="/favicon5.ico" alt="Faith Conference Logo" width={90} height={40} />
          <p>
            Join us for three transformative days of spiritual renewal, inspiration, and equipping. The Faith Conference is designed to empower believers to change their world through unwavering faith.
          </p>
          <em>Welcome to the Faith Conference!</em>
        </div>

        <div className="footerColumn">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Faith Stories</a></li>
            <li><a href="#">Give</a></li>
          </ul>
        </div>

        <div className="footerColumn">
          <h4>Connect With Us</h4>
          <div className="socialIcons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
          <p>Global Harvest Church<br />Lagos, Nigeria</p>
        </div>
      </footer>

      <div className="footerBottom">
        <hr />
        <p>© 2025 Faith Conference. All rights reserved.</p>
      </div>
    </section>
  );
};

export default FaithSupportSection;
