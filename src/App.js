import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Intern from './pages/Intern';
import Champions from './pages/Champions';
import './main.css';

function App() {
  return (
    <Routes>
      <Route path="navbar" element={<Navbar />} />
      <Route path="intern" element={<Intern />} />
      <Route path="champions" element={<Champions />} />
    </Routes>
  );
}

export default App;
