import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import "./Footer.css"
import Seal from "/src/assets/seal.png"
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <motion.div className="sub-container">
          <img src={Seal} alt="Logo" className="logo" />
        </motion.div>
        <motion.div className="sub-container">
          <h2>SPEAKHIRE</h2>
          <h6>SPEAKHIRE is a 501c3 organization. EIN 47-4132773</h6>
        </motion.div>
        <motion.div className="sub-container">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </motion.div>
        <motion.div className="sub-container">
          <ul>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Volunteer</a></li>
          </ul>
        </motion.div>
      </div>
      <motion.div className="social-icons">
        <ul>
          <li><a href="#"><FaFacebook size={24} /></a></li>
          <li><a href="#"><FaTwitter size={24} /></a></li>
          <li><a href="#"><FaInstagram size={24} /></a></li>
          <li><a href="#"><FaLinkedin size={24} /></a></li>
          <li><a href="#"><FaYoutube size={24} /></a></li>
        </ul>
      </motion.div>
      <hr />
      <motion.div className="subscribe">
        <h1>Subscribe</h1>
        <h4>Stay updated with everything SPEAKHIRE.</h4>
        <input type="email" placeholder="Email Address" />
        <button>Sign Up</button>
        <p>We respect your privacy.</p>
      </motion.div>
    </div>
  );
};

export default Footer;
