import React from 'react';
import { FaDownload, FaCode, FaBriefcase, FaHandsHelping } from 'react-icons/fa';

function Resume() {
  return (
    <div className="w-full max-w-[98%] mx-auto p-2 text-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">My Resume</h1>
        </div>

      
        {/* Professional Experience */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <FaBriefcase className="text-primary-500 text-2xl mr-3" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Professional Experience</h2>
          </div>
          
          {/* CyberTrust */}
          <div className="mb-8 bg-custom-dark rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            <div className="p-6">
            <div className="mb-4 border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold text-white">CyberTrust, Bridgewater, MA</h3>
              <div className="flex justify-between items-center">
                <p className="text-primary-400 font-medium">SOC Analyst (Intern)</p>
                <span className="text-gray-400 text-sm">March 2024 - Present</span>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Facilitated the creation of a Python API project leveraging SentinelOne API to automate client account creation, deployment, and reporting for Quarterly Business Reports.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Conducted security assessments for towns and municipalities in Plymouth county to understand customer risk posture and create remediation efforts for under-resourced entities.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Created and maintained documentation including runbooks and playbooks on EDR software installation, onboarding, use, and troubleshooting for client and internal use.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Managed and deployed SentinelOne EDR to multiple municipalities in Plymouth county.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Provided clear communication, transparency, and technical support as the first point of contact and Liaison for CyberTrust and specific municipality relations.</span>
              </li>
            </ul>
            </div>
          </div>
          
          {/* Berkshire Grey */}
          <div className="mb-8 bg-custom-dark rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            <div className="p-6">
            <div className="mb-4 border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold text-white">Berkshire Grey, Bedford, MA</h3>
              <div className="flex justify-between items-center">
                <p className="text-primary-400 font-medium">Desktop Engineer (Co-op)</p>
                <span className="text-gray-400 text-sm">February 2023 – April 2023</span>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Provided internal desktop support at a startup focused on intelligent robot automation.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Refurbished, provisioned, and inventoried Dell laptop and desktop computers for employees using Microsoft Excel and Box, and used Slack for digital communication.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Imaged, upgraded, and deployed Dell and Lenovo laptop and desktop computers for Windows and Linux users through USB and the Fog Project (Linux).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Created users and managed permissions using best practices for Windows and Linux in both respective platforms.</span>
              </li>
            </ul>
            </div>
          </div>
          
          {/* More jobs (collapsed for brevity) */}
          <div className="mb-4">
            <button className="w-full py-3 px-4 bg-custom-dark-lighter rounded-lg text-primary-400 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center">
              View More Experience <span className="ml-2">+</span>
            </button>
          </div>
        </div>
      
        {/* Volunteer and ExtraCurricular */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <FaHandsHelping className="text-primary-500 text-2xl mr-3" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Volunteer & ExtraCurricular</h2>
          </div>
          
          <div className="mb-8 bg-custom-dark rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            <div className="p-6">
            <div className="mb-4 border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold text-white">Hack.Diversity, Boston, MA</h3>
              <div className="flex justify-between items-center">
                <p className="text-primary-400 font-medium">2024 Hack.Diversity Fellow</p>
                <span className="text-gray-400 text-sm">January 2024 - May 2024</span>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Selected into 2024 Hack.Diversity Fellowship, a career leadership and workforce development program integrating Boston's innovation, corporate, civic, academic, and philanthropic pillars.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Spearheaded the creation of a web portal for medical professionals to log X-rays and exam data for patients. Led a team of 6 software engineers to facilitate this project.</span>
              </li>
            </ul>
            </div>
          </div>
          
          <div className="mb-8 bg-custom-dark rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            <div className="p-6">
            <div className="mb-4 border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold text-white">Spring 2024 CyberTrust Competition Winner, Boston, MA</h3>
              <div className="flex justify-between items-center">
                <p className="text-primary-400 font-medium">Participant (1st)</p>
                <span className="text-gray-400 text-sm">January 2024 - May 2024</span>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Successfully completed the incident response capture the Flag (CTF), found various malicious attacks, provided remediation, and mapped the adversary's MITRE ATT&CK chain.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span>Presented findings in an executive briefing with a limited technical background. Leveraged technical knowledge of the adversary's attack along with their relation to the MITRE ATT&CK chain, and provided remediation and specific CIS benchmarks to help prevent similar future attacks.</span>
              </li>
            </ul>
            </div>
          </div>
          
          <div className="mb-4">
            <button className="w-full py-3 px-4 bg-custom-dark-lighter rounded-lg text-primary-400 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center">
              View More Activities <span className="ml-2">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;