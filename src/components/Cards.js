import React from 'react';
import './Cards.css';

const Cards = () => {
  const cardData = [
    {
      title: 'Service 1',
      description: 'Description of Service 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Service 2',
      description: 'Description of Service 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Service 3',
      description: 'Description of Service 3',
      image: 'https://via.placeholder.com/150',
    },
    // Add more cards as needed
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
