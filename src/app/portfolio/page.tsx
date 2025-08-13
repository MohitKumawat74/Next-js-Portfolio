"use client";


import React from 'react'
import Image from 'next/image';

const page = () => {
    return (
        <div className="portfolio   mt-20">
            <div className="portfolio mx-32">
                <span className='abt uppercase text-black' data-aos="zoom-in-left">Selected</span>
                <span className='abt uppercase ml-4' data-aos="zoom-in-left">Works</span>
                <div className="image flex col-3 justify-between items-center mt-10">

                    <Image src="https://marketifythemes.net/html/grax/img/portfolio/1.jpg" alt="Portfolio 1" width={300} height={300} className='w-[300px] h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[3px] transition-all ease-in-out hover:cursor-pointer' data-aos="fade-right" />
                    <Image src="https://marketifythemes.net/html/grax/img/portfolio/2.jpg" alt="Portfolio 2" width={300} height={300} className='w-[300px] h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[3px] transition-all ease-in-out hover:cursor-pointer' data-aos="fade-up" />
                    <Image src="https://marketifythemes.net/html/grax/img/portfolio/3.jpg" alt="Portfolio 3" width={300} height={300} className='w-[300px] h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[3px] transition-all ease-in-out hover:cursor-pointer' data-aos="fade-left" />
                </div>
                <div className="image flex col-3 justify-between items-center mt-10 mb-10">
                    <Image src="https://marketifythemes.net/html/grax/img/portfolio/4.jpg" alt="Portfolio 4" width={300} height={300} className='w-[300px] h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[3px] transition-all ease-in-out hover:cursor-pointer' data-aos="fade-right" />
                    <Image src="https://marketifythemes.net/html/grax/img/portfolio/5.jpg" alt="Portfolio 5" width={300} height={300} className='w-[300px] h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[3px] transition-all ease-in-out hover:cursor-pointer' data-aos="fade-up" />
                    <Image src="https://marketifythemes.net/html/grax/img/portfolio/6.jpg" alt="Portfolio 6" width={300} height={300} className='w-[300px] h-[300px] rounded-lg object-cover hover:opacity-75 hover:blur-[3px] transition-all ease-in-out hover:cursor-pointer' data-aos="fade-left" />
                </div>
                <div className="down flex justify-between items-center gap-32  mt-20 mb-15">
                    <div className="leftportfolio w-[50%]">
                        <h1 className='text-2xl font-poppins tracking-wide font-bold'>I have high skills in developing and programming</h1>
                        <p className='font-poppins text-lg tracking-wider mt-2'>I was doing everything in my power to provide me with all the experiences to provide cost-effective and high quality products to satisfy my customers all over the world</p>
                    </div>
                    <div className="rightportfolio w-[50%] ms-5">
                        <div className="tp flex justify-between items-center">
                            <p className='relative'>Web Developement</p>
                            <p>95%</p>
                        </div>

                        <input type="range" min="0" max="100" value="95" className='accent-red-500 w-[100%]' />
                        <div className="tp flex justify-between items-center">
                            <p>Brand Identity</p>
                            <p>80%</p>
                        </div>
                        <input type="range" min="0" max="100" value="80" className='accent-red-500 w-[100%]' />

                        <div className="tp flex justify-between items-center">
                            <p>Logo Design</p>
                            <p>90%</p>
                        </div>
                        <input type="range" min="0" max="100" value="90" className='accent-red-500 w-[100%]' />

                    </div>
                </div>
            </div>




            <div className="bottom flex justify-between items-center mt-20  bg-gray-500 py-15 px-32 ">
                <h1 className='text-2xl font-bold'>I&apos;m available for freelance work</h1>
                <p className='font-poppins text-lg'>Contact Me</p>
            </div>
            
        </div>

    )
}

export default page