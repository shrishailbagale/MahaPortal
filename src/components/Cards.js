import React from 'react';
import './Cards.css';

const Cards = () => {
  const cardData = [
    {
      title: 'Aaple Sarkar Seva',
      description: 'Description of Service 1',
      image: '/img/Mahadbt.png',
    },
    {
      title: 'Digital Seva/ CSC Login',
      description: 'Description of Service 2',
      image: '/img/digital_seva.png',
    },
    {
      title: 'Aadhar Seva',
      description: 'Description of Service 3',
      image: '/img/aadhar.png',
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
