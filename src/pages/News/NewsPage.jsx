import newsData from "/src/Constant/newsData.json";
import './NewPages.css';
import { motion } from 'framer-motion'; // Import Framer Motion

const NewsPage = () => {
  return (
    <div className="news-container">
      <h1 className="news-title">Latest News</h1>

      <div className="news-grid">
        {newsData.newsItems.map((item) => (
          <motion.div
            key={item.id}
            className="news-item" 
            initial={{ opacity: 0, translateY: 20 }} // Initial state for animation
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ duration: 0.5 }} 
          >
            <img src={item.image} alt={item.header} className="news-image" />
            <h2 className="news-header">{item.header}</h2>
            {item.paragraph && <p className="news-paragraph">{item.paragraph}</p>}
            <p className="news-date">{item.Date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
