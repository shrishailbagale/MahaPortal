import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className="news">
      <h1>News & Updates</h1>
      <div className="news-item">
        <h2>New Service Launch</h2>
        <p>We are excited to announce the launch of our new online application service for various certificates.</p>
      </div>
      <div className="news-item">
        <h2>Update on Government Schemes</h2>
        <p>Stay updated with the latest information on government schemes and how to apply for them.</p>
      </div>
    </div>
  );
};

export default News;
