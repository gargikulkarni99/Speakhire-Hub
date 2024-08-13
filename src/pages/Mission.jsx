import { useRef } from "react";
import { FaBars, FaTimes, FaGlobe, FaCaretDown } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../Components/Logo.png";
import "../Styles/Mission.css";
import { Link } from "react-router-dom";

function Mission() {
    const navRef = useRef();
  
    const showMission = () => {
      navRef.current.classList.toggle("responsive_nav");
    };
  
    const handleLogoClick = () => {
      window.location.reload(); // Reloads the current page
    };
  
    return (
      <>
        <header>
          <img src={Logo} alt="Logo" className="Logo" onClick={handleLogoClick} />
          <nav ref={navRef}>
            <div className="nav-item">
              <a href="/#about">About</a>
              <div className="dropdown-menu">
                <Link to="/ourmission">Our Mission</Link>
                <Link to="/impact">Impact</Link>
                <Link to="/theoryofchange">Theory of Change</Link>
                <a href="/#team">Team</a>
                <a href="/#news">News</a>
                <a href="/#speakhire-mag">SPEAKHIRE Mag</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="/#get-involved">Get Involved</a>
              <div className="dropdown-menu">
                <a href="/#partner-schools-and-orgs">Partner Schools and Orgs</a>
                <a href="/#intern">Intern</a>
                <a href="/#champions">Champions</a>
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
            <button className="nav-btn nav-close-btn" onClick={showIntern}>
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
          <button className="nav-btn" onClick={showIntern}>
            <FaBars />
          </button>
        </header>
        <section className="background-section">
          <div className="background-content">
            <h1>Welcome to Our Mission</h1>
            <p>Learn more about what drives us and how you can get involved.</p>
          </div>
        </section>
        </>
  );
}

export default Mission;