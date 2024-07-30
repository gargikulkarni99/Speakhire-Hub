import { useRef } from "react";
import React from "react";
import { FaBars, FaTimes, FaGlobe, FaCaretDown } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../Styles/main.css";
import Logo from "../Components/Logo.png";
import Counter from "../Components/Counter";
import Meeting from "../Components/Meeting.jpg";
import Afrida from "../Components/Afrida.jpg";
import Dayra from "../Components/Dayra.jpg";
import Ecstacy from "../Components/Ecstacy.png";
import { Link } from "react-router-dom";
import Background from "../Styles/bg.png";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLogoClick = () => {
    window.location.reload(); 
  };

  return (
    <>
      <header>
        <img src={Logo} alt="Logo" className="Logo" onClick={handleLogoClick} />
        <nav ref={navRef}>
          <div className="nav-item">
            <a href="/#about">About</a>
            <div className="dropdown-menu">
              <a href="/#our-mission">Our Mission</a>
              <a href="/#impact">Impact</a>
              <a href="/#theory-of-change">Theory of Change</a>
              <a href="/#team">Team</a>
              <a href="/#news">News</a>
              <a href="/#speakhire-mag">SPEAKHIRE Mag</a>
            </div>
          </div>
          <div className="nav-item">
            <a href="/#get-involved">Get Involved</a>
            <div className="dropdown-menu">
              <a href="/#partner-schools-and-orgs">Partner Schools and Orgs</a>
              <Link to="/intern">Intern</Link>
              <Link to="/champions">Champions</Link>
              <a href="/#careers">Careers</a>
              <a href="/#volunteer">Volunteer</a>
            </div>
          </div>
          <div className="nav-item">
            <a href="/#activities">Activities</a>
            <div className="dropdown-menu">
              <a href="/#all-activities">All Activities</a>
              <a href="/#speakhire-series">Speakhire Series</a>
              <a href="/#first-step">First Step</a>
              <a href="/#leadership-courses">Leadership Courses</a>
              <a href="/#foundational-year">Foundational Year</a>
              <a href="/#speakhire-seminars">SPEAKHIRE Seminars</a>
              <a href="/#exploratory-years">Exploratory Years</a>
              <a href="/#pathways-days">Pathways Days</a>
              <a href="/#speakhire-summit-&-soiree">SPEAKHIRE Summit & Soiree</a>
              <a href="/#symposiums">Symposiums</a>
              <a href="/#speakingmyname">SpeakingMyName</a>
            </div>
          </div>
          <a href="/#">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="header-right">
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div className="language-selector">
            <FaGlobe />
            <span>English</span>
            <FaCaretDown />
          </div>
          <button className="donate-btn">DONATE</button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="background-image">
        <div className="header-text">
          <h1>Developing generations of diverse leaders.</h1>
          <div className="action-buttons">
            <button className="action-btn">PARTNER SCHOOLS & ORGS</button>
            <button className="action-btn">INTERNS (CAREER TRAINEES)</button>
            <button className="action-btn">CHAMPIONS (CAREER COACHES)</button>
          </div>
        </div>
      </div>
      <section className="blue-column">
        <h2>
          SPEAKHIRE develops the social and cultural capital of youth from immigrant families to become leaders in the workforce.
        </h2>
        <p>Together, we Support Prepare Empower All Kind.</p>
      </section>
      <section className="info-columns">
        <div className="info-column">
          <Counter end={70} />
          <p>COUNTRIES REPRESENTED</p>
        </div>
        <div className="info-column">
          <Counter end={1890} />
          <p>STUDENTS DIRECTLY IMPACTED THROUGH CAREER SKILLS TRAINING PROGRAMS</p>
        </div>
        <div className="info-column">
          <Counter end={2556} />
          <p>INTERNSHIP SESSIONS</p>
        </div>
        <div className="info-column">
          <Counter end={92} />
          <p>% OF STUDENTS FELT MORE PREPARED FOR COLLEGE, ENGAGED AT SCHOOL & LEARNED NEW SKILLS</p>
        </div>
      </section>
      <section className="meeting-column">
        <div className="meeting-content">
          <h2>Where today’s workforce develop tomorrow’s workforce leaders </h2>
          <p>We support career awareness, exploration preparation and training of those looking to pursue a career.</p>
        </div>
        <div className="meeting">
          <img src={Meeting} alt="Empowerment" />
        </div>
      </section>
      <section className="new-section">
        <h2 className="section-header">Student Success Stories</h2>
        <div className="columns">
          <div className="column">
            <img src={Afrida} alt="Impact 1" className="column-image" />
            <h3 className="column-title">Afrida ‘20</h3>
            <p className="column-text">
              "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE Intern, I gained valuable skills and information my first year and know this year I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me."
            </p>
          </div>
          <div className="column">
            <img src={Dayra} alt="Impact 2" className="column-image" />
            <h3 className="column-title">Dayra ‘24</h3>
            <p className="column-text">
              "I’m very grateful to be part of SPEAKHIRE, as it has significantly changed my approach to learning and personal development, strengthening my communication skills and leadership in decision-making, allowing me to have a clearer view of my professional future and possibilities."
            </p>
          </div>
          <div className="column">
            <img src={Ecstacy} alt="Impact 3" className="column-image" />
            <h3 className="column-title">Ecstacy ‘18</h3>
            <p className="column-text">
              "Through the SPEAKHIRE community, I have received the opportunity to meet young women like myself who aspire to have careers they feel are worth chasing and we have met career professionals who have coached us on how we can reach our goals."
            </p>
          </div>
        </div>
        <div className="donate-button-container">
          <button className="donate-btn">DONATE</button>
        </div>
      </section>
    </>
  );
}

export default Navbar;

