import React , { useState } from 'react';
import AboutButton from './AboutButton';
import useTheme from '../../context/theme';
import { useSelector } from 'react-redux';



const intro = () => {
 const {themeMode} = useTheme();
   const textbg = themeMode === 'dark' ?'text-black' : 'text-white';

    const {  portfolioData } = useSelector((state) => state.root);

    const [hoveredSvgName, setHoveredSvgName] = useState(''); 
    const { home } = portfolioData || {};  
    const { name, title } = home?.[0] || {};




  return (
   <>
   <div class="-mt-10 flex relative">
    <div class=" px-4 max-w-screen-xl mx-auto w-full">


        <svg width="406" height="368" viewBox="0 0 406 368"  class=" pointer-events-none absolute top-0 -translate-y-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[506px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="#1F2667" stroke-opacity="0.9" stroke-width="10"/>
            <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="url(#paint0_linear)" stroke-width="10"/>
            <defs>
            <linearGradient id="paint0_linear" x1="205.549" y1="20.0169" x2="204.338" y2="342.461" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1595B6"/>
            <stop offset="1" stop-color="#1595B6" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
      <div class="relative  ml-6 md:ml-12">
        <h1 class=" pointer-events-none text-4xl md:text-[64px] font-['sparton'] mr-16">{ name || " "}</h1>
        <p class="  pointer-events-none font-['merryweather'] italic my-4 md:my-8">{ title || " "}</p>
       <AboutButton/>

      </div>
    
    </div>
    <ul class="ml-auto space-y-6 absolute right-8 "  >

        <li  className='w-7 relative hover:text-gray-400'>

            <a href="./Ashutosh F.pdf">
            <span
            className={`absolute left-[-70px] top-0 ${textbg} text-sm fredoka-regular mb-3 transition-opacity duration-200 ${
                hoveredSvgName === 'Resume' ? 'opacity-100' : 'opacity-0'
            }`}
        >
            Resume
        </span>
            <svg  fill ="currentColor" className="full mr-2"
            onMouseEnter={() => setHoveredSvgName('Resume')}
            onMouseLeave={() => setHoveredSvgName('')}
            height="40px" width="35px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512"  xml:space="preserve">

<g>
	<path class="st0" d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
		c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"/>
	<path class="st0" d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
		c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"/>
	<path class="st0" d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
		h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
		c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
		c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"/>
</g>
</svg>
            </a>
        </li>
        <li className="w-7 relative hover:text-gray-400">

            <a href="https://www.linkedin.com/in/ashutosh-gupta-820a09215/" target="_self">
            <span
                className={`absolute left-[-70px] top-0 ${textbg} text-sm fredoka-regular mb-3 transition-opacity duration-200 ${
                    hoveredSvgName === 'LinkedIn' ? 'opacity-100' : 'opacity-0'
                }`}
            >
                LinkedIn
            </span>
                <svg onMouseEnter={() => setHoveredSvgName('LinkedIn')}
                        onMouseLeave={() => setHoveredSvgName('')} 
                 class="full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        fill="currentColor"
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
            </a>
        </li>
        <li className="w-7 relative hover:text-gray-400">
    <a href="https://www.instagram.com/_ashu9795/" target="_self">
        <span
            className={`absolute left-[-70px] top-0 ${textbg} text-sm fredoka-regular mb-3 transition-opacity duration-200 ${
                hoveredSvgName === 'Instagram' ? 'opacity-100' : 'opacity-0'
            }`}
        >
            Instagram
        </span>
        <svg
            class="full"
            onMouseEnter={() => setHoveredSvgName('Instagram')}
            onMouseLeave={() => setHoveredSvgName('')}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
        </svg>
    </a>
</li>

        <li className ="w-7 relative  hover:text-gray-400">
            <a href="https://github.com/ashu9795" target="_self">
            <span
                className={`absolute left-[-70px] top-0 ${textbg} text-sm fredoka-regular mb-3 transition-opacity duration-200 ${
                    hoveredSvgName === 'GitHub' ? 'opacity-100' : 'opacity-0'
                }`}
            >
                GitHub
            </span>
                <svg onMouseEnter={() => setHoveredSvgName('GitHub')}
                        onMouseLeave={() => setHoveredSvgName('')} 
                class="full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path
                    fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
            </a>
        </li>
        <li className ="w-7  relative hover:text-gray-400">
            <a href="mailto:ashutoshg067@gmail.com" target="_self">
            <span
                className={`absolute left-[-70px] top-0 ${textbg} text-sm fredoka-regular mb-3 transition-opacity duration-200 ${
                    hoveredSvgName === 'E-Mail' ? 'opacity-100' : 'opacity-0'
                }`}
            >
                E-Mail
            </span>
                <svg class="full"  onMouseEnter={() => setHoveredSvgName('E-Mail')}
                        onMouseLeave={() => setHoveredSvgName('')}
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        fill="currentColor"
                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
            </a>
        </li>
         
    </ul>
  </div>
  <div class="self-center relative">

  <button 
  className="bg-[#4595eb] py-2 font-extrabold px-5 rounded hover:scale-105 mb-10 sm:mb-30"
  onClick={() => {
    document.getElementById('experiences-section').scrollIntoView({ behavior: 'smooth' });
  }}
>
  Latest Work
</button>
  
    </div>
   </>
  );
};

export default intro;
