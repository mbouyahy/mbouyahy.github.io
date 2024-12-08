import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';       // Correct path
import SocialMediaIcons from './components/SocialMediaIcons';
import ProjectCards from './components/ProjectCards';
import CustomizedTimeline from './components/Skills';
import ContactForm from './components/Contact';
import { Tooltip } from '@mui/material';
import './App.css';
function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <Tooltip title="Home" arrow><Link to="/home" className="icon"><i className="fas fa-home"></i></Link></Tooltip>
          <Tooltip title="Projects" arrow><Link to="/projects" className="icon"><i className="fas fa-solid fa-layer-group"></i></Link></Tooltip>
          <Tooltip title="Skills" arrow><Link to="/cursus" className="icon">  <i className="fas fa-book"></i></Link></Tooltip>
          <Tooltip title="Contact" arrow><Link to="/contact" className="icon">  <i className="fas fa-envelope"></i></Link></Tooltip>
      </div>

        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<ProjectCards />} />
            <Route path="/cursus" element={<CustomizedTimeline />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/" element={<Home />} /> Default page
          </Routes>
        </div>
        <div className="App">
          <SocialMediaIcons />
        </div>

      </div>
    </Router>
  );
}

export default App;
