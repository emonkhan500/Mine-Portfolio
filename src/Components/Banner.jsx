import { FaCheckCircle, FaBriefcase, FaHeadset } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  
  return (
    <div className="border-b-2 border-[#55E5A4] bg-[#151C25]">
      <div className="container mx-auto pt-10 md:pt-32 lg:pt-44 md:px- lg:px-24 text-white py-10 pb-20 flex gap-14 md:gap-3  lg:gap-20 flex-col-reverse md:flex-row lg:flex-row items-center justify-center">
        {/* Left Section: Text Content */}
        <div data-aos="fade-left"
        data-aos-duration="1500" className="flex-1  text-center md:text-left md:pl-2  px-4 md:px-0">
          <h4 className="text-3xl mb-3 font-bold">
            <span className="text-2xl font-medium">I am</span>{" "}
            <span className="text-[#55E5A4]">Md Emon Khan</span>
          </h4>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-4">
            <TypeAnimation
              sequence={[
                "a FrontEnd Web Developer !",
                1000,
                "a React Js Developer !",
                1000,
                "a MERN Stack Developer !",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-lg text-gray-400">
            I specialize in crafting immersive user experiences using the latest
            frontend technologies and frameworks to bring your vision to life.
            Additionally, my expertise extends to geoinformatics, where I excel
            in harnessing the power of spatial data to uncover actionable
            insights.
          </p>

          <div className="grid grid-cols-3 gap-2 lg:w-4/6">
            {/* exp */}
            <div data-aos="flip-right"
        data-aos-duration="1500" className="bg-gradient-to-r from-green-300 to-green-200 group [perspective:1000px] rounded">
              <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] px-0 ">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden flex flex-col gap-1  justify-center items-center [backface-visibility:hidden] px-7 md:px-0">
                  <FaCheckCircle className="text-xl text-blue-500" />

                  <h2 className=" [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-medium  text-white ">
                    EXPERIENCE
                  </h2>
                </div>

                {/* Back Side */}
                <div className="absolute flex justify-center items-center w-full h-full bg-gradient-to-r from-green-400 to-green-500 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]  [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-medium text-white rounded ">
                  <h1>1.5+ Years</h1>
                </div>
              </div>
            </div>

            {/* project */}
            <div data-aos="flip-left"
        data-aos-duration="1500" className="bg-gradient-to-r from-green-300 to-green-200 group [perspective:1000px] rounded">
              <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden flex flex-col gap-1  justify-center items-center [backface-visibility:hidden] px-7 md:px-0">
                  <FaBriefcase className="text-xl text-green-500" />

                  <h2 className=" [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-medium text-white ">
                    PROJECTS
                  </h2>
                </div>

                {/* Back Side */}
                <div className="absolute flex justify-center items-center w-full h-full bg-gradient-to-r from-green-400 to-green-500 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-medium text-white rounded">
                  <h1>12 Projects Completed</h1>
                </div>
              </div>
            </div>
            
            {/* support */}
            
        <div data-aos="flip-left"
        data-aos-duration="1500"
            className="rounded bg-gradient-to-r from-green-300 to-green-200 group [perspective:1000px] h-[100px]">
            <div
                className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front Side */}
                <div
                    className="absolute w-full h-full backface-hidden flex flex-col gap-1  justify-center items-center [backface-visibility:hidden] px-7 md:px-0">
                    <FaHeadset className="text-xl text-purple-500"></FaHeadset>
                    <h2 className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-medium text-white">SUPPORT</h2>
                </div>

                {/* Back Side */}
                <div
                    className="absolute flex justify-center items-center w-full h-full bg-gradient-to-r from-green-400 to-green-500 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-medium text-white rounded">
                    <h1 className="">24/7</h1>
                </div>
            </div>
        </div>
              
          </div>
        </div>

        {/* Right Section: Image */}
        <div data-aos="fade-right"
        data-aos-duration="1500" className="banner  flex justify-center  mt-10 lg:mt-0">
          <div
            className="rounded-t-3xl rounded-b-large overflow-hidden bg-[#55E5A4] "
            style={{ width: "80%", maxWidth: "450px", height: "auto" }}
          >
            <img
              src="https://i.ibb.co/kBbCvBD/IMG-20230524-213201-1-removebg-preview.png"
              alt="Profile"
              className="object-cover ml-2 md:ml-2 h-full w-[100%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
