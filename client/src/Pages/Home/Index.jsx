import React, { useEffect } from 'react';
import Header from '../../Components/Header';
import Intro from '../Home/intro.jsx';
import "../../assets/font.css";
import { runMatter } from '../../../matter.js'; // Import the Matter.js setup function
import Experiences from './Experiences.jsx';
import Project from './Project.jsx';
import Certification from './Certification.jsx';
import ContactUs from './ContactUs.jsx';
import Footer from './Footer.jsx';
import useTheme from '../../context/theme'; // Import the useTheme hook

function Index() {
  const { themeMode } = useTheme(); // Get the current theme mode

  useEffect(() => {
    // Scroll to top on component mount with a slight delay
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Delay of 100ms to ensure component mounts first
  }, []);

  useEffect(() => {
    let cleanup; // To store the cleanup function

    const canvas = document.querySelector("#wrapper-canvas");
    const header = document.querySelector("header");

    function adjustCanvasSize() {
      if (canvas && header) {
        canvas.style.width = `${header.offsetWidth}px`;
        canvas.style.height = `100vh`; // Adjust based on your needs
      }
    }

    if (themeMode === 'dark') {
      // If dark mode, remove canvas display and stop Matter.js
      if (canvas) {
        canvas.style.display = 'none'; // Hide canvas in dark mode
      }
      if (cleanup) {
        cleanup(); // Cleanup Matter.js if it was running
      }
    } else {
      // In light mode, show canvas and run Matter.js
      if (canvas) {
       
        adjustCanvasSize(); // Set the correct size
        cleanup = runMatter(canvas); // Initialize Matter.js
      }

      window.addEventListener("resize", adjustCanvasSize); // Resize canvas on window resize
    }

    // Cleanup on unmount or when themeMode changes
    return () => {
      if (cleanup) cleanup(); // Stop Matter.js
      window.removeEventListener("resize", adjustCanvasSize); // Remove resize event listener
    };
  }, [themeMode]); // Re-run on themeMode change

  return (
    <>
      <div className='flex flex-col justify-between h-screen'>
        <Header />

        {/* Wrapper canvas for Matter.js, conditionally shown in light mode */}
        <div className="absolute inset-0 hidden md:block w-full max-w-screen-xl" id="wrapper-canvas"></div>

        <Intro />
      </div>

      <div id="experiences-section" className="w-full md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative">
        <Experiences />
      </div>

      <div className="w-full md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative">
        <Project />
      </div>

      <div className="w-full md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative">
        <Certification />
      </div>
      <div className="w-full md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative">
        <ContactUs />
      </div>

      <div className="w-full md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative">
        <Footer />
      </div>
    </>
  );
}

export default Index;