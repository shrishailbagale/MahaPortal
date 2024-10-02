import React from 'react';
import './Cards.css';
import digitalSevaImage from '../assets/img/digital_seva.png';
import apaleSaekarSeva from '../assets/img/Mahadbt.png';
import aadharImage from '../assets/img/aadharlogo.png';
import mahaeseva from '../assets/img/mahaesevakendra.jpg';
import { Link } from 'react-router-dom';


const Cards = () => {
  const cardData = [
    {
      title: 'Aaple Sarkar Seva',
      description: 'Description of Service 1',
      link: 'https://aaplesarkar.mahaonline.gov.in/en', // Internal path for the card
      image: apaleSaekarSeva,
    },
    {
      title: 'Digital Seva/ CSC Login',
      description: 'Description of Service 2',
      link: 'https://digitalseva.csc.gov.in/',
      image: digitalSevaImage ,
    },
    {
      title: 'Aadhar Seva',
      description: 'Description of Service 3',
      link: 'https://resident.uidai.gov.in/',
      image: aadharImage,
    },
    {
      title: 'Maha e-Seva Kendra',
      description: 'Description of Service 3',
      image: mahaeseva,
    },
    // Add more cards as needed
  ];

  return (
    <div className="cards-container">
    {cardData.map((card, index) => (
    
      <Link key={index} to={card.link} className="card">
        <img src={card.image} alt={card.title} />
        <h3>{card.title}</h3>
        {/* <p>{card.description}</p> */}
      </Link>
    ))}
  </div>
  );
};

export default Cards;
