import React, { useEffect, useState } from 'react';

function Loader() {
  const [size, setSize] = useState(406); // Initial size for width and height

  useEffect(() => {
    // Function to change size
    const changeSize = () => {
      setSize(prevSize => (prevSize === 406 ? 300 : 406)); // Toggle between two sizes
    };

    const intervalId = setInterval(changeSize, 500); // Change size every 500ms

    // Stop changing size after 3 seconds
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setSize(406); // Reset size to initial
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-black'>
      <div>
        <svg width={size} height={size * (368 / 406)} viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="#1F2667" strokeOpacity="0.9" strokeWidth="10"/>
          <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="url(#paint0_linear)" strokeWidth="10"/>
          <defs>
            <linearGradient id="paint0_linear" x1="205.549" y1="20.0169" x2="204.338" y2="342.461" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1595B6"/>
              <stop offset="1" stopColor="#1595B6" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Loader;
