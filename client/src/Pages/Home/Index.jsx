import React, { useEffect } from 'react';
import Header from '../../Components/Header';
import Intro from '../Home/intro.jsx';
import "../../font.css";
import { runMatter } from '../../../matter.js'; // Import the Matter.js setup function
import Experiences from './Experiences.jsx';
import Project from './Project.jsx';
import Certification from './Certification.jsx';

function Index() {
  useEffect(() => {
    // Scroll to top on component mount with a slight delay
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Delay of 100ms to ensure component mounts first
  }, []);
  


  useEffect(() => {
    const canvas = document.querySelector("#wrapper-canvas");
    const header = document.querySelector("header"); // Assuming you have a <header> tag in Header component

    function adjustCanvasSize() {
      if (canvas && header) {
        // Set canvas width to match the header's width
        canvas.style.width = `${header.offsetWidth}px`;
        canvas.style.height = `100vh`; // Or adjust based on your needs
      }
    }

    // Run this function initially to set canvas size
    adjustCanvasSize();

    // Run Matter.js setup
    const cleanup = runMatter(canvas);

    // Adjust the canvas size when window resizes
    window.addEventListener("resize", adjustCanvasSize);

    // Cleanup function to stop Matter.js and remove event listener
    return () => {
      cleanup(); // Stops Matter.js
      window.removeEventListener("resize", adjustCanvasSize); // Remove resize listener
    };
  }, []);

  return (
    <>
      <div className='flex flex-col justify-between h-screen'>
        <Header />
        {/* Wrapper canvas for Matter.js */}
        <div className="absolute inset-0 hidden md:block" id="wrapper-canvas"></div>
        <Intro />
       
      </div>
       
      <div id="experiences-section" className="w-full md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative">
  <Experiences />
</div>

<div id="projects-section" className="w-full md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative">
  <Project />
</div>
<div id="projects-section" className="w-full md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative">
  <Certification />
</div>

       
    </>
  );
}

export default Index;
