import React from 'react';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

function Education() {
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
        
        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center mb-5">
            <FaGraduationCap className="text-primary-500 text-3xl mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Education</h2>
          </div>
          <div style={{
            position: 'relative',
            background: 'rgba(17, 24, 39, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(30, 41, 59, 0.8)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '2rem',
            paddingTop: 'calc(2rem + 3px)',
            marginBottom: '1.5rem'
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
            <h3 className="text-xl font-semibold text-white mb-1">Bridgewater State University, Bridgewater, MA</h3>
            <p className="text-gray-300">Bachelor of Science in Cybersecurity</p>
            <p className="text-gray-400 text-sm">Expected Graduation: May 2026</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="flex items-center mb-5">
            <FaAward className="text-primary-500 text-3xl mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Certifications</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              position: 'relative',
              background: 'rgba(17, 24, 39, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              border: '1px solid rgba(30, 41, 59, 0.8)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '2rem',
              paddingTop: 'calc(2rem + 3px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              overflow: 'hidden'
            }}
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
              <a href="https://www.credly.com/badges/510701ca-046b-443f-a21e-1c3744c21ad1/"
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{
                   textDecoration: 'none',
                   color: 'inherit',
                   display: 'block'
                 }}
                 className="group">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors flex items-center">
                  ISC2 Certified in Cybersecurity (CC)
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>
                <p className="text-gray-400 mt-4">Issued Feb 2024 - Expires Feb 2027</p>
              </a>
            </div>

            <div style={{
              position: 'relative',
              background: 'rgba(17, 24, 39, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              border: '1px solid rgba(30, 41, 59, 0.8)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '2rem',
              paddingTop: 'calc(2rem + 3px)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
              overflow: 'hidden'
            }}
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
              <a href="https://www.credly.com/badges/9de08d49-a386-44ca-8c15-7de87f35aeba/"
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{
                   textDecoration: 'none',
                   color: 'inherit',
                   display: 'block'
                 }}
                 className="group">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors flex items-center">
                  CompTIA Security+
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>
                <p className="text-gray-400 mt-4">Issued Jul 2024 - Expires Jul 2027</p>
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <div className="flex items-center mb-5">
            <FaAward className="text-primary-500 text-3xl mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Skills</h2>
          </div>
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
            <div className="flex flex-col space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-400">General Skills</h3>
                <p className="text-gray-300">Packet Analysis, Communication, Documentation, Organization, Optimization, API Creation and Automation</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-400">Frameworks</h3>
                <p className="text-gray-300">NIST, MITRE ATT&CK, CIS</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-400">Programming Languages</h3>
                <p className="text-gray-300">Python, Java, CSS, HTML, JavaScript, Bash, PowerShell, SQL</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-400">Tools</h3>
                <p className="text-gray-300">Wireshark, Forensic Tool Kit (FTK), Microsoft Office 365, Git/GitHub, ServiceNow, Jira, Visual Studio Code, KnowledgeBase, Slack, MongoDB, PostgreSQL, Postman, Xmind, SentinelOne, Splunk, ImmersiveLabs</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-400">Operating Systems</h3>
                <p className="text-gray-300">Windows, MacOS, Kali Linux</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;