import React, { useState } from 'react';
import IconAnimation from './IconAnimation';

function AnimationTest() {
  const [speed, setSpeed] = useState(15);

  const updateSpeed = (newSpeed) => {
    setSpeed(newSpeed);

    // Update the animation duration in the CSS
    const styleElement = document.querySelector('.animation-style');
    if (styleElement) {
      const styles = styleElement.innerHTML;
      const updatedStyles = styles.replace(
        /animation: slideAnimation \d+s linear infinite/,
        `animation: slideAnimation ${newSpeed}s linear infinite`
      );
      styleElement.innerHTML = updatedStyles;
    }
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: '#0f172a',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        background: '#1e293b',
        borderRadius: '10px'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Animation Test Page
        </h1>

        <p style={{ color: 'white', marginBottom: '20px' }}>
          This isolated test environment allows you to experiment with animations without affecting other components.
        </p>

        <div style={{ marginBottom: '20px', padding: '15px', background: '#111827', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
            Animation Controls
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <label style={{ color: 'white', marginRight: '10px', width: '150px' }}>
              Animation Speed:
            </label>
            <input
              type="range"
              min="5"
              max="30"
              value={speed}
              onChange={(e) => updateSpeed(parseInt(e.target.value, 10))}
              style={{ flex: 1 }}
            />
            <span style={{ color: 'white', marginLeft: '10px', width: '40px', textAlign: 'right' }}>
              {speed}s
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => updateSpeed(5)}
              style={{
                padding: '8px 16px',
                background: speed === 5 ? '#3b82f6' : '#1f2937',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Fast
            </button>
            <button
              onClick={() => updateSpeed(15)}
              style={{
                padding: '8px 16px',
                background: speed === 15 ? '#3b82f6' : '#1f2937',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Medium
            </button>
            <button
              onClick={() => updateSpeed(25)}
              style={{
                padding: '8px 16px',
                background: speed === 25 ? '#3b82f6' : '#1f2937',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Slow
            </button>
          </div>
        </div>

        <IconAnimation initialSpeed={speed} />

        <div style={{ marginTop: '30px', padding: '15px', background: '#111827', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
            Notes on Implementation
          </h2>
          <ul style={{ color: 'white', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>
              The animation is implemented using CSS keyframes with controlled animation duration
            </li>
            <li style={{ marginBottom: '8px' }}>
              All CSS is scoped to this component to prevent global style conflicts
            </li>
            <li style={{ marginBottom: '8px' }}>
              The animation uses React Icons library for consistent, scalable icons
            </li>
            <li style={{ marginBottom: '8px' }}>
              Hover animations are implemented with CSS transitions for smooth effects
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnimationTest;