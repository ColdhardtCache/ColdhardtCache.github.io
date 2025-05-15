import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'blog', 'resume', 'contact'];
      const y = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (y >= top && y < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 dark:border-neutral-800 backdrop-blur bg-gradient-to-r from-white/90 to-neutral-100/90 dark:from-custom-dark-lighter/95 dark:to-custom-dark/95 px-4 py-3 shadow-md flex justify-between items-center">
      {/* Brand */}
      <div
        className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent cursor-pointer"
        onClick={() => scrollToSection('home')}
      >
        Brian Grier
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-black dark:text-white text-xl"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white dark:bg-custom-dark px-4 py-4 lg:py-0`}
      >
        {[
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About Me' },
          { id: 'portfolio', label: 'Portfolio' },
          { id: 'blog', label: 'Blog' },
          { id: 'resume', label: 'Resume' },
          { id: 'contact', label: 'Contact' }
        ].map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.id);
            }}
            onMouseEnter={() => setHoveredLink(link.label)}
            onMouseLeave={() => setHoveredLink(null)}
            className={`px-4 py-2 text-black dark:text-white transition-all relative ${
              activeSection === link.id ? 'font-semibold opacity-100' : 'opacity-80'
            }`}
          >
            {link.label}
            <span
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 ${
                hoveredLink === link.label || activeSection === link.id ? 'w-4/5 opacity-100' : 'w-0 opacity-0'
              }`}
            ></span>
          </a>
        ))}

        {/* Socials */}
        <div className="flex items-center mt-4 lg:mt-0 lg:ml-4">
          <a
            href="https://www.linkedin.com/in/brian-grier-007016232/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-black dark:text-white hover:text-primary-500 dark:hover:text-secondary-400 transition-colors mr-4"
          >
            <FaLinkedin className="mr-1" /> LinkedIn
          </a>
          <a
            href="https://github.com/ColdhardtCache"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-black dark:text-white hover:text-secondary-500 dark:hover:text-primary-400 transition-colors"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
