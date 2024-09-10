import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';  // Add this line
import About from './components/About';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';  // Add this line if you have a separate Resume component
import Contact from './components/Contact'; 
import './App.css';


function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div style={{ backgroundColor: '#1f1f1f' }} className="text-gray-100 min-h-screen">
      <NavbarComponent />
      <div className="container mx-auto p-4 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />  {/* Add this line if you have a Resume route */}
          <Route path="/contact" element={<Contact />} />  {/* Add this line if you have a Resume route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;