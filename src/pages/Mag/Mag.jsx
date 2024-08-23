import React from 'react';
import { motion } from 'framer-motion';
import magData from '/src/Constant/Mag.json'; // Adjust the import path as necessary
import "./Mag.css";

const Mag = () => {
  const latestIssue = magData.Mag.find(issue => issue.id === 1);
  const otherIssues = magData.Mag.filter(issue => issue.id !== 1);

  return (
    <div>
      <motion.div
        className='MagContainer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        SPEAKHIRE Mag
      </motion.div>

      <h1 className='MagTitle'>Latest Issue</h1>

      <motion.div
        className='MagLatestIssue'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <div className='MagImageContainer'>
          <a href={`/issue/${latestIssue.id}`}>
            <img src={latestIssue.image} alt={latestIssue.issue} />
            <motion.div
              className='MagIssueText'
              initial={{ y: '100%', opacity: 0 }}
              whileHover={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {latestIssue.issue}
            </motion.div>
          </a>
        </div>
      </motion.div>
      <h1 className='MagPastIssues'>Read Our Past Issues</h1>
      <hr></hr>

      <div className='MagIssues'>
        {otherIssues.map((issue) => (
          <motion.div
            key={issue.id}
            className='MagSubIssue'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          > 
            <div className='MagImageContainer'>
              <a href={`/issue/${issue.id}`}>
                <img src={issue.image} alt={issue.issue} />
                <motion.div
                  className='MagIssueText'
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
      <hr></hr>
      <motion.div
        className='MagButtonWrapper'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href='/news'>View News</a>
      </motion.div>
    </div>
  );
};

export default Mag;
