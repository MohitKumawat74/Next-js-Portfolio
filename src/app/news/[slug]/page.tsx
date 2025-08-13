// "use client";

import React from 'react';
import NewsClient from '@/components/NewsClient';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  productId?: number; // Optional, in case the product has a different ID field
}

interface Params {
  slug: string; // The slug parameter is passed to the page
}

// Metadata generation
export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  // Fetch all products to find the one matching the slug
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const article = data.products.find(
    (product: Product) => product.id.toString() === slug
  );

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

// Static params generation for SSG
export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  const paths = data.products.map((product: Product) => ({
    slug: product.title.toLowerCase().replace(/ /g, '-'),
  }));

  return paths;
}

// News Page component (Server-side rendering)
const NewsPage = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params;

  // Fetch all products and find the one matching the slug
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const article = data.products.find(
    (product: Product) => product.id.toString() === slug
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <NewsClient article={article} />
    </div>
  );
};

export default NewsPage;
