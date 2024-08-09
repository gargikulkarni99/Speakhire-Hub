import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon
import executiveBoard from '/src/Constant/executiveBoard.json';
import juniorBoard from '/src/Constant/juniorBoard.json';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
  return (
    <div className='containers'>
      <motion.div
        className='speakhire-team'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Speakhire Team
      </motion.div>
      <motion.div
        className='team-container'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Executive Board Members */}
        <motion.div
          className='junior-board-title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Executive Board Members
        </motion.div>
        {executiveBoard.executiveBoard.map((member) => (
          <motion.div
            className='sub-team'
            key={member.id}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className='member-content'>
              <div className='member-image'>
                <img src={member.image} alt={`${member.name}'s profile`} />
              </div>
              <div className='member-details'>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p>{member.description}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  <FaLinkedin size={34} /> {/* Use the LinkedIn icon */}
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Junior Board Members */}
        <motion.div
          className='junior-board-title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Junior Board Members
        </motion.div>

        {juniorBoard.juniorBoard.map((member) => (
          <motion.div
            className='sub-team'
            key={member.id}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className='member-content'>
              <div className='member-image'>
                {member.image ? (
                  <img src={member.image} alt={`${member.name}'s profile`} />
                ) : (
                  <div className='placeholder-image'>No Image Available</div>
                )}
              </div>
              <div className='member-details'>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p>{member.description || 'No description available.'}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  <FaLinkedin size={34} /> {/* Use the LinkedIn icon */}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
