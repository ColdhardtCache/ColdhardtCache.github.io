import React from 'react';
import { FaAward } from 'react-icons/fa';

function Skills() {
  return (
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
  );
}

export default Skills;