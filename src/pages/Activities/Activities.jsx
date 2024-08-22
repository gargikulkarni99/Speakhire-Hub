import React from "react";
import "../Activities/Activities.css";
import Kim from "../Series/Kim.jpg";
import Laptop from "../Activities/Laptop.jpg";
import Group from "../Activities/group.jpg";
import FY from "../Activities/FY.jpg";
import Hetal from "../Mission/hetal.jpg";
import Pathway from "../Activities/pathway.jpg";
import Seminars from "../Activities/Seminars.jpg";
import Square from "../Activities/Square.png";
import Summit from "../Activities/summit.jpg";

const Activities = () => {
	return (
		<>
        <section className="blue-section-activities">
    <div className="blue-section-left-activities">
        <h2>Activities</h2>
    </div>
    </section>
    <div className="grid-container-activities">
      <div className="grid-item-activities">
        <img src={Kim} alt="SpeakHire Series" />
        <div className="overlay-activities">
          <h3><a href="/series">SpeakHire Series</a></h3>
          <p>Open talks from incredible speakers for individuals who seek career guidance.</p>
        </div>
      </div>
      <div className="grid-item-activities">
        <img src={Laptop} alt="First Step" />
        <div className="overlay-activities">
          <h3><a href="/firststep">First Step</a></h3>
          <p>Teaches young people the skills they need to successfully meet with professionals.</p>
        </div>
      </div>
      <div className="grid-item-activities">
        <img src={Group} alt="Leadership Courses" />
        <div className="overlay-activities">
          <h3><a href="/leadership">Leadership Courses</a></h3>
          <p>10-session courses to support leadership skill development and college and career exploration.</p>
        </div>
      </div>
      <div className="grid-item-activities">
        <img src={FY} alt="Foundational Year" />
        <div className="overlay-activities">
          <h3><a href="/foundationalyear">Foundational Year</a></h3>
          <p>Live career coaching and skills building to prepare individuals for career-ready opportunities.</p>
        </div>
      </div>
      <div className="grid-item-activities">
        <img src={Hetal} alt="Exploratory Years" />
        <div className="overlay-activities">
          <h3><a href="/exploratory">Exploratory Years</a></h3>
          <p>Targeted live career coaching to build upon the social capital of Foundational Year alumni.</p>
        </div>
      </div>
      <div className="grid-item-activities">
        <img src={Seminars} alt="SPEAKHIRE Seminars" />
        <div className="overlay-activities">
          <h3><a href="/seminar">SPEAKHIRE Seminars</a></h3>
          <p>Diverse professionals present early professional development to empower individuals.</p>
        </div>
      </div>
      <div className="grid-item-activities">
        <img src={Pathway} alt="Pathways Days" />
        <div className="overlay-activities">
          <h3><a href="/pathways">Pathways Days</a></h3>
          <p>Present individuals with Pathways Days so they discover their path forward.</p>
        </div>
      </div>
      <div className="grid-item-activities">
        <img src={Summit} alt="Summit & Soiree" />
        <div className="overlay-activities">
          <h3><a href="/summitsoiree">Summit & Soiree</a></h3>
          <p>Events for our SPEAKHIRE Network to strengthen community connections.</p>
        </div>
      </div>
      <div className="grid-item-activities">
        <img src={Square} alt="SPEAKHIRE Symposiums" />
        <div className="overlay-activities">
          <h3><a href="/symposiums">SPEAKHIRE Symposiums</a></h3>
          <p>Bringing together leaders of our societies to discuss progress towards the world we envision.</p>
        </div>
      </div>
    </div>
    </>
	);
}

export default Activities;
