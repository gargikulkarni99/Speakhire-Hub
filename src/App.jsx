import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar'; 
import Team from './pages/Team/Team'; 
import Home from './Components/Hero/Home'; 
import Contact from './Components/Contact/ContactMe'; 
import NewsPage from './pages/News/NewsPage'; 
import Footer from "/src/Components/Footer/Footer"
import Mag from "./pages/Mag/Mag"
// 
const App = () => {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/news" element={<NewsPage />} /> 
        <Route path='/mag' element={<Mag/ >} />
      </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
