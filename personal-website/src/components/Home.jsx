// src/components/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="text-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Brian Grier's Website</h1>
      <h2 className="text-2xl mb-4 text-center">A Brief Introduction</h2>
      <div className="bg-custom-dark p-4 rounded-lg shadow-md">
        <p className="text-lg">
          Hello! I'm Brian Grier, a passionate cybersecurity enthusiast and software developer. Currently pursuing a degree in Cybersecurity from Bridgewater State University, I have hands-on experience in various security tools and frameworks. This website is a showcase of my work, experiences, and skills. Feel free to explore and connect with me!
          <span className="mt-4 block text-center">P.S. I coded this entire website myself!</span>
        </p>
        <p className="mt-4 text-center">
          Thank you for visiting my website. If you have any questions or would like to collaborate, don't hesitate to reach out!
        </p>
      </div>
    </div>
  );
}

export default Home;