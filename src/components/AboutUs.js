// src/pages/AboutUs.js

import React from 'react';
import '../assets/css/AboutUs.css'; 
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <>
    <div>
    <Navbar />
  
  </div>
    <div className="about-us-container">
      <div className="about-us-header">
        <img src={require('../assets/image/about1.jpg')} alt="About Us" className="about-us-image" />
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <p>
          Welcome to our travel website! We are passionate adventurers and seasoned travel enthusiasts dedicated to bringing you unforgettable journeys across the globe. Our mission is to inspire and guide you to explore the world's most breathtaking destinations, from serene landscapes to bustling cities. With a commitment to quality and personalized service, we carefully curate tours that cater to every traveler's dreams, ensuring a seamless and enriching experience. Whether you're seeking a solo adventure, a family vacation, or a romantic getaway, our expert team is here to help you discover the beauty of travel and create memories that will last a lifetime. Join us on this journey and let your adventure begin!
        </p>
        <p>
        At our travel website, we pride ourselves on having a team of dedicated professionals who are as passionate about travel as you are. Our team consists of experienced travel planners, knowledgeable guides, and customer service experts who work tirelessly to provide you with the best travel experience possible. With a deep understanding of diverse cultures and destinations, our experts tailor each tour to your specific interests and preferences, ensuring every journey is unique and memorable.</p>
        
        
        <p> Whether you're seeking adventure, relaxation, or cultural exploration,
          we have a wide range of tours and packages to suit your preferences.
          Our knowledgeable guides and excellent customer service ensure a
          memorable journey.</p>
         
        
      
      </div>
    </div>
    </>
  );
};

export default AboutUs;
