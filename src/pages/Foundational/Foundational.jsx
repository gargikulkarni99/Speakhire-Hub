import React from "react";
import "../Foundational/Foundational.css";
import Student from "../Foundational/kid.jpg";
import Girl from "../Foundational/girl.jpg";
import Lynda from "../Foundational/lynda.png";
import Network from "../Foundational/network.png";
import Program from "../Foundational/program.jpg";
import Academic from "../Foundational/academic.jpg";
import Application from "../Foundational/application.jpg";
import Chapter from "../Foundational/chapter.jpg";
import Class from "../Foundational/class.jpg";
import Internship from "../Foundational/internship.jpg";
import Resume from "../Foundational/resume.jpg";
import Harvard from "../Foundational/harvard.jpg";
import Preparedness from "../Foundational/preparedness.jpeg";
import Eco from "../Foundational/eco.png";
import Community from "../Foundational/community.jpeg";
import Action from "../Foundational/action.jpg";

const Foundational = () => {
	return (
		<>
        <section className="blue-section">
    <div className="blue-section-left">
        <h2>Foundational Year</h2>
    </div>
    </section>
    <section className="content-section">
				<div className="content-left-main">
					<p>
                    SPEAKHIRE’s award winning Foundational Year support, prepares, and empowers all kind looking for career counseling. As a SPEAKHIRE Intern, a participant of SPEAKHIRE’s Foundational Year, you will learn about your career interests and develop the skills you need to pursue those career interests through connections with professionals and peers who can open up doors to opportunities.
					</p>
				</div>
				<div className="found-right-main">
					<img src={Student} alt="Student" />
				</div>
			</section>
            <div className="foundational-container-mainform">
            <div className="button-container-mainform">
        <button className="custom-button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkvRwl13u1_FmG923fPfpEMAPKa9AMKywC2sctI9AArMvA3A/viewform" target="_blank" rel="noopener noreferrer">
            Partner Interest Form
          </a>
        </button>
        <button className="custom-button">
          <a href="https://speakhire.typeform.com/to/farsnjno?typeform-source=speakhire.org" target="_blank" rel="noopener noreferrer">
            Intern Application
          </a>
        </button>
      </div>

      <div className="content-container-mainform">
        <div className="section-main">
          <h2>Foundational Year At School</h2>
          <img src={Girl} alt="At School" className="section-image" />
          <p>
            In the Foundational Year <strong>at school</strong>, you will be matched with incredible professionals,
            called Career Pathways Champions, and will have the opportunity to grow and learn
            about yourself and a peer community.
          </p>
          <ul>
            <li>Be between the ages of 13 and 22</li>
            <li>Individuals in need of a Career Pathways Champion</li>
            <li>1 day/week (45 min advisory/lunch/elective period)</li>
            <li>November - June (ask about summer programming)</li>
            <li>Applications due by the end of Sept for 3 rounds starting fall, early January for 2 rounds</li>
            <li>Application fee: $20</li>
            <li>Commitment Fee: $75 (returned upon successful graduation) or submit essay</li>
            <li>You may be eligible for a scholarship</li>
          </ul>
        </div>

        <div className="section-main">
          <h2>Foundational Year At Home</h2>
          <img src={Lynda} alt="At Home" className="section-image" />
          <p>
            In the Foundational Year <strong>at home</strong>, you will be matched with incredible professionals,
            called Career Pathways Champions, and will have the opportunity to grow and learn
            about yourself outside of the classroom.
          </p>
          <ul>
            <li>High school and college students</li>
            <li>Individuals in need of a Career Pathways Champion</li>
            <li>1 day/week (45 min sessions)</li>
            <li>November - June</li>
            <li>Applications due by the end of Sept for 3 rounds starting fall, early January for 2 rounds</li>
            <li>Application fee: $20</li>
            <li>Fees: $1000 - 2 Internship Rounds, $1500 - 3 Internship Rounds</li>
            <li>You may be eligible for a scholarship</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="centered-section">
        <h2 className="centered-header">SPEAKHIRE Intern’s Network Circle</h2>
        <img src={Network} alt="Centered" className="centered-image" />
      </section>
      <div className="image-section">
      <div className="image-column">
        <img
          src={Program}
          alt="Program Goals"
          className="image"
        />
        <div className="text-column">
          <h3>Program Goals</h3>
          <ul>
            <li>Make schools more inclusive</li>
            <li>Increase school engagement & class participation rates</li>
            <li>Strengthen school to career connections</li>
            <li>Social and workplace skills gains for students</li>
          </ul>
        </div>
      </div>
      <div className="image-column">
        <img
          src={Academic}
          alt="Academic Gains"
          className="image"
        />
        <div className="text-column">
          <h3>Academic Gains</h3>
          <ul>
            <li>Positive identity development and goal setting</li>
            <li>Increased school engagement and belonging</li>
            <li>Increased self-efficacy</li>
            <li>Access to social capital and opportunities</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="foundational-container">
            <h2 className="foundational-header">Foundational Year Journey</h2>
            <div className="foundational-steps">
                <div className="foundational-step">
                    <img src={Application} alt="Application" className="icon" />
                    <h3>Application</h3>
                    <p>Complete an application with your background, location, college and career choices, skills, etc.</p>
                </div>
                <div className="foundational-step">
                    <img src={Class} alt="Class" className="icon" />
                    <h3>Class</h3>
                    <p>Use the CLASS (Career Learning and School Selection) process to track growth and development.</p>
                </div>
                <div className="foundational-step">
                    <img src={Internship} alt="Internship Rounds" className="icon" />
                    <h3>Internship Rounds</h3>
                    <p>Participate in Internship Rounds (9 virtual sessions with a Career Pathways Champion).</p>
                </div>
                <div className="foundational-step">
                    <img src={Resume} alt="Resume" className="icon" />
                    <h3>Resume</h3>
                    <p>Complete your own resume with skills and experiences gained from the internship year.</p>
                </div>
                <div className="foundational-step">
                    <img src={Chapter} alt="Chapter Club" className="icon" />
                    <h3>Chapter Club</h3>
                    <p>Participate in the SPEAKHIRE Chapter Club (offered at select school-based programs).</p>
                </div>
            </div>
        </div>
        <div className="container-found">
      <h1 className="title">Internship Round Sessions</h1>

      <div className="sessions-grid-found">
        <div className="session-found">
          <div className="image-container-found">
            <img
              src={Harvard}
              alt="College Readiness"
            />
          </div>
          <h2 className="session-title">College Readiness</h2>
          <p className="session-description">
            Learn about different colleges that will fit your school to career
            pathway.
          </p>
        </div>

        <div className="session-found">
          <div className="image-container-found">
            <img
              src={Preparedness}
              alt="Career Preparedness"
            />
          </div>
          <h2 className="session-title">Career Preparedness</h2>
          <p className="session-description">
            Prepare for your career with skills you learn from Champions and
            exposure to different careers.
          </p>
        </div>

        <div className="session-found">
          <div className="image-container-found">
            <img
              src={Eco}
              alt="Career Ecosystem"
            />
          </div>
          <h2 className="session-title">Career Ecosystem</h2>
          <p className="session-description">
            Grow your social capital, network of individuals who can support your
            school to career pathway.
          </p>
        </div>

        <div className="session-found">
          <div className="image-container-found">
            <img
              src={Community}
              alt="Community Development"
            />
          </div>
          <h2 className="session-title">Community Development</h2>
          <p className="session-description">
            Build your community of support for greater opportunities to develop
            as a leader.
          </p>
        </div>
      </div>
    </div>
    <div className="container-grad">
      <h1 className="title-grad">Graduation Requirements</h1>
      <div className="requirements-grad">
        <div className="requirement-grad">
          <h3 className="requirement-number">1.</h3>
          <p className="requirement-text">Successfully complete 2 Internship Rounds.</p>
        </div>
        <div className="requirement-grad">
          <h3 className="requirement-number">2.</h3>
          <p className="requirement-text">Attend a minimum of 6/9 sessions per round.</p>
        </div>
        <div className="requirement-grad">
          <h3 className="requirement-number">3.</h3>
          <p className="requirement-text">Complete every Internship Round survey & program survey.</p>
        </div>
        <div className="requirement-grad">
          <h3 className="requirement-number">4.</h3>
          <p className="requirement-text">Attend 60% of all Chapter Club sessions (at select schools).</p>
        </div>
      </div>
    </div>
    <div className="container-action">
      <div className="image-container-action">
        <img
          src={Action}
          alt="student"
          className="image"
        />
        <div className="text-container-action">
          <h2 className="title-action">Take Action & Apply Now</h2>
          <p className="description-action">
            Foundational Year Application Will Need:
          </p>
          <ul className="list-action">
            <li className="item-action">Head shot</li>
            <li className="item-action">Latest report card</li>
            <li className="item-action">
              Parent/Guardian Consent and Liability Release form
            </li>
            <li className="item-action">Commitment Fee or Form</li>
          </ul>
        </div>
      </div>
      <div className="button-container-action">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkvRwl13u1_FmG923fPfpEMAPKa9AMKywC2sctI9AArMvA3A/viewform" target="_blank" rel="noopener noreferrer">
    <button className="button-action">Partner School Interest Form</button>
  </a>
  <a href="https://speakhire.typeform.com/to/farsnjno?typeform-source=speakhire.org" target="_blank" rel="noopener noreferrer">
    <button className="button-action">Intern Application</button>
  </a>
</div>
    </div>
    </>
    );
}

export default Foundational;
