"use client";

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"; // Importing framer-motion for animations

interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="relative min-h-screen mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10 z-0"></div>

      <div className="container mx-auto z-10 relative mt-20">
        <h1 className="text-5xl font-bold text-white text-center mb-10 tracking-wider">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-shadow-md"
          >
            Latest Posts
          </motion.span>
        </h1>

        {posts.length === 0 ? (
          <p className="text-white text-xl text-center animate-pulse">Loading posts...</p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <motion.li
                key={post.id}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2
                  className="text-3xl font-semibold text-indigo-600 mb-4"
                  whileHover={{ scale: 1.01 }}
                >
                  {post.title}
                </motion.h2>
                <p className="text-gray-600 text-lg">{post.body}</p>
                <motion.p
                  className="text-gray-500 text-sm mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {post.createdAt}
                </motion.p>
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {/* Animated Footer */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">
        <motion.span
          animate={{
            y: [0, -10, 0], // Bouncing animation
          }}
        >
          Explore more posts
        </motion.span>
      </div>

      {/* Animated Footer */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">
        <motion.span
          animate={{
            y: [0, -10, 0], // Bouncing animation
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1,
            ease: "easeInOut",
          }}
        >
          Explore more posts
        </motion.span>
      </div>
    </div>
  );
};

export default PostsPage;
