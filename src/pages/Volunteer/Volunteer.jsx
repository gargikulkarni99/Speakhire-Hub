import React from 'react';
import { motion } from 'framer-motion';
import './Volunteer.css'; // Import the CSS file for styling

const Volunteer = () => {
  return (
    <motion.div 
      className='volunteer-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className='volunteer'
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Volunteer</h1>
      </motion.div>
      <h2>Interested in a Long Term Volunteering Position?</h2>
      <div className='volunteer-pathways'>
        <motion.div 
          className='career-pathways'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Career Pathways Champion (CPC)</h3>
          <p>Are you looking for an opportunity to empower the next generation of leaders, both culturally similar and cross-cultural? If you have at least 2 years of experience in your career field, you could become a Career Pathways Champion and make a difference.</p>
          <a href='/careers'>Learn more</a>
          <a href='#' className='apply'>Apply Now</a>
        </motion.div>
        <motion.div 
          className='career-pathways'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Speaker Series Administrator (SSA)</h3>
          <p>Speaker Series Administrator (SSA) is integral to the operations of our Speaker Series program. The position of SSA ensures all effective communication and coordination of the Speaker Series program.</p>
          <a href='#'>Learn more</a>
          <a href='#' className='apply'>Apply Now</a>
        </motion.div>
      </div>
      <motion.div 
        className='volunteer-shame'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Volunteer for SPEAKHIRE Summit</h3>
        <p>SPEAKHIRE Summit brings together generations of diverse leaders who bring and will bring positive change towards social inclusion every day in their places of work.</p>
        <a href='#' className='apply'>Learn more</a>
      </motion.div>
    </motion.div>
  );
}

export default Volunteer;
