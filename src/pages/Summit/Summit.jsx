import React from 'react';
import { motion } from 'framer-motion';
import Zara from "../../assets/Summit/zara-cadoux.jpg";
import Afriyie from "../../assets/Summit/Oheneba+20231.jpg";
import Rhonda from "../../assets/Summit/rhonda-joseph.jpg";
import Lena from "../../assets/Summit/lena.jpg";
import Hetal from "../../assets/TeamAssets/Hetal_files/Hetal.jpg";
import Adama from "../../assets/TeamAssets/Hetal_files/Adama.jpg";
import Leyli from "../../assets/TeamAssets/Hetal_files/Leily.jpg";
import Lylia from "../../assets/TeamAssets/Hetal_files/Lylia.jpeg";
import Yann from "../../assets/Summit/YANN+N.+Headshot+2023+August.jpg";
import Carla from "../../assets/Summit/Carla.jpg";
import Ozodbek from "../../assets/Summit/Ozodbek.jpg";
import Adam from "../../assets/Summit/Adam.jpg";
import Sungyung from '../../assets/Summit/sk_park_headshot.jpg';
import Esteban from "../../assets/Summit/Esteban.jpg";
import presentersData from "../../Constant/SoireePresenters.json";
import "./Summit.css";

const Summit = () => {
  return (
    <div className='summit-container'>
      {/* Summit Header */}
      <motion.div 
        className='summit-header'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>SPEAKHIRE <br /> Summit and Soiree</h1>
        <p>Our Summit brings together generations of diverse leaders who bring and will bring positive change towards social inclusion every day at places of work.</p>
        <p>Our Soiree celebrates the success of everyone moving this work forward of developing tomorrow’s leaders!</p>
        <ul>
          <li><a href='#'>Past Summits</a></li>
          <li><a href='#'>Volunteer</a></li>
          <li><a href='#'>Sponsor</a></li>
          <li><a href='#'>Donate</a></li>
        </ul>
      </motion.div>

      {/* Sliding Announcement */}
      <motion.div 
        className="slider-container"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <div className="slider">
          <span>Your SPEAKHIRE Summit and Soiree  </span>
          <span>~</span>
          <span>SPEAKHIRE 2024 Details Coming Soon! </span>
          <span> Revisit SPEAKHIRE 2023 Summit and Soiree</span>
          <span>~ </span>
        </div>
      </motion.div>

      {/* Videos */}
      <motion.div 
        className="video-container"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Summit Content */}
      <motion.div 
        className='summit-content'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2>SPEAKHIRE SUMMIT</h2>
        <div className='image-container'>
          {[
            { img: Zara, name: "Zara Cadoux", role: "Social Justice Leadership Development Specialist", school: "M.A. student, School of Labor and Urban Studies" },
            { img: Afriyie, name: "Oheneba Afriyie", role: "Associate Director, Technology Consulting", school: "PROTIVITI" },
            { img: Rhonda, name: "Rhonda Joseph", role: "M.A. student", school: "School of Labor and Urban Studies" },
            { img: Lena, name: "Lena Dandy", role: "Agile Delivery Lead", school: "F500 Agricultural Company" },
          ].map(person => (
            <motion.div key={person.name} className="person-card" whileHover={{ scale: 1.05 }}>
              <img src={person.img} alt={person.name} />
              <h4>{person.name}</h4>
              <span>{person.role}</span>
              <span>{person.school}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soiree Content */}
      <motion.div 
        className='soiree-content'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2>SPEAKHIRE SOIREE</h2>
        <h5>Welcome by Founder and Executive Director</h5>
        <h6>Hetal Jani</h6>
        <img src={Hetal} alt="Hetal Jani" />
        
        <h5>SPEAKHIRE JUNIOR BOARD AS</h5>
        <span>Master of Ceremonies</span>
        <ul>
          {[{ img: Adama, name: "Adama Bah" }, { img: Leyli, name: "Leyli Hernandez" }, { img: Yann, name: "Yann Noumbi" }, { img: Lylia, name: "Lylia Belbegra" }]
            .map((person) => (
              <li key={person.name}>
                <img src={person.img} alt={person.name} />
                <h6>{person.name}</h6>
              </li>
          ))}
        </ul>
        
        <h2>CELEBRATING</h2>
        <div className="people-list">
          {presentersData.people.map(person => (
            <motion.div key={person.id} className="person-cards" whileHover={{ scale: 1.05 }}>
              <img src={person.image || 'default-image.jpg'} alt={person.name} className="person-image" />
              <div className="person-details">
                <h3>{person.name}</h3>
                <p>{person.school}</p>
                <p>{person.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Pitch Presentation */}
        <div className='celebration'>
          <h5>With Special Pitch Presentation by Inspiring Leadership Social Venture CLOA</h5>
          <ul>
            {[{ img: Carla, name: "Carla Solis" }, { img: Leyli, name: "Leyli Hernandez" }, { img: Ozodbek, name: "Ozodbek Mavlyanov" }, { img: Adam, name: "Adam Gueye" }]
              .map((person) => (
                <li key={person.name}>
                  <img src={person.img} alt={person.name} />
                  <p>{person.name}</p>
                </li>
            ))}
          </ul>
        </div>

        {/* Honoring Our Heroes */}
        <div className='our-heroes'>
          <h1>Honoring Our Heroes</h1>
          <h3>CHAMPIONS WITH SERVICE GREATER THAN 100 HOURS</h3>
          <ul>
            {[{ img: Sungyung, name: "Sunkyung Park" }, { img: Afriyie, name: "Oheneba Afriyie" }, { img: Lena, name: "Lena Dandy" }, { img: Esteban, name: "Esteban Proano" }]
              .map((person) => (
                <li key={person.name}>
                  <img src={person.img} alt={person.name} />
                  <p>{person.name}</p>
                </li>
            ))}
          </ul>
        </div>

        {/* Foundation Acknowledgement */}
        <div className='foundation'>
          <h1>The 2023 Summit and Soiree is made possible thanks to the generous donation of</h1>
          <h2>UP Foundation</h2>
          <p>and product donations of</p>
          <h2>L’Oreal Paris</h2>
          <span>Story Seed, Sweet Choupette</span>
          <p>Thank you to the generous support of</p>
          <span>School of Labor and Urban Studies</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Summit;
