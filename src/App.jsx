import React, { useEffect } from 'react';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact'; 
import './index.css'; // Import index.css first for Tailwind directives
import './App.css';    // Then import App.css for custom styles

function App() {
  useEffect(() => {
    // Ensure dark mode is activated
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavbarComponent />
      <div style={{ scrollBehavior: 'smooth' }} className="w-full max-w-full">
        <section id="home" className="w-full">
          <Home />
        </section>
        <section id="about" className="w-full mt-12">
          <Education />
        </section>
        <section id="portfolio" className="w-full mt-12">
          <Portfolio />
        </section>
        <section id="blog" className="w-full mt-12">
          <Blog />
        </section>
        <section id="resume" className="w-full mt-12">
          <Resume />
        </section>
        <section id="contact" className="w-full mt-12">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;