'use client';

import { useEffect, useState } from 'react';

type Post = {
  id: number | string;
  post?: string;
  body?: string;
    message?: string;
  createdAt?: string;
};

export default function GetApiPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchPosts() {
    try {
      const res = await fetch('http://localhost:5000/getapi');
      const data = await res.json();

      if (Array.isArray(data)) {
        setPosts(data);
      } else if (Array.isArray(data.posts)) {
        setPosts(data.posts);
      } else if (typeof data === 'object' && data !== null) {
        setPosts([data]); // Wrap single object into array
      } else {
        setPosts([]);
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-purple-800 animate-fadeIn">
        📜 Posts from API
      </h1>

      {loading ? (
        <p className="text-center text-lg text-gray-700 animate-pulse">
          Loading posts...
        </p>
      ) : posts.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No posts found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-pink-400 rounded-xl shadow-lg p-5 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-slideUp"
            >
              <h2 className="text-xl font-bold text-purple-700 mb-2">
                {post.post}
              </h2>
              <h3 className="text-lg font-semibold text-purple-600">{post.message}</h3>
              <p className="text-gray-700 mb-3">{post.body}</p>
              {post.createdAt && (
                <p className="text-sm text-gray-800">
                  📅 {new Date(post.createdAt).toLocaleString()}
                </p>
              )}
            </div>
            
          ))}
       
        </div>
        
      )}
    </main>
  );
}
        