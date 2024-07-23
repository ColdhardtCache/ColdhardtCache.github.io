// src/components/Blog.jsx
import React from 'react';

const Blog = () => {
  return (
    <div id="blog" className="container mx-auto p-4 bg-custom-dark rounded-lg shadow-md mt-4 text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <article className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">My First Blog Post</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
        <p className="text-gray-400">Posted on July 20, 2024</p>
      </article>
      <article className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Another Day in Cybersecurity</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
        <p className="text-gray-400">Posted on July 21, 2024</p>
      </article>
      {/* Add more blog posts as needed */}
    </div>
  );
}

export default Blog;