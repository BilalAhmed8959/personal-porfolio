import React from 'react';
import img1 from '../assets/Screenshot 2025-02-01 232640.png';
import img2 from "../assets/WhatsApp Image 2025-02-03 at 02.28.34_f3b9aa44.jpg"

const Html = () => {
  return (
    <>
<div className='flex flex-col md:flex-row justify-center items-center gap-4'>
        <div className="card lg:card-side my-3 shadow-xl bg-[#2a185e]">
  <figure>
    <img className='h-80 bg-[rgb(7,3,18)]'
      src={img1}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h1 className='text-center text-2xl font-bold text-[#A78BFA]'>Project: 1</h1>
    <h2 className="card-title text-white">Calculator ,responsive</h2>
    <p className='w-80'> This is a simple calculator built using<span className=' text-[#A78BFA]'>HTML, CSS, and JavaScript...</span> 
     It supports basic arithmetic operations and features a clean, user-friendly interface for quick calculations.</p>
    <div className="card-actions justify-end">
      <a href='https://github.com/BilalAhmed8959/Calculator' target='_blank'><button className='btn btn-primary'>Github</button></a>
    <a href="https://calculator-nine-mu-17.vercel.app/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
    </div>
  </div>
</div>

<div className="card lg:card-side  shadow-xl bg-[#2a185e]">
  <figure>
    <img className='h-80 bg-[#070312]'
      src={img2}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h1 className='text-center text-2xl font-bold text-[#A78BFA]'>Project: 2</h1>
    <h2 className="card-title text-white">Web Clone ,No responsive</h2>
    <p className='w-80'> A simple  web clone created using pure<span className=' text-[#A78BFA]'> HTML and CSS,</span> with no responsive design features It replicates the basic layout and structure of the original site 
     </p>
    <div className="card-actions justify-end">
      <a href='https://github.com/BilalAhmed8959/Simple-web-clone' target='_blank'><button className='btn btn-primary'>Github</button></a>
    <a href="https://simple-web-clone.vercel.app/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
    </div>
  </div>
</div>
</div>
</>

  )
}

export default Html