import React from "react";
import "../Careers/Careers.css";
import Bf from "../Careers/bf.jpeg";
import Bhakti from "../Careers/bhakti.jpg";
import Bryan from "../Careers/bryan.jpg";
import Charlotte from "../Careers/charlotte.jpg";
import Daniel from "../Careers/daniel.png";
import Edliu from "../Careers/edliu.jpeg";
import Fatima from "../Careers/fatima.jpg";
import Hetal from "../Careers/hetal.jpg";
import Kiran from "../Careers/kiran.jpg";
import Linda from "../Careers/linda.jpg";
import Priscila from "../Careers/priscila.jpeg";
import Profile from "../Careers/profile.jpeg";
import Reina from "../Careers/reina.jpg";
import Sb from "../Careers/sb.jpeg";
import Stephanie from "../Careers/stephanie.jpg";
import Unname from "../Careers/unname.jpg";
import Annie from "../Careers/annie.jpeg";

const Careers = () => {
	return (
		<>
			<section className="blue-section-career">
				<div className="blue-section-left">
					<h2 className="title-career">Careers</h2>
					<p className="description-career">Help us develop 10,000 SPEAKHIRE Interns by 2025.</p>
				</div>
			</section>
            <div className="app-container-career">
      <div className="header-career">
        <h1>Interested in joining the Team or the SPEAKHIRE board?</h1>
      </div>

      <div className="roles-career">
        <div className="role-career">
          <h2>Champion Relations Associate (CRA)</h2>
          <p>The Champion Relations Associate (CRA) reports to the Champion Experience Manager and works in collaboration with the Programs Coordinator to help manage and support Champions through SPEAKHIRE programs.</p>
          <button className="learn-more-career">Learn More</button>
        </div>
        <div className="role-career">
          <h2>Champion Experience Manager (CEM)</h2>
          <p>The Champions Experience Manager (CEM) plays a key role in the building and supporting our Champions community. Champions are professionals who volunteer to support the development of the young people we work with at SPEAKHIRE.</p>
          <button className="learn-more-career">Learn More</button>
        </div>
      </div>

      <div className="roles-career">
        <div className="role-career">
          <h2>Program Coordinator (PC)</h2>
          <p>The Program Coordinator PC reports to the Executive Director and works in collaboration with the CRA, Leadership Course Facilitators, and program implementation partners to implement our programs across all of our sites.</p>
          <button className="learn-more-career">Learn More</button>
        </div>
        <div className="role-career">
          <h2>Lead Software Engineer (Tech Lead)</h2>
          <p>The Lead Software Engineer or Tech Lead will build out an end-to-end career counseling platform, which will play a very important part to drive forward its mission of getting young people the right coaching, counseling and professional support for career growth.</p>
          <button className="learn-more-career">Learn More</button>
        </div>
      </div>

      <div className="roles-career">
        <div className="role-career">
          <h2>Career Pathways Facilitator (CPF)</h2>
          <p>SPEAKHIRE's Career Pathways Facilitators (CPF) will deliver our Empowering Leadership and Discovering Leadership courses, which are 10 workshops, each teaching a leadership skill, to a group of up to 20 or 30 participants. They will support participants' understanding of each session's case study, facilitating small and large group discussions and activities. They will also be responsible for data collection and reporting.</p>
          <button className="learn-more-career">Learn More</button>
        </div>
        <div className="role-career">
          <h2>Speakhire Series Administrator (SSA)</h2>
          <p>The SSA ensures the organization is meeting its Speaker Series programming goals, and developing and leveraging the Speaker Series program in other areas of the organization. The SSA will be able to recruit and engage all speakers in the cohort leading to successful Speaker Series events throughout the year. Please note this is a VOLUNTEER position.</p>
          <button className="learn-more-career">Learn More</button>
        </div>
      </div>

      <div className="roles-career">
        <div className="role-career">
          <h2>Director of Programs and Operations</h2>
          <p>DPO develops strategy and roadmap for our operations and various programs and also oversee the successful implementation of the strategy. This is an exciting opportunity to work closely with the Executive Director to improve the efficiency of our operations and drive greater outcomes across the organization.</p>
          <button className="learn-more-career">Learn More</button>
        </div>
        <div className="role-career">
          <h2>Operations Coordinator (OC)</h2>
          <p>For the 2023 - 2024 academic year, SPEAKHIRE will be working with students in various metropolitan areas. Our network of professionals, called Champions, come from across the nation and other parts of the world. Operations Coordinator will be responsible for supporting oversight of operations, which include both program, communications, administrative, and technological, to ensure the organization and Speakhire programs thrive. The OC will coordinate progress with different project leads on progress of all operations.</p>
          <button className="learn-more-career">Learn More</button>
        </div>
      </div>

      <a href="https://speakhire.typeform.com/to/dHWxc3pF?typeform-source=speakhire.org" className="apply-now-link">
  <button className="apply-now">Apply Now</button>
</a>
    </div>
    <section className="images-section-career">
                    <div className="images-row-career">
                        <img src={Annie} alt="Image 1" className="career-image" />
                        <img src={Kiran} alt="Image 2" className="career-image" />
                        <img src={Fatima} alt="Image 3" className="career-image" />
                        <img src={Bf} alt="Image 4" className="career-image" />
                        <img src={Profile} alt="Image 5" className="career-image" />
                        <img src={Bhakti} alt="Image 6" className="career-image" />
                        <img src={Reina} alt="Image 7" className="career-image" />
                        <img src={Edliu} alt="Image 8" className="career-image" />
                        <img src={Linda} alt="Image 9" className="career-image" />
                        <img src={Unname} alt="Image 10" className="career-image" />
                        <img src={Charlotte} alt="Image 11" className="career-image" />
                        <img src={Sb} alt="Image 12" className="career-image" />
                        <img src={Bryan} alt="Image 13" className="career-image" />
                        <img src={Stephanie} alt="Image 14" className="career-image" />
                        <img src={Priscila} alt="Image 15" className="career-image" />
                        <img src={Daniel} alt="Image 16" className="career-image" />
                        <img src={Hetal} alt="Image 17" className="career-image" />
                    </div>
                </section>
		</>
	);
}

export default Careers;
