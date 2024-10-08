import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <motion.h1 
          className="contact-title"
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
        >
          Contact Me
        </motion.h1>
        <motion.p 
          className="contact-subtitle"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
        >
          You SPEAK. We Listen. Leave a message!
        </motion.p>
      </div>

      <motion.form 
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="form-group name-group"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
        >
          <label htmlFor="firstName">Name (required)</label>
          <div className="name-fields">
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleChange}
              required 
            />
          </div>
        </motion.div>
        <motion.div 
          className="form-group"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }} 
        >
          <label htmlFor="email">Email (required)</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </motion.div>
        <motion.div 
          className="form-group"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }} 
        >
          <label htmlFor="subject">Subject (required)</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required 
          />
        </motion.div>
        <motion.div 
          className="form-group"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }} 
        >
          <label htmlFor="message">Message (required)</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required 
          ></textarea>
        </motion.div>
        <motion.button 
          type="submit"
          className="submit-button"
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, delay: 1 }}
        >
          Send
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactMe;
