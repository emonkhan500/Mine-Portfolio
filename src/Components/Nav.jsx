import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Nav = () => {
    return (
        <div className="navbar font pt-2 md:px-10 lg:px-40 fixed z-10 
        bg-[#15151580] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn  text-right text-[#55E5A4] btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu bg-[#151C25] menu-sm dropdown-content gap-2  rounded-box z-[2] mt-3 w-52 p-2 shadow">
        <ScrollLink to="about" smooth={true} duration={500}>
   <li className='hover:bg-green-400 hover:text-black px-1 py-1 border border-white rounded-lg text-white'><a>ABOUT</a></li>
   </ScrollLink>
   <ScrollLink to="skill" smooth={true} duration={500}>
   <li className='hover:bg-green-400 hover:text-black px-1 py-1 border border-white rounded-lg text-white'><a>SKILLS</a></li>
   </ScrollLink>
        
   <ScrollLink to="projects" smooth={true} duration={500}>
   <li className='hover:bg-green-400 hover:text-black px-1 py-1 border border-white rounded-lg text-white'><a>PROJECTS</a></li>
   </ScrollLink>
   <ScrollLink to="contact" smooth={true} duration={500}>
   <li className='hover:bg-green-400 hover:text-black px-1 py-1 border border-white rounded-lg text-white'><a>CONTACT</a></li>
   </ScrollLink>
      </ul>
    </div>
    <ScrollLink to="home" smooth={true} duration={500}>
    <img data-aos="zoom-in"
        data-aos-duration="1000" className= 'h-16 md:h-24 w-h-h-16 md:w-28 rounded-full ' src="https://i.ibb.co.com/2Mxgr7H/1728761069604-removebg-preview-2.png" alt="" />
    </ScrollLink>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu gap-2 menu-horizontal px-1">
   <ScrollLink to="about" smooth={true} duration={500}>
   <li className= ' hover:bg-green-400 hover:text-black px-1 py-1 border border-white rounded-lg text-white'><a>ABOUT</a></li>
   </ScrollLink>
   <ScrollLink to="skill" smooth={true} duration={500}>
   <li className='hover:bg-green-400 hover:text-black px-1 py-1 border border-white rounded-lg text-white'><a>SKILLS</a></li>
   </ScrollLink>
        
   <ScrollLink to="projects" smooth={true} duration={500}>
   <li className='hover:bg-green-400 hover:text-black px-1 py-1 border border-white rounded-lg text-white'><a>PROJECTS</a></li>
   </ScrollLink>
   <ScrollLink to="contact" smooth={true} duration={500}>
   <li className='hover:bg-green-400 hover:text-black px-1 py-1 border border-white rounded-lg text-white'><a>CONTACT</a></li>
   </ScrollLink>
    </ul>
  </div>
  <div className="navbar-end md:ml-5">
  <div data-aos="fade-down"
        data-aos-duration="700"> 
                    <a className="flex" href="https://drive.google.com/file/d/136HW5uExHU3zedlxHeLXoNe3CbzPEdFG/view?usp=sharing" download>
                        <button type='button' className='bg-[#55E5A4] shadow-2xl px-2 py-2 rounded-sm text-black md:text-xl font-bold hover:scale-105 duration-100 hover:bg-green-400 flex justify-center items-center gap-2'>
                            Resume
                            <FaDownload />
                        </button>
                    </a>
                </div>
  </div>
</div>
    );
};

export default Nav;