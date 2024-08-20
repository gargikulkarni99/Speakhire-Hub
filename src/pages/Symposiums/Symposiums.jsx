import React from 'react';
import { motion } from 'framer-motion';
import symposiums from "../../assets/Symposiums/Symposium.png"; 
import "./Symposiums.css"
const Symposiums = () => {
  return (
    <div className='Symposiums-container'>
      <div className='Symposiums-header'>
        <h1>Symposiums</h1>
        <a href='#'>PARTNER INTEREST FORM</a>
      </div>
      <div className='Symposiums'>
        <motion.div 
          className='sub-symposiums text-section'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>Symposiums bring together different leaders of our society, educators, district leaders, parents, and more to discuss topics that impact our future generations. Presented as workshops with open discussions and reflections, Symposium topics can be tailored to address the needs of your audience. </p>
          <ul>
            <li>Society’s leaders, parents, educators seeking to understand their impact on future generations </li>
            <li>Workshops led by a SPEAKHIRE to instill deeper reflection and empathy building and explore how society’s interconnectedness impacts achievement </li>
          </ul>
        </motion.div>
        <motion.div 
          className='sub-symposiums image-section'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={symposiums} alt="Symposiums" />
        </motion.div>
      </div>
      <div className='symposiums-designed'>
        <h1>Symposiums Designed For Your Audience</h1>
        <p>Topics include but are not limited to:</p>
        <div className='development'>
          <motion.div 
            className='sub-development'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <a href='#'>Educator/Staff Professional Development</a>
            <ul>
              <li>Student Positive Identity Development</li>
              <li>Building School to Career Connections </li>
              <li>Holding Empathy At the Core</li>
              <li>Personal Growth - Checking Implicit Bias </li>
              <li>Instilling Leadership in Children</li>
              <li>Supporting Students Facing Cultural Barriers</li>
              <li>Teaching Employability Skills</li>
              <li><span>Effective Teams Series</span> includes:</li>
              <li>Taking Initiative and Communicating Effectively </li>
              <li>Vision and Goal Setting</li>
              <li>Using Collaborative Tools</li>
              <li>Building Unity and a Shared Vision </li>
            </ul>
          </motion.div>
          <motion.div 
            className='sub-development'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <a href='#'>Family and Community Building</a>
            <ul>
              <li>Building School to Career Connections </li>
              <li>Instilling Leadership In Your Children</li>
              <li>Holding Empathy At the Core </li>
              <li>Focusing on Personal Growth</li>
              <li>Job Market or Marriage Market - Developing Independent Individuals</li>
              <li>Balancing Multicultural Environments</li>
              <li>Teaching Your Children Skills Employers Value</li>
            </ul>
          </motion.div>
        </div>
        <div className='educator'>
          <motion.div 
            className='sub-educator'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p>“Thank you for this incredibly meaningful PD. This was very valuable.” </p>
            <h5>-NYC Educator</h5>
          </motion.div>
          <motion.div 
            className='sub-educator'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p>It’s so important to find points in the day for students to share these pieces of their identities...</p>
            <h5>-Educator</h5>
            <a href='#'>Complete Partner Interest Form</a>
          </motion.div>
          <motion.div 
            className='sub-educator'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p>I really love this PD. I’d like to turnkey this to my staff.</p>
            <h5>-NYC Assistant Principal</h5>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Symposiums;
