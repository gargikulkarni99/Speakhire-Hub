import React from 'react'
import "./Home.css"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Counter from './Counter'
import Meeting from "/src/assets/Meeting.jpg"
import CardsList from './Card'
import "./Home.css"

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div>
      <div className='Container'>
        <motion.div 
          className='content'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Developing generations of diverse leaders.</h1>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            PARTNER SCHOOLS & ORGS
          </motion.button>
          <br></br>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            INTERNS (CAREER TRAINEES)
          </motion.button>
          <br></br>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            CHAMPIONS (CAREER COACHES)
          </motion.button>
          <br></br>
        </motion.div>
       
       
       
       
       
       
       
       
       
       
      </div>
      <motion.div 
      className='subContent'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <h2>SPEAKHIRE develops the social and cultural capital of youth from immigrant families to become leaders in the workforce. </h2>
      <h3>Together, we Support Prepare Empower All Kind.</h3>
    </motion.div>
    <div className="grid-container">
      <div className="info-column">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Counter end={70} />
          <p>COUNTRIES REPRESENTED</p>
        </motion.div>
      </div>
      <div className="info-column">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Counter end={1890} />
          <p>STUDENTS DIRECTLY IMPACTED THROUGH CAREER SKILLS TRAINING PROGRAMS</p>
        </motion.div>
      </div>
      <div className="info-column">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Counter end={2556} />
          <p>INTERNSHIP SESSIONS</p>
        </motion.div>
      </div>
      <div className="info-column">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Counter end={92} />
          <p>% OF STUDENTS FELT MORE PREPARED FOR COLLEGE, ENGAGED AT SCHOOL & LEARNED NEW SKILLS</p>
        </motion.div>
      </div>
    </div>
    <div className="Meeting-container">
    <motion.div
      className="meeting"
      initial={{ x: 100, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }} 
    >
      <img src={Meeting} alt="Empowerment" />
    </motion.div>
    <motion.div
      className="meeting-content"
      initial={{ x: -100, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }} 
    >
      <h2>Where today’s workforce develop tomorrow’s workforce leaders</h2>
      <p>We support career awareness, exploration preparation and training of those looking to pursue a career.</p>
    </motion.div>
    
  </div>

  <CardsList/>
 

    </div>
  )
}

export default Home
