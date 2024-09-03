import React from 'react';
import '../Lead/Lead.css';

function Lead () {
  return (
    <div className="Lead-container">
        <div className="Relations-header">
            <h1 className="Lead-title">Lead Software Engineer (Tech Lead)</h1>
            <a href="https://speakhire.typeform.com/to/dHWxc3pF?typeform-source=speakhire.org" className="apply-now-button">Apply Now</a>
        </div>
      <div className="Lead-content">
        <div className="section">
          <h2>Description</h2>
          <p>
            The Lead Software Engineer or Tech Lead will build out an end-to-end
            career counseling platform for{' '}
            <a href="/" className="Lead-link">
              Speakhire
            </a>
            , which will play a very important part to drive forward its mission
            of getting young people the right coaching, counseling and
            professional support for career growth.
          </p>
        </div>
        <div className="section">
          <h2>Qualifications</h2>
          <h3>Must Have</h3>
          <ul>
            <li>
              Excellent organizational, verbal and written communication skills
            </li>
            <li>
              Hands-on experience with leading a technical team (either through
              functional or project authority);
            </li>
            <li>
              Advanced understanding of fundamental design principles behind a
              scalable application.
            </li>
            <li>
              Expertise in working in Cloud based Saas Solutions
              (AWS/Azure/GCP etc.)
            </li>
            <li>Experience in developing APIs.</li>
            <li>
              Exposure to multiple programming (such as javascript) and
              templating languages (such as Jade (Pug)), SQL databases and also
              Server-side application architectures like Nginx, Express.js,
              Meteor.Js, etc. is desirable.
            </li>
            <li>Understands the lifecycle hooks well and ensures correct usage.</li>
            <li>
              Understands the nature of asynchronous programming and its quirks
              and workarounds.
            </li>
            <li>
              Experience in leading small to Mid-sized teams and influencing
              stakeholders
            </li>
          </ul>
          <h3>Nice to Have:</h3>
          <ul>
            <li>
              Experience in strategic capacity planning to ensure peak
              performance of the platform, with fewer resources
            </li>
            <li>
              Expertise in analysis, implementation and evaluation of IT systems
              and their specifications
            </li>
            <li>
              Expertise in the area of network or systems management (including
              monitoring and evaluating them)
            </li>
            <li>
              Experience in developing and administering technology budget
            </li>
            <li>
              Experience in negotiating with vendors regarding contracts, pricing
              and implementation.Excellent working knowledge of MEAN Stack. (Mongo
              DB, Angular, Node, Express).
            </li>
          </ul>
          <a href="https://drive.google.com/file/d/1UoDr-2KXrhp3K3E9_k3jHzhTsW-s3q5b/view" className="view-full-description">
            View full job description here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lead;