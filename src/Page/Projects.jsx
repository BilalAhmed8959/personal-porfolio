import React from 'react'

const Projects = () => {
  return (
    <div className="w-full h-[525px] bg-[#070312] flex flex-row justify-center  gap-8 pt-4 ">
      <div>
        <button className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#A78BFA] m-3'>HTML and CSS </button>
        <button className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#A78BFA] m-3'>JavaScript Projects</button>
        <button className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#A78BFA] m-3'>React Project</button>
        <button className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#A78BFA] m-3'>Node Js Project</button>
        <button className='border w-40 h-10 p-1 rounded-xl text-white hover:bg-[#A78BFA] m-3'>React Native</button>
      </div>
    </div>
  )
}

export default Projects
