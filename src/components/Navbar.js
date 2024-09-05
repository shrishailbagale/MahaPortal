import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><span className='orange'>Maha</span><span className='green'>Portal</span></Link>
      </div>
      <div className="navbar-toggle" onClick={handleMenuToggle}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        <li><Link to="/MahaPortal">Home</Link></li>
        <li><Link to="/services" className="dropdown-toggle">Services</Link></li>
        <li><Link to="/documents">Documents</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/news">News & Updates</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login"><button className='login-button'>Login</button></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
