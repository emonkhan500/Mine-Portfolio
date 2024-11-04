import React, { useEffect } from 'react';

import Nav from './Components/Nav';
import Banner from './Components/Banner';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

import Project from './Components/Project';
import Skill from './Components/Skill';


const Home = () => {
    
    return (
        <div className='home'>
            <Nav></Nav>
            <Banner></Banner>
            
            <div className='about'>
            <About></About>
            </div>
            <div className='skill'>
            <Skill></Skill>
            </div>
           <div className='projects'>
           <Project></Project>
           </div>
            <div className='contact'>
            <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;