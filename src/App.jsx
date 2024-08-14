import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
const App = () => {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/news" element={<NewsPage />} /> 
        <Route path="/mag" element={<Mag />} /> 
        <Route path="/seminar" element={<Seminars />} />
        <Route path='/exploratory' element={<Exploratory />} />
        <Route path='/pathway' element={<Pathways />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/theory' element={<Theory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
