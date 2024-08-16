import React from 'react';
import '../assets/css/Packages.css'; // Import the CSS file for styling
import Navbar from '../components/Navbar';

import hunzaImg from '../assets/image/hunza.jpg'; // Adjust the path as needed
import skarduImg from '../assets/image/sakardu.jpg';
import NeelumImg from '../assets/image/Neelum.jpg';
import margalaImg from '../assets/image/margala.jpg';
import peerchansiImg from '../assets/image/peerchansi.jpg';
import swatImg from '../assets/image/swat.jpg';
import MohenjoImg from '../assets/image/Mohenjo.jpg';
import kaghanImg from '../assets/image/kaghan.jpg';
import ShangrilaImg from '../assets/image/Shangrila.jpg';
import MakliImg from '../assets/image/Makli.jpg';
import KalashImg from '../assets/image/Kalash.jpg';
import KarimabadImg from '../assets/image/Karimabad.jpg';
import mureeImg from '../assets/image/Karimabad.jpg';
import hiranImg from '../assets/image/hiran.jpg';

const packages = [
  {
    name: "Hunza Valley",
    image: hunzaImg,
    description: "Discover the serene beauty of Hunza Valley. Duration: 5 days, Price:13,000pkr."
  },
  
  {
    name: "Skardu",
    image: skarduImg,
    description: "Experience the breathtaking landscapes of Skardu, the gateway to some of the world's highest peaks. Duration: 7 days, Price: 15,000 PKR."
  },
  {
    name: "Margala Hills",
    image: margalaImg,
    description: "Description: Explore the lush green trails and scenic views of Margala Hills. Duration: 2 days, Price: 5,000 PKR."
  },
  {
    name: "Mohenjo-daro",
    image: MohenjoImg,
    description: "Step back in time at the ancient archaeological site of Mohenjo-daro. Duration: 3 days, Price: 8,500 PKR."
  },
  {
    name: "Neelum Valley",
    image: NeelumImg,
    description: "Discover the untouched beauty of Neelum Valley, a paradise for nature lovers. Duration: 5 days, Price: 13,000 PKR."
  },
  {
    name: "Peerchansi",
    image: peerchansiImg,
    description: " Immerse yourself in the tranquil surroundings of Peerchansi. Duration: 4 days, Price: 10,000 PKR."
  },
  {
    name: "Swat",
    image: swatImg,
    description: "Explore the stunning natural beauty and rich cultural heritage of Swat Valley. Duration: 5 days, Price: 12,000 PKR."
  },
  {
    name: "Kaghan Valley",
    image: kaghanImg,
    description: "Enjoy the lush greenery and crystal-clear rivers of Kaghan Valley. Duration: 6 days, Price: 14,000 PKR."
  },
  {
    name: "Shangrila Resort",
    image: ShangrilaImg,
    description: " Relax by the serene Lower Kachura Lake at Shangrila Resort, nestled in the picturesque Skardu. Duration: 3 days, Price: 11,000 PKR."
  },
  {
    name: "Makli Necropolis",
    image: MakliImg,
    description: "Explore the rich history and architectural marvels of Makli Necropolis. Duration: 2 days, Price: 6,000 PKR."
  },
  {
    name: "Kalash Valley",
    image: KalashImg,
    description: "Discover the unique culture and vibrant festivals of Kalash Valley. Duration: 4 days, Price: 10,500 PKR."
  },
  {
    name: "Karimabad",
    image: KarimabadImg,
    description: "Visit Karimabad, a cultural hub surrounded by majestic peaks, including Rakaposhi. Duration: 5 days, Price: 13,500 PKR."
  },
  {
    name: "Muree and Nathia Gali",
    image: mureeImg,
    description: "Discover the serene beauty of Muree and Nathia Gali. Duration: 6 days, Price:13,000pk"
  }
  ,
  {
    name: "Hiran Meenar",
    image: hiranImg,
    description: "Discover the serene beauty of Hiran Meenar Duration: 1 days, Price:3,000pk"
  }
];

const Packages = () => {
  return (
   
   <>
   <div>
      <Navbar />
      
    
    </div>
    <div className="packages-container"> {/* Apply the background image class here */}
      <h2>Our Packages</h2>
      <div className="packages-cards">
        {packages.map((pkg, index) => (
          <div key={index} className="packages-card">
            <img src={pkg.image} alt={pkg.name} className="packages-image" />
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Packages;
