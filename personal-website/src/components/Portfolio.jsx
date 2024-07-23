

function Portfolio() {
  return (
    <>

      <main className="container mx-auto p-4 pt-20">
        <h1 className="text-center text-4xl font-bold mb-4">Computer Science Project History</h1>
        <h2 className="text-center text-2xl mb-4">My Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-custom-dark shadow-md rounded-lg">
            <a href="https://github.com/matt-connors/citation-generator" className="text-xl font-semibold hover:underline">Citation Generator</a>
            <p className="mt-2">
              In this project, a buddy and I created a citation generator to produce multiple styles of citations for websites, books, and journals for a web development class. Eventually, YouTube citations will be added. Visit <a href="https://mlagenerator.com/" target="_blank" className="text-blue-500 hover:underline">mlagenerator.com</a> to use it!
            </p>
          </div>
          <div className="p-4 bg-custom-dark shadow-md rounded-lg">
            <a href="https://github.com/B-IJoe1/TechMinds" className="text-xl font-semibold hover:underline">TechMinds Patient X-Ray Tracker</a>
            <p className="mt-2">
              During my time at Hack.Diversity, I led a team of 6 full-stack engineers to create a portal for medical professionals to track X-ray information for their patients. This project was created using the MERN stack! More information can be found <a href="https://youtu.be/0apNoHeJ7gI" target="_blank" className="text-blue-500 hover:underline">HERE</a>.
            </p>
          </div>
          <div className="p-4 bg-custom-dark shadow-md rounded-lg">
            <a href="https://www.cybertrustmass.org/" className="text-xl font-semibold hover:underline">CyberTrust API Project</a>
            <p className="mt-2">
              In this project, I helped facilitate the creation of an API project used to automate calls to the SentinelOne API. This project was also used to automate reporting for incidents, alerts, and Quarterly Business Reports. It is a full-stack Python program for the private company CyberTrust and cannot be viewed due to being proprietary.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-center text-2xl font-bold mb-4">Relevant Coursework</h2>
          <h3 className="text-center text-xl mb-2">
            <a href="https://www.bridgew.edu/academics/majors-minors-undergraduate/computer-science" target="_blank" className="text-blue-500 hover:underline">
              Computer Science/Cybersecurity
            </a>
          </h3>
          <p className="text-center mb-4">All classes listed were taken at Bridgewater State University. Click above for more information!</p>
          <ul className="list-disc pl-5">
            <li>Computer Science I & II (Python & Java Programming)</li>
            <li>Intro Computer Organization (Assembly and C++ programming, memory management)</li>
            <li>Data Structures and Algorithms (Python based)</li>
            <li>Applied Cryptography (Research/Program/Understand common methods of Cryptography)</li>
            <li>Computer Forensics (Incident Response & Disaster Recovery)</li>
            <li>Web Development (Javascript / React Programming)</li>
            <li>Internship in Computer Science / Cybersecurity (Document experience working at CyberTrust Mass)</li>
            <li>Network Security (In progress)</li>
            <li>Intro to Database Systems (In progress)</li>
            <li>Software Engineering (In progress)</li>
            <li>Mobile Device Forensics (In progress)</li>
          </ul>
        </div>
      </main>

      <footer className="text-center p-4 bg-gray-100">
        © 2024 by Brian Grier. All Rights Reserved.
      </footer>
    </>
  );
}

export default Portfolio;
