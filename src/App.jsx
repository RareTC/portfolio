import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './Pages/Contact/Contact'
import Resume from './components/ResumeView/ResumeView';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;



// import Experience from './Pages/Experience/Experience';
// import ProjectDisplay from './Pages/ProjectDisplay/ProjectDisplay';

/* <Route path="/project/:id" element={<ProjectDisplay />} /> */
/* <Route path="/experience" element={<Experience />} /> */