// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
import travellogo from '../assets/image/travellogo.png';

function Navbar() {
  // State to manage menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="#"><img src={travellogo} alt="Travel Logo" /><strong>TravelSite</strong></Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/Home">Home </Link></li>
          <li><Link to="/Destinations">Destinations</Link></li>
          <li><Link to="/Packages">Packages</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon">&#9776;</span>
      </div>
    </nav>
  );
}

export default Navbar;
