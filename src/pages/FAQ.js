import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2>How do I register?</h2>
        <p>You can register by clicking on the "Register" button on the homepage and filling out the necessary information.</p>
      </div>
      <div className="faq-item">
        <h2>What services do you offer?</h2>
        <p>We offer a variety of services, including online application for certificates, payment of bills, and more.</p>
      </div>
    </div>
  );
};

export default FAQ;
