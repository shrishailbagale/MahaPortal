import React from 'react';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Notice from '../components/Notice';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Notice />
      <Cards />
    </div>
  );
};

export default Home;
