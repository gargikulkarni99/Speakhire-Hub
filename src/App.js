import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Intern from "./pages/Intern";
import Champions from "./pages/Champions";


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="navbar" element={<Navbar />}>
          <Route path="intern" element={<Intern />} />
          <Route path="champions" element={<Champions />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);