// index.jsx
import React, { useState, useEffect } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import './index.css';
import Home from './Home.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div  className="bg-[#151C25] h-screen flex items-center justify-center ">
          <img data-aos="zoom-in"
        data-aos-duration="1500" className='w-h-48 h-48' src="https://i.ibb.co.com/2Mxgr7H/1728761069604-removebg-preview-2.png" alt="" />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
