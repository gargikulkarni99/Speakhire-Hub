import React from 'react';
import { motion } from 'framer-motion';
import AfridaImage from '/src/assets/Afrida.jpg'; 
import DayraImage from '/src/assets/Dayra.jpg';
import EcstacyImage from '/src/assets/Ecstacy.png';

// Cards data
const cardsData = [
  {
    id: '0',
    image: AfridaImage,
    header: "Afrida '20",
    paragraph:
      "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE Intern, I gained valuable skills and information my first year and know this year I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me.",
  },
  {
    id: '1',
    image: DayraImage,
    header: "Dayra '24",
    paragraph:
      "I’m very grateful to be part of SPEAKHIRE, as it has significantly changed my approach to learning and personal development, strengthening my communication skills and leadership in decision-making, allowing me to have a clearer view of my professional future and possibilities.",
  },
  {
    id: '2',
    image: EcstacyImage,
    header: "Ecstacy '18",
    paragraph:
      "Through the SPEAKHIRE community, I have received the opportunity to meet young women like myself who aspire to have careers they feel are worth chasing, and we have met career professionals who have coached us on how we can reach our goals.",
  },
];

// Card component
const Card = ({ image, header, paragraph, delay }) => (
  <motion.div
    className="card"
    initial={{ x: -100, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }} 
    transition={{ duration: 0.5, delay }}
  >
    <div className="image-container">
      <img src={image} alt={header} className="card-image" />
    </div>
    <h3>{header}</h3>
    <p className="card-paragraph">{paragraph}</p>
  </motion.div>
);

// CardsList component
const CardsList = () => (
  <div className="section-container">
    <h1 className="section-title">Student Success Stories</h1>
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card
          key={card.id}
          image={card.image}
          header={card.header}
          paragraph={card.paragraph}
          delay={index * 0.5} 
        />
      ))}
    </div>
  </div>
);

export default CardsList;
