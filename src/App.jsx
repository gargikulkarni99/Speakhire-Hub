import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Intern from './pages/Intern';
import Champions from './pages/Champions';
import OurMission from './pages/Mission';
import Impact from './pages/Impact';
import TheoryofChange from './pages/TOC';
import "./Styles/main.css";
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar'; 
import Team from './pages/Team/Team'; 
import Home from './Components/Hero/Home'; 
import Contact from './Components/Contact/ContactMe'; 
import NewsPage from './pages/News/NewsPage'; 
import Footer from './Components/Footer/Footer';  
import Mag from './pages/Mag/Mag';
import Seminars from './pages/Seminars/Seminars';
>>>>>>> e51d3478a86dfad52f9832674c9504cfbbb337b8

const App = () => {
  return (
    <Router>
      <NavBar /> 
      <Routes>
<<<<<<< HEAD
        <Route index element={<Navbar />} />
        <Route path="/intern" element={<Intern />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/theoryofchange" element={<TheoryofChange />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/news" element={<NewsPage />} /> 
        <Route path="/mag" element={<Mag />} /> 
        <Route path="/seminar" element={<Seminars />} />
>>>>>>> e51d3478a86dfad52f9832674c9504cfbbb337b8
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
