"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Only detect sections on home page
      if (pathname === '/') {
        const sections = ['home', 'about', 'portfolio', 'news', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavigation = (item: { name: string; id: string; href: string }) => {
    if (pathname === '/' && item.href === '/') {
      // Scroll to section on home page
      const element = document.getElementById(item.id);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to different page or home with anchor
      if (item.href !== '/') {
        window.location.href = item.href;
      } else {
        window.location.href = `/#${item.id}`;
      }
    }
    closeMenu();
  };

  const menuItems = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About', id: 'about', href: '/about' },
    { name: 'Portfolio', id: 'portfolio', href: '/portfolio' },
    { name: 'News', id: 'news', href: '/news' },
    { name: 'Contact', id: 'contact', href: '/contact' }
  ];

  const getActiveState = (item: { name: string; id: string; href: string }) => {
    if (pathname === '/') {
      return activeSection === item.id;
    }
    return pathname === item.href;
  };
  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => handleNavigation({ name: 'Home', id: 'home', href: '/' })}
          >
            <Image 
              src="https://marketifythemes.net/html/grax/img/logo/dark.png" 
              alt="Logo" 
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto" 
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    getActiveState(item)
                      ? 'text-red-600' 
                      : scrolled 
                        ? 'text-gray-700 hover:text-red-600' 
                        : 'text-white hover:text-red-400'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: getActiveState(item) ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className={`relative w-8 h-8 flex flex-col justify-center items-center ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <motion.span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <motion.span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 top-16 bg-black/90 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-black/95 backdrop-blur-md z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col items-center justify-start pt-20 h-full space-y-8">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`text-2xl font-medium transition-colors duration-300 ${
                      getActiveState(item) ? 'text-red-400' : 'text-white hover:text-red-400'
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar