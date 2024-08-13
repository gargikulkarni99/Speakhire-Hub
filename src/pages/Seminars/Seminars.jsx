import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import seminar from "/src/assets/seminars/seminar.png";
import talking from "/src/assets/seminars/talking.png";
import election from "/src/assets/seminars/election-candidates.png";
import project from "/src/assets/seminars/project-manager.png";
import young from "/src/assets/seminars/young-business-woman.png";
import seminarData from "/src/Constant/seminar.json";
import './Seminars.css'; 

const Seminars = () => {
  return (
    <div className="seminars">
      <motion.div className="header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h1>SPEAKHIRE Seminars</h1>
        <a href="#">PARTNER INTEREST FORM</a>
      </motion.div>

      <div className="seminar-container">
        <motion.div className="sub-seminar" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <p>
            SPEAKHIRE Seminars, also called SPEAKHIRE Skills Seminars, are 45 minute to 1 hour long presentations by one of our Champions on professional development topics. Each presentation is for 20-30 participants maximum, with 20 recommended for optimal results.
          </p>
          <br />
          <p>
            Are you a <span>professional</span> looking to participate in our SPEAKHIRE Seminars? Visit our <a href="#">Champions page</a> and get involved!
          </p>
        </motion.div>
        <motion.div className="sub-seminar" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <img src={seminar} alt="Seminar" />
        </motion.div>
      </div>

      <motion.div className="Envision" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h3><span>Partners! Pick from two tiers:</span> Envision and Insight!</h3>
        <p>
          <span>Envision Tier</span> - Your Skills Seminar Speaker will be a more senior professional specifically identified for your target population, and their identity (gender, race, ethnicity, story) along with their career field will be taken into consideration specifically for your target audience, so they can help your participants envision what their pathway could look like.
        </p>
        <br />
        <p>
          <span>Insight Tier</span> – Your Skills Seminar Speaker will be one of our incredible professionals who can provide insight about the topic from an early to mid-career professional lens with the Seminar at the day and time most convenient for your needs. Does not include Leadership topics. *
        </p>
      </motion.div>

      <motion.div className="topics" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h3>TOPICS INCLUDE:</h3>
        <div className="images">
          <img src={project} alt="Project Management" />
          <img src={talking} alt="Talking" />
          <img src={young} alt="Young Business Woman" />
          <img src={election} alt="Election Candidates" />
        </div>
        <div>
          {seminarData.map((item, index) => (
            <div key={index} className="topic-item">
              <span className="topic-category">{item.category}</span>: <span className="topic-title">{item.topic}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Seminars;
