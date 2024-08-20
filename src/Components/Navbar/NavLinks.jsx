import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import './NavBar.css';
import Team from '../../pages/Team/Team';
const NavLinks = ({ isClicked, closeMenu }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
        if (!isClicked) {
            setActiveDropdown(menu);
        }
    };

    const handleMouseLeave = () => {
        if (!isClicked) {
            setActiveDropdown(null);
        }
    };

    const handleMenuClick = (menu) => {
        if (isClicked) {
            if (activeDropdown === menu) {
                setActiveDropdown(null);
            } else {
                setActiveDropdown(menu);
            }
        }
    };

    const handleLinkClick = () => {
        closeMenu();
    };

    return (
        <nav className={`NavLinks ${isClicked ? 'mobile' : ''}`}>
            <ul>
                <li
                    onMouseEnter={() => handleMouseEnter('about')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleMenuClick('about')}
                >
                    <Link to="/" onClick={handleLinkClick}>About</Link>
                    {(activeDropdown === 'about' || isClicked) && (
                        <ul className="dropdown">
                            <li><Link to="/mission" onClick={handleLinkClick}>Mission</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>Impact</Link></li>
                            <li><Link to="/theory" onClick={handleLinkClick}>Theory of Change</Link></li>
                            <li><Link to="/team" onClick={handleLinkClick}>Team</Link></li> {/* Updated Link */}
                            <li><Link to="/news" onClick={handleLinkClick}>News</Link></li>
                            <li><Link to="/mag" onClick={handleLinkClick}>SPEAKHIRE Mag.</Link></li>
                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={() => handleMouseEnter('getInvolved')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleMenuClick('getInvolved')}
                >
                    <Link to="/" onClick={handleLinkClick}>Get Involved</Link>
                    {(activeDropdown === 'getInvolved' || isClicked) && (
                        <ul className="dropdown">
                            <li><Link to="/" onClick={handleLinkClick}>Partner Schools and Orgs</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>Champions</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>Interns</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>Careers</Link></li>
                            <li><Link to="/volunteer" onClick={handleLinkClick}>Volunteer</Link></li>
                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={() => handleMouseEnter('activities')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleMenuClick('activities')}
                >
                    <Link to="/" onClick={handleLinkClick}>Activities</Link>
                    {(activeDropdown === 'activities' || isClicked) && (
                        <ul className="dropdown">
                            <li><Link to="/" onClick={handleLinkClick}>All Activities</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>Speakhire Series</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>First Step</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>Leadership Courses</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>Foundational Year</Link></li>
                            <li><Link to="/seminar" onClick={handleLinkClick}>SPEAKHIRE Seminars</Link></li>
                            <li><Link to="/exploratory" onClick={handleLinkClick}>Exploratory Years</Link></li>
                            <li><Link to="/pathway" onClick={handleLinkClick}>Pathways Days</Link></li>

                            <li><Link to="/summit" onClick={handleLinkClick}>SPEAKHIRE Summit & Soiree</Link></li>
                            <li><Link to="/symposiums" onClick={handleLinkClick}>Symposiums</Link></li>
                            <li><Link to="/speakingmyname" onClick={handleLinkClick}>SpeakingMyName</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                </li>
                <li className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </li>
                <li>
                    <button className="donate-button">Donate</button>
                </li>
            </ul>
        </nav>
    );
}

export default NavLinks;
