import React, { useState } from 'react';
import './Navbar.css'; // Include CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for opening and closing the mobile menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="brand">
          {/* <img src="/path-to-logo.png" alt="Logo" className="logo" /> */}
          <h1>MahaPortal</h1>
        </div>
        
        {/* Toggle Button for mobile view */}
        <button className="toggle-btn" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navbar Links, which collapse on mobile view */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/investors">Investors</a></li>
            <li><a href="/gov-decisions">Government Decisions</a></li>
            <li><a href="/quick-links">Quick Links</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
