import React from 'react';
import './SidebarToggle.css';

const SidebarToggle = ({ toggleSidebar }) => {
  return (
    <div className="sidebar-toggle" onClick={toggleSidebar}>
      <div className="bar">.</div>
      <div className="bar">.</div>
      <div className="bar">.</div>
    </div>
  );
};

export default SidebarToggle;
