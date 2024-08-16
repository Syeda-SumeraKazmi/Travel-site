

import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/Destination.css'; 
import hunzaImg from '../assets/image/hunza.jpg'; 
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

const destinations = [
  {
  
      name:"Karimabad",
      image: KarimabadImg,
      description: "Surrounded by towering peaks, including Rakaposhi and Ultar Sar, Karimabad in Gilgit-Baltistan is a cultural hub with historical sites like the ancient Baltit Fort and Altit Fort. Its significance lies in its vibrant local culture and historical landmarks, providing visitors with a rich tapestry of experiences."
    },
    {
      name:"Makli Necropolis",
      image: MakliImg,
      description: "Makli Necropolis near Thatta, a UNESCO World Heritage Site, holds immense historical and archaeological importance. Its vast cemetery, with intricate tombs and mausoleums, reflects the architectural brilliance of various historical periods, preserving the cultural heritage of the region."
    },
   
    {
      name: "Swat",
      image: swatImg,
      description: "Swat District, also known as the Swat Valley, is a district in the Malakand Division of Khyber Pakhtunkhwa, Pakistan. Known for its stunning natural beauty, the district is a popular tourist destination."
    },
    {
      name: "kaghan vellay",
      image: kaghanImg,
      description: "Kaghan Valley, in the Khyber Pakhtunkhwa province, holds importance as a picturesque destination with lush greenery, snow-capped peaks, and gushing rivers. Saif-ul-Mulook Lake and Shogran stand out as key attractions, making the valley a favorite among nature enthusiasts and adventure seekers."
    },
 

  {
    name: "Neelum Valley",
    image: NeelumImg ,
    description: "Neelum is a district of Pakistan-administered Azad Kashmir in the disputed Kashmir region. It is the northernmost of 10 districts located within the Pakistani-administered territory of Azad Kashmir."
  },
  {
    name: "Peerchansi",
    image:peerchansiImg ,
    description: "Skardu is a town in the Gilgit-Baltistan region, known for its breathtaking scenery and as a gateway to some of the world’s highest peaks."
  },
  {
    name: "Margala Hills",
    image: margalaImg,
    description: "The Margalla Hills are a hill range within the Margalla Hills National Park on the northern edge of Islamabad Capital Territory, Pakistan, just south of Haripur District, Khyber Pakhtunkhwa. "

},
 
 
  {
    name: "Mohenjo-daro ",
    image:MohenjoImg ,
    description: "Mohenjo-daro is an archaeological site in Larkana District, Sindh, Pakistan. Built c. 2500 BCE, it was the largest settlement of the ancient Indus Valley Civilisation."
  },
  

  {
    name: "Hunza Valley",
    image: hunzaImg,
    description: "Hunza Valley is a mountainous valley located in the Gilgit-Baltistan region of Pakistan. Known for its stunning landscapes and rich cultural heritage."
  },
  {
    name: "Skardu",
    image: skarduImg,
    description: "Skardu is a town in the Gilgit-Baltistan region, known for its breathtaking scenery and as a gateway to some of the world’s highest peaks."
  },
  {
    name:"Shangrila Resort",
    image: ShangrilaImg,
    description: "Nestled in the picturesque landscapes of Skardu, Shangrila Resort is an oasis of tranquility. The resort’s importance lies in its serene lakeside location, particularly the unique Lower Kachura Lake. Offering a peaceful retreat with breathtaking views of the surrounding mountains, Shangrila Resort beckons travelers seeking solace amidst nature’s beauty."
  },
  {
    name:"Kalash Valley",
    image: KalashImg,
    description: "Tucked away in the Hindu Kush mountain range, Kalash Valley is of immense cultural importance as the home of the unique Kalash people. The valley’s vibrant culture, festivals, and picturesque landscapes make it a captivating destination, preserving the traditions of this distinct community."
  }
 
];


const Destination = () => {
  return (
    <>
    <div>
    <Navbar />
  
  </div>
    <div className="destination-container"> 
      <h2>Destinations</h2>
      <div className="destination-cards">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Destination;
