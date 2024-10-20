import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useSelector } from 'react-redux';
import "../../font.css";
import useTheme from '../../context/theme'; // Import the useTheme hook

function Certification() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { themeMode } = useTheme(); // Get the current theme mode
  const textColor = themeMode === 'dark' ? 'text-black' : 'text-blue-300';
  const orgColor = themeMode === 'dark' ? 'text-black' : 'text-green-200';
  const perColor = themeMode === 'dark' ? 'text-black' : 'text-orange-200';
  
  const { portfolioData } = useSelector((state) => state.root);
  const { certification } = portfolioData || {};

  return (
    <div className="flex flex-col items-center justify-center z-10 w-full px-4 mt-4 max-w-screen-xl mx-auto">
      <SectionTitle title="Certifications" />
      <div className="flex flex-col lg:flex-row py-10 lg:gap-20 gap-10 w-full">
        {/* Sidebar (List of certifications) */}
        <div className="flex sm:flex-col gap-5 border-l-2 border-gray-400 w-full lg:w-1/3 sm:w-full overflow-y-auto max-h-[400px]">
          {certification && certification.length > 0 ? (
            certification.map((certi, index) => (
              <div
                key={index}
                onClick={() => setSelectedItemIndex(index)}
                className="cursor-pointer"
              >
                <h1
                  className={`text-lg sm:text-xl px-3 sm:px-5 ubuntu-light-italic ${
                    selectedItemIndex === index
                      ? `${textColor} border-gray-400 border-l-4 -ml-[3px] bg-[#667f8e44] py-2 sm:py-3`
                      : themeMode === "dark"
                      ? 'text-black' // Light text color for dark mode
                      : 'text-white' // Default text color for light mode
                  }`}
                >
                  {certi.title}
                </h1>
              </div>
            ))
          ) : (
            <p>No certifications available.</p>
          )}
        </div>

        {/* Detail Section */}
        <div className='flex-1 flex flex-col items-center justify-center gap-10 md:flex-col w-full'>
          {certification && certification.length > 0 ? (
            <>
              <img
                src={certification[selectedItemIndex].image}
                alt=""
                className="h-40 w-48 sm:h-52 sm:w-60"
              />
              <div className="flex flex-col gap-3 sm:gap-5 text-center sm:text-left">
                <h1 className={`${perColor} text-xl sm:text-2xl ubuntu-light-italic`}>
                  {certification[selectedItemIndex].period}
                </h1>
                <h1 className={`${orgColor} text-lg sm:text-2xl ubuntu-light`}>
                  {certification[selectedItemIndex].Organization}
                </h1>
                <h1 className="text-gray-400 text-lg sm:text-xl fredoka-regular">
                  {certification[selectedItemIndex].description}
                </h1>
              </div>
            </>
          ) : (
            <p>Please select a certification to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Certification;
