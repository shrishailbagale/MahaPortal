import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(true);

  const categories = [
    'Revenue Department',
    'Department Notified Services',
    'Agriculture',
    'Animal Husbandry, Dairy, and Fisheries',
    'Co-Operation Marketing and Textiles',
    'Divyang Kalyan',
    'Finance',
    'Food & Public Distribution System (PDS)',
    'Forest Department',
    'Higher And Technical Education',
    // Add more categories as needed
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      {isOpen && (
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2>All Services</h2>
          </div>
          <hr className="sidebar-divider" />
          <div className="scrollable-container">
          <ul>
            {categories.map((category, index) => (
              <li key={index} onClick={() => setSelectedCategory(category)}>
                {category}
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
