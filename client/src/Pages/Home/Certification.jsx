import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import {certifications} from "../../Resources/certifications"
import "../../font.css"

function Certification() {  // Changed from 'certification' to 'Certification'
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <>
      <SectionTitle title="Certifications" />
      <div className="flex flex-col lg:flex-row py-10 lg:gap-20 gap-10">
        {/* Sidebar (List of certifications) */}
        <div className="flex sm:flex-col gap-5 border-l-2 border-gray-400 w-full  lg:w-1/3 sm:w-full overflow-x-auto ">
          {certifications.map((certification, index) => (
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
                {certification.title}
              </h1>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-10 flex-col md:flex-col'>
        <img src={certifications[selectedItemIndex].image} alt=""  className="h-40 w-48 sm:h-60 sm:w-72 "  />
          <div className="flex flex-col gap-3 sm:gap-5">
            <h1 className="text-orange-200 text-xl sm:text-2xl ubuntu-bold-italic">
              {certifications[selectedItemIndex].period}
            </h1>
            <h1 className="text-orange-200 text-xl sm:text-2xl ubuntu-regular">
              {certifications[selectedItemIndex].Organization}
            </h1>
            <h1 className="text-green-200 text-lg sm:text-2xl ubuntu-medium">
              {certifications[selectedItemIndex].description}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certification;  // Changed from 'certification' to 'Certification'
