import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <h1>Welcome to MahaPortal</h1>
        <p>Your one-stop solution for all government services in Maharashtra.</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a streamlined and user-friendly platform for accessing various government services. 
          We aim to make the process of obtaining certificates, licenses, and other services as simple as possible, 
          ensuring transparency and efficiency.
        </p>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We adhere to the highest ethical standards and maintain transparency in all our operations.</p>
          </div>
          <div className="value-card">
            <h3>Customer Focus</h3>
            <p>We prioritize user experience and are dedicated to meeting the needs of our citizens.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace new technologies and continuously seek innovative solutions to improve our services.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="../assets/team/Shrishail.jpg" alt="Shrishail Bagale" />
            <h3>Shrishail Bagale</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="../assets/team/Suraj.jpg" alt="Team Member 2" />
            <h3>Suraj Ambesange</h3>
            <p>Chief Operating Officer</p>
          </div>
          <div className="team-member">
            <img src="path/to/team-member3.jpg" alt="Team Member 3" />
            <h3>Alwyn Rodriges</h3>
            <p>Head of Technology</p>
          </div>
        </div>
      </section>

      <section className="more-content-section">
        <h2>Why Choose Us?</h2>
        <p>
          MahaPortal is dedicated to making government services accessible and convenient for everyone. Our platform offers 
          a wide range of services, including certificate applications, license renewals, and more. With a focus on 
          user experience and security, we ensure that your information is safe and your needs are met promptly.
        </p>
      </section>
    </div>
  );
};

export default About;
