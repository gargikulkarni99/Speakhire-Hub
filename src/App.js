import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Intern from './pages/Intern';
import Champions from './pages/Champions';
import '../Styles/main.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/intern" element={<Intern />} />
          <Route path="/champions" element={<Champions />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}


