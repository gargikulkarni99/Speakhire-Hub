import React from 'react';
import { motion } from 'framer-motion';
import foundationalYear from '../../assets/partnerSchools/student1.jpg';
import Seminar from '../../assets/partnerSchools/Nisha+Mentor+and+Anastasiia+Mentee+%286%29.jpg';
import Sympsons from '../../assets/partnerSchools/Symposium+Square.png';
import pathways from '../../assets/partnerSchools/20210729_204729.jpg';
import school from '../../assets/partnerSchools/school.png';
import Ahmad from '../../assets/partnerSchools/Ahmad.jpg';
import Nafissa from '../../assets/partnerSchools/Nafisha.jpg';
import IS93 from '../../assets/partnerSchools/IS+93+logo.jpg';
import Access from '../../assets/partnerSchools/ACCESS.png';
import GWS from '../../assets/partnerSchools/GWHS_Logo_4C_FINAL_OUTLINES.jpg';
import Cypress from '../../assets/partnerSchools/CHCP.png';
import "./PartnerSchools.css"
const PartnerSchools = () => {
  return (
    <div className='partner-school'>
      <div className='partner-container'>
        <h1>Partner Schools & Orgs</h1>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdkvRwl13u1_FmG923fPfpEMAPKa9AMKywC2sctI9AArMvA3A/viewform'>SUBMIT INTEREST FORM</a>
      </div>
      <h3>Partner with us to help your students succeed.</h3>
      <div className='school'>
        <div className='sub-school'>
          <img src={foundationalYear} alt='Foundational Year' />
          <h4>Foundational Year</h4>
          <p>Year-long virtual program to prepare individuals seeking college & career opportunities.</p>
          <a href='#'>Learn more</a>
        </div>
        <div className='sub-school'>
          <img src={Seminar} alt='Seminars' />
          <h4>SPEAKHIRE Seminars</h4>
          <a href='/seminar'>Learn more</a>
        </div>
        <div className='sub-school'>
          <img src={pathways} alt='Pathways Days' />
          <h4>Pathways Days</h4>
          <p>Present individuals with Pathways Days so they discover their path forward.</p>
          <a href='/pathway'>Learn more</a>
        </div>
        <div className='sub-school'>
          <img src={Sympsons} alt='Symposiums' />
          <h4>Symposiums</h4>
          <p>Bringing together leaders of our societies to discuss progress towards the world we envision.</p>
          <a href='/symposiums'>Learn more</a>
        </div>
      </div>
      <div className='feedback'>
        <h2> Partner School Feedback</h2>
        <ul>
          <li>
            <img src={school} alt='School Feedback 1' />
            <p>“SPEAKHIRE’s <a href='#'>Foundational Year</a> has been such a great internship experience for our youth. We have seen such an evolution in our students, their leadership and self-efficacy, their willingness to engage in conversations about their future plans. Amazing!” <span>-New York Educator, ELLIS Preparatory Academy</span></p>
          </li>
          <li>
            <img src={school} alt='School Feedback 2' />
            <p>"The <a href='#'>Empowering Leadership</a> Course is one of the most beneficial programs I've seen for our students across all our schools because it teaches 21st Century skills and concepts while improving the self-efficacy of students through the diverse professionals of the <a hre='Speaker Series'>Speaker Series</a> you connect them with, helping them see themselves in future careers." <span>-Texas Educator, IDEA SCHOOLS</span></p>
          </li>
        </ul>
      </div>
      <div className='student-success'>
        <ul>
          <li>
            <img src={Ahmad} alt='Student Success Ahmad' />
            <p>"After graduating high school, I want to go to college with a focus on software engineering or programming, and eventually work for Google or Apple. From the professional connections I make through SPEAKHIRE, I want to learn how they got started in their career and advice about how I can get a head start on mine."</p>
            <h2>-Akhmad</h2>
          </li>
          <li>
            <img src={Nafissa} alt='Student Success Nafissa' />
            <p>"I'm thankful to learn what it takes to achieve future goals and build my confidence to pursue them through SPEAKHIRE. This is my second year, and I've already had so many doors open for me by the successful women I connected with my first year. They continue to help me think about my long-term life goals and what I need to do to achieve them. I know this year, I'll be able to further enhance my knowledge through additional network connections and work towards building a successful life and career so I can also be a strong role model for the next generation of leaders."</p>
            <h2>-Nafisha</h2>
          </li>
        </ul>
      </div>
      <div className='orgs'>
        <h1>Our Partner Schools & Orgs</h1>
        <div className='school-orgs'>
          <div className='sub-orgs'>
            <h2>Frankford High School</h2>
            <h5>Philadelphia, PA</h5>
            <p>“This is so great that the Foundational Year gets our students started early with the college and career exposure and pathways because they need to start thinking about that and they usually don’t get this information in such a targeted way early enough. Connecting with professionals who are dedicating their time is a great experience for them so they know there are supportive people out there willing to help.” ~Assistant Principal</p>
          </div>
          <div className='sub-orgs'>
            <h2>Emma Lazarus HS</h2>
            <h5>New York, NY</h5>
            <p>“The <a hre='#'>Foundational Year</a> sessions were great and our students were so engaged! The professionals taught so many different skills and I loved that the students had their cameras on the whole time because they were so interested. We don’t see that often, otherwise.” ~Internships Coordinator</p>
          </div>
          <div className='sub-orgs'>
            <h2>ELLIS Preparatory Academy</h2>
            <h5>Bronx, NY</h5>
            <p>SPEAKHIRE’s <a hre='#'>Foundational Year</a> has been such a great internship experience for our youth. We have seen such an evolution in our students, their leadership and self-efficacy, their willingness to engage in conversations about their future plans. Amazing!” ~Internships Coordinator</p>
          </div>
          <div className='sub-orgs'>
            <h2>IDEA Public Schools</h2>
            <h5>San Antonio, TX</h5>
            <p>The <a hre='#'>Empowering Leadership</a> Course is one of the most beneficial programs I've seen for our students across all our schools because it teaches 21st Century skills and concepts while improving the self-efficacy of students through the diverse professionals of the Speaker Series you connect them with, helping them see themselves in future careers."~Enrichment Activities Director</p>
          </div>
          <div className='sub-orgs'>
            <h2>New York City Mission Society</h2>
            <h5>New York City, NY</h5>
            <p>“SPEAKHIRE has shown incredible results for our students in just a short time because of the connections they've made to real role models. Tangible impacts show increases in attendance/participation and post-secondary planning; intangible results showed increases in soft skills like communication, conflict management, confidence, and leadership” ~Program Director</p>
          </div>
          <div className='sub-orgs'>
            <h2>George Washington HS</h2>
            <h5>Philadelphia, PA</h5>
            <p>“Partners like SPEAKHIRE help our students stay connected to school. The work SPEAKHIRE does is beautiful and how they are able to reach our students, connecting them with such powerful role models is moving. We have continued this partnership also because, now more than ever, we need non-academic supports that strengthen our academic programs.” ~Community Schools Coordinator</p>
          </div>
          <div className='sub-orgs'>
            <h2>Flushing International HS</h2>
            <h5>Flushing, NY</h5>
            <p>"I give SPEAKHIRE my highest endorsement for their programs. They came in when the pandemic hit and helped us recreate our internship program and made it just as good, if not better, with the pairing of students with their Champions. The Champions have been wonderful — our students are newly arrived immigrants, and SPEAKHIRE has done a great job pairing them with professionals who help them explore their future careers through real-world application of their learning, even virtually. I'm looking forward to seeing the lasting impacts of these connections.” ~Internships Coordinator</p>
          </div>
          <div className='sub-orgs'>
            <h2>Jamaica Gateway to the Sciences</h2>
            <h5>Jamaica, NY</h5>
            <p>“SPEAKHIRE has been wonderful to work with. They make connecting with professionals easy, which is usually a really tough process for us as a high school. SPEAKHIRE has removed the hurdles and built incredible bonds with our students that I can see lasting years. We’re very grateful and look forward to continuing this relationship for years to come.” ~Internships Coordinator</p>
          </div>
          <div className='sub-orgs'>
            <h2>South Philadelphia HS</h2>
            <h5>Philadelphia, PA</h5>
            <p>“The leadership series connected students with professional role models who look like them, which was so important to them. They got to ask questions and be real with their role models, which gave our students more confidence to succeed in their pursuits. This is so needed, especially in a post-pandemic world.” ~Assistant Principal</p>
          </div>
          <div className='sub-orgs'>
            <h2>Cypress Hills Collegiate Preparatory HS</h2>
            <h5>Brooklyn, NY</h5>
            <p>“The mentoring program and its connected parts have been great. The Champions were successful adults who were incredibly committed to helping our students. I know they built confidence for my mentees, and my mentees can see themselves in their mentors and envision a bright future. This has been a wonderful experience for our youth.” ~Guidance Counselor</p>
          </div>
        </div>
      </div>
      <h2>Partner Orgs</h2>
      <div className='org'>
        <motion.img src={IS93} alt='IS 93' whileHover={{ scale: 1.1 }} />
        <motion.img src={Access} alt='Access' whileHover={{ scale: 1.1 }} />
        <motion.img src={GWS} alt='GWS' whileHover={{ scale: 1.1 }} />
        <motion.img src={Cypress} alt='Cypress' whileHover={{ scale: 1.1 }} />
      </div>
    </div>
  );
};

export default PartnerSchools;
