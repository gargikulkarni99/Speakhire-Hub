import React from 'react';
import "../Mission/Mission.css";
import Notes from "../Mission/notes.png";
import Service from "../Mission/service-tools.png";
import Teamwork from "../Mission/teamwork-together.png";
import Ecosystem from "../Mission/Ecosystem.png";

const Mission = () => {
  return (
    <>
    <section className="background-section"></section>
    <section className="centered-image-section">
      <div className="centered-image-logo">
      </div>
    </section>
    <section className="text-section">
        <h2 className="header">SPEAK stands for Support Prepare Empower All Kind.</h2>
        <p className="paragraph">
          SPEAKHIRE (formerly SPEAK Mentorship) develops the social and cultural capital of individuals, 
          primarily serving those from immigrant families, to become leaders in the workforce.
        </p>
      </section>
      <section className="new-section">
        <h2 className="big-header">Our Objectives</h2>
        <div className="image-group">
          <div className="image-card">
            <img src={Service} />
            <h3>Support</h3>
            <p>by pooling community resources, increasing impact and stimulating community development from within</p>
          </div>
          <div className="image-card">
            <img src={Notes} />
            <h3>Prepare</h3>
            <p>by creating and promoting projects and programs that empower individuals from immigrant families to identify and pursue opportunities </p>
          </div>
          <div className="image-card">
            <img src={Teamwork} />
            <h3>Empower</h3>
            <p>by creating and inspiring a network of professionals to facilitate dialogue with key players who guide individuals</p>
          </div>
        </div>
        <button className="center-button">View Our One-Pager</button>
      </section>
      <section className="blue-section">
        <div className="content-container">
          <h2 className="big-header-main">View Our Theory of Change</h2>
          <p className="paragraph">Our theory of change is increases in the quantity of quality relationships fostered guide individuals toward success.</p>
          <button className="hover-button">Learn more</button>
        </div>
      </section>
      <section className="split-section">
        <div className="text-container">
          <h2 className="left-header">SPEAKHIRE Ecosystem</h2>
          <p className="left-paragraph">Communities Open Doors To Opportunities</p>
        </div>
        <div className="image-container-main">
          <img src= {Ecosystem} />
        </div>
      </section>
      <section className="video-paragraph-section">
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/watch?v=mT1yas4HOlU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="paragraph-container">
          <p className="video-paragraph">
          SPEAKHIRE ensures diverse individuals get a fair chance of pursuing colleges and careers of their choice. We envision a future workforce with more professionals of color of all backgrounds in positions of power across a variety of careers.    
          </p>
        </div>
      </section>
    </>
  )
}

export default Mission
