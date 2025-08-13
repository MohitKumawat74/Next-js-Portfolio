"use client";

import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import LoadingScreen from '../components/LoadingScreen';
import MagicCursor from '../components/MagicCursor';
import Hero from '../components/Hero';
import SkillsServices from '../components/SkillsServices';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';


const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (showContent) {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 1000,
          once: true,   
          easing: 'ease-in-out',
          offset: 50, // Reduced offset for better mobile experience
          disable: function() {
            const maxWidth = 768;
            return window.innerWidth < maxWidth;
          }
        });
      });
    }
  }, [showContent]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  const articles = [
    {
      id: 1,
      img: "https://marketifythemes.net/html/grax/img/news/1.jpg",
      title: "Developers watch out for these burnout symptoms",
      author: "Alex Watson",
      date: "01 January 2022"
    },
    {
      id: 2,
      img: "https://marketifythemes.net/html/grax/img/news/2.jpg",
      title: "How to be appreciated for your hard work as a developer",
      author: "Brook Kennedy",
      date: "22 December 2021"
    },
    {
      id: 3,
      img: "https://marketifythemes.net/html/grax/img/news/3.jpg",
      title: "How designers and developers can collaborate better",
      author: "Paola Atkins",
      date: "05 December 2021"
    }
  ];

  

  return (
    <>
      <MagicCursor />
      <div className="home bg-home" style={{ cursor: 'none' }}>

      {/* Enhanced Hero Section */}
      <Hero showContent={showContent} />

      <section id="about" className="about bg-white flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 py-16 md:py-20 gap-8 lg:gap-12">
        <div className="left">
          <Image
            src="https://marketifythemes.net/html/grax/img/about/1.jpg"
            alt="About Mohit Kumawat"
            width={400}
            height={500}
            className='object-cover w-full max-w-[400px] sm:max-w-[450px] h-[350px] sm:h-[400px] lg:h-[500px] rounded-[10px] shadow-lg'
            data-aos="fade-right"
            priority
          />
        </div>
        <div className="right w-full lg:w-1/2 xl:w-3/5 px-2 sm:px-0">
          <div className="mb-6 text-center lg:text-left">
            <span className='abt uppercase block sm:inline' data-aos="zoom-in-left">About</span>
            <span className='abt uppercase sm:ml-4 block sm:inline' data-aos="zoom-in-left">Me</span>
          </div>
          <p className='mt-4 text-sm sm:text-base md:text-lg text-gray-400 tracking-wide leading-relaxed text-center lg:text-left' data-aos="zoom-in-left" data-aos-delay="200">
            Hello! I am Mohit Kumawat. I am a web developer, and Iam very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
          </p>

          <div className="points mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div className='flex items-center justify-center lg:justify-start'>
              <span className='text-red-500 mr-2'>👉</span>
              <p className='text-sm sm:text-base md:text-lg font-semibold' data-aos="zoom-in-right">Web Development</p>
            </div>
            <div className='flex items-center justify-center lg:justify-start'>
              <span className='text-red-500 mr-2'>👉</span>
              <p className='text-sm sm:text-base md:text-lg font-semibold' data-aos="zoom-in-left">UI/UX Design</p>
            </div>
            <div className='flex items-center justify-center lg:justify-start'>
              <span className='text-red-500 mr-2'>👉</span>
              <p className='text-sm sm:text-base md:text-lg font-semibold' data-aos="zoom-in-right">Mobile App Development</p>
            </div>
            <div className='flex items-center justify-center lg:justify-start'>
              <span className='text-red-500 mr-2'>👉</span>
              <p className='text-sm sm:text-base md:text-lg font-semibold' data-aos="zoom-in-left">Backend Development</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button className='mt-8 md:mt-14 px-6 sm:px-8 py-3 sm:py-4 bg-red-500 text-white rounded-md hover:bg-transparent hover:text-red-500 hover:cursor-pointer hover:border hover:border-red-500 transition-all duration-300 text-sm sm:text-base'>
              Download CV
            </button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio py-16 md:py-20 bg-gray-100">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="mb-8 md:mb-12 text-center lg:text-left">
            <span className='abt uppercase text-black block sm:inline' data-aos="zoom-in-left">Selected</span>
            <span className='abt uppercase sm:ml-4 block sm:inline' data-aos="zoom-in-left">Works</span>
          </div>
          
          <div className="image grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-10">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <Link key={num} href={`/portfolio/${num}`}>
                <motion.img
                  src={`https://marketifythemes.net/html/grax/img/portfolio/${num}.jpg`}
                  alt={`Portfolio ${num}`}
                  className='w-full h-[250px] sm:h-[280px] md:h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[2px] transition-all duration-300 ease-in-out hover:cursor-pointer shadow-lg'
                  data-aos={index < 3 ? "fade-up" : "fade-up"}
                />
              </Link>
            ))}
          </div>

          
          <div className="down flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mt-16 mb-16">
            <div className="leftportfolio w-full lg:w-1/2 text-center lg:text-left">
              <h1 className='text-xl sm:text-2xl md:text-3xl font-poppins tracking-wide font-bold leading-tight mb-4'>
                I have high skills in developing and programming
              </h1>
              <p className='font-poppins text-sm sm:text-base md:text-lg tracking-wide leading-relaxed text-gray-600'>
                I was doing everything in my power to provide me with all the experiences to provide cost-effective and high quality products to satisfy my customers all over the world
              </p>
            </div>
            <div className="rightportfolio w-full lg:w-1/2 space-y-6">
              {[
                { skill: 'Web Development', percentage: 95 },
                { skill: 'Brand Identity', percentage: 80 },
                { skill: 'Logo Design', percentage: 90 }
              ].map((skill, index) => (
                <div key={skill.skill} className="skill-item" data-aos="fade-left" data-aos-delay={`${index * 100}`}>
                  <div className="flex justify-between items-center mb-2">
                    <p className='text-sm sm:text-base font-medium'>{skill.skill}</p>
                    <p className='text-sm sm:text-base font-medium'>{skill.percentage}%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-red-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bottom flex flex-col sm:flex-row justify-between items-center bg-gray-500 py-8 md:py-12 px-4 sm:px-8 md:px-16 lg:px-32 gap-4">
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-left text-white'>
            I am available for freelance work
          </h1>
          <button className='font-poppins text-sm sm:text-base md:text-lg bg-red-500 text-white px-6 py-3 rounded-md hover:bg-white hover:text-red-500 transition-all duration-300'>
            Contact Me
          </button>
        </div>
      </section>

        {/* Skills and Services Section */}
        <SkillsServices />
        
<section id="news" className="news py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#f9f9f9]">
          <div className="mb-8 md:mb-12 text-center lg:text-left">
            <span className='abt uppercase text-black block sm:inline' data-aos="zoom-in-left">Latest</span>
            <span className='abt uppercase sm:ml-4 text-red-500 block sm:inline' data-aos="zoom-in-left">News</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {articles.map((article, index) => (
              <div key={index} className="box1 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 mx-auto max-w-[350px] w-full">
                <div className="relative overflow-hidden">
                  <Link href={`/news/${article.id.toString()}`}>
                    <motion.img
                      src={article.img}
                      alt={article.title}
                      className='w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover hover:scale-110 transition-transform duration-500'
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
                <div className="p-4 sm:p-6">
                  <h1 className='text-sm sm:text-base md:text-lg font-bold text-center leading-tight mb-3'>
                    {article.title}
                  </h1>
                  <p className='text-xs sm:text-sm text-gray-500 text-center'>
                    By {article.author} / {article.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="mb-8 md:mb-12 text-center lg:text-left">
            <span className='abt uppercase text-black block sm:inline' data-aos="zoom-in-left">Get in</span>
            <span className='abt uppercase sm:ml-4 text-red-500 block sm:inline' data-aos="zoom-in-left">Touch</span>
          </div>
           
          <div className="contactsection flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 pb-5">
            <div className="leftcontact w-full lg:w-1/2">
              <p className='text-sm sm:text-base md:text-lg text-gray-400 tracking-wide leading-relaxed pb-6 pt-4 text-center lg:text-left'>
                Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
              </p>
              <div className="space-y-4 text-center lg:text-left">
                {[
                  { label: 'Address', value: 'Brook 103, New York, USA' },
                  { label: 'Email', value: 'example@example.com' },
                  { label: 'Phone', value: '(123) 456-7890' },
                  { label: 'Website', value: 'www.example.com' },
                  { label: 'Twitter', value: 'www.twitter.com/example' },
                  { label: 'Facebook', value: 'www.facebook.com/example' }
                ].map((contact, index) => (
                  <motion.div 
                    key={contact.label}
                    className='text-sm sm:text-base md:text-lg' 
                    data-aos="zoom-in-right" 
                    data-aos-delay={`${index * 100}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <strong className="text-red-800">{contact.label}:</strong> 
                    <span className="text-gray-600 ml-2">{contact.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="rightcontact w-full lg:w-1/2">
              <motion.form 
                className='space-y-4 sm:space-y-6 text-white'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <input 
                  type="text" 
                  placeholder='Your Name' 
                  className='w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 text-sm sm:text-base' 
                />
                <input 
                  type="email" 
                  placeholder='Your Email' 
                  className='w-full text-white border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 text-sm sm:text-base' 
                />
                <textarea 
                  placeholder='Your Message' 
                  className='w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 sm:h-40 resize-none transition-all duration-300 text-sm sm:text-base' 
                />
                <motion.button 
                  type="submit" 
                  className='w-full sm:w-auto bg-red-500 text-white px-8 py-3 rounded-md hover:bg-transparent hover:text-red-500 hover:border hover:border-red-500 transition-all duration-300 text-sm sm:text-base font-medium'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

      </div>
      
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Page