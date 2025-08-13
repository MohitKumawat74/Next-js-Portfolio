
import React from 'react'

const page = () => {
  return (
  <div className="contact pt-15 px-32 pb-5 ">
          <span className='abt uppercase text-black' data-aos="zoom-in-left">Get in</span>
          <span className='abt uppercase ml-4 text-red-500' data-aos="zoom-in-left">Touch</span>
           
           <div className="contactsection flex justify-between items-center gap-10">

            <div className="leftcontact w-[50%] ">
              <p className='text-lg text-gray-400 tracking-wider pb-5 pt-5'>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
              <h3 className='text-xl' data-aos="zoom-in-right"><strong>Address:</strong> Brook 103,New York,USA</h3><br />
              <h3 className='text-xl' data-aos="zoom-in-right"><strong>Email:</strong> example@example.com</h3><br />
              <h3 className='text-xl' data-aos="zoom-in-right"><strong>Phone:</strong> (123) 456-7890</h3><br />
              <h3 className='text-xl' data-aos="zoom-in-right"><strong>Website:</strong> www.example.com</h3><br />
              <h3 className='text-xl' data-aos="zoom-in-right"><strong>Twitter:</strong> www.twitter.com/example</h3><br />
              <h3 className='text-xl' data-aos="zoom-in-right"><strong>Facebook:</strong> www.facebook.com/example</h3>
           </div>
            <div className="rightcontact w-[50%]">
              <form action="" className='flex flex-col gap-5'>
                <input type="text" placeholder='Your Name' className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-red-500' />
                <input type="email" placeholder='Your Email' className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-red-500' />
                <textarea placeholder='Your Message' className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-red-500 h-[150px]' />
                <button type="submit" className='bg-red-500 text-white px-6 py-3 rounded-md hover:bg-transparent hover:text-red-500 hover:cursor-pointer hover:border hover:border-red-500'>Send Message</button>
              </form>
            </div>
           
        </div>

      </div>  )
}

export default page