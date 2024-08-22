import React from "react";
import "../Leadership/Leadership.css";
import Leader from "../Leadership/leader.jpg";
import Art from "../Leadership/art.jpg";
import Build from "../Leadership/build.jpg";
import Stem from "../Leadership/stem.jpg";
import Activate from "../Leadership/activate.jpg";
import Empower from "../Leadership/empower.jpg";
import Lamon from "../Leadership/lamon.jpg";
import Hye from "../Leadership/Hye-Yung.jpg";
import Francesca from "../Leadership/Francesca.jpg";

const Leadership = () => {
	return (
		<>
        <section className="blue-section">
    <div className="blue-section-left">
        <h2>Leadership Courses</h2>
    </div>
    <div className="blue-section-right">
        <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdkvRwl13u1_FmG923fPfpEMAPKa9AMKywC2sctI9AArMvA3A/viewform" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="apply-btn google-link-btn"
        >
            PARTNER INTEREST FORM
        </a>
    </div>
</section>
<section className="content-section">
				<div className="content-left">
					<p>Named after the values we hold around DBEIA, our Leadership Courses introduce students to early and critical leadership skills. Through each course, students learn the leadership skills listed below through different applications to ensure they understand how these skills are exhibited within various industries. </p>
					<p>We have five courses, spanning from our Discovering Leadership, for our students just beginning to discover the world of career pathways and leadership, and ending with our Empowering Leadership course, for our students who have already been exploring career pathways and are looking to further step into their leadership.<span className="bold-text">The Discovering Leadership course is a pre-requisite to some courses*.</span> </p>
					<ul>
						<li>Students seeking career exposure</li>
						<li>Requires a minimum of 10 sessions</li>
						<li>Sessions are between 45 minutes to 3 hours</li>
						<li>Between 20 - 30 students depending on course </li>
					</ul>
				</div>
				<div className="leader-right">
					<img src={Leader} alt="Leadership" />
				</div>
			</section>
            <section className="bullet-section">
            <h2 className="section-header-lead">Leadership Course Curriculum</h2>
            <div className="bullet-container">
                <div className="bullet-left">
                    <ul>
                        <li>ACCOUNTABILITY - BALANCING COMMITMENTS</li>
                        <li>CONFLICT MANAGEMENT - INTERNAL AND INTERPERSONAL</li>
                        <li>DIVERSITY AND INCLUSION</li>
                        <li>NON-POSITIONAL LEADERSHIP - LEADING FROM WITHIN</li>
                        <li>DEFINING YOUR VISION</li>
                    </ul>
                </div>
                <div className="bullet-right">
                    <ul>
                        <li>THE IMPORTANCE OF LISTENING</li>
                        <li>ENGAGING IN PRODUCTIVE SELF-REFLECTION AND WELLNESS</li>
                        <li>GOAL-SETTING</li>
                        <li>SOCIAL MEDIA AND YOUR PERSONAL PROFILE</li>
                        <li>LEADERSHIP ESSENTIALS: INTEGRITY, EMPATHY, AUTHENTICITY EMOTIONAL INTELLIGENCE AND HUMILITY</li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="leadership-courses">
      <h2>Our Leadership Courses</h2>
      <div className="courses-container">
        <div className="course-card">
          <img src={Art} alt="Arts Career Cohort" className="course-image"/>
          <div className="course-header arts">
            <h3>Arts Career Cohort</h3>
          </div>
          <div className="course-content">
            <h4>DISCOVERING LEADERSHIP</h4>
            <p>
              Through the Discovering Leadership course, participants discover how 10 leadership skills are exhibited within different career sectors. Led by a Career Pathways Facilitator and peer-leaders within each Career Cohort, participants DANCE (Discover, Analyze, Note, Collaborate, and Educate) to learn about careers of interest.
            </p>
            <p>
              Participants are placed into 1 of 5 Career Cohorts, depending on the interests of the overall group. Then each Career Cohort learns each skill through the perspective of that career and shares their learnings with other cohorts.
            </p>
            <h5>Participants gain:</h5>
            <ul>
              <li>Early career exposure</li>
              <li>New vocabulary and college knowledge</li>
              <li>Peer Leadership</li>
              <li>Public Speaking</li>
              <li>Increased self-awareness, confidence, and student engagement</li>
            </ul>
          </div>
        </div>
        <div className="course-card">
          <img src={Stem} alt="STEM Career Cohort" className="course-image"/>
          <div className="course-header stem">
            <h3>STEM Career Cohort</h3>
          </div>
          <div className="course-content">
            <h4>INSPIRING LEADERSHIP</h4>
            <p>
              Through the Inspiring Leadership course, participants discover the 10 leadership skills, just as in our Discovering Leadership course using the DANCE process, and Career Cohorts are inspired to create social ventures that deliver a solution for a community problem.
            </p>
            <p>
              Participants apply our MUSIC process, match skills to a business environment, understand how it's applied in a startup, seek data and evidence to inspire a social solution to a problem and create their venture. This entrepreneurship-based course is led by one of our Career Pathways Facilitators.
            </p>
            <h5>Participants gain:</h5>
            <ul>
              <li>Early career exposure</li>
              <li>New vocabulary and career knowledge</li>
              <li>Entrepreneurial Mindset & Public Speaking</li>
              <li>Increased self-awareness, confidence, and student engagement</li>
            </ul>
          </div>
        </div>

        <div className="course-card">
          <img src={Build} alt="Building Leadership" className="course-image"/>
          <div className="course-header leadership">
            <h3>Building Leadership</h3>
          </div>
          <div className="course-content">
            <h4>BUILDING LEADERSHIP*</h4>
            <p>
              Through the Building Leadership course, participants will use the 10 leadership skills to learn financial literacy and how to manage a personal budget. Led by a Career Pathways Facilitator, this course will help them build their financial plans for their futures.
            </p>
            <p>
              Participants will SING, save, invest, net, and gain, to learn financial literacy & build personal budgeting and economic skills.
            </p>
            <p>
              Participants must have successfully completed the Discovering Leadership course, a pre-requisite to the Building Leadership course.
            </p>
            <h5>Participants gain:</h5>
            <ul>
              <li>Personal Finance and budgeting skills</li>
              <li>New vocabulary</li>
              <li>Setting Personal Financial Goals</li>
              <li>Financial literacy</li>
              <li>Increased self-awareness, confidence, and student engagement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="leader">
      <div className="course-card">
        <img
          src={Activate}
          alt="Activating Leadership"
          className="course-image"
        />
        <div className="course-content">
          <h3 className="course-title">ACTIVATING LEADERSHIP*</h3>
          <p>
            Through the Activating Leadership course, participants learn 10
            leadership skills by <strong>activating their civic leadership within their own communities.</strong> They use the <strong>WRITE process</strong> (wonder, reflect, influence, track, and empower) to learn how civic leaders empower communities.
          </p>
          <p>
            Participants are placed into 1 of 5 Career Cohorts, depending on the
            interests of the overall group. Then each Career Cohort learns each
            skill through the perspective of that civic interest and shares
            their learnings with other cohorts.
          </p>
          <h4>Participants gain:</h4>
          <ul>
            <li>Exposure to community needs</li>
            <li>New vocabulary</li>
            <li>Peer Leadership</li>
            <li>Civic Leadership</li>
            <li>
              Increased self-awareness, confidence, and student engagement
            </li>
          </ul>
        </div>
      </div>
      <div className="course-card">
        <img
          src={Empower}
          alt="Empowering Leadership"
          className="course-image"
        />
        <div className="course-content">
          <h3 className="course-title">EMPOWERING LEADERSHIP*</h3>
          <p>
            Through the Empowering Leadership course, participants reflect on
            their experiences to empower their leadership. A Career Pathways
            Facilitator guides them through our <strong>ART process</strong>, analyzing a case study, reflecting on experiences, and completing a task in this discussion-based course.
          </p>
          <p>
            Participants learn 10 leadership skills through the lens of diverse
            professionals from our SpeakHire Series, and then reflect on how
            they have used each skill, proving they are already leaders.
          </p>
          <h4>Participants gain:</h4>
          <ul>
            <li>Early college and career exposure</li>
            <li>New vocabulary and college knowledge</li>
            <li>Empathetic Leadership understanding</li>
            <li>Improved conversational English skills</li>
            <li>
              Increased self-awareness, confidence, and student engagement
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="people">
      <h1>Career Pathways Facilitators</h1>
      <p>
        Our facilitators are educators and social workers ready to empower your
        students.
      </p>
      <div className="facilitators">
        <div className="facilitator">
          <img
            src={Lamon}
            alt="Lamon Chapman"
          />
          <p>Lamon Chapman</p>
        </div>
        <div className="facilitator">
          <img
            src={Hye}
            alt="Hye-Yung Hickman"
          />
          <p>Hye-Yung Hickman</p>
        </div>
        <div className="facilitator">
          <img
            src={Francesca}
            alt="Francesca Gonzalez"
          />
          <p>Francesca Gonzalez</p>
        </div>
      </div>
    </div>
    <section className="blue-background-section">
  <div className="column">
    <p>
      "I just finished watching your Speaker Series event and was very delighted to attend. I work for the Department of Education as the Family Leadership Coordinator. I'm excited to share this Speaker Series talk to our community since I truly believe that they would benefit from hearing this powerful story."  
    </p>
    <h3>-NYC Educator</h3>
  </div>
  <div className="column">
    <p>
      “This course was awesome! I related to so many of the diverse professionals and even ended up watching many of their full Speaker Series talks. I learned a lot of leadership skills and now feel confident about conflict management, organization, goal-setting, and setting my vision as a leader. I am considering what careers I want to pursue in the future a lot more than I was before this course because of how meaningful it was.” 
    </p>
    <h3>-Chloe, 13, L&E course participant</h3>
    <a href="/series" className="learn-more">
  Learn more about our Speaker Series
</a>

  </div>
  <div className="column">
    <p>
      The L&E Course is one of the most beneficial programs I've seen for our students across all our schools because it teaches 21st Century skills and concepts while improving the self-efficacy of students through the diverse professionals of the Speaker Series you connect them with, helping them see themselves in future careers."  
    </p>
    <h3>-Texas Educator</h3>
  </div>

  
</section>

</>

);
}

export default Leadership;