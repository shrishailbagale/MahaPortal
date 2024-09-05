import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ServiceList from '../components/ServiceList';
//import SidebarToggle from '../components/SidebarToggle';
import './Services.css';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Revenue Department');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="services-page">
     {/* // <SidebarToggle toggleSidebar={toggleSidebar} /> */}
      <Sidebar setSelectedCategory={setSelectedCategory} className={sidebarVisible ? 'show' : ''} />
      <div className="service-content">
        <h1>{selectedCategory}</h1>
        <ServiceList category={selectedCategory} />
      </div>
    </div>
  );
};

export default Services;
