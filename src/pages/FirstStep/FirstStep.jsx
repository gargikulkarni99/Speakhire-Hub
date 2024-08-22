import React from "react";
import "../FirstStep/FirstStep.css";
import Symposium from "../FirstStep/Symposium.png";

const FirstStep = () => {
	return (
		<>
        <section className="blue-section">
    <div className="blue-section-left">
        <h2>First Step</h2>
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
                <div className="content-left-main">
                    <p>4 sessions to support students who are looking to participate in the Foundational Year and ensure their success when meeting with Career Pathways Champions</p>
                    <ul>
                        <li>Sessions include: virtual professionalism, communication best practices, navigating tech tools, accountability</li>
                    </ul>
                </div>
                <div className="first-right">
                    <img src={Symposium} alt="Description of the image" />
                </div>
            </section>
        </>

);
}

export default FirstStep;