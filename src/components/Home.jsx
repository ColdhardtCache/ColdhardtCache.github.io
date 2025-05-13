import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaDownload } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';

function Home() {
  // State for hover effects
  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollToNextSection = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      width: '100%',
      padding: '2rem 0',
      color: 'white',
      fontFamily: 'Inter, Arial, sans-serif',
      position: 'relative'
    }}>
      {/* Hero Section */}
      <div style={{
        width: '98%',
        maxWidth: '1800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <header style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {/* Profile Image - New Implementation */}
          {/* Container that controls positioning and margin */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            {/* Circular container with fixed display size */}
            <div style={{
              position: 'relative',
              width: '180px',  // Fixed display size
              height: '180px', // Fixed display size
              borderRadius: '50%',
              overflow: 'hidden', // This ensures the image stays within the circle
              border: '3px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              {/* Glowing background */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                filter: 'blur(15px)',
                opacity: '0.7',
                zIndex: '0'
              }}></div>
              
              {/* The image itself - constrained by the container but keeps aspect ratio */}
              <img 
                src="/media/pfp.jpeg" 
                alt="Brian Grier" 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // This ensures the image fills the container
                  objectPosition: 'center center', // Centers the image
                  zIndex: '1',
                }}
              />
            </div>
          </div>

          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #60a5fa, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-0.025em',
          }}>
            Brian Grier
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#a5b4fc',
            maxWidth: '600px',
            marginBottom: '2rem',
          }}>
            Cybersecurity Specialist & Software Developer
          </p>
          <p style={{
            fontSize: '1.5rem',
            color: '#a5b4fc',
            maxWidth: '600px',
            marginBottom: '2rem',
          }}>
            Bridgewater, MA
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <a 
              href="#" 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.border = '2px solid #3b82f6';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="#" 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.border = '2px solid #3b82f6';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="#" 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                border: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.border = '2px solid #3b82f6';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            <button
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              style={{
                padding: '0.75rem 2rem',
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                color: 'white',
                borderRadius: '50px',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              View Projects
            </button>
            <a 
              href="#" 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(139, 92, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              style={{
                padding: '0.75rem 2rem',
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                color: 'white',
                borderRadius: '50px',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
            >
              <FaDownload style={{ marginRight: '0.5rem' }} /> Download CV
            </a>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              style={{
                padding: '0.75rem 2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              Contact Me
            </button>
          </div>
        </header>

        {/* About Section */}
        <section style={{
          width: '100%',
          maxWidth: '1800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            About Me
          </h2>
          
          <div style={{
            position: 'relative',
            background: 'rgba(17, 24, 39, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(30, 41, 59, 0.8)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '2rem',
            paddingTop: 'calc(2rem + 3px)'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '9px',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px'
            }}></div>
            <p style={{
              fontSize: '1.5rem',
              lineHeight: '1.75rem',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              A passionate cybersecurity enthusiast and software developer currently pursuing a degree in Cybersecurity & Digital Forensics from Bridgewater State University.
              I have hands-on experience with various security tools, frameworks, and tech stacks like MERN.
              I'm constantly expanding my knowledge in this rapidly evolving field.
              Feel free to explore my projects and get in touch if you'd like to collaborate on something exciting!
            </p>
            {/* Skills Section with hover effects */}
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '1rem',
              textAlign: 'center',
              background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>
              What I Do
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              {/* Cybersecurity Card */}
              <div 
                onMouseEnter={() => setHoveredCard('cyber')}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: hoveredCard === 'cyber' 
                    ? 'linear-gradient(145deg, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.2))' 
                    : 'rgba(17, 24, 39, 0.8)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === 'cyber' ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredCard === 'cyber' 
                    ? '0 20px 25px -5px rgba(37, 99, 235, 0.2)' 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid',
                  borderColor: hoveredCard === 'cyber' ? 'rgba(37, 99, 235, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: 'linear-gradient(to right, #2563eb, #60a5fa)',
                  opacity: hoveredCard === 'cyber' ? '1' : '0',
                  transition: 'opacity 0.3s ease'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <FaShield 
                    size={28} 
                    style={{
                      color: '#60a5fa',
                      marginRight: '0.75rem',
                      transition: 'transform 0.3s ease',
                      transform: hoveredCard === 'cyber' ? 'scale(1.2)' : 'scale(1)'
                    }} 
                  />
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    Cybersecurity
                  </h4>
                </div>
                <p>
                  Vulnerability assessment, penetration testing, security analysis and compliance testing for systems and networks.
                </p>
              </div>
              
              {/* Development Card */}
              <div 
                onMouseEnter={() => setHoveredCard('dev')}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: hoveredCard === 'dev' 
                    ? 'linear-gradient(145deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.2))' 
                    : 'rgba(17, 24, 39, 0.8)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === 'dev' ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredCard === 'dev' 
                    ? '0 20px 25px -5px rgba(139, 92, 246, 0.2)' 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid',
                  borderColor: hoveredCard === 'dev' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: 'linear-gradient(to right, #8b5cf6, #c4b5fd)',
                  opacity: hoveredCard === 'dev' ? '1' : '0',
                  transition: 'opacity 0.3s ease'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <FaCode 
                    size={28} 
                    style={{
                      color: '#a855f7',
                      marginRight: '0.75rem',
                      transition: 'transform 0.3s ease',
                      transform: hoveredCard === 'dev' ? 'scale(1.2)' : 'scale(1)'
                    }} 
                  />
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    Development
                  </h4>
                </div>
                <p>
                  Full-stack web development, application security implementation, and automation solutions.
                </p>
              </div>
              
              {/* Research Card */}
              <div 
                onMouseEnter={() => setHoveredCard('research')}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: hoveredCard === 'research' 
                    ? 'linear-gradient(145deg, rgba(74, 222, 128, 0.1), rgba(74, 222, 128, 0.2))' 
                    : 'rgba(17, 24, 39, 0.8)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  transform: hoveredCard === 'research' ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredCard === 'research' 
                    ? '0 20px 25px -5px rgba(74, 222, 128, 0.2)' 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid',
                  borderColor: hoveredCard === 'research' ? 'rgba(74, 222, 128, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: 'linear-gradient(to right, #4ade80, #a7f3d0)',
                  opacity: hoveredCard === 'research' ? '1' : '0',
                  transition: 'opacity 0.3s ease'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <FaBook 
                    size={28} 
                    style={{
                      color: '#4ade80',
                      marginRight: '0.75rem',
                      transition: 'transform 0.3s ease',
                      transform: hoveredCard === 'research' ? 'scale(1.2)' : 'scale(1)'
                    }} 
                  />
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    Research
                  </h4>
                </div>
                <p>
                  Staying current with emerging threats, vulnerabilities, and cutting-edge security practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      
      {/* CSS for animations */}
      <style>
        {`
          @keyframes pulse {
            0% {
              opacity: 0.7;
              transform: scale(1);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.05);
            }
            100% {
              opacity: 0.7;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;