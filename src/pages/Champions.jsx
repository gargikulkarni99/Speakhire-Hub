import React from "react";
import "../Styles/Champions.css";
import Champs from "../Components/Champs.png";
import Welcome from "../Components/Champions Welcome.png";
import Donate from "../Components/donate.png";
import Match from "../Components/company match.png";
import Sponsor from "../Components/sponsor.png";
import Barclays from "../Components/Career/barclays.jpg";
import Bofa from "../Components/Career/bofa.png";
import Carters from "../Components/Career/carters.png";
import Disney from "../Components/Career/disney.png";
import Eay from "../Components/Career/eay.jpg";
import Google from "../Components/Career/google.jpg";
import Harvard from "../Components/Career/harvard.jpg";
import IBM from "../Components/Career/ibm.png";
import LP from "../Components/Career/lp.jpg";
import NBA from "../Components/Career/nba.jpg";
import NYC from "../Components/Career/nyc.png";
import NYT from "../Components/Career/nyt.png";
import Swiss from "../Components/Career/swiss.png";
import UN from "../Components/Career/un.png";
import Unicef from "../Components/Career/unicef.jpg";
import Usaid from "../Components/Career/usaid.jpg";
import VM from "../Components/Career/vm.png";
import Wes from "../Components/Career/wes.png";

const Champions = () => {
	return (
		<>
			<section className="blue-section">
				<div className="blue-section-left">
					<h2>Career Pathways Champions (CPCs)</h2>
				</div>
				<div className="blue-section-right">
					<button className="apply-btn">SIGN UP NOW</button>
        		</div>
      		</section>
			  <section className="paragraph-section">
        		<p>
				Are you looking for an opportunity to empower the next generation of leaders? If you have at least 2 years of experience in your career field, you could become a SPEAKHIRE CPC and make a difference.
        		</p>
      		</section>
			  <section className="new-section">
				<div className="left-column">
					<h3>Champion Activities</h3>
					<p>There are multiple ways for a Champion to help us develop tomorrow’s leaders.</p>
					<p><strong>Speakhire Series, Skills Seminars, Pathways Days</strong></p>
					<p>
					Become a speaker and share your story from school to career through our SPEAKIHIRE SERIES, 1 hour webinars to our general audience, share your story and an important skill you use at the workplace to a targeted group of students looking to improve their career skills knowledge through our SKILLS SEMINARS or SEMINARS, or share your pathway from school to career to a group of 30 students trying to understand their potential pathway through our Pathways Days. 
					</p>
					<div className="gap"></div>
					<p><strong>Foundational Year and Exploratory Years</strong></p>
					<ul>
						<li>Agree to an Intern match</li>
						<li>9 sessions, 45 mins each session (virtual)</li>
						<li>Teach 3 skills of your choice to promote personal and professional development</li>
						<li>Receive training on the “Career Ecosystem”: educate Interns about positions in their career field and help the Intern develop a professional network</li>
					</ul>
				</div>
				<div className="right-column">
					<img src={Champs} alt="CPCs in Action" />
				</div>
			</section>
			<section className="button-section">
				<h3>Get involved with the programs below:</h3>
				<div className="button-row">
					<button className="involvement-btn">SPEAKHIRE SERIES</button>
					<button className="involvement-btn">SKILLS SEMINARS</button>
					<button className="involvement-btn">FOUNDATIONAL YEAR</button>
					<button className="involvement-btn">EXPLORATORY YEARS</button>
					<button className="involvement-btn">PATHWAYS DAYS</button>
				</div>
			</section>
			<section className="cpc-section b-background">
				<div className="cpc-left">
					<h1>Why become a CPC?</h1>
					<p>Support a young person’s career pathway, prepare them for their future career, and empower them toward life success. In return, advance your social network and gain a potential volunteer or intern. Learn more about SPEAKHIRE in this video.</p>
				</div>
				<div className="cpc-right">
					<img src={Welcome} alt="Champion Image" />
				</div>
			</section>
			<section className="new-section-2">
				<h2 className="section-header">Other Ways to Help</h2>
				<div className="text-content">
					<p>
						Our virtual sessions are designed to make coaching flexible and convenient. However, we understand if coaching is not possible for you at the moment. There are always more ways to help, such as donating and supporting SPEAKHIRE. You can set up company matching donations to support internship rounds at SPEAKHIRE. 
        			</p>
        			<p>
						Corporations are pushing forward diversity agendas, and SPEAKHIRE is developing a pipeline of diverse workforce leaders. Can your corporation sponsor SPEAKHIRE? 
        			</p>
    			 </div>
				 <div className="image-row">
					<div className="image-column">
						<img src={Donate} alt="Champion Activity 1" />
						<button className="image-btn">DONATE</button>
        			</div>
					<div className="image-column">
						<img src={Match} alt="Champion Activity 2" />
						<button className="image-btn">COMPANY MATCHING</button>
        			</div>
					<div className="image-column">
						<img src={Sponsor} alt="Champion Activity 3" />
						<button className="image-btn">SPONSOR</button>
        			</div>
    			</div>
			</section>
			<section className="champ-background-section">
				<div className="champ-background-left">
					<h1>Ready to be a Champion?</h1>
				</div>
				<div className="champ-background-right">
					<button className="champ-background-button">SIGN UP NOW</button>
				</div>
			</section>
			<section className="image-grid-section">
				<div className="image-grid-left">
					<h2>Our Career Pathways Champions come from: </h2>
					<hr />
                </div>
				<div className="image-grid-right">
					<div className="image-grid">
						<a href="https://www.banking.barclaysus.com/index.html" target="_blank" rel="noopener noreferrer">
							<img src={Barclays} alt="Grid Image 1" />
						</a>
						<a href="https://www.bankofamerica.com" target="_blank" rel="noopener noreferrer">
							<img src={Bofa} alt="Grid Image 2" />
						</a>
						<a href="https://www.carters.com" target="_blank" rel="noopener noreferrer">
							<img src={Carters} alt="Grid Image 3" />
						</a>
						<a href="https://www.disney.com" target="_blank" rel="noopener noreferrer">
							<img src={Disney} alt="Grid Image 4" />
						</a>
						<a href="https://www.ey.com/en_us" target="_blank" rel="noopener noreferrer">
							<img src={Eay} alt="Grid Image 5" />
						</a>
						<a href="https://about.google/?fg=1&utm_campaign=hp-header&utm_medium=referral&utm_source=google-US" target="_blank" rel="noopener noreferrer">
							<img src={Google} alt="Grid Image 6" />
						</a>
						<a href="https://www.harvard.edu" target="_blank" rel="noopener noreferrer">
							<img src={Harvard} alt="Grid Image 7" />
						</a>
						<a href="https://www.ibm.com/us-en" target="_blank" rel="noopener noreferrer">
							<img src={IBM} alt="Grid Image 8" />
						</a>
						<a href="https://www.lorealparisusa.com/" target="_blank" rel="noopener noreferrer">
							<img src={LP} alt="Grid Image 9" />
						</a>
						<a href="https://www.nba.com" target="_blank" rel="noopener noreferrer">
							<img src={NBA} alt="Grid Image 10" />
						</a>
						<a href="https://www.schools.nyc.gov/" target="_blank" rel="noopener noreferrer">
							<img src={NYC} alt="Grid Image 11" />
						</a>
						<a href="https://www.nytimes.com" target="_blank" rel="noopener noreferrer">
							<img src={NYT} alt="Grid Image 12" />
						</a>
						<a href="https://www.swissre.com/" target="_blank" rel="noopener noreferrer">
							<img src={Swiss} alt="Grid Image 13" />
						</a>
						<a href="https://www.un.org/en/" target="_blank" rel="noopener noreferrer">
							<img src={UN} alt="Grid Image 14" />
						</a>
						<a href="https://www.unicef.org" target="_blank" rel="noopener noreferrer">
							<img src={Unicef} alt="Grid Image 15" />
						</a>
						<a href="https://www.usaid.gov" target="_blank" rel="noopener noreferrer">
							<img src={Usaid} alt="Grid Image 16" />
						</a>
						<a href="https://vaynermedia.com/" target="_blank" rel="noopener noreferrer">
							<img src={VM} alt="Grid Image 17" />
						</a>
						<a href="https://www.wes.org" target="_blank" rel="noopener noreferrer">
							<img src={Wes} alt="Grid Image 18" />
						</a>
					</div>
				</div>

			</section>

		</>
	);
}

export default Champions;
