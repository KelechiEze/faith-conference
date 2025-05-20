'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <Link href="/">
          <div onClick={closeMenu}>
            <Image
              src="/favicon5.ico"
              alt="Faith Conference Logo"
              width={70}
              height={40}
              priority
            />
          </div>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link href="#home">
            <span onClick={closeMenu}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="#speakers">
            <span onClick={closeMenu}>Speakers</span>
          </Link>
        </li>
        <li>
          <Link href="#register">
            <span onClick={closeMenu}>Register</span>
          </Link>
        </li>
        <li>
          <Link href="#stories">
            <span onClick={closeMenu}>Stories</span>
          </Link>
        </li>
        <li>
          <Link href="#give">
            <span onClick={closeMenu}>Give</span>
          </Link>
        </li>
      </ul>

      <div className="nav-btn">
        <Link href="#register">
          <button className="btn-register" onClick={closeMenu}>
            Register Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
