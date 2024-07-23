import React from 'react';

function Resume() {
  return (
    <div className="container mx-auto p-4 pt-20 bg-custom-dark text-white">
      <h1 className="text-center text-4xl font-bold mb-5 text-white">Brian Grier</h1>
      <p className="text-center mb-2 text-gray-200">508-375-1373 ∙ brian.grier16@gmail.com ∙ Bridgewater, MA 02325</p>
      <p className="text-center mb-5">
        <a href="https://github.com/coldhardtcache" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
          https://github.com/coldhardtcache
        </a>
      </p>
      
      {/* Education */}
      <div className="border-b border-gray-600 pb-4 mb-4">
        <h2 className="text-2xl font-bold mt-5 text-white">Education</h2>
        <p className="text-gray-200"><strong>Bridgewater State University, Bridgewater, MA</strong></p>
        <p className="text-gray-200">Bachelor of Science degree in Cybersecurity <strong>Expected Graduation: May 2026</strong></p>
      </div>
      
      {/* Technical Skills */}
      <div className="border-b border-gray-600 pb-4 mb-4">
        <h2 className="text-2xl font-bold mt-5 text-white">Technical Skills</h2>
        <ul className="list-disc pl-5 text-gray-200">
          <li><strong>General Skills:</strong> Packet Analysis, Communication, Documentation, Organization, Optimization, API Creation and Automation</li>
          <li><strong>Frameworks:</strong> NIST, MITRE ATT&CK, CIS</li>
          <li><strong>Programming Languages:</strong> Python, Java, CSS, HTML, JavaScript, Bash, Powershell, SQL</li>
          <li><strong>Tools:</strong> Wireshark, Forensic Tool Kit (FTK), Microsoft Office 365, Git/GitHub, ServiceNow, Jira, Visual Studio Code, KnowledgeBase, Slack, MongoDB, PostgreSQL, Postman, Xmind, SentinelOne, Splunk, ImmersiveLabs</li>
          <li><strong>OS:</strong> Windows, MacOS, Kali Linux</li>
        </ul>
      </div>
      
      {/* Certifications and Awards */}
      <div className="border-b border-gray-600 pb-4 mb-4">
        <h2 className="text-2xl font-bold mt-5 text-white">Certifications and Awards</h2>
        <ul className="list-disc pl-5 text-gray-200">
          <li>ISC2 Certified in Cybersecurity (CC) <strong className="text-gray-300">Issued Feb 2024 - Expires Feb 2027</strong></li>
          <li>CompTIA Security+ <strong className="text-gray-300">Issued Jul 2024 - Expires Jul 2027</strong></li>
        </ul>
      </div>
      
      {/* Professional Experience */}
      <div className="border-b border-gray-600 pb-4 mb-4">
        <h2 className="text-2xl font-bold mt-5 text-white">Professional Experience</h2>
        
        {/* CyberTrust */}
        <h4 className="text-xl font-semibold mt-4 text-white">CyberTrust, Bridgewater, MA</h4>
        <h5 className="text-lg font-medium text-gray-200">SOC Analyst (Intern) <span className="text-gray-300">March 2024 - Present</span></h5>
        <ul className="list-disc pl-5 text-gray-200">
          <li>Facilitated the creation of a Python API project leveraging SentinelOne API to automate client account creation, deployment, and reporting for Quarterly Business Reports.</li>
          <li>Conducted security assessments for towns and municipalities in Plymouth county to understand customer risk posture and create remediation efforts for under-resourced entities.</li>
          <li>Created and maintained documentation including runbooks and playbooks on EDR software installation, onboarding, use, and troubleshooting for client and internal use.</li>
          <li>Managed and deployed SentinelOne EDR to multiple municipalities in Plymouth county.</li>
          <li>Provided clear communication, transparency, and technical support as the first point of contact and Liaison for CyberTrust and specific municipality relations.</li>
        </ul>
        
        {/* Berkshire Grey */}
        <h4 className="text-xl font-semibold mt-4 text-white">Berkshire Grey, Bedford, MA</h4>
        <h5 className="text-lg font-medium text-gray-200">Desktop Engineer (Co-op) <span className="text-gray-300">February 2023 – April 2023</span></h5>
        <ul className="list-disc pl-5 text-gray-200">
          <li>Provided internal desktop support at a startup focused on intelligent robot automation.</li>
          <li>Refurbished, provisioned, and inventoried Dell laptop and desktop computers for employees using Microsoft Excel and Box, and used Slack for digital communication.</li>
          <li>Imaged, upgraded, and deployed Dell and Lenovo laptop and desktop computers for Windows and Linux users through USB and the Fog Project (Linux).</li>
          <li>Created users and managed permissions using best practices for Windows and Linux in both respective platforms.</li>
        </ul>
        
        {/* CyberArk */}
        <h4 className="text-xl font-semibold mt-4 text-white">CyberArk, Newton, MA</h4>
        <h5 className="text-lg font-medium text-gray-200">Cybersecurity Support Intern <span className="text-gray-300">June 2022 - September 2022</span></h5>
        <ul className="list-disc pl-5 text-gray-200">
          <li>Assisted the Head of Support Operations for the leader in identity security and access management (IAM).</li>
          <li>Managed Global on-call schedule for all regions (US, ASIA, EUROPE, etc.)</li>
          <li>Validated user credentials and managed privilege access through group policy in Active Directory.</li>
          <li>Leveraged Salesforce ticketing services to resolve problems for partners and customers. Debugged and tested Salesforce code controlling ticket priority and other features.</li>
          <li>Learned how to perform basic cybersecurity attacks like the Man-in-the-Middle attack on Linux and Windows.</li>
        </ul>
        
        {/* IT Service Center */}
        <h4 className="text-xl font-semibold mt-4 text-white">IT Service Center, Bridgewater State University, Bridgewater, MA</h4>
        <h5 className="text-lg font-medium text-gray-200">Customer Support Agent <span className="text-gray-300">February 2022 - December 2022</span></h5>
        <ul className="list-disc pl-5 text-gray-200">
          <li>First point of contact for support operations for a university with 11,000 students, faculty, and staff.</li>
          <li>Managed and troubleshot students' and faculty Multi-Factor Authentication using Microsoft Azure and after the switch to Microsoft Authenticator.</li>
          <li>Troubleshot Windows and Mac devices using standard OSI layer methodology.</li>
          <li>Remotely managed and configured user credentials using Active Directory.</li>
          <li>Submitted and resolved tickets using TeamDynamix.</li>
          <li>Provided end-user support both over the phone using Microsoft Teams and through remote chat using Zendesk.</li>
        </ul>
      </div>
      
      {/* Volunteer and ExtraCurricular */}
      <div>
        <h2 className="text-2xl font-bold mt-5 text-white">Volunteer and ExtraCurricular</h2>
        
        <h4 className="text-xl font-semibold mt-4 text-white">Hack.Diversity, Boston, MA</h4>
        <h5 className="text-lg font-medium text-gray-200">2024 Hack.Diversity Fellow <span className="text-gray-300">January 2024 - May 2024</span></h5>
        <ul className="list-disc pl-5 text-gray-200">
          <li>Selected into 2024 Hack.Diversity Fellowship, a career leadership and workforce development program integrating Boston's innovation, corporate, civic, academic, and philanthropic pillars.</li>
          <li>Spearheaded the creation of a web portal for medical professionals to log X-rays and exam data for patients. Led a team of 6 software engineers to facilitate this project.</li>
        </ul>
        
        <h4 className="text-xl font-semibold mt-4 text-white">MassCyberCenter Cybersecurity Mentorship Program</h4>
        <h5 className="text-lg font-medium text-gray-200"><span className="text-gray-300">February 2023 – July 2023</span></h5>
        <ul className="list-disc pl-5 text-gray-200">
          <li>Assigned a mentor with a background in cybersecurity to discuss how to advance a career in cybersecurity.</li>
          <li>Created a daily practice routine to develop new skills in information security.</li>
          <li>Researched and presented common red team approaches to cybersecurity for cohorts.</li>
        </ul>
        
        <h4 className="text-xl font-semibold mt-4 text-white">Spring 2024 CyberTrust Competition Winner, Boston, MA</h4>
        <h5 className="text-lg font-medium text-gray-200">Participant (1st) <span className="text-gray-300">January 2024 - May 2024</span></h5>
        <ul className="list-disc pl-5 text-gray-200">
          <li>Successfully completed the incident response capture the Flag (CTF), found various malicious attacks, provided remediation, and mapped the adversary's MITRE ATT&CK chain.</li>
          <li>Presented findings in an executive briefing with a limited technical background. Leveraged technical knowledge of the adversary's attack along with their relation to the MITRE ATT&CK chain, and provided remediation and specific CIS benchmarks to help prevent similar future attacks.</li>
        </ul>
        
        <h4 className="text-xl font-semibold mt-4 text-white">Fall 2023 CyberTrust Inaugural Competition Finisher, Boston, MA</h4>
        <h5 className="text-lg font-medium text-gray-200">Participant (1st) <span className="text-gray-300">January 2024 - May 2024</span></h5>
        <ul className="list-disc pl-5 text-gray-200">
          <li>Successfully investigated and mitigated a live-fire ransomware attack on an enterprise-level network.</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;