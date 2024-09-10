import React from 'react';
import myImage from '../../public/media/pfp.jpeg';

function Home() {
  return (
    <div className="text-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome To My Website</h1>
      
      {/* Add your image here */}
      <div className="flex justify-center mb-4">
        <img 
          src={myImage} 
          alt="pfp" 
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div>
      
      <h2 className="text-2xl mb-4 text-center">A Brief Introduction</h2>
      <div className="bg-custom-dark p-4 rounded-lg shadow-md">
        <p className="text-lg">
          Hello! I'm Brian Grier, a passionate cybersecurity enthusiast and software developer. Currently pursuing a degree in Cybersecurity from Bridgewater State University, I have hands-on experience in various security tools and frameworks. This website is a showcase of my work, experiences, and skills. Feel free to explore and connect with me!
        </p>
        <p className="mt-4 text-center">
        P.S. I coded this entire website myself!
        </p>
        <p className="mt-4 text-center">
          Thank you for visiting my website. If you have any questions or would like to collaborate, don't hesitate to reach out!
        </p>
      </div>
    </div>
  );
}

export default Home;