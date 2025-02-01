import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full bg-[#160928] text-white">
      <div className="navbar container mx-auto flex  justify-between items-center p-4 md:pl-40">
        {/* Logo */}
        <h2 className='text-2xl font-jersey '>Bilal Ahmed</h2>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-6 md:pr-60">
            <li><NavLink to='/' className='hover:text-[#A78BFA] transition'>Home</NavLink></li>
            <li><NavLink to='/About' className='hover:text-[#A78BFA] transition'>About</NavLink></li>
            <li><NavLink to='/Projects' className='hover:text-[#A78BFA] transition'>Projects</NavLink></li>
          </ul>
        </div>
        
        {/* Mobile Menu */}
        <div className="lg:hidden dropdown relative">
          <button className="menu-toggle focus:outline-none">
            ☰
          </button>
          <ul className="menu hidden absolute right-0 top-full bg-[#160928] w-48 shadow-md rounded-md p-2 space-y-2">
            <li><NavLink to='/' className='block p-2 hover:bg-[#A78BFA] rounded'>Home</NavLink></li>
            <li><NavLink to='/About' className='block p-2 hover:bg-[#A78BFA] rounded'>About</NavLink></li>
            <li><NavLink to='/Projects' className='block p-2 hover:bg-[#A78BFA] rounded'>Projects</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
