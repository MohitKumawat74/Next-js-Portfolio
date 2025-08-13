"use client";

import React, { useEffect } from 'react';

// Define the type for the article prop
interface Article {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
    img?: string; // Optional, in case the article has a different image field
    author?: string;
    date?: string;
}

const NewsClient = ({ article }: { article: Article }) => {
  // No need for useState since we can assume client-side rendering after useEffect
  useEffect(() => {
    // Any client-side initialization can go here if needed
  }, []);

  return (
    <div className="news-article flex justify-center items-center flex-col p-4 bg-gray-100 rounded-lg shadow-md mt-52">
      <h1>{article.title || 'No title available'}</h1>
      {article.images && article.images.length > 0 ? (
        <img className='w-[300px] h-auto rounded-lg shadow-md' src={article.images[0]} alt={article.title} />
      ) : article.img ? (
        <img className='w-[300px] h-auto rounded-lg shadow-md' src={article.img} alt={article.title} />
      ) : (
        <p>No image available</p>
      )}
      <p className='text-center font-sans text-2xl w-100'>{article.description || 'No description available'}</p>
      <p>{article.price ? `Price: $${article.price}` : 'No price available'}</p>
      {article.author && <p>By {article.author}</p>}
      {article.date && <p>Date: {article.date}</p>}
    </div>
  );
};

export default NewsClient;