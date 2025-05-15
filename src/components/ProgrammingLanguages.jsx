import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  FaGraduationCap, 
  FaPython, 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase, 
  FaReact, 
  FaTerminal,
  FaWindows
} from 'react-icons/fa';

function ProgrammingLanguages() {
    const iconColors = {
      python: '#3776AB',
      java: '#ED8B00',
      javascript: '#F7DF1E',
      typescript: '#3178C6',
      html: '#E34F26',
      css: '#1572B6',
      bash: '#4EAA25',
      powershell: '#5391FE',
      sql: '#4479A1',
      react: '#61DAFB'
    };

    // Define language items
    const languages = [
      { icon: FaPython, name: "Python", color: iconColors.python },
      { icon: FaJava, name: "Java", color: iconColors.java },
      { icon: FaJs, name: "JavaScript", color: iconColors.javascript },
      { icon: FaHtml5, name: "HTML", color: iconColors.html },
      { icon: FaCss3Alt, name: "CSS", color: iconColors.css },
      { icon: FaTerminal, name: "Bash", color: iconColors.bash },
      { icon: FaWindows, name: "PowerShell", color: iconColors.powershell },
      { icon: FaDatabase, name: "SQL", color: iconColors.sql },
      { icon: FaReact, name: "React", color: iconColors.react }
    ];
    
  return (
    <div className="mb-12">
        <div className="flex items-center mb-5">
        <FaGraduationCap className="text-primary-500 text-3xl mr-3" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Programming Languages</h2>
        </div>
        <div style={{
        position: 'relative',
        background: 'rgba(17, 24, 39, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(30, 41, 59, 0.8)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        padding: '1.5rem',
        paddingTop: 'calc(1.5rem + 9px)',
        overflow: 'hidden'
        }}>
        
        <style dangerouslySetInnerHTML={{ __html: `
            .icon-wrapper {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 0 30px;
              transition: transform 0.3s ease;
            }
            
            .icon-wrapper:hover {
              transform: translateY(-10px);
            }
            
            .icon-label {
              margin-top: 8px;
              font-size: 12px;
              color: #e2e8f0;
            }
        `}} />

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

        {/* Using react-fast-marquee for reliable infinite animation */}
        <Marquee
          speed={100}
          gradient={false}
          pauseOnHover={true}
          style={{ marginTop: '20px', height: '80px' }}
        >
          {languages.map((lang, index) => {
            const IconComponent = lang.icon;
            return (
              <div className="icon-wrapper" key={index}>
                <IconComponent size={40} color={lang.color} title={lang.name} />
                <span className="icon-label">{lang.name}</span>
              </div>
            );
          })}
        </Marquee>
        </div>
    </div>
  );
}

export default ProgrammingLanguages;