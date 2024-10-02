import React from 'react';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Notice from '../components/Notice';
import './Home.css';
import ServiceList from '../components/ServiceList';
import Documents from '../components/Documents';

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Notice />
      <Cards />
      <ServiceList />
      <Documents/>
    </div>
  );
};

export default Home;
