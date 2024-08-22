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
import Pathways from './pages/PathwaysDays/Pathway';
import Mission from './pages/Mission/Mission';
import Theory from './pages/Theory/Theory';
import Impact from './pages/Impact/Impact';
import Series from './pages/Series/Series';
import FirstStep from './pages/FirstStep/FirstStep';
import Activities from './pages/Activities/Activities';
import Leadership from './pages/Leadership/Leadership';
import Foundational from './pages/Foundational/Foundational';
import Careers from './pages/Careers/Careers';


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
        <Route path='/pathway' element={<Pathways />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/theory' element={<Theory />} />
        <Route path='/impact' element={<Impact />} />
        <Route path='/series' element={<Series />} />
        <Route path='/firststep' element={<FirstStep />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/foundationalyear' element={<Foundational />} />
        <Route path='/careers' element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
