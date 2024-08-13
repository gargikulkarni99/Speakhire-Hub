import React from "react";
import "../Styles/Intern.css";
import LeadershipCoursesImg from "../Components/EL Leadership Courses.png"; 
import NetworkImg from "../Components/FY Intern Explainer.png"; 
import Students from "../Components/students.jpg";
import Amizo from "../Components/Amizo.jpg";
import Melvin from "../Components/Melvin.jpg";


const Intern = () => {
  return (
    <>
      <section className="blue-section">
        <div className="blue-section-left">
          <h2>Interns</h2>
        </div>
        <div className="blue-section-right">
          <button className="apply-btn">APPLY FOR FOUNDATIONAL YEAR</button>
        </div>
      </section>
      <section className="intern-content">
        <p className="intern-intro">
          As an intern, you will learn different leadership skills and get to know diverse speakers and Career Pathways Champions (CPCs) in various career fields. You will also gain a network of support to help you pursue your future career.
        </p>
        <hr />
        <div className="content-section">
          <img src={LeadershipCoursesImg} alt="Leadership Courses" className="content-img"/>
          <div className="content-text">
            <h3>Leadership Courses</h3>
            <p>These Courses introduce participants to leadership skills. Over 10 sessions, participants learn a leadership skill while exploring career sectors.</p>
          </div>
        </div>
        <hr />
        <div className="content-section">
          <div className="content-text">
            <h3>Foundational Year</h3>
            <p>As an intern of the FY program, you will learn meet different Career Pathways Champions (CPCs). You will gain a network of support to help you pursue your future career.</p>
            <div className="network-container">
              <img src={NetworkImg} alt="Network" className="network-img"/>
            <div className="network-info">
              <ul>
                <li>Individuals, age 13-23</li>
                <li>Immigrants, first-generation Americans, or in need of a coach</li>
                <li>1 day/week (45 min advisory/lunch/elective period)</li>
                <li>November - June</li>
                <li><a href="link/to/application">Submit an application</a></li>
                <li>Scholarships available</li>
              </ul>
            </div>
            <div className="learn-more-section">
              <button className="learn-more-btn">Learn more</button>
            </div>
          </div>
          </div>
          </div>
        </section>
        <section className="dark-blue-section">
          <div className="dark-blue-section-left">
            <h2>Exploratory Years Program</h2>
            <h3>Invite-only program for Foundational Year graduates.</h3>
            <ul>
              <li>3-month internship rounds</li>
              <li>30-60-minute sessions with a career professional of your choice</li>
              <li>4-18 sessions per round</li>
              <li>Flexible scheduling</li>
            </ul>
          </div>
          <div className="dark-blue-section-right">
            <button className="learn-more-btn">Learn More</button>
            <img src={Students} alt="Learn More" className="learn-more-img" />
          </div>
        </section>
        {/* New Section with Two Columns */}
      <section className="two-column-section">
        <div className="column">
          <img src={Amizo} alt="Column Image 1" className="column-img"/>
          <div className="column-text">
            <p>“In the near future, I want to do marketing communication. Being a part of the SPEAKHIRE Foundational Year, I can achieve with my three different career professionals' who can provide me with the targeted career guidance for my future. I'm passionate about learning about the career field of communication and expand my network."</p>
            <h3>-Amizo</h3>
          </div>
        </div>
        <div className="column">
          <img src={Melvin} alt="Column Image 2" className="column-img"/>
          <div className="column-text">
            <p>“I will do everything necessary to get a good career and getting the guidance from career professionals will help me understand what I need to do to achieve my goals. For me to be successful, it is important that I have the right opportunities to be good at college and career.”</p>
            <h3>-Melvin</h3>
          </div>
        </div>
      </section>
      {/* New Centered Learn More Button Section */}
      <section className="centered-learn-more-section">
        <button className="learn-more-btn">Learn More</button>
      </section>
    </>
  );
}

export default Intern;
