// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Intern from './pages/Intern';
import Champions from './pages/Champions';
import OurMission from './pages/Mission';
import Impact from './pages/Impact';
import TheoryofChange from './pages/TOC';
import "./Styles/main.css";


export default function App() { 
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navbar />} />
        <Route path="/intern" element={<Intern />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/theoryofchange" element={<TheoryofChange />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

