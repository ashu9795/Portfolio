import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { projects } from '../../Resources/project';
import "../../font.css";

function Project() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center z-10 w-full px-4 mt-4 max-w-screen-xl mx-auto">
      <SectionTitle title="Projects" />
      <div className="flex flex-col lg:flex-row py-10 lg:gap-20 gap-10 w-full">
        {/* Sidebar (List of Projects) */}
        <div className="flex sm:flex-col gap-5 border-l-2 border-gray-400 w-full lg:w-1/3 sm:w-full overflow-x-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-lg sm:text-xl px-3 sm:px-5 ubuntu-light-italic ${
                  selectedItemIndex === index
                    ? 'text-blue-300 border-gray-400 border-l-4 -ml-[3px] bg-[#667f8e44] py-2 sm:py-3'
                    : 'text-white'
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Detail Section */}
        <div className='flex items-center justify-center gap-10 flex-col md:flex-col'>
          <a href={projects[selectedItemIndex].link} target="_blank" rel="noopener noreferrer">
            <img src={projects[selectedItemIndex].image} alt="" className="h-40 w-48 sm:h-60 sm:w-72" />
          </a>
          <div className="flex flex-col gap-3 sm:gap-5">
            <h1 className="text-orange-200 text-xl sm:text-2xl ubuntu-bold-italic">
              {projects[selectedItemIndex].technologies}
            </h1>
            <h1 className="text-green-200 text-lg sm:text-2xl ubuntu-regular">
              {projects[selectedItemIndex].description}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
