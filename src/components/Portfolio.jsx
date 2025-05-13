import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaShieldAlt, FaTerminal } from 'react-icons/fa';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div style={{
      width: '100%',
      padding: '2rem 0',
      color: 'white',
      position: 'relative'
    }}>
      <div style={{
        width: '98%',
        maxWidth: '1800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          My Portfolio
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '1.25rem',
          color: '#a5b4fc',
          marginBottom: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          A collection of cybersecurity and software development projects showcasing my technical skills and expertise.
        </p>

      {/* Portfolio Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '50px',
          padding: '0.25rem',
          display: 'inline-flex',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(30, 41, 59, 0.8)',
        }}>
          <button
            style={{
              padding: '0.65rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              background: activeTab === 'projects' 
                ? 'linear-gradient(to right, #3b82f6, #8b5cf6)' 
                : 'transparent',
              color: activeTab === 'projects' ? 'white' : '#a5b4fc',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            style={{
              padding: '0.65rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              background: activeTab === 'courses' 
                ? 'linear-gradient(to right, #3b82f6, #8b5cf6)' 
                : 'transparent',
              color: activeTab === 'courses' ? 'white' : '#a5b4fc',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setActiveTab('courses')}
          >
            Coursework
          </button>
        </div>
      </div>

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* Project 1 */}
          <div style={{
            position: 'relative',
            background: 'rgba(17, 24, 39, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(30, 41, 59, 0.8)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)'
          }}
          className="group"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(59, 130, 246, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.8)';
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
            <div className="p-6" style={{ paddingTop: 'calc(1.5rem + 3px)' }}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 mr-3">
                  <FaCode />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">Citation Generator</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Created a citation generator to produce multiple styles of citations for websites, books, and journals. The tool supports various citation formats and will eventually include YouTube citations.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-400">Web Development</div>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/matt-connors/citation-generator" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub repository"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a 
                    href="https://mlagenerator.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Visit live site"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div style={{
            position: 'relative',
            background: 'rgba(17, 24, 39, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(30, 41, 59, 0.8)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)'
          }}
          className="group"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(139, 92, 246, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.8)';
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '9px',
              background: 'linear-gradient(to right, #8b5cf6, #c4b5fd)',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px'
            }}></div>
            <div className="p-6" style={{ paddingTop: 'calc(1.5rem + 3px)' }}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary-500/10 flex items-center justify-center text-secondary-400 mr-3">
                  <FaServer />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-secondary-400 transition-colors">TechMinds Patient X-Ray Tracker</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Led a team of 6 full-stack engineers to create a portal for medical professionals to track X-ray information for their patients using the MERN stack.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="text-xs font-medium px-3 py-1 rounded-full bg-secondary-500/10 text-secondary-400">Full Stack</div>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/B-IJoe1/TechMinds" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub repository"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a 
                    href="https://youtu.be/0apNoHeJ7gI" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Watch demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div style={{
            position: 'relative',
            background: 'rgba(17, 24, 39, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(30, 41, 59, 0.8)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)'
          }}
          className="group"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(59, 130, 246, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.8)';
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
            <div className="p-6" style={{ paddingTop: 'calc(1.5rem + 3px)' }}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 mr-3">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">CyberTrust API Project</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Developed an internal application that automates calls to the SentinelOne API for client provisioning and reporting, streamlining hours of labor into seconds.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-400">Python</div>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.cybertrustmass.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Company website"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div style={{
            position: 'relative',
            background: 'rgba(17, 24, 39, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(30, 41, 59, 0.8)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)'
          }}
          className="group"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(139, 92, 246, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.8)';
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '9px',
              background: 'linear-gradient(to right, #8b5cf6, #c4b5fd)',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px'
            }}></div>
            <div className="p-6" style={{ paddingTop: 'calc(1.5rem + 3px)' }}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary-500/10 flex items-center justify-center text-secondary-400 mr-3">
                  <FaTerminal />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-secondary-400 transition-colors">CyberTrust PowerShell Project</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Created a client-facing tool for vulnerability assessment that evaluates Microsoft Entra ID and Active Directory domains against CIS control standards.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="text-xs font-medium px-3 py-1 rounded-full bg-secondary-500/10 text-secondary-400">PowerShell</div>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.cybertrustmass.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Company website"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Coursework Tab */}
      {activeTab === 'courses' && (
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
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
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent inline-block">Educational Background</h3>
              <p className="text-gray-400">
                Courses taken at{" "}
                <a 
                  href="https://www.bridgew.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Bridgewater State University
                </a>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h4 className="text-xl font-medium mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 mr-2">
                    <FaCode size={14} />
                  </div>
                  <a 
                    href="https://www.bridgew.edu/academics/majors-minors-undergraduate/computer-science" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    Computer Science
                  </a>
                </h4>
                <ul className="space-y-2 pl-10">
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Computer Science I & II (Python & Java)
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Intro Computer Organization (Assembly and C++)
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Data Structures and Algorithms (Python)
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Web Development (JavaScript / React)
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Intro to Database Systems (In progress)
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Software Engineering (In progress)
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary-500/10 flex items-center justify-center text-secondary-400 mr-2">
                    <FaShieldAlt size={14} />
                  </div>
                  <a 
                    href="https://www.bridgew.edu/academics/majors-minors-undergraduate/cybersecurity" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary-400 transition-colors"
                  >
                    Cybersecurity
                  </a>
                </h4>
                <ul className="space-y-2 pl-10">
                  <li className="text-gray-300 flex items-start">
                    <span className="text-secondary-500 mr-2">•</span>
                    Applied Cryptography
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-secondary-500 mr-2">•</span>
                    Computer Forensics (IR & Disaster Recovery)
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-secondary-500 mr-2">•</span>
                    Network Security (In progress)
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-secondary-500 mr-2">•</span>
                    Mobile Device Forensics (In progress)
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-secondary-500 mr-2">•</span>
                    Internship in Cybersecurity (CyberTrust)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Portfolio;