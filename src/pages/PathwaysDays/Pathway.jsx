import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Moore from '../../assets/pathways/PD+Monroe.jpg'; // Ensure this path is correct
import Devin from "../../assets/pathways/Devin.jpg"
import "./pathways.css";
import path from '../../assets/pathways/path.png';

const Pathway = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden with some vertical movement
    visible: { opacity: 1, y: 0 }, // End fully visible at original position
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 }, // Start hidden and slightly smaller
    visible: { opacity: 1, scale: 1 }, // End fully visible and at original size
  };

  return (
    <motion.div
      initial="hidden" // Initial state
      animate="visible" // Animation to apply
      exit="hidden" // State when exiting
      variants={containerVariants} // Animation variants for container
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className='pathways-container'>
        <motion.div className='header-pathways'>
          <h1>Pathways Days</h1>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSdkvRwl13u1_FmG923fPfpEMAPKa9AMKywC2sctI9AArMvA3A/viewform'>Partner Interest Form</a>
        </motion.div>
        <motion.div
          className='scroller'
          initial={{ opacity: 0 }} // Start scroller hidden
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for a smoother effect
        >
          <img src={path} alt="Pathways Scroller" />
        </motion.div>
        <div className='pathway-days'>
          <motion.div
            className='sub-pathways'
            initial={{ scale: 0.9 }} // Start slightly smaller
            animate={{ scale: 1 }} // Scale up to original size
            transition={{ duration: 0.3 }} // Duration for scaling
          >
            <img src={Moore} alt="Monroe Pathway" />
          </motion.div>
          <div className='sub-pathways sub'>
            <h4>
              Ever ask anyone how they reached career success? Pathways Days are career days with a focus on pathways. 
              Bring Pathways Days to your schools and help your students discover their path forward.
            </h4>
            <br />
            <a href='#'>Partner Planning Requirements</a>
            <br />
            <ul>
              <li> 1. Requires 3 months to plan a Pathways Day</li>
              <li> 2. Complete the Partner Interest Form above</li>
              <li> 3. Identify a Date for your Pathways Day</li>
              <li> 4. Have students complete a survey to determine their career interest</li>
              <li> 5. Host your SPEAKHIRE Pathways Day!</li>
            </ul>
          </div>
        </div>
        <div className='devin'>
        <div className='sub-devin'>
        <img src={Devin}/>
        </div>
        <div className='sub-devin'>
        <p>I wanted to make my own path with a suitable career that would make my mom proud. SPEAKHIRE helped me understand and learn what I wanted to do in a career, and the professionals gave wonderful insight on the process and even advice that I would use later down the line.</p>
        <h1>-Devin</h1>
        <div className='partner'><a href='https://docs.google.com/forms/d/e/1FAIpQLSdkvRwl13u1_FmG923fPfpEMAPKa9AMKywC2sctI9AArMvA3A/viewform'>Complete Partner Interest Form</a></div>
        </div>
        </div>
        <motion.div className='Empower' variants={itemVariants} transition={{ delay: 0.4 }}>
          <h5>Support Prepare Empower All Kind</h5>
          <p>Are you a professional looking to participate in our SPEAKHIRE Pathways Days? Visit our <a href='/champion'className='champion-page' >Champions page</a> and get involved!</p>
          <a href='#'>Become a Champion Today</a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Pathway;
