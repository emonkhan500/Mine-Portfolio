import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const About = () => {
  const iconStyle = {
   
    animation: "smallBounce 0.5s infinite alternate",
  };

  return (
    <div  className="font border-b-2 pt-16 border-[#55E5A4] bg-[#151C25]">
      <div  class=" lg:container mx-auto pt-0 md:pt-8 lg:pt-10 px-2 md:px-2 lg:px-20 text-white py-10 flex gap-10 md:gap-1 lg:gap-12 flex-col-reverse md:flex-row lg:flex-row items-center justify-center">
        {/* Profile Image  */}
        <div data-aos="fade-down"
    data-aos-duration="2000" class=" px-4 md:px-0 mb-6 md:mb-0">
          <img
            class=" md:w-[90%] lg:w-[80%] rounded-lg border-l-[12px] border-t-[12px] border-[#55E5A4] bg-white mx-auto"
            src="https://i.ibb.co.com/VJ9rP2N/IMG-20230524-213201-1.jpg"
            alt="Profile Photo"
          />
        </div>

        {/* About Me Text Section  */}
        <div data-aos="fade-up"
    data-aos-duration="2000" class=" md:w-1/2  text-center md:text-left">
          <h2 class="text-4xl font-bold mb-2">About Me</h2>
          <h4 class="text-xl text-teal-400 mb-4">Who Am I?</h4>
          <p class="text-base mb-6">
          I am a front-end developer from Bangladesh. Strong passion, love and self-improvement for technology and coding so far Fontend has learned - ReactJS, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS also mobile responsive, all device responsive and various packages, frameworks, libraries, Animation. Also learned and learning for backend - MongoDB, NodeJS, Express.js, JWT, and Firebase. Besides practice and work, I am constantly learning new things and love learning new technologies. I like taking on new challenges. My next target is to become a very good full-stack developer.
          </p>

          <div class="flex justify-center md:justify-start  pt-8 space-x-4 animate__animated animate__bounce">
   {/* Icon 1  */}
  <div style={iconStyle} class="bg-gradient-to-b from-[#343236] to-[#38343F] rounded-lg p-2 shadow-[0px_2px_2px_#55E5A4_inset,0px_15px_25px_rgba(0,0,0,0.5)] border-t border-[#55E5A4]">
   
       <FaGithub className="w-6 h-6 text-white"></FaGithub>
    
  </div>
  
 {/* Icon 2  */}
  <div style={iconStyle} class="bg-gradient-to-b from-[#343236] to-[#38343F] rounded-lg p-2 shadow-[0px_2px_2px_#55E5A4_inset,0px_15px_25px_rgba(0,0,0,0.5)] border-t border-[#55E5A4]">
   
     <FaLinkedin className="w-6 h-6 text-white"></FaLinkedin>
    
  </div>
  
  {/* Icon 3  */}
  <div style={iconStyle} class="bg-gradient-to-b from-[#343236] to-[#38343F] rounded-lg p-2 shadow-[0px_2px_2px_#55E5A4_inset,0px_15px_25px_rgba(0,0,0,0.5)] border-t border-[#55E5A4]">
    
    <FaFacebookF className="w-6 h-6 text-white"/>
   
  </div>
  
   {/* Icon 4 */}
  <div style={iconStyle} class="bg-gradient-to-b from-[#343236] to-[#38343F] rounded-lg p-2 shadow-[0px_2px_2px_#55E5A4_inset,0px_15px_25px_rgba(0,0,0,0.5)] border-t border-[#55E5A4]">
    
  <FaInstagram  className="w-6 h-6 text-white"/>
   
  </div>
</div>
<style>
        {`
          @keyframes smallBounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-7px); }
          }
        `}
      </style>
          
        </div>
      </div>
    </div>
  );
};

export default About;