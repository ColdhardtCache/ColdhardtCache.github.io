import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Brian Grier
      </div>
      <div className="navbar-menu">
        <button className="navbar-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i> {/* Burger icon for menu */}
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link className="navbar-link" to="/">Home</Link>
          <Link className="navbar-link" to="/about">About Me</Link>
          <Link className="navbar-link" to="/portfolio">Portfolio</Link>
          <Link className="navbar-link" to="/blog">Blog</Link>
          <Link className="navbar-link" to="/resume">Resume</Link>
          <Link className="navbar-link" to="/contact">Contact</Link>
          <a className="navbar-link" href="https://www.linkedin.com/in/brian-grier-007016232/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a className="navbar-link" href="https://github.com/ColdhardtCache" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
