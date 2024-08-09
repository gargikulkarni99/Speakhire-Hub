import React from 'react';
import { motion } from 'framer-motion';
import magData from '/src/Constant/Mag.json'; // Adjust the import path as necessary
import "./Mag.css"
const Mag = () => {
  const latestIssue = magData.Mag.find(issue => issue.id === 1);
  const otherIssues = magData.Mag.filter(issue => issue.id !== 1);

  return (
    <div>
      <motion.div
        className='Mag'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        SPEAKHIRE Mag
      </motion.div>

      <h1 className='title'>Latest Issue</h1>

      <motion.div
        className='latest-issue'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <div className='image-container'>
          <a href={`/issue/${latestIssue.id}`}>
            <img src={latestIssue.image} alt={latestIssue.issue} />
            <motion.div
              className='issue-text'
              initial={{ y: '100%', opacity: 0 }}
              whileHover={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {latestIssue.issue}
            </motion.div>
          </a>
        </div>
      </motion.div>

      <div className='issue'>
        {otherIssues.map((issue) => (
          <motion.div
            key={issue.id}
            className='sub-issue'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className='image-container'>
              <a href={`/issue/${issue.id}`}>
                <img src={issue.image} alt={issue.issue} />
                <motion.div
                  className='issue-text'
                  initial={{ y: '100%', opacity: 0 }}
                  whileHover={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {issue.issue}
                </motion.div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className='button'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href='/news'>View News</a>
      </motion.div>
    </div>
  );
};

export default Mag;
