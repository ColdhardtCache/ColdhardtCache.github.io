import React from 'react';
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaReact, FaNode } from 'react-icons/fa';
import { SiPowershell, SiBash, SiTailwindcss, SiTypescript } from 'react-icons/si';

// Simple component just for testing animations
function IconAnimation({ initialSpeed = 15 }) {
  // CSS defined only inside this component
  const styles = `
    @keyframes slideAnimation {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }

    .animation-container {
      background: #1a1a1a;
      padding: 20px;
      border-radius: 10px;
      margin: 20px 0;
      overflow: hidden;
      position: relative;
      height: 100px;
    }

    .sliding-element {
      display: flex;
      align-items: center;
      position: absolute;
      animation: slideAnimation ${initialSpeed}s linear infinite;
      white-space: nowrap;
      will-change: transform;
    }

    .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 30px;
      transition: transform 0.3s ease;
    }

    .icon-wrapper:hover {
      transform: translateY(-10px);
    }
  `;

  // Define icon colors
  const iconColors = {
    python: '#3776AB',
    java: '#ED8B00',
    javascript: '#F7DF1E',
    html: '#E34F26',
    css: '#1572B6',
    bash: '#4EAA25',
    powershell: '#5391FE',
    sql: '#4479A1',
    react: '#61DAFB',
    node: '#339933',
    tailwind: '#06B6D4',
    typescript: '#3178C6'
  };

  return (
    <div className="p-6 bg-gray-800 text-white">
      <style className="animation-style" dangerouslySetInnerHTML={{ __html: styles }} />
      <h1 className="text-2xl mb-4">Programming Language Icons Animation Test</h1>
      <div className="animation-container">
        <div className="sliding-element">
          {/* First set of programming language icons */}
          <div className="icon-wrapper">
            <FaPython size={60} color={iconColors.python} title="Python" />
          </div>
          <div className="icon-wrapper">
            <FaJava size={60} color={iconColors.java} title="Java" />
          </div>
          <div className="icon-wrapper">
            <FaJs size={60} color={iconColors.javascript} title="JavaScript" />
          </div>
          <div className="icon-wrapper">
            <FaHtml5 size={60} color={iconColors.html} title="HTML" />
          </div>
          <div className="icon-wrapper">
            <FaCss3Alt size={60} color={iconColors.css} title="CSS" />
          </div>
          <div className="icon-wrapper">
            <SiBash size={60} color={iconColors.bash} title="Bash" />
          </div>
          <div className="icon-wrapper">
            <SiPowershell size={60} color={iconColors.powershell} title="PowerShell" />
          </div>
          <div className="icon-wrapper">
            <FaDatabase size={60} color={iconColors.sql} title="SQL" />
          </div>
          <div className="icon-wrapper">
            <FaReact size={60} color={iconColors.react} title="React" />
          </div>
          <div className="icon-wrapper">
            <FaNode size={60} color={iconColors.node} title="Node.js" />
          </div>
          <div className="icon-wrapper">
            <SiTailwindcss size={60} color={iconColors.tailwind} title="Tailwind CSS" />
          </div>
          <div className="icon-wrapper">
            <SiTypescript size={60} color={iconColors.typescript} title="TypeScript" />
          </div>

          {/* Duplicate icons for continuous animation */}
          <div className="icon-wrapper">
            <FaPython size={60} color={iconColors.python} title="Python" />
          </div>
          <div className="icon-wrapper">
            <FaJava size={60} color={iconColors.java} title="Java" />
          </div>
          <div className="icon-wrapper">
            <FaJs size={60} color={iconColors.javascript} title="JavaScript" />
          </div>
          <div className="icon-wrapper">
            <FaHtml5 size={60} color={iconColors.html} title="HTML" />
          </div>
          <div className="icon-wrapper">
            <FaCss3Alt size={60} color={iconColors.css} title="CSS" />
          </div>
          <div className="icon-wrapper">
            <SiBash size={60} color={iconColors.bash} title="Bash" />
          </div>
          <div className="icon-wrapper">
            <SiPowershell size={60} color={iconColors.powershell} title="PowerShell" />
          </div>
          <div className="icon-wrapper">
            <FaDatabase size={60} color={iconColors.sql} title="SQL" />
          </div>
        </div>
      </div>
      <p>This is a simple, isolated animation test with no dependencies on other CSS. Hover over icons to see the hover effect.</p>
    </div>
  );
}

export default IconAnimation;