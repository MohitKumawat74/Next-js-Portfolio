
import React from 'react'

const page = () => {
  return (
  <div className="news mt-5 pt-20 px-32 pb-5 bg-[#f9f9f9]">
          <span className='abt uppercase text-black' data-aos="zoom-in-left">Latest</span>
          <span className='abt uppercase ml-4 text-red-500' data-aos="zoom-in-left">News</span>
          
            <div className="image flex col-3 gap-10 justify-between items-center  mt-10 mb-10">

              <div className="box1 mb-5">
                <img src="https://marketifythemes.net/html/grax/img/news/1.jpg" alt="" className='w-[350px] h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[3px] transition-all ease-in-out hover:cursor-pointer' data-aos="fade-right" />
                <h1 className='text-lg font-bold text-center pt-2'>Developers watch out for these burnout symptoms</h1>
                <p className='text-sm pt-2  text-center'>By Alex Watson / 01 January 2022</p>

              </div>

              <div className="box1 mb-5 ml-32">
                <img src="https://marketifythemes.net/html/grax/img/news/2.jpg" alt="" className='w-[350px] h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[3px] transition-all ease-in-out hover:cursor-pointer' data-aos="fade-up" />
                <h1 className='text-lg font-bold  text-center  pt-2'>How to be appreciated for your hard work as a developer</h1>
                <p className='text-sm pt-2  text-center'>By Brook Kennedy / 22 December 2021</p>
              </div>

              <div className="box1 mb-5 ml-35">
                <img src="https://marketifythemes.net/html/grax/img/news/3.jpg" alt="" className='w-[350px] h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[3px] transition-all ease-in-out hover:cursor-pointer' data-aos="fade-left" />
                <h1 className='text-lg font-bold  text-center pt-2 '>How designers and developers can collaborate better</h1>
                <p className='text-sm pt-2  text-center'>By Paola Atkins / 05 December 2021</p>
              </div>
            </div>

            
        </div>
  )
}

export default page