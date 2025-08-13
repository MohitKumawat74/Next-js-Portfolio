"use client";

import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

interface HeroProps {
  showContent: boolean;
}

const Hero: React.FC<HeroProps> = ({ showContent }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      id="home" 
      className='flex flex-col justify-center items-start min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 pt-16 md:pt-20 text-red-600 relative overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-red-500/15 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-16 h-16 bg-red-500/20 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="content w-full max-w-6xl relative z-10">
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Main Heading */}
            <motion.div className="mb-6">
              <motion.span 
                className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light block mb-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Hello, I&apos;m
              </motion.span>
              
              <TypewriterText 
                text="Alan Walker" 
                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-bold leading-tight bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent'
                delay={1200}
              />
              
              <TypewriterText 
                text="Full-Stack Developer & UI/UX Designer" 
                className='text-lg sm:text-xl md:text-2xl lg:text-3xl italic pl-1 font-cursive text-gray-600 mt-3 md:mt-6'
                delay={3500}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              Passionate about creating exceptional digital experiences with modern technologies. 
              Specialized in React, Next.js, and innovative web solutions that drive business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              <motion.button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg font-semibold text-base md:text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 }}
            >
              {[
                { name: 'GitHub', icon: '🔗', url: 'https://github.com' },
                { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
                { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
                { name: 'Dribbble', icon: '🎨', url: 'https://dribbble.com' },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2 + index * 0.1 }}
                >
                  <span className="text-lg group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      {showContent && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-red-500 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;