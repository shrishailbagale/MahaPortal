import React from 'react';
import './CardSection.css';

const CardSection = () => {
  const cards = [
    { title: 'Service 1', description: 'Description of service 1' },
    { title: 'Service 2', description: 'Description of service 2' },
    { title: 'Service 3', description: 'Description of service 3' },
    { title: 'Service 3', description: 'Description of service 3' },
    // Add more cards as needed
  ];

  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
