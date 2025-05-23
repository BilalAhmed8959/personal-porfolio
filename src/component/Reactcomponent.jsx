import React from 'react'
import img1 from '../assets/Screenshot 2025-02-17 031536.png'
import img2 from '../assets/WhatsApp Image 2025-05-23 at 08.25.21_ff95b3fe.jpg'

const Reactcomponent = () => {
  return (
     <>
<div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                    <div className="card ml-3 lg:card-side  shadow-xl bg-[#2a185e]">
              <figure>
                <img className='h-80  bg-[rgb(7,3,18)]'
                  src={img1}
                  alt="Album" />
              </figure>
              <div className="card-body">
                <h1 className='text-center text-2xl font-bold text-[#A78BFA]'>Project: 1</h1>
                <h2 className="card-title text-white">Expense Management System,responsive</h2>
                <p className='w-80'>This Expense Management System . Users can input transactions, categorize them as cash-in or cash-out, and monitor their financial balance in real time.</p>
                <div className="card-actions justify-end">
                  <a href='https://github.com/BilalAhmed8959/expencies-App-' target='_blank'><button className='btn btn-primary'>Github</button></a>
                <a href="https://expencies-app-g9he.vercel.app/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
                </div>
              </div>
            </div>
    
            <div className="card mr-3 lg:card-side  shadow-xl bg-[#2a185e]">
              <figure>
                <img className='h-80 bg-[rgb(7,3,18)]'
                  src={img2}
                  alt="Album" />
              </figure>
              <div className="card-body">
                <h1 className='text-center text-2xl font-bold text-[#A78BFA]'>Project: 1</h1>
                <h2 className="card-title text-white">Calculator ,responsive</h2>
                <p className='w-80'>This is a React-based Quiz App that presents users with multiple-choice<span className=' text-[#A78BFA]'>questions on various topics like Greek mythology.</span> 
                2. Users can select an answer from the provided options and proceed by clicking the "Next" button.

.</p>
                <div className="card-actions justify-end">
                  <a href='https://github.com/BilalAhmed8959/Quiz-App' target='_blank'><button className='btn btn-primary'>Github</button></a>
                <a href="https://quiz-app-two-lemon.vercel.app/" target='_blank'> <button className="btn btn-primary">Demo </button> </a>
                </div>
              </div>
            </div>
    
        </div>
        </>
  )
}

export default Reactcomponent
