"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Alan's expertise in React and Next.js helped us build a scalable platform that handles millions of users. His attention to detail and problem-solving skills are exceptional.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateNow",
      content: "Working with Alan was a game-changer for our startup. He delivered a beautiful, performant web application ahead of schedule and within budget.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "DesignCorp",
      content: "Alan's ability to translate complex requirements into clean, maintainable code is impressive. He's a true professional who goes above and beyond.",
      avatar: "👩‍🎨",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "NextGen Solutions",
      content: "I've worked with many developers, but Alan stands out for his technical expertise and communication skills. He made our vision a reality.",
      avatar: "👨‍🚀",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "GrowthLab",
      content: "The website Alan built for us increased our conversion rate by 300%. His understanding of both technical and business requirements is remarkable.",
      avatar: "👩‍💼",
      rating: 5
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What My <span className="text-red-500">Clients</span> Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional results
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-100 mb-8 italic leading-relaxed">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-red-400">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white text-xl transition-colors duration-300 z-10"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white text-xl transition-colors duration-300 z-10"
          >
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '20+', label: 'Years Experience' },
            { number: '99%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-gray-300 mb-8">
            Let&apos;s discuss your project and create something amazing together
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
