"use client";

import React from 'react'

const Aboutpage = () => {
  return (
   
      
   <div className="about flex justify-between items-center mx-32 mt-20">
        <div className="left ">
          <img src="https://marketifythemes.net/html/grax/img/about/1.jpg" alt="" className='object-cover w-[400px] h-[500px] ml-5 contain-content rounded-[10px]' data-aos="fade-right" />
        </div>
        <div className="right pt-15 ">

          <span className='abt uppercase' data-aos="zoom-in-left">About</span>
          <span className='abt uppercase ml-4' data-aos="zoom-in-left">Me</span>
          <p className='mt-4 text-lg mr-3 text-gray-400 tracking-widest'  data-aos="zoom-in-left" data-aos-delay="2000s">Hello! I'm Alan Walker. I'm a web developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>

          <div className="points mt-5 flex flex-1/2 justify-between">
            <p className='text-xl font-semibold' data-aos="zoom-in-right">👉 Web Development</p>
            <p className='text-xl font-semibold' data-aos="zoom-in-left">👉 UI/UX Design</p>
          </div>
          <div className="points mt-2 flex flex-1/2 justify-between ">

            <p className='text-xl font-semibold' data-aos="zoom-in-right">👉 Mobile App Development</p>
            <p className='text-xl font-semibold' data-aos="zoom-in-left">👉 Backend Development</p>
          </div>

          <button className='mt-14 px-8 py-4 bg-red-500 text-white rounded-md hover:bg-transparent hover:text-red-500 hover:cursor-pointer hover:border hover:border-red-500'>Download CV</button>
        </div>
        
      </div>
     
  )
}

export default Aboutpage