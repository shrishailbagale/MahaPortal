import React from 'react';
import './QuickLinks.css';

const quickLinks = [
  { name: 'Home', icon: '🏠', link: '#home' },
  { name: 'About Us', icon: 'ℹ️', link: '#about' },
  { name: 'Services', icon: '🛠️', link: '#services' },
  { name: 'Contact', icon: '📞', link: '#contact' },
  { name: 'FAQ', icon: '❓', link: '#faq' },
];

const QuickLinks = () => {
  return (
    <div className="quicklinks-container">
      <div className="quicklinks-header">
        {/* <img src="/path/to/logo.png" alt="Logo" className="quicklinks-logo" /> */}
        <h1>Quick Links</h1>
      </div>
      <div className="quicklinks-grid">
        {quickLinks.map((link, index) => (
          <a href={link.link} key={index} className="quicklink-card">
            <div className="quicklink-icon">{link.icon}</div>
            <div className="quicklink-name">{link.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
