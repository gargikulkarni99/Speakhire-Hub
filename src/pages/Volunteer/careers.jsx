import React from 'react'
import screenMeeting from "../../assets/career-page/Screen+Shot+2022-03-22+at+2.57.10+PM+-+Al+R.png"
import careersimage from "../../assets/career-page/thumbnail2.png"
import box from '../../assets/career-page/box.png'
import hand from "../../assets/career-page/hand.png"
import money from '../../assets/career-page/money.png'
import Google from "../../assets/career-page/Google.jpg"
import IBM from "../../assets/career-page/ibm.png"
import DOE from "../../assets/career-page/NYC_DOE_Logo.png"
import oreal from "../../assets/career-page/Loreal_Paris.jpg"
import times from "../../assets/career-page/new_york_times.png"
import harvard from "../../assets/career-page/harvard.jpg"
import nba from "../../assets/career-page/nbalogo.jpg"
import unicef from "../../assets/career-page/unicef.jpg"
import usiad from "../../assets/career-page/USAID-Logo.jpg"
import Barclys from "../../assets/career-page/BAR_Flat_Landscape_1C_.jpg"
import Disney from "../../assets/career-page/Walt+Disney.png"
import world from "../../assets/career-page/wes_logo.png"
import cartel from "../../assets/career-page/GREEN-Carters.png"
import BankOfAmerica from "../../assets/career-page/BofA_rgb.png"
import Young from '../../assets/career-page/ernstandyounglogo.jpg'
import Wayne from "../../assets/career-page/VaynerMedia-Black-on-Transparent-1 (1).png"
import swap from "../../assets/career-page/SR_Logo_Group.png"
import unitedNations from "../../assets/career-page/UnitedNations-logo.png"
import "./career-page-champion.css"

const Careers = () => {
  return (
    <div>
      <div className='career-champions'>
        <div className='careers'>
          <h1>Career Pathways Champions (CPCs)</h1>
          <a href=''>SIGN UP NOW</a>
        </div>
        <p className='opportunity'>Are you looking for an opportunity to empower the next generation of leaders? If you have at least 2 years of experience in your career field, you could become a SPEAKHIRE CPC and make a difference.</p>
        <div className='champion-container'>
          <div className='sub-champions'>
            <h3>Champion Activities</h3>
            <p>There are multiple ways for a Champion to help us develop tomorrow’s leaders.</p>
            <h5>Speakhire Series, Skills Seminars, Pathways Days</h5>
            <p>Become a speaker and share your story from school to career through our SPEAKIHIRE SERIES, 1 hour webinars to our general audience, share your story and an important skill you use at the workplace to a targeted group of students looking to improve their career skills knowledge through our SKILLS SEMINARS or SEMINARS, or share your pathway from school to career to a group of 30 students trying to understand their potential pathway through our Pathways Days.</p>
            <br />
            <h5>Foundational Year and Exploratory Years</h5>
            <p>Agree to an Intern match. 9 sessions, 45 mins each session (virtual). Teach 3 skills of your choice to promote personal and professional development. Receive training on the “Career Ecosystem”: educate Interns about positions in their career field and help the Intern develop a professional network.</p>
          </div>
          <div className='sub-champions'>
            <img src={screenMeeting} alt="Champion Activity" />
          </div>
        </div>
        <div className='programs'>
          <ul>
            <li><a>SPEAKHIRE SERIES</a></li>
            <li><a>SKILLS SEMINARS</a></li>
            <li><a>FOUNDATIONAL YEAR</a></li>
            <li><a>EXPLORATORY YEARS</a></li>
            <li><a>PATHWAYS DAYS</a></li>
          </ul>
        </div>
        <div className='cpc'>
          <div className='sub-cpc'>
            <h1>Why become a CPC?</h1>
            <p>Support a young person’s career pathway, prepare them for their future career, and empower them toward life success. In return, advance your social network and gain a potential volunteer or intern. Learn more about SPEAKHIRE in this video.</p>
          </div>
          <div className='sub-cpc'>
            <img src={careersimage} alt="Why Become a CPC" />
          </div>
        </div>
        <div className='help'>
          <h1>Other Ways to Help</h1>
          <p>Our virtual sessions are designed to make coaching flexible and convenient. However, we understand if coaching is not possible for you at the moment. There are always more ways to help, such as donating and supporting SPEAKHIRE. You can set up company matching donations to support internship rounds at SPEAKHIRE.</p>
          <p>Corporations are pushing forward diversity agendas, and SPEAKHIRE is developing a pipeline of diverse workforce leaders. Can your corporation sponsor SPEAKHIRE?</p>
          <img src={hand} alt="Help Image" />
          <ul>
            <li><a>Donate</a></li>
            <li><a>Company Matching</a></li>
            <li><a>Sponsor</a></li>
          </ul>
        </div>
        <div className='sponsor'>
          <h1>Ready to be a Champion?</h1>
          <a>SIGN UP NOW</a>
        </div>
        <h1>Our Career Pathways Champions come from:</h1>
        <hr />
      </div>
      <div className='sponsor-company'>
        <div className='sub-sponsor'>
          <img src={Google} alt="Google" />
        </div>
        <div className='sub-sponsor'>
          <img src={IBM} alt="IBM" />
        </div>
        <div className='sub-sponsor'>
          <img src={DOE} alt="DOE" />
        </div>
        <div className='sub-sponsor'>
          <img src={oreal} alt="L'Oreal" />
        </div>
        <div className='sub-sponsor'>
          <img src={times} alt="New York Times" />
        </div>
        <div className='sub-sponsor'>
          <img src={harvard} alt="Harvard" />
        </div>
        <div className='sub-sponsor'>
          <img src={nba} alt="NBA" />
        </div>
        <div className='sub-sponsor'>
          <img src={unicef} alt="UNICEF" />
        </div>
        <div className='sub-sponsor'>
          <img src={usiad} alt="USAID" />
        </div>
        <div className='sub-sponsor'>
          <img src={Wayne} alt="VaynerMedia" />
        </div>
        <div className='sub-sponsor'>
          <img src={cartel} alt="Carters" />
        </div>
        <div className='sub-sponsor'>
          <img src={Barclys} alt="Barclays" />
        </div>
        <div className='sub-sponsor'>
          <img src={BankOfAmerica} alt="Bank of America" />
        </div>
        <div className='sub-sponsor'>
          <img src={Disney} alt="Disney" />
        </div>
        <div className='sub-sponsor'>
          <img src={Young} alt="Ernst and Young" />
        </div>
        <div className='sub-sponsor'>
          <img src={swap} alt="Swap" />
        </div>
        <div className='sub-sponsor'>
          <img src={world} alt="WES" />
        </div>
        <div className='sub-sponsor'>
          <img src={unitedNations} alt="United Nations" />
        </div>
      </div>
    </div>
  )
}

export default Careers
