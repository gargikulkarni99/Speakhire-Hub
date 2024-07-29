import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Intern from './pages/Intern';
import Champions from './pages/Champions';
import '../Styles/main.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/intern" element={<Intern />} />
        <Route path="/champions" element={<Champions />} />
      </Routes>
    </>
  );
}

export default App;
