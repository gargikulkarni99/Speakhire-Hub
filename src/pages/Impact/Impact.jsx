import React from 'react';
import "../Impact/Impact.css";
import Map1 from "../Impact/Map1.png";
import Map2 from "../Impact/Map2.png";
import CountUp from 'react-countup';
import Saima from "../Impact/Saima.png";


const Impact = () => {
    return (
        <>
      <div className="section-container">
        <div className="left-side">
          <h1 className="header">Impact</h1>
        </div>
      </div>
      <div className="impact-section">
      <div className="left-column">
        <h2 className="column-header">
          <span className="bold-number">4</span> states with Partner Schools & Orgs
        </h2>
        <img src={Map1} alt="Map of states" className="column-image" />
      </div>
      <div className="middle-column">
        <h2 className="column-header">
          <span className="bold-number">70</span> countries represented
        </h2>
        <img src={Map2} alt="Map of countries" className="column-image" />
      </div>
      <div className="right-column">
        <div className="blue-box-main">
          <p className="box-paragraph-main">"Joining SPEAKHIRE was the best decision that I ever made. I felt like I belonged there."</p>
          <p className="box-paragraph-main">- LYLIA '18</p>
        </div>
      </div>
    </div>
    <div className="stats-section">
      <div className="stat-item">
        <h2>
          <CountUp start={0} end={70} duration={2.5} />
        </h2>
        <p>COUNTRIES REPRESENTED</p>
      </div>
      <div className="stat-item">
        <h2>
          <CountUp start={0} end={1890} duration={2.5} separator="," />
        </h2>
        <p>STUDENTS DIRECTLY IMPACTED THROUGH CAREER SKILLS TRAINING PROGRAMS</p>
      </div>
      <div className="stat-item">
        <h2>
          <CountUp start={0} end={2556} duration={2.5} separator="," />
        </h2>
        <p>INTERNSHIP SESSIONS</p>
      </div>
      <div className="stat-item">
        <h2>
          <CountUp start={0} end={92} duration={2.5} suffix="%" />
        </h2>
        <p>% OF STUDENTS FELT MORE PREPARED FOR COLLEGE, ENGAGED AT SCHOOL & LEARNED NEW SKILLS</p>
      </div>
    </div>
    <div className="testimonial-card">
            <img 
                src={Saima}
                alt="Saima" 
                className="testimonial-image" 
            />
            <div className="testimonial-content">
                <p className="testimonial-quote">
                    "This is my second year in SPEAKHIRE. My first year, I did the Foundational Year because I thought I wanted to pursue a career in law since law has a lot of great opportunities in my home country. SPEAKHIRE connected me to two professionals in law and one in STEM. I learned a lot of skills and information and I also learned I am more interested in pharmacy. I am now connecting with professionals through SPEAKHIRE who can help me pursue this career interest but still stay connected to my first three career professionals who continue to support me in my growth as well."
                </p>
                <p className="testimonial-author">-SAIMA</p>
            </div>
        </div>
        <div className="video-section">
                <div className="video-container">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/watch?v=RsNHwX48MY0" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
            <div className="videos-header-section">
                <h1 className="videos-header">How SPEAKHIRE impacts lives</h1>
                <div className="videos-column">
                    <div className="video-container">
                        <iframe 
                            width="300" 
                            height="200" 
                            src="https://www.youtube.com/watch?v=mT1yas4HOlU" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="video-container">
                        <iframe 
                            width="300" 
                            height="200" 
                            src="https://www.youtube.com/watch?v=4zokzUxKPLs&t=1s" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="video-container">
                        <iframe 
                            width="300" 
                            height="200" 
                            src="https://www.youtube.com/watch?v=rH6EZrsBJG4" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
      </>
    );
  };
  
  export default Impact;