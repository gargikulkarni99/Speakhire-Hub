import React from 'react';
import { motion } from 'framer-motion';
import './administrator.css'; // Ensure you have this CSS file

const Administrator = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className='Administrator-container'>
        <motion.div
          className='Administrator-inline'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Speaker Series Administrator</h1>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#apply"
          >
            Apply Now
          </motion.a>
        </motion.div>
        <div className='Series-administrator'>
          <motion.div 
            className='sub-series'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Description</h3>
            <p>
              Speaker Series Administrator (SSA) is integral to the operations of our Speaker Series program. 
              The SSA ensures the organization is meeting its Speaker Series programming goals, and developing 
              and leveraging the Speaker Series program in other areas of the organization, including facilitating 
              our Empowerment Courses. The SSA will engage all speakers in the cohort, ensuring speakers are informed 
              of all events, prepared for their individual events, and provided with accurate and timely assistance and 
              information. The SSA must be a self-starter, self-motivated, highly effective communicator, and contributor 
              to the larger organizational goals. Please note this is a VOLUNTEER position.
            </p>
          </motion.div>
          <motion.div 
            className='sub-series'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Qualifications</h3>
            <p>
              Effective and warm communicator, highly organized/efficient <br/>
              Proficient in using different technologies and platforms, or able to learn quickly <br/>
              Strong project management skills managing complex, multifaceted projects resulting in measurable successes and program growth <br/>
              Ability to assess and adapt to changing priorities, and take initiative in a fast paced start-up environment <br/>
              Problem solving, flexibility, and optimistic approach to overcoming obstacles <br/>
              Adoption and strong adherence to organizational values <br/>
              Excellent communication skills with attention to detail <br/>
              Highly skilled at developing interpersonal relationships with individuals of different ages at various stages of their lives and having varying levels involvement with the organization <br/>
              Comfort and ability to work remotely <br/>
              Ability to work a flexible schedule
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Administrator;
