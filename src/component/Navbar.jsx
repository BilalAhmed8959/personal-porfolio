import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../assets/WhatsApp Image 2025-05-19 at 11.38.58_431fa518.jpg'



const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  return (
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4  bg-[#1A0B2E] relative transition-all">

              <img className='w-20 bg-white'  src={img} alt="dummyLogoColored" />

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8 text-white">
              <NavLink className='hover:text-[#7127BA] transition' to="/">Home</NavLink>
              <NavLink className='hover:text-[#7127BA] transition' to="/About">About</NavLink>
              <NavLink className='hover:text-[#7127BA] transition' to="/Projects">Projects</NavLink>

                   <div className="relative cursor-pointer">
                  <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
              </div>

              <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                  Login
              </button>
          </div>

          <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
              {/* Menu Icon SVG */}
              <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="21" height="1.5" rx=".75" fill="#426287" />
                  <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                  <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
              </svg>
          </button>

          {/* Mobile Menu */}
          <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
          <NavLink to="/">Home</NavLink>
              <NavLink to="/About">About</NavLink>
              <NavLink to="/Projects">Projects</NavLink>
              <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                  Login
              </button>
          </div>

      </nav>
  )
}
export default Navbar
