import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  FaTools, 
  FaNetworkWired, 
  FaSearch, 
  FaMicrosoft, 
  FaGithub, 
  FaJira, 
  FaSlack, 
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaFileAlt,
  FaBrain,
  FaChartLine,
  FaExchangeAlt,
  FaMicroscope
} from 'react-icons/fa';

function Tools() {
  // Define tools with their icons and categories
  const tools = [
    { 
      name: "Wireshark", 
      icon: FaNetworkWired, 
      color: "#1679A7" // Wireshark blue
    },
    { 
      name: "Forensic Tool Kit (FTK)", 
      icon: FaSearch, 
      color: "#D64B00" // Orange for forensics
    },
    { 
      name: "Microsoft Office 365", 
      icon: FaMicrosoft, 
      color: "#0078D4" // Microsoft blue
    },
    { 
      name: "Git/GitHub", 
      icon: FaGithub, 
      color: "#6e5494" // GitHub purple
    },
    { 
      name: "ServiceNow", 
      icon: FaExchangeAlt, 
      color: "#81B5A1" // ServiceNow green
    },
    { 
      name: "Jira", 
      icon: FaJira, 
      color: "#0052CC" // Jira blue
    },
    { 
      name: "Visual Studio Code", 
      icon: FaCode, 
      color: "#007ACC" // VS Code blue
    },
    { 
      name: "KnowledgeBase", 
      icon: FaFileAlt, 
      color: "#5BC236" // Green for knowledge
    },
    { 
      name: "Slack", 
      icon: FaSlack, 
      color: "#4A154B" // Slack purple
    },
    { 
      name: "MongoDB", 
      icon: FaDatabase, 
      color: "#47A248" // MongoDB green
    },
    { 
      name: "PostgreSQL", 
      icon: FaDatabase, 
      color: "#336791" // PostgreSQL blue
    },
    { 
      name: "Postman", 
      icon: FaExchangeAlt, 
      color: "#FF6C37" // Postman orange
    },
    { 
      name: "Xmind", 
      icon: FaBrain, 
      color: "#FF5252" // Xmind red
    },
    { 
      name: "SentinelOne", 
      icon: FaShieldAlt, 
      color: "#00AEEF" // SentinelOne blue
    },
    { 
      name: "Splunk", 
      icon: FaChartLine, 
      color: "#FF375F" // Splunk red
    },
    { 
      name: "ImmersiveLabs", 
      icon: FaMicroscope, 
      color: "#7F31E4" // Purple for learning
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center mb-5">
        <FaTools className="text-primary-500 text-3xl mr-3" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Tools</h2>
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
          .tool-badge {
            display: inline-flex;
            align-items: center;
            padding: 10px 20px;
            margin: 10px;
            background: rgba(59, 130, 246, 0.15);
            border-radius: 50px;
            border: 1px solid rgba(59, 130, 246, 0.25);
            transition: all 0.3s ease;
            cursor: default;
          }
          
          .tool-badge:hover {
            transform: translateY(-5px);
            background: rgba(59, 130, 246, 0.25);
            border-color: rgba(59, 130, 246, 0.35);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          
          .tool-icon {
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .tool-name {
            font-size: 14px;
            color: #e2e8f0;
            font-weight: 500;
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
        
        <Marquee
          speed={100}
          gradient={false}
          pauseOnHover={true}
          direction="right"
        >
          {tools.map((tool, index) => {
            const ToolIcon = tool.icon;
            return (
              <div className="tool-badge" key={index}>
                <div className="tool-icon">
                  <ToolIcon size={20} color={tool.color} />
                </div>
                <span className="tool-name">{tool.name}</span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Tools;