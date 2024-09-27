import React, { useEffect } from 'react';
import Header from '../../Components/Header';
import Intro from '../Home/intro.jsx';
import "../../font.css";
import { runMatter } from '../../../matter.js'; // Import the Matter.js setup function

function Index() {
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
    </>
  );
}

export default Index;
