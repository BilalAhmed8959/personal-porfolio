import React, { useState } from 'react';
import Html from '../component/Html';
import Javascript from '../component/Javascript';
import Reactcomponent from '../component/Reactcomponent';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full md:h-[525px]  bg-[#070312] md:flex md:flex-col flex-row items-center gap-4 pt-4">
      <div>
        <button 
          onClick={() => setSelectedProject('html')} 

          className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#7127BA] m-3'>
          HTML and CSS 
        </button>
        <button 
          onClick={() => setSelectedProject('javascript')} 
          className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#7127BA] m-3'>
          JavaScript Projects
        </button>
        <button 
          onClick={() => setSelectedProject('react')} 
          className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#7127BA] m-3'>
          React Project
        </button>
        <button 
          onClick={() => setSelectedProject('node')} 
          className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#7127BA] m-3'>
          Node Js Project
        </button>
        <button 
          onClick={() => setSelectedProject('react-native')} 
          className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#7127BA] m-3'>
          React Native
        </button>
      </div>

      <div className="text-white mt-4">
        {selectedProject === 'html' && <Html />}
        {selectedProject === 'javascript' && <Javascript/>}
        {selectedProject === 'react' && <Reactcomponent/>}
        {selectedProject === 'node' && <h1>Node.js Projects</h1>}
        {selectedProject === 'react-native' && <h1>React Native Projects</h1>}
      </div>
    </div>
  );
};

export default Projects;
