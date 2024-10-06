import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { projects } from '../../Resources/project';
import "../../font.css";
import useTheme from '../../context/theme'; // Import the useTheme hook

function Project() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { themeMode } = useTheme();
 const textColor = themeMode === 'dark' ?  'text-black' : 'text-blue-300' ;
 const orgColor = themeMode === 'dark' ?  'text-black' : 'text-orange-200' ;


  return (
    <div className="flex flex-col items-center justify-center z-10 w-full px-4 mt-4 max-w-screen-xl mx-auto">
      <SectionTitle title="Projects" />
      <div className="flex flex-col lg:flex-row py-10 lg:gap-20 gap-10 w-full">
        {/* Sidebar (List of Projects) */}
        <div className="flex sm:flex-col gap-5 border-l-2 border-gray-400 w-full lg:w-1/3 sm:w-full overflow-y-auto max-h-[400px]">
          {projects.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Detail Section */}
        <div className='flex-1 flex flex-col items-center justify-center gap-10 md:flex-col w-full'>
          <a href={projects[selectedItemIndex].link} target="_blank" rel="noopener noreferrer">
            <img
              src={projects[selectedItemIndex].image}
              alt=""
              className="h-40 w-48 sm:h-56 sm:w-52 object-contain"
            />
          </a>
          <div className="flex flex-col gap-3 sm:gap-5 w-full text-center sm:text-left">
            <h1 className={`${orgColor} text-lg sm:text-xl ubuntu-light-italic`}>
              {projects[selectedItemIndex].technologies.join(" , ")}
            </h1>
            <h1 className=' text-gray-400 text-lg sm:text-xl fredoka-regular '>
              {projects[selectedItemIndex].description}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
