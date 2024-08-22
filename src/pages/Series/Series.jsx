import React from "react";
import "../Series/Series.css";
import Carolina from "../Series/Carolina.jpg";
import Edmund from "../Series/Edmund.jpg";
import Kim from "../Series/Kim.jpg";
import Adem from "../Series/Adem.jpg";
import Annie from "../Series/Annie.jpg";
import EdLiu from "../Series/EdLiu.jpg";
import Helen from "../Series/Helen.jpg";
import MRamos from "../Series/MRamos.jpg";
import Nilaya from "../Series/Nilaya.jpg";
import R from "../Series/R.jpg";
import Radhika from "../Series/Radhika.jpg";
import Shanita from "../Series/Shanita.jpg";


const Series = () => {
	return (
		<>
        <section className="blue-section">
    <div className="blue-section-left">
        <h2>SPEAKHIRE SERIES</h2>
    </div>
    <div className="blue-section-right">
        <a 
            href="https://www.youtube.com/playlist?list=PLRMIJO2bZ0fJGNTDkMuhcjrXwMMPj8Qmo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="apply-btn youtube-link-btn"
        >
            WATCH NOW
        </a>
    </div>
</section>
            <section className="paragraph-section">
                <div className="paragraph-content-main">
                    <p>
                    SPEAKHIRE puts up a virtual Speaker Series open to all. Each year from September to June, we present incredible speakers who have overcome many obstacles, identified opportunities, and persevered to reach career success. Our speakers predominantly come from immigrant backgrounds and are very close to the cultures of their countries of origin. We feature one speaker per month through a webinar that is recorded for later viewing purposes for a larger audience. All of our speaker events can be viewed on our 
                    </p>
                    <a
                        href="https://www.youtube.com/channel/UCQ2TTK0KYyadK1ALA-AG4GQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link"
                    >
                        Youtube channel
                    </a>
                </div>
            </section>
            <section className="three-column-section">
                <div className="column">
                    <img src={Carolina} alt="Speaker 1" />
                    <h3>CAROLINA JANNICELLI</h3>
                    <p>
                    Carolina shares how she found he voice and made sure to use it in order to find her place as a leader in an industry dominated by men.
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=iv8HSQPKlbc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link-btn"
                    >
                        Watch Carolina
                    </a>
                </div>
                <div className="column">
                    <img src={Edmund} alt="Speaker 2" />
                    <h3>DR. EDMUND ADJAPONG</h3>
                    <p>
                    Dr. Edmund Adjapong, a native of the Bronx, NY, is an assistant professor in the Education Studies Department at Seton Hall University.
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=lNOSSAm1LAg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link-btn"
                    >
                        Watch Dr.Adjapong
                    </a>
                </div>
                <div className="column">
                    <img src={Kim} alt="Speaker 3" />
                    <h3>KIM LE</h3>
                    <p>
                    Kim escaped Vietnam as a refugee to becoming a successful entrepreneur, proving the American Dream is possible!  
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=AK1cV96A8cI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link-btn"
                    >
                        Watch Kim Le
                    </a>
                </div>
            </section>
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
				</div>
				<div className="column">
					<p>
                    The L&E Course is one of the most beneficial programs I've seen for our students across all our schools because it teaches 21st Century skills and concepts while improving the self-efficacy of students through the diverse professionals of the Speaker Series you connect them with, helping them see themselves in future careers."  
					</p>
					<h3>-Texas Educator</h3>
				</div>
			</section>
            <section className="image-row-section">
                <div className="image-row">
                    <img src={Adem} alt="Image 1" />
                    <img src={Annie} alt="Image 2" />
                    <img src={EdLiu} alt="Image 3" />
                    <img src={Nilaya} alt="Image 4" />
                    <img src={Shanita} alt="Image 5" />
                    <img src={Carolina} alt="Image 6" />
                    <img src={Edmund} alt="Image 7" />
                    <img src={Helen} alt="Image 8" />
                    <img src={Kim} alt="Image 9" />
                    <img src={MRamos} alt="Image 10" />
                    <img src={Radhika} alt="Image 11" />
                    <img src={R} alt="Image 12" />
                </div>
                <div className="centered-button">
                    <a
                        href="https://www.youtube.com/playlist?list=PLRMIJO2bZ0fJGNTDkMuhcjrXwMMPj8Qmo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link-btn"
                    >
                        Watch now
                    </a>
                </div>
            </section>
        </>
    );
}

export default Series;


