import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Changed Router to BrowserRouter
import Intern from './pages/Intern';
import Champions from './pages/Champions';

import NavBar from './Components/Navbar/NavBar'; 
import Team from './pages/Team/Team'; 
import Home from './Components/Hero/Home'; 
import Contact from './Components/Contact/ContactMe'; 
import NewsPage from './pages/News/NewsPage'; 
import Footer from './Components/Footer/Footer';  
import Mag from './pages/Mag/Mag';
import Seminars from './pages/Seminars/Seminars';
import Exploratory from './pages/Exploratory/exploratory';
import Pathway from './pages/PathwaysDays/Pathway';
import Mission from './pages/Mission/Mission';
import Theories from './pages/Theory/Theories';
import Symposiums from "./pages/Symposiums/Symposiums"
import SpeakingMyName from "./pages/SpeakingMyName/SpeakingMyName"
import Summit from './pages/Summit/Summit';
import Volunteer from './pages/Volunteer/Volunteer';
import Careers from './pages/Volunteer/careers';
const App = () => {
  return (
    <Router>  {/* Use BrowserRouter instead of Router */}
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intern" element={<Intern />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/news" element={<NewsPage />} /> 
        <Route path="/mag" element={<Mag />} /> 
        <Route path="/seminar" element={<Seminars />} />
        <Route path='/exploratory' element={<Exploratory />} />
        <Route path='/pathway' element={<Pathway />} />

        <Route path='/mission' element={<Mission />} />
        <Route path='/theory' element={<Theories />} />
        <Route path='/symposiums' element={<Symposiums />} />
        <Route path='/summit' element={<Summit />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/speakingmyname' element={<SpeakingMyName />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
