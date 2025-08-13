'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PostFormPage() {
  const [id, setId] = useState('');
  const [post, setPost] = useState('');
  const [body, setBody] = useState('');
  const [createdAt, setCreatedAt] = useState('');
//   const [apiMessage, setApiMessage] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newPost = {
      id,
      post,
      body,
      createdAt,
    };

    try {
      const res = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

  await res.json();

      if (res.ok) {
        setMessage('Post created successfully!');
        setId('');
        setPost('');
        setBody('');
        setCreatedAt('');
      } else {
        setMessage('Failed to create post');
      }
    } catch {
      setMessage('Error occurred, try again!');
    }
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
          ✏️ Create a Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ID */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Post Title */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Post Title</label>
            <input
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Body */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Body</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
            {/* Message */} 
            <div>
              <label className="block font-medium mb-1 text-gray-700">Message</label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

          {/* Created At */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Created At</label>
            <input
              type="datetime-local"
              value={createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all duration-300"
          >
            🚀 Submit
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-green-600 text-center font-medium"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </main>
  );
}
