import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'blog', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100; // Add offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      background: 'linear-gradient(to right, rgba(31, 41, 55, 0.95), rgba(17, 24, 39, 0.95))',
      backdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed', // Changed from sticky to fixed for better control
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #60a5fa, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        cursor: 'pointer'
      }}
      onClick={() => scrollToSection('home')}
      >
        Brian Grier
      </div>
      
      <div>
        <button 
          onClick={toggleMenu}
          className="navbar-toggle"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.25rem',
            cursor: 'pointer',
            display: 'none',
          }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div 
          className={`navbar-links ${isMenuOpen ? 'active' : ''}`}
          style={{
            display: 'flex',
          }}
        >
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About Me' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'blog', label: 'Blog' },
            { id: 'resume', label: 'Resume' },
            { id: 'contact', label: 'Contact' }
          ].map((link, index) => (
            <a 
              key={index}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                margin: '0 0.25rem',
                position: 'relative',
                transition: 'all 0.3s ease',
                transform: hoveredLink === link.label ? 'translateY(-2px)' : 'translateY(0)',
                opacity: activeSection === link.id ? 1 : 0.8,
              }}
              className="navbar-link"
            >
              {link.label}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  width: activeSection === link.id || hoveredLink === link.label ? '80%' : '0%',
                  height: '2px',
                  background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(-50%)',
                  opacity: activeSection === link.id || hoveredLink === link.label ? 1 : 0
                }}
              ></div>
            </a>
          ))}
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '1rem',
          }}
          className="social-links"
          >
            <a 
              href="https://www.linkedin.com/in/brian-grier-007016232/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                textDecoration: 'none',
                marginRight: '1rem',
                padding: '0.3rem 0.5rem',
                borderRadius: '0.25rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              <FaLinkedin style={{ marginRight: '0.25rem' }} /> LinkedIn
            </a>
            <a 
              href="https://github.com/ColdhardtCache" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                textDecoration: 'none',
                padding: '0.3rem 0.5rem',
                borderRadius: '0.25rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8b5cf6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              <FaGithub style={{ marginRight: '0.25rem' }} /> GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* CSS for media queries */}
      <style>
        {`
          @media (max-width: 1024px) {
            .navbar-toggle {
              display: block !important;
            }
            
            .navbar-links {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background: linear-gradient(to right, rgba(31, 41, 55, 0.98), rgba(17, 24, 39, 0.98));
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              z-index: 50;
              padding: 1rem 0;
            }
            
            .navbar-links.active {
              display: flex !important;
            }
            
            .navbar-link {
              padding: 1rem 2rem !important;
              margin: 0 !important;
              border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            
            .social-links {
              margin: 1rem 2rem !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default NavbarComponent;