// src/components/Blog.jsx
import React from 'react';

const Blog = () => {
  return (
    <div className="w-full max-w-[98%] mx-auto p-2 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
        <article className="bg-custom-dark rounded-xl shadow-xl border border-custom-dark transition-all hover:shadow-blue-900/20 hover:shadow-2xl overflow-hidden">
          <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
          <div className="p-6">
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
        
        <article className="bg-custom-dark rounded-xl shadow-xl border border-custom-dark transition-all hover:shadow-blue-900/20 hover:shadow-2xl overflow-hidden">
          <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
          <div className="p-6">
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
        
        <article className="bg-custom-dark rounded-xl shadow-xl border border-custom-dark transition-all hover:shadow-blue-900/20 hover:shadow-2xl overflow-hidden">
          <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
          <div className="p-6">
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
  );
}

export default Blog;