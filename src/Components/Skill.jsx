import React from "react";
import { FaRegStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skill = () => {
  return (
    <div className="bg-[#151C25] font pt-16 font pb-6">
      <div data-aos="fade-down"
    data-aos-duration="1500" className="text-center  ">
        <h1 className="text-white  text-4xl font-bold">
          <span className="text-[#55E5A4]">_ _</span>S
          <span className="text-[#55E5A4]">K</span>I
          <span className="text-[#55E5A4]">L</span>L
          <span className="text-[#55E5A4]">S</span>
          <span className="text-[#55E5A4]">_ _</span>
        </h1>
        <h1 className="text-white text-2xl mt-6 mb-4">What Do I Know!!</h1>
      </div>
      <ul className="timeline timeline-vertical">
        <li>
          <div data-aos="fade-left"
    data-aos-duration="2000" className="timeline-start bg-[#151C25] timeline-box md:w-[350px] lg:w-[480px]">
            <h1 className="text-center text-gray-500 md:text-3xl font-bold mb-6">
              Front-End Side
            </h1>
            <div className="grid grid-cols-2 gap-3 md:h-60 md:gap-6 md:grid-cols-3">
            <div className="hover:-translate-y-3 duration-300 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-12  md:h-16 w-12 md:w-16 "
                  src="https://i.ibb.co/b5wtbW7/4-D1-Q3z-TSR.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">React Js</h1>
              </div>
            <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-12  md:h-16 w-12 md:w-16 "
                  src="https://i.ibb.co/xGTKt1c/1-Ce-N6l8z-I.png"
                  alt=""
                />
                <h1 className=" text-center text-white text-xs md:text-sm font-medium md:font-bold">HTML 5</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co/n86pkzL/2-C5-Ko-YWQG.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">CSS-3</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16"
                  src="https://i.ibb.co/P6G7FGB/3-Dd-Kl-V5gf.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">JavaScript</h1>
              </div>
              
              <div className="hover:-translate-y-3 duration-200  text-center flex flex-col items-center  justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co/ZcfHsw3/5-Dc-HMH4-I0.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">Tailwind CSS</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200  text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co.com/WV01Ym2/download-5-removebg-preview.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">Bootstrap</h1>
              </div>
            </div>
          </div>
          <div className="timeline-middle">
            <FaRegStar className="text-[#55E5A4] h-7 w-7 " />
          </div>
          <hr className="bg-[#55E5A4]" />
        </li>
        <li>
          <hr className="bg-[#55E5A4]" />
          <div className="timeline-middle">
            <FaRegStar className="text-[#55E5A4] h-7 w-7 " />
          </div>
          <div data-aos="fade-right"
    data-aos-duration="2000" className="timeline-end  bg-[#151C25] timeline-box md:w-[350px] lg:w-[480px]">
            <h1 className="text-center text-gray-500 md:text-3xl font-bold mb-4">
              Back-End Side
            </h1>
            <div className="grid grid-cols-2 gap-3 md:h-60 md:gap-6 md:grid-cols-3">
            <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16"
                  src="https://i.ibb.co/TqJB2tp/download.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">Node JS</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co/KX45cXr/8-D-Gw4-Gq4.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">Express JS</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co/K96YVBT/9-Dk-Onj-DZn.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">MongoDB</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co/hRVN6KT/download-1-1.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">Firebase</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co/r40tkLN/download-2.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">JWT Token</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co.com/yRKX50w/1687786979245-removebg-preview.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">REST API</h1>
              </div>
            </div>
          </div>
          <hr className="bg-[#55E5A4]" />
        </li>
        <li>
          <hr className="bg-[#55E5A4]" />
          <div className="timeline-middle">
            <FaRegStar className="text-[#55E5A4] h-7 w-7 " />
          </div>
          <div data-aos="fade-left"
    data-aos-duration="2500" className="timeline-start  timeline-box md:w-[350px] lg:w-[480px] bg-[#151C25]">
            <h1 className="text-center  text-gray-500  md:text-3xl font-bold mb-4">
              Tools
            </h1>
            <div className="grid grid-cols-2 gap-3 md:h-60 md:gap-6 md:grid-cols-3">
            <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 rounded-full"
                  src="https://i.ibb.co.com/Fw0NnHg/download-8.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">GITHUB</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co.com/1r7xnW6/download-7-removebg-preview-1.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">VS CODE</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co.com/nMhvjPV/download-9-removebg-preview.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">GIT</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co.com/mXDNcQj/download-6-removebg-preview.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">FIGMA</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 "
                  src="https://i.ibb.co.com/dKgr2zr/download-10-removebg-preview.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">NETLIFY</h1>
              </div>
              <div className="hover:-translate-y-3 duration-200 text-center flex flex-col items-center space-y-1 justify-center ">
                <img
                  className="h-10 md:h-16 w-h-10 md:w-16 rounded-full"
                  src="https://i.ibb.co.com/hRH5dz1/download-5.png"
                  alt=""
                />
                <h1 className="text-center text-white text-xs md:text-sm font-medium md:font-bold">VERCEL</h1>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skill;
