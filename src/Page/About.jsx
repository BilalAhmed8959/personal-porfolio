import React from 'react';
import img from "../assets/images-removebg-preview (1).png";
import { TiStarFullOutline } from "react-icons/ti";
import { FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { SiCss3, SiNextdotjs, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { FaGithub } from "react-icons/fa";



const About = () => {
  return (
    <>
      {/* Main Container */}
      <div className="w-full min-h-screen bg-[#070312] flex flex-col lg:flex-row items-center justify-center p-6 gap-10">
        {/* Text Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-white text-2xl pb-5">
            Know <span className="text-[#7127BA]">Who I'M</span>
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Hello! I am Bilal Ahmed, a <span className="text-[#7127BA]">Hafiz-e-Quran, Alim-e-Deen, and a MERN Stack Developer</span>
            passionate about crafting modern and user-friendly web interfaces. Proficient in
            <span className="text-[#7127BA]"> HTML, CSS, JavaScript, React.js, Next.js, Node.js, and Tailwind CSS</span>, I combine creativity
            with technical expertise to deliver exceptional digital experiences. My work reflects
            a blend of discipline, attention to detail, and innovation.
          </p>
        </div>
        <div>
          <img className="w-72 md:w-96 z-10 h-auto relative" src={img} alt="Bilal Ahmed" />
        </div>
        <div className='w-96 h-96 bg-[#b27aea] rounded-full absolute blur-3xl left-[750px] top-48 '>
        </div>
      </div>
      
      {/* Expertise Section */}
      <div className="bg-[#070312] px-6 md:px-20 text-center md:text-left">
        <h1 className="text-2xl text-white">
          My <span className="text-[#7127BA]">Expertise</span>
        </h1>
        <div className="mt-3 space-y-2">
          <p className="flex items-center gap-3 text-lg text-white justify-start md:justify-start ">
            <TiStarFullOutline /> Front-End Development
          </p>
          <p className="flex items-center gap-3 text-lg text-white justify-start md:justify-start">
            <TiStarFullOutline /> Clean and Responsive Designs
          </p>
          <p className="flex items-center gap-3 text-lg text-white justify-start md:justify-start">
            <TiStarFullOutline /> Collaborative Approach
          </p>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="bg-[#070312] py-10 px-6 text-center">
        <h1 className="text-2xl text-[#7127BA]">
          Skills <span className="text-white">&</span> Proficiencies
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            { icon: <FaHtml5 className='text-[#7127BA] text-6xl ' />, name: "HTML" },
            { icon: <SiCss3 className='text-[#7127BA] text-6xl' />, name: "CSS" },
            { icon: <IoLogoJavascript className='text-[#7127BA] text-6xl' />, name: "JavaScript" },
            { icon: <FaBootstrap className='text-[#7127BA] text-6xl' />, name: "Bootstrap" },
            { icon: <FaReact className='text-[#7127BA] text-6xl' />, name: "React.js" },
            { icon: <SiNextdotjs className='text-[#7127BA] text-6xl' />, name: "Next.js" },
            { icon: <RiTailwindCssFill className='text-[#A78BFA] text-6xl' />, name: "Tailwind CSS" },
            { icon: <SiExpress className='text-[#7127BA] text-6xl' />, name: "Express.js" },
            { icon: <SiMongodb className='text-[#7127BA] text-6xl' />, name: "MongoDB" },
            { icon: <FaNodeJs className='text-[#7127BA] text-6xl' />, name: "Node.js" },
            { icon: <FaGitAlt className='text-[#7127BA] text-6xl' />, name: "Git" },
            { icon: <SiFirebase className='text-[#7127BA] text-6xl' />, name: "Firebase" },
            { icon: <SiRedux className='text-[#7127BA] text-6xl' />, name: "Redux" },
            { icon: <FaNode className='text-[#7127BA] text-6xl' />, name: "Node" },
            { icon: <SiReactrouter className='text-[#7127BA] text-6xl' />, name: "React Router" },
            { icon: <FaGithub className='text-[#7127BA] text-6xl' />, name: "GitHub" },
          ].map((skill, index) => (
            <div key={index} className="w-40 border border-[#7127BA] h-28 rounded-lg flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              {skill.icon}
              <h1 className="text-white mt-2">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
