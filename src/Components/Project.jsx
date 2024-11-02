import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Project = () => {
  const [activeTab, setActiveTab] = useState("MERN-Stack");

  return (
    <div className="bg-[#151C25] font text-gray-200 pt-10 md:pb-10 px-7 md:px-0">
      <div className=" container mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-4xl text-white text-center font-bold"
        >
          <span className="text-[#55E5A4]">_ _</span>P
          <span className="text-[#55E5A4]"></span>
          <span className="text-[#55E5A4]">R</span>O
          <span className="text-[#55E5A4]">J</span>E
          <span className="text-[#55E5A4]">C</span>T
          <span className="text-[#55E5A4]">S</span>
          <span className="text-[#55E5A4]">_ _</span>
        </h1>
        <Tabs>
          <TabList
            data-aos="fade-up"
            data-aos-duration="2000"
            className="pb- pt-5"
          >
            <div className="flex justify-center gap-4">
              {["MERN-Stack", "React Js", "JavaScript"].map((tabName) => (
                <Tab
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  className={`border-2 text-xs md:text-base px-2 py-1 cursor-pointer transition duration-300 ${
                    activeTab === tabName
                      ? "bg-[#55E5A4] text-white border-transparent"
                      : "border-[#55E5A4]"
                  }`}
                >
                  {tabName}
                </Tab>
              ))}
            </div>
          </TabList>

          {/* Full stack */}
          <TabPanel>
            <div className="pt-4 md:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {/* project 1 */}
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co/R47mhJ0/b9-assignment-12-real-estate-web-app.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Property Zone{" "}
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center  flex-wrap flex-grow gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      React JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      JWT Token
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tanstack Query
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      MongoDB
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Express JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Firebase
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      React Router Dom
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className=" mt-4 mb-6 flex  justify-center gap-1 lg:gap-4">
                  <a
  href="https://b9-assignment-12-real-estate.web.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Client
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-Server"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Server
</a>
                  </div>
                </div>
              </div>
              {/* project 2 */}
              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/xfvHnXw/b9-assignment-11-web-app-1.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Blog Hub
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex  justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      React JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tanstack Query
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      MongoDB
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Express JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Firebase
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://b9-assignment-11.web.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS11-Blog-Hub-Client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Client
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS11-Blog-Hub-Server"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Server
</a>
                  </div>
                </div>
              </div>
              {/* project 3 */}
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/51gm0DP/b9-assignment10-f3bf8-web-app-3.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Tour Asia
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      React JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tanstack Query
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      MongoDB
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Express JS
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="1500"  className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://b9-assignment10-f3bf8.web.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS10-Tour-Asia-Client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Client
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS10-Tour-Asia-Server"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Server
</a>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          {/* react js */}
          <TabPanel>
            <div className="pt-4 md:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* project 1 */}
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/C5k573z/assignment-9-57b6e-web-app.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Dream Dwellings
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      React JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Firebase
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Swiper Slide
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://assignment-9-57b6e.web.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS9-Real-estate"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Github
</a>
                   
                  </div>
                </div>
              </div>

              {/* project 2 */}
              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/QF5WsF3/magenta-pie-3ee8e1-netlify-app.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Recipe Calories
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      React JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Github
</a>
                   
                  </div>
                </div>
              </div>
              {/* project 3 */}
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/0qPHy29/idyllic-capybara-7aba0c-netlify-app.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Donation Campaign
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      React JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      React Router Dom
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Github
</a>
                   
                  </div>
                </div>
              </div>
              {/* project 4 */}
              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/WsTWFS2/6604722a5c350c48454550b7-warm-swan-400d29-netlify-app.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Book Vibe
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      React JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      React Router Dom
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Github
</a>
                   
                  </div>
                </div>
              </div>
              {/* project 5 */}
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/jJ9Dn5t/snazzy-tapioca-22f665-netlify-app-2.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Music Hub
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      React JS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Github
</a>
                   
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          {/* javascript project */}
          <TabPanel>
            <div className="pt-4 md:pt-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* project 1 */}
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/j51pYp6/emonkhan500-github-io-Bus-ticket-Assignment-5.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    E-Ticket
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      DOM
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      JS Events
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Github
</a>
                   
                  </div>
                </div>
              </div>
              {/* project 2 */}
              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/5Bw9BnT/fanciful-licorice-048363-netlify-app.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Summer Sale
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      DOM
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      JS Events
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Github
</a>
                   
                  </div>
                </div>
              </div>
              {/* project 3 */}
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="card bg-[#26313F] mx-auto  lg:auto shadow-xl"
              >
                <div className="h-[300px] overflow-hidden relative">
                  <img
                    src="https://i.ibb.co.com/jD4D3Pv/65e574e6619af4347a103079-visionary-kataifi-6c4ab7-netlify-app.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="card-title flex justify-center text-3xl py-5 font-bold">
                    Online Forum
                  </h2>
                  <hr className="mb-2 border-1 border-[#55E5A4]" />

                  <div className="text-base mt-5 mb-5 flex justify-center flex-wrap gap-3 text-slate-300">
                    <span className="border border-[#55E5A4]  px-3 py-1 rounded-xl text-gray-200 ">
                      DOM
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Tailwind CSS
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      JS Events
                    </span>
                    <span className="border border-[#55E5A4] px-3 py-1 rounded-xl text-gray-200 ">
                      Daisy UI
                    </span>
                  </div>
                  <hr className=" mt-2 border-1 border-[#55E5A4]" />
                  <div data-aos="fade-down"
        data-aos-duration="2000" className="mt-4 mb-6 flex justify-center gap-1 lg:gap-4">
                  <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Live
</a>
                    <a
  href="https://github.com/emonkhan500/B9-AS12-Property-Priject-client"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white px-3 py-2 relative shadow-lg 
  before:absolute before:top-0 before:left-0 before:w-0 before:h-0 
  before:border-l-4 before:border-t-4 before:border-transparent 
  hover:before:w-full hover:before:h-full hover:before:border-[#55E5A4] 
  hover:before:transition-all hover:before:duration-500 
  after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 
  after:border-r-4 after:border-b-4 after:border-transparent 
  hover:after:w-full hover:after:h-full hover:after:border-[#55E5A4] 
  hover:after:transition-all hover:after:duration-500"
>
  Github
</a>
                   
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Project;
