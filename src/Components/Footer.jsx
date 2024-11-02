import React from "react";
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const iconStyle = {
   
    animation: "smallBounce 0.5s infinite alternate",
  };
  return (
    <footer className="font bg-[#1A2A3A] text-gray-400 py-10">
      <div className="container mx-auto text-center">
        {/* Logo Section */}
        <div className="flex justify-center">
        <img className="h-36 w-36" src="https://i.ibb.co.com/2Mxgr7H/1728761069604-removebg-preview-2.png" alt="" />
        </div>
        
        {/* Navigation Links */}
        <div className="flex justify-center gap-9 mb-6">
          <ScrollLink to="about" className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-semibold hover:text-[#55E5A4]">About</ScrollLink>
          <ScrollLink to="skill" className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-semibold hover:text-[#55E5A4]">Skills</ScrollLink>
          <ScrollLink to="projects" className=" [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-semibold hover:text-[#55E5A4]">Project</ScrollLink>
          <ScrollLink to="contact" className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-semibold hover:text-[#55E5A4]">Contact</ScrollLink>
        </div>

        {/* Social Media Icons */}
        <div class="flex justify-center   pt-8 space-x-4 animate__animated animate__bounce">
   {/* Icon 1  */}
  <a href="https://github.com/emonkhan500" style={iconStyle} class="bg-gradient-to-b from-[#343236] to-[#38343F] rounded-lg p-2 shadow-[0px_2px_2px_#55E5A4_inset,0px_15px_25px_rgba(0,0,0,0.5)] border-t border-[#55E5A4]">
   
       <FaGithub className="w-6 h-6 text-white"></FaGithub>
    
  </a>
  
 {/* Icon 2  */}
  <a href="www.linkedin.com/in/md-emon-khan" style={iconStyle} class="bg-gradient-to-b from-[#343236] to-[#38343F] rounded-lg p-2 shadow-[0px_2px_2px_#55E5A4_inset,0px_15px_25px_rgba(0,0,0,0.5)] border-t border-[#55E5A4]">
   
     <FaLinkedin className="w-6 h-6 text-white"></FaLinkedin>
    
  </a>
  
  {/* Icon 3  */}
  <a href="https://www.facebook.com/profile.php?id=100025282659899&mibextid=ZbWKwL" style={iconStyle} class="bg-gradient-to-b from-[#343236] to-[#38343F] rounded-lg p-2 shadow-[0px_2px_2px_#55E5A4_inset,0px_15px_25px_rgba(0,0,0,0.5)] border-t border-[#55E5A4]">
    
    <FaFacebookF className="w-6 h-6 text-white"/>
   
  </a>
  
   {/* Icon 4 */}
  <a href="https://www.instagram.com/em0_n/" style={iconStyle} class="bg-gradient-to-b from-[#343236] to-[#38343F] rounded-lg p-2 shadow-[0px_2px_2px_#55E5A4_inset,0px_15px_25px_rgba(0,0,0,0.5)] border-t border-[#55E5A4]">
    
  <FaInstagram  className="w-6 h-6 text-white"/>
   
  </a>
</div>
<style>
        {`
          @keyframes smallBounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-7px); }
          }
        `}
      </style>

        {/* Copyright Text */}
        <div className="text-gray-500 border-t-2 border-gray-600 pt-4">
            All Rights Reserved By <span className="font-bold text-[#55E5A4]">DevEmonKhan</span> © 2024.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
