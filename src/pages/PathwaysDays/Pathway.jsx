import React from 'react';
import Moore from '../../assets/pathways/PD+Monroe.jpg'; // Ensure this path is correct

const Pathway = () => {
  return (
    <div>
      <div className='pathways-container'>
        <div className='header-pathways'>
          <h1>Pathways Days</h1>
          <a href='#'>Partner Interest Form</a>
        </div>
        <div className='scroller'>
          <img alt="Pathways Scroller"/>
        </div>
        <div className='pathway-days'>
          <div className='sub-pathways'>
            <img src={Moore} alt="Monroe Pathway"/>
          </div>
          <div className='sub-pathways'>
            <h4>
              Ever ask anyone how they reached career success? Pathways Days are career days with a focus on pathways. 
              Bring Pathways Days to your schools and help your students discover their path forward.
            </h4>
            <br />
            <a href='#'>Partner Planning Requirements</a>
            <br />
            <ol>
              <li>Requires 3 months to plan a Pathways Day</li>
              <li>Complete the Partner Interest Form above</li>
              <li>Identify a Date for your Pathways Day</li>
              <li>Have students complete a survey to determine their career interest</li>
              <li>Host your SPEAKHIRE Pathways Day!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pathway;
