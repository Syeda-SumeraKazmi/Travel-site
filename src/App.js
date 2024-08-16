import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Destination from './components/Destination';
import Packages from './components/Packages';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/home" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
        <Route  path="/" element={<h1>Home Page</h1>} />
        <Route path="/destinations" element={<Destination/>} />
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route  path="/Packages" element={<Packages/>} />
        <Route  path="/" element={<h1>About Us</h1>} />
        <Route  path="/AboutUs" element={<AboutUs/>} />
        <Route  path="/" element={<h1>Contact Us</h1>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
    </Routes>
   </Router>
  );
}

export default App;
