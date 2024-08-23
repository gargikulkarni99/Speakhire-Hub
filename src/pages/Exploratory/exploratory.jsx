import React from 'react';
import { motion } from 'framer-motion';
import image from '/src/assets/Exploratory/sitting.png';
import dana from '/src/assets/Exploratory/Dema.jpg';
import './exploratory.css';

const Exploratory = () => {
  return (
    <motion.div
      className="explo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="header-container">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Exploratory Years
        </motion.h1>
        <motion.p
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Invite Only
        </motion.p>
      </div>

      {/* Exploratory Content with Grid */}
      <div className="exploratory-container">
        <motion.div
          className="sub-exploratory"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            The Exploratory Years are for individuals who have graduated from the Foundational Year
            and have proven their commitment to themselves and their Champions. This self-led program
            allows individuals to work with Champions independently as they continue to explore college
            and career pathways. The program includes 3-month rounds of 30-minute sessions with a selected Champion.
          </p>
        </motion.div>
        <motion.div
          className="sub-exploratory"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
        <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/cwAYscGHEWU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      








          <motion.div className="exploratory-image">
            <img src={image} alt="Exploratory" />
          </motion.div>
        </motion.div>
      </div>

      {/* Prerequisites with Grid */}
      <div className="prerequisite">
        <motion.div
          className="sub-prerequisite"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3>Requirements</h3>
          <ol>
            <li>Graduate from the Foundational Year</li>
            <li>Complete registration form</li>
            <li>
              Pay for 3 months or 1 year (<a href="/contact">Contact us</a> for monthly)
            </li>
            <li>Participate in the program!</li>
          </ol>
        </motion.div>
        <motion.div
          className="sub-prerequisite"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3>Program Details</h3>
          <ul>
            <li>3-month internship rounds</li>
            <li>30-minute sessions with a career professional of your choice</li>
            <li>4-18 sessions per round</li>
            <li>Flexible scheduling</li>
          </ul>
        </motion.div>
      </div>

      {/* Pricing Cards with Grid */}
      <div className="pricing-container">
        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h1>Pro</h1>
          <div className="icon">👩🏻‍💻</div>
          <h2>1 Champion</h2>
          <p>4-12 Sessions per Round</p>
          <p className="price">from $75.00</p>
          <div className="dropdown-container">
            <label>Duration:</label>
            <select>
              <option>Select Duration</option>
              <option>3 months</option>
              <option>1 year</option>
            </select>
          </div>
          <div className="quantity-container">
            <label>Quantity:</label>
            <input type="number" defaultValue="0" min="1" />
          </div>
          <button className="button">Become a Pro Intern</button>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h1>Expert</h1>
          <div className="icon">🧑🏽‍💻🧑🏽‍💻</div>
          <h2>1 Champion</h2>
          <p className="subtitle">Choose 1 from 3.</p>
          <p>4-12 Sessions per Round</p>
          <p className="price">from $105.00</p>
          <div className="dropdown-container">
            <label>Duration:</label>
            <select>
              <option>Select Duration</option>
              <option>3 months</option>
              <option>1 year</option>
            </select>
          </div>
          <div className="quantity-container">
            <label>Quantity:</label>
            <input type="number" defaultValue="1" min="1" />
          </div>
          <button className="button">Become an Expert Intern</button>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h1>Master</h1>
          <div className="icon">💰📊</div>
          <h2>1 Champion</h2>
          <p className="subtitle">Work with your choice.</p>
          <p>6-18 Sessions per Round</p>
          <p className="price">from $195.00</p>
          <div className="dropdown-container">
            <label>Duration:</label>
            <select>
              <option>Select Duration</option>
              <option>3 months</option>
              <option>1 year</option>
            </select>
          </div>
          <div className="quantity-container">
            <label>Quantity:</label>
            <input type="number" defaultValue="1" min="1" />
          </div>
          <button className="button">Become a Master Intern</button>
        </motion.div>
      </div>

      <motion.div
        className='anchor-button'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <a href='#'>See All Exploratory Years Options</a>
      </motion.div>

      <motion.div
        className='dana-info'
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className='dana'>
          <img src={dana} alt="Dema" />
        </div>
        <div className='dana'>
          <p>My Career Pathways Champions helped me realize how to excel in job interviews and how to potentially get that job or internship in college and as a college student that's essential to expand your career interests and network. She helped me realize what I wanted to do in life, and she helped me prepare for this job interview and I actually got the job offer! She helped me with a lot and, without her, I wouldn't be where I am today and now I feel more prepared as a college student for more internship opportunities.</p><br></br>
          <h2>-Dema</h2>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Exploratory;
