import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Intern from './pages/Intern';
import Champions from './pages/Champions';
import Contact from './pages/Contact'; 
import "./Styles/main.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Intern />} /> 
          <Route path="/intern" element={<Intern />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
