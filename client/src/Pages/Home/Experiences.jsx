import React, { useState } from 'react'; // Import useState
import SectionTitle from '../../Components/SectionTitle';
import { experiences } from '../../Resources/experiences';

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0); // Use const

  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex py-10 gap-20">
        <div className='flex flex-col gap-10 border-l-2 border-gray-400 w-1/3' >
          {experiences.map((experience, index) => (
            <div onClick={
                ()=>{
                    setSelectedItemIndex(index);
                }
            }
            className='cursor-pointer' > {/* Add key prop */}
              <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-blue-300 border-gray-400  border-l-4 -ml-[3px] bg-[#667f8e44] py-3' : 'text-white'}`}>
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div  className='flex flex-col gap-5'>
            <h1 className='text-orange-200 text-2xl'>{experiences[selectedItemIndex].title} </h1>
            <h1 className='text-green-200 text-2xl'>{experiences[selectedItemIndex].Organization} </h1>
            <h1 className='text-gray-400 text-2xl'>{experiences[selectedItemIndex].description} </h1>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
