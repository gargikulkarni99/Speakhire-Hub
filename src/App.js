import React from react;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Intern } from './pages/Intern';
import { Champions } from './pages/Champions';
import { Navbar } from './Components/Navbar';
import './Styles/main.css';

function App() {
  return (
    <>
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intern />} />
          <Route path="/champions" element={<Champions />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App

