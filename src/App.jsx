import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Experience from './Pages/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProjectDisplay from './Pages/ProjectDisplay/ProjectDisplay';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
