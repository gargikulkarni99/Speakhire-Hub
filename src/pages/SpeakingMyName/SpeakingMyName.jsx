import React from "react";
import { motion } from "framer-motion";
import Hetal from "../../assets/SpeakingMyName/Hetal+Jani.jpg";
import Access from "../../assets/SpeakingMyName/ACCESS.png";
import ELIS from "../../assets/SpeakingMyName/Elish.jpg";
import FLIHS from "../../assets/SpeakingMyName/FlIHS.png";
import IDEA from "../../assets/SpeakingMyName/IDEA-U+Logo.png";
import Mission from "../../assets/SpeakingMyName/mission+gradient+blue+logo+white+-+society+of+nyc+-+center.png";
import Organization from "../../assets/SpeakingMyName/organization_logo.png";
import RAKSHA from "../../assets/SpeakingMyName/raksha_logo_2017.png";
import SCHOOL from "../../assets/SpeakingMyName/School+logo-jpg.jpg";
import './SpeakingMyName.css';

const SpeakingMyName = () => {
    return (
        <motion.div className="SpeakingMyName-container">
            <motion.div 
                className="myName-container"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>#SpeakingMyName</h1>
                <h3>Share Your Name Story Video Every June 16th</h3>
                <p>Because Respect Starts With A Name.</p>
               <div className="button-campaign"> <a href="#">View Campaign Videos</a></div>
            </motion.div>

            <motion.div 
                className="quote"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h6>“It all started when... </h6>
                <h2>
                    My first grade teacher told me how to pronounce my name incorrectly.
                    Since then, I’ve been called so many things but my own name. I’ve
                    wanted to change my name so often, and always cringe when I hear my
                    name mispronounced even after I correct someone…”
                </h2>
                <p>
                    This campaign is for all the graduates everywhere who deserve to
                    have their names said as they should be pronounced this graduation
                    season. This campaign is for the so many essential workers who we
                    can truly appreciate more by hearing their names said proudly and
                    properly. This campaign is for all those parents who try to
                    westernize their children’s names so their children can get into
                    schools, avoid bullying, and fit in better while risking losing
                    their own culture even when others culturally appropriate our names.
                    This campaign is for all those who see that we live in a world where
                    their names have a place and those of their students, friends,
                    colleagues and others do not.
                </p>
                <h5>
                    Join us on June 16th for the #SpeakingMyName campaign and share a
                    video of your name being said proudly and properly and encourage
                    others to do the same!
                </h5>
            </motion.div>

            <motion.div 
                className="hetal-container"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="sub-hetal">
                    <h1>“I have to unlearn how to pronounce my name incorrectly.”</h1>
                    <p>
                        Join SPEAKHIRE on June 16th, for the #SpeakingMyName campaign.
                        Take the power back in your name.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Watch Campaign Launch Video
                    </motion.button>
                </div>
                <div className="sub-hetal">
                    <motion.img src={Hetal} alt="Hetal Jani" />
                </div>
            </motion.div>

            <motion.div 
                className="videos-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                
                <div className="sub-videos">
                <iframe
                width="100%"
                height="300"
                src="https://youtu.be/cwAYscGHEWU?si=lqcU9_W3gOA2kzXu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h3>HuyenTran Vo</h3>
                </div>
                <div className="sub-videos">
                <iframe
                width="100%"
                height="300"
                src="https://youtu.be/cwAYscGHEWU?si=lqcU9_W3gOA2kzXu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h3>HuyenTran Vo</h3>
                </div>
                <div className="sub-videos">
                <iframe
                width="100%"
                height="300"
                src="https://youtu.be/cwAYscGHEWU?si=lqcU9_W3gOA2kzXu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h3>HuyenTran Vo</h3>
                </div>
                <div className="sub-videos">
                <iframe
                width="100%"
                height="300"
                src="https://youtu.be/cwAYscGHEWU?si=lqcU9_W3gOA2kzXu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h3>HuyenTran Vo</h3>
                </div>
                <div className="sub-videos">
                <iframe
                width="100%"
                height="300"
                src="https://youtu.be/cwAYscGHEWU?si=lqcU9_W3gOA2kzXu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h3>HuyenTran Vo</h3>
                </div>
                <div className="sub-videos">
                <iframe
                width="100%"
                height="300"
                src="https://youtu.be/cwAYscGHEWU?si=lqcU9_W3gOA2kzXu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h3>HuyenTran Vo</h3>
                </div>


            </motion.div>

            <motion.div 
                className="Campaign"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <a href="#">Watch More Campaign Contributor Videos</a>
            </motion.div>

            <motion.div 
                className="Campaign-Partner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h6>Help us bring awareness to the Campaign</h6>
                <h2>Become a Campaign Partner</h2>
                <a href="#">Complete and return this form</a>
            </motion.div>

            <motion.div 
                className="partner-org"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="sub-partner-org">
                    <img src={IDEA} alt="IDEA logo" />
                </div>
                <div className="sub-partner-org">
                    <img src={Access} alt="ELIS logo" />
                </div>
                <div className="sub-partner-org">
                <img src={Organization} alt="ELIS logo" />
            </div>
            <div className="sub-partner-org">
            <img src={SCHOOL} alt="ELIS logo" />
            </div>
        <div className="sub-partner-org">
        <img src={Mission} alt="ELIS logo" />
        </div>
        <div className="sub-partner-org">
        <img src={FLIHS} alt="ELIS logo" />
    </div>
        <div className="sub-partner-org">
        <img src={RAKSHA} alt="ELIS logo" />
   
   
   
    </div>
    
               
            </motion.div>
        </motion.div>
    );
};

export default SpeakingMyName;
