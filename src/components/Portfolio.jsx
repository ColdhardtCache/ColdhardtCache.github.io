
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaShieldAlt, FaTerminal } from 'react-icons/fa';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="w-full max-w-[98%] mx-auto p-2 text-white">
      <h1 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
        My Portfolio
      </h1>
      <p className="text-center text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
        A collection of cybersecurity and software development projects showcasing my technical skills and expertise.
      </p>

      {/* Portfolio Tabs */}
      <div className="flex justify-center mb-4">
        <div className="bg-custom-dark rounded-full p-1 inline-flex shadow-xl border border-gray-800">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'projects' 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'courses' 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('courses')}
          >
            Coursework
          </button>
        </div>
      </div>

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="bg-custom-dark border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-primary-900/20 hover:shadow-xl transition-all group">
            <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            <div className="p-6">
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
          <div className="bg-custom-dark border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-primary-900/20 hover:shadow-xl transition-all group">
            <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            <div className="p-6">
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
          <div className="bg-custom-dark border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-primary-900/20 hover:shadow-xl transition-all group">
            <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            <div className="p-6">
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
          <div className="bg-custom-dark border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-primary-900/20 hover:shadow-xl transition-all group">
            <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            <div className="p-6">
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-custom-dark rounded-xl p-8 shadow-xl border border-gray-800">
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
  );
}

export default Portfolio;
