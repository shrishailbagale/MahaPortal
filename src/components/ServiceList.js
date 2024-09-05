import React from 'react';
import './ServiceList.css';

const servicesData = {
  'Revenue Department': [
    'Certified Copy Record of Rights',
    'Landless Labour Certificate',
    'Income Certificate',
    'Certified Copy Record of Rights',
    'Landless Labour Certificate',
    'Income Certificate',
    // Add more services as needed
  ],
  // Add more categories and services as needed
};

const ServiceList = ({ category }) => {
  return (
    <div className="service-list">
      {servicesData[category] && servicesData[category].map((service, index) => (
        <div key={index} className="service-item">
            
          {service}
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
