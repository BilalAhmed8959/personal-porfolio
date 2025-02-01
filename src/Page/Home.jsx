import React from 'react';
import img from '../assets/pngtree-programmer-it-developer-png-image_13520485-removebg-preview.png';
import { ReactTyped } from 'react-typed';
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { Links } from 'react-router-dom';





const Home = () => {
  return (
    <div className="w-full h-[525px] bg-[#070312] flex flex-row justify-center items-center gap-5 ">
      <div>
        <h1 className='text-4xl text-white pb-3'>Hi There</h1>
        <h1 className='text-5xl text-white pt-3 pb-2'>I'M <span className=' text-[#A78BFA]'>Bilal Ahmed</span></h1>
        <div className='w-[400px]'>
        <ReactTyped className='font-semibold text-3xl tracking-widest  text-[#A78BFA] '
                    strings={[
                        "Full Stack Developer",
                        "MERN Stack Developer",
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    cursorChar='_'
                    loop
                   /> 
                   </div>
        <div className='flex gap-5 mt-3 '>
        <FaGithub  className='border  w-8 h-8 bg-[#A78BFA] cursor-pointer rounded-xl p-1' />
        <FaInstagram className='border  w-8 h-8 bg-[#A78BFA] rounded-xl p-1 cursor-pointer' />
        <IoLogoLinkedin className='border  w-8 h-8 bg-[#A78BFA] rounded-xl p-1 cursor-pointer'/>
        <FaFacebookSquare className='border  w-8 h-8 bg-[#A78BFA] rounded-xl p-1 cursor-pointer'/>

        </div>

      </div>
      <div>
      <img src={img} alt="Side"  className='min-w-3.5 h-5/6 ' /> 
      </div>
    </div>
  );
};

export default Home;
