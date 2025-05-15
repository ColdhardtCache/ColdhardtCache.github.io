import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  FaAward, 
  FaCogs, 
  FaLaptopCode, 
  FaWindows, 
  FaApple, 
  FaLinux, 
  FaDesktop
} from 'react-icons/fa';

function Skills() {
  // Define icon colors
  const iconColors = {
    windows: '#0078D6',
    apple: '#A2AAAD',
    linux: '#FCC624'
  };

  // Define operating systems with their icons
  const operatingSystems = [
    { 
      name: "Windows", 
      icon: FaWindows,
      color: iconColors.windows 
    },
    { 
      name: "MacOS", 
      icon: FaApple,
      color: iconColors.apple 
    },
    { 
      name: "Kali Linux", 
      icon: FaLinux,
      color: iconColors.linux 
    }
  ];

  // Define categories and their skills (without Tools)
  const skillCategories = [
    {
      title: "General Skills",
      icon: FaCogs,
      useIcons: false,
      useMarquee: true,
      items: ["Packet Analysis", "Communication", "Documentation", "Organization", "Optimization", "API Creation", "Automation"]
    },
    {
      title: "Frameworks",
      icon: FaLaptopCode,
      useIcons: false,
      useMarquee: true,
      items: ["NIST", "MITRE ATT&CK", "CIS"]
    },
    {
      title: "Operating Systems",
      icon: FaDesktop,
      useIcons: true,
      useMarquee: false,
      items: operatingSystems
    }
  ];

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
        <style dangerouslySetInnerHTML={{ __html: `
          .skill-badge {
            display: inline-flex;
            align-items: center;
            padding: 8px 16px;
            margin: 8px;
            background: rgba(59, 130, 246, 0.2);
            border-radius: 50px;
            border: 1px solid rgba(59, 130, 246, 0.3);
            transition: all 0.3s ease;
            cursor: default;
          }
          
          .skill-badge:hover {
            transform: translateY(-5px);
            background: rgba(59, 130, 246, 0.3);
            border-color: rgba(59, 130, 246, 0.5);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          
          .section-header {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
          }
          
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

          .static-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            justify-content: left;
            padding: 10px 0;
          }
          
          .static-icon {
            margin: 10px 20px;
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
        
        <div className="flex flex-col space-y-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index}>
                <div className="section-header">
                  <IconComponent className="text-primary-400 text-xl mr-2" />
                  <h3 className="text-lg font-semibold text-primary-400">{category.title}</h3>
                </div>
                
                {category.useMarquee ? (
                  // Use marquee for scrolling animation
                  <Marquee
                    speed={100}
                    gradient={false}
                    pauseOnHover={true}
                    direction={index % 2 === 0 ? "left" : "right"}
                  >
                    {category.useIcons ? (
                      // Render items with icons
                      category.items.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <div className="icon-wrapper" key={itemIndex}>
                            <ItemIcon size={40} color={item.color} title={item.name} />
                            <span className="icon-label">{item.name}</span>
                          </div>
                        );
                      })
                    ) : (
                      // Render regular skills as badges
                      category.items.map((skill, itemIndex) => (
                        <div className="skill-badge" key={itemIndex}>
                          <span className="text-gray-200">{skill}</span>
                        </div>
                      ))
                    )}
                  </Marquee>
                ) : (
                  // Use static display for Operating Systems
                  <div className="static-skills">
                    {category.useIcons ? (
                      // Static display with icons (for OS)
                      category.items.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <div className="icon-wrapper static-icon" key={itemIndex}>
                            <ItemIcon size={40} color={item.color} title={item.name} />
                            <span className="icon-label">{item.name}</span>
                          </div>
                        );
                      })
                    ) : (
                      // Static display without icons
                      category.items.map((skill, itemIndex) => (
                        <div className="skill-badge" key={itemIndex}>
                          <span className="text-gray-200">{skill}</span>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;