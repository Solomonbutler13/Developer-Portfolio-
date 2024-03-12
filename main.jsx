import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // corrected import
import './index.css';
import Home from './pages/Home';
import Projects from './pages/projects';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import About from './pages/About';


// Main component to be rendered
const Main = () => {
  return (
    <BrowserRouter> {/* Wrap your entire application with BrowserRouter */}
      <NavBar /> {/* Navbar should be a part of the router context */}
      <Routes> {/* Routes should be direct children of BrowserRouter */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);