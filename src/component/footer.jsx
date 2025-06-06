import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import img from '../assets/WhatsApp Image 2025-05-19 at 11.38.58_431fa518.jpg'

const Footer = () => {
    return (
        <>
            <footer className="footer bg-[#1A0B2E] text-neutral-content items-center p-4  ">
                <aside className="grid-flow-col items-center ms-10">
                    <img src={img} alt="" className='w-20'/>
                    
                    <p>bilalahmed8959@gmail.com {new Date().getFullYear()} Bilal Ahmed </p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='' target='-blank'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <FaLinkedin className='text-[23px]'/>
                        </svg>
                    </a>
                    <a href='' target='-blank'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"> </path>
                        </svg>
                    </a>
                    <a className='me-16' href='' target='-blank'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </nav>
            </footer>
        </>
    )
}

export default Footer