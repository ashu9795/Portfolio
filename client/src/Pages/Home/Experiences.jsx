import React, { useState } from 'react'; // Import useState
import SectionTitle from '../../Components/SectionTitle';
import { experiences } from '../../Resources/experiences';

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0); // Use const

  return (
    <div>
  <SectionTitle title="Experiences" />
  <div className="flex flex-col lg:flex-row py-10 lg:gap-20 gap-10">
    {/* Sidebar (List of Experiences) */}
    <div className='flex flex-col gap-5 border-l-2 border-gray-400 w-full lg:w-1/3'>
      {experiences.map((experience, index) => (
        <div key={index} onClick={() => setSelectedItemIndex(index)} className='cursor-pointer'>
          <h1 className={`text-lg sm:text-xl px-3 sm:px-5 ${selectedItemIndex === index ? 'text-blue-300 border-gray-400 border-l-4 -ml-[3px] bg-[#667f8e44] py-2 sm:py-3' : 'text-white'}`}>
            {experience.period}
          </h1>
        </div>
      ))}
    </div>

    {/* Detail Section */}
    <div className='flex flex-col gap-3 sm:gap-5'>
      <h1 className='text-orange-200 text-xl sm:text-2xl'>{experiences[selectedItemIndex].title}</h1>
      <h1 className='text-green-200 text-lg sm:text-2xl'>{experiences[selectedItemIndex].Organization}</h1>
      <h1 className='text-gray-400 text-base sm:text-2xl'>{experiences[selectedItemIndex].description}</h1>
    </div>
  </div>
</div>

  );
}

export default Experiences;
