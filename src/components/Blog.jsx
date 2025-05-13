// src/components/Blog.jsx
import React from 'react';

const Blog = () => {
  return (
    <div style={{
      width: '100%',
      padding: '2rem 0',
      color: 'white',
      position: 'relative'
    }}>
      <div style={{
        width: '98%',
        maxWidth: '1800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Blog
        </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
        width: '100%'
      }}>
        <article style={{
          position: 'relative',
          background: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(30, 41, 59, 0.8)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          transform: 'translateY(0)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(59, 130, 246, 0.3)';
          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
          e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.8)';
        }}>
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
          <div className="p-6" style={{paddingTop: 'calc(1.5rem + 3px)'}}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-400">Cybersecurity</span>
            <span className="text-gray-400 text-sm">July 20, 2024</span>
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-white">My First Blog Post</h2>
          <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium text-sm hover:from-primary-500 hover:to-secondary-500 transition-all">
              Read More
            </button>
          </div>
          </div>
        </article>
        
        <article style={{
          position: 'relative',
          background: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(30, 41, 59, 0.8)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          transform: 'translateY(0)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(139, 92, 246, 0.3)';
          e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
          e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.8)';
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '9px',
            background: 'linear-gradient(to right, #8b5cf6, #c4b5fd)',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px'
          }}></div>
          <div className="p-6" style={{paddingTop: 'calc(1.5rem + 3px)'}}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary-500/10 text-secondary-400">Development</span>
            <span className="text-gray-400 text-sm">July 21, 2024</span>
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-white">Another Day in Cybersecurity</h2>
          <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium text-sm hover:from-primary-500 hover:to-secondary-500 transition-all">
              Read More
            </button>
          </div>
          </div>
        </article>
        
        <article style={{
          position: 'relative',
          background: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(30, 41, 59, 0.8)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          transform: 'translateY(0)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(74, 222, 128, 0.3)';
          e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
          e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.8)';
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '9px',
            background: 'linear-gradient(to right, #4ade80, #a7f3d0)',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px'
          }}></div>
          <div className="p-6" style={{paddingTop: 'calc(1.5rem + 3px)'}}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-400">Research</span>
            <span className="text-gray-400 text-sm">July 22, 2024</span>
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-white">The Future of AI in Security</h2>
          <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium text-sm hover:from-primary-500 hover:to-secondary-500 transition-all">
              Read More
            </button>
          </div>
          </div>
        </article>
      </div>
      </div>
    </div>
  );
}

export default Blog;