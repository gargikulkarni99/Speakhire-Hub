import React from 'react';
import "../Theory/Theory.css";
import Youth from "../Theory/Youth.jpg";

const Theory = () => {
  return (
    <>
    <div className="section-container">
        <div className="left-side">
          <h1 className="header">Theory of Change</h1>
        </div>
      </div>
      <div className="content-section">
        <div className="content-left-main">
          <h2 className="content-header-main">Increase the Quantity and Quality of Relationships</h2>
          <p className="content-paragraph-main">
          Career guidance and support through innovative social capital and network development expands the circle of opportunities for individuals and forms the critical connections they need to make realizing those opportunities tangible.
          </p>
          <button className="learn-more-button">View Our One-Pager</button>
        </div>
        <div className="content-right">
          <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/watch?v=rH6EZrsBJG4" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
      <div className="diagonal-section">
  <div className="diagonal-header">
    <h1 className="main-header">Opportunity for Change</h1>
  </div>
  <div className="diagonal-content">
    <div className="diagonal-item">
      <h2 className="desc-header">{'>70%'}</h2>
      <p className="desc-paragraph">
        More than 70% of jobs are identified primarily through network connections.
      </p>
    </div>
    <div className="diagonal-item">
      <h2 className="desc-header">45%</h2>
      <p className="desc-paragraph">
        45% of those network connections are family connections. 
        Immigrant families don't have as strong connections to access internships.
      </p>
    </div>
    <div className="diagonal-item">
      <h2 className="desc-header">{'>50%'}</h2>
      <p className="desc-paragraph">
        More than 50% of all first jobs are received through internships people hold. 
        However, our population of individuals does not hold these internships.
      </p>
    </div>
    <div className="diagonal-item">
      <h2 className="desc-header">85%</h2>
      <p className="desc-paragraph">
        85% of internships are identified through network connections.
      </p>
    </div>
    <div className="diagonal-item">
      <h2 className="desc-header">1:600</h2>
      <p className="desc-paragraph">
        The average school counselor to student ratio is 1:600, especially in high-need schools. 
        The recommended ratio is 1:250.
      </p>
    </div>
    <div className="diagonal-item">
      <h2 className="desc-header">1:250</h2>
      <p className="desc-paragraph">
        A counselor to student ratio of 1:250 results in an 18-point increase on each SAT section. 
        Lower ratios lead to first-gen college-going students applying to and being accepted into more target colleges than continuing-gen peers in higher ratio schools.
      </p>
    </div>
  </div>
</div>
<div className="activities-container">
      <h2>Through our activities, individuals:</h2>
      <ul className="activities-list">
        <li>develop a network of culturally responsive peers and champions</li>
        <li>gain internship experience and learn career and leadership skills</li>
        <li>get a head start on the college and career process</li>
        <li>develop social-emotional skills and improve academic performance</li>
        <li>possess more self-agency</li>
        <li>help uplift communities</li>
      </ul>
      <button className="view-activities-button">View Our Activities</button>
      <div className="image-container">
        <img src={Youth} alt="Group of students" />
      </div>
    </div>


      <div className="name-section">
        <h2 className="name-header">Why the new name?</h2>
        <p className="name-subheader">SPEAK Mentorship to SPEAKHIRE</p>
        <p className="name-paragraph">
        Individuals from immigrant families struggle with getting the skills needed to prepare for their careers. As a result, many settle for jobs they are overqualified for, earning about $30,000 or less than where they could be starting.

More than 80% of internships and first jobs are landed through networks, yet only 3% of students report that counselors have any real impact on their career pathway choice. SPEAK has always been about mobilizing the next generation of workforce leaders and we’ve moved beyond mentorship to do that. We thought our name should better reflect our goal.

SUPPORT PREPARE EMPOWER ALL KIND...towards economic opportunity through the connections we make, the relationships we build, and the conversations we help initiate, so our future leaders can get greater opportunities like applying to the right colleges, getting into internships, and the highest paid first job that leads to career satisfaction.  We want our future leaders to get HIRED by having us SPEAK higher for them and propel them towards successful career pathways.
        </p>
        <button className="name-button">View Our Mission</button>
        <p className="name-cta">Join us in <span>Developing Tomorrow's Leaders and SPEAKHIRE!</span></p>
      </div>

    </>
  )
}

export default Theory;
