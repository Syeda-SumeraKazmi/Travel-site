import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/ContactUs.css'; // Assuming you have a CSS file for styling

// Import your icons and images
import homeIcon from '../assets/image/home.png';
import phoneIcon from '../assets/image/phone.jpg';
import emailIcon from '../assets/image/email.jpg';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send form data to a server
    console.log(form);
  }

  return (
    <>
    
      <Navbar />
      <div className="container">
      <div className="contact-us-container">
        <h2><strong>ContactUs</strong></h2>
        <p> We would love to hear from you! Whether you have questions about our tours, packages, or anything else, our team is ready to answer all your questions.</p>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <img src={homeIcon} alt="Address" />
            <h3>Address:</h3>
            <p> 123 Travel Street, Islamabad, Pakistan</p>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" />
            <h3>Phone:</h3>
            <p>+92-123-456-7890</p>
          </div>
          <div className="contact-item">
            <img src={emailIcon} alt="Email" />
            <h3>Email:</h3>
            <p> contact@pakistantravelsite.com</p>
          </div>
        </div>
      
        

        <div className="contact-form">
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <textarea name="message" placeholder="Type your Message..." value={form.message} onChange={handleChange}></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
    
  );
}

export default ContactUs;
