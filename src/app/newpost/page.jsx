"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [body, setBody] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id || !title || !body || !createdAt || id.trim() === '' || title.trim() === '' || body.trim() === '' || createdAt.trim() === '') {
      setStatus('Please fill out all fields!');
      return;
    }

    const newPost = {
      id,
      title,
      body,
      createdAt
    };

    try {
      const res = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Post created successfully!');
        setTitle('');
        setBody('');
        setCreatedAt('');
        setId('');
      } else {
        setStatus('Failed to create post');
      }
    } catch (error) {
      setStatus('Error occurred, try again!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-indigo-800 mb-6">Create a New Post</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="id">
              ID
            </label>
            <input
              id="id"
              type="number"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="body">
              Body
            </label>
            <textarea
              id="body"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="createdAt">
              Created At
            </label>
            <input
              id="createdAt"
              type="date"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              value={createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit
          </motion.button>
        </form>

        {status && (
          <p className={`mt-4 text-center ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
