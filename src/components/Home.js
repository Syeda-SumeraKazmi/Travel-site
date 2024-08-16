import React, { useState, useEffect } from 'react';
import '../assets/css/Home.css';
import Navbar from '../components/Navbar';

const images = [
  require('../assets/image/t5.jpg'),
  require('../assets/image/t2.jpg'),
  require('../assets/image/t1.jpg'),
  require('../assets/image/t3.jpg'),
  require('../assets/image/t4.jpg'),
  require('../assets/image/t7.jpg'),
  require('../assets/image/t8.jpg'),
  require('../assets/image/im5.jpg'),
  
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.slide-in-section');
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
    <div><Navbar />
    </div>
      
      <div className="home-container">
        <div
          className="image-slider"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          <section className="hero-section">
            <h1>Welcome to Pakistan TravelSite</h1>
            <h3>Start your amazing journey full of adventures with us</h3>
            <button
              className="btn-primary"
              onClick={() =>
                document.getElementById('tours-section').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Now
            </button>
          </section>
        </div>

        <section id="tours-section" className="tours-section slide-in-section">
          <h2>Upcoming Tours</h2>
          <div className="tours-grid">
            <div className="tour-box">
              <img src={require('../assets/image/sakardu.jpg')} alt="Tour 1" />
              <h3>Tour to Skardu on 29-July-2024</h3>
              <p>Explore the breathtaking landscapes of Skardu. Duration: 5 days, <strong>Price: 15,000 PKR</strong></p>
            </div>
            <div className="tour-box">
              <img src={require('../assets/image/hunza.jpg')} alt="Tour 2" />
              <h3>Hunza Valley Adventure on 5-August-2024</h3>
              <p>Experience the beauty of Hunza Valley. Duration: 4 days, <strong>Price: 14,000 PKR</strong></p>
            </div>
            <div className="tour-box">
              <img src={require('../assets/image/swat.jpg')} alt="Tour 3" />
              <h3>Swat Adventure on 11-August-2024</h3>
              <p>Experience the beauty of Swat. Duration: 4 days, <strong>Price: 10,000 PKR</strong></p>
            </div>
            {/* Add more tour boxes as needed */}
          </div>

          <h2>Popular Tour Packages</h2>
          <div className="tours-grid">
            <div className="tour-box">
              <img src={require('../assets/image/muree.jpg')} alt="Package 1" />
              <h3>Murree and Nathia Gali</h3>
              <p>Enjoy a relaxing trip to Murree and Nathia Gali. Duration: 3 days, <strong>Price: 8,000 PKR</strong></p>
            </div>
            <div className="tour-box">
              <img src={require('../assets/image/swat.jpg')} alt="Package 2" />
              <h3>Swat Valley</h3>
              <p>Discover the serene beauty of Swat Valley. Duration: 5 days, <strong>Price: 9,000 PKR</strong></p>
            </div>
            <div className="tour-box">
              <img src={require('../assets/image/peerchansi.jpg')} alt="Package 3" />
              <h3>Peerchansi</h3>
              <p>Discover the serene beauty of Peerchansi. Duration: 5 days, <strong>Price: 13,000 PKR</strong></p>
            </div>
            {/* Add more package boxes as needed */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
