import React from 'react';
import SectionTitle from '../../Components/SectionTitle';

function ContactUs() {
  const user = {
    name: 'Ashutosh Gupta',
    email: 'ashutoshg067@gmail.com',
    phone: '9795727437',
    address: 'Kanpur, Uttar Pradesh, India',
  };

  return (
    <div  className="flex flex-col items-center justify-center z-10 w-full px-4 mt-4 max-w-screen-xl mx-auto">
      <SectionTitle title='About Me' />

      <div className="flex flex-col lg:flex-row py-10 lg:gap-20 gap-10 h-full ">
        {/* Left-aligned text */}
        <div className="lg:w-1/2  mb-4 md:mr-4">
          <pre className=" p-4 rounded-md shadow-md ">
            {'{' }
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <div>Address: {user.address}</div>
            {'}'}
          </pre>
        </div>

        {/* Centered image */}
       
        <div className="flex flex-col  lg:w-1/2 md:flex-row items-center mt-10">
          <div className="w-full">
            <img src="contact-me.svg" alt="phone" 
              
            />
          </div>
      
         
        </div>
        <form className="w-full px-4  mt-4 max-w-screen-xl mx-auto" name="contactUS" data-netlify>
  <label
    htmlFor="name"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Name
  </label>
  <div className="relative mb-4">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
    </div>
    <input
      type="text"
      id="name"
      name="name"
      className="bg-gray-50 border-2  outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Enter your name"
      style={{ maxWidth: '400px' }} // Add fixed width here
    />
  </div>

  <label
    htmlFor="email"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Your Email
  </label>
  <div className="relative mb-4">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 16"
      >
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
      </svg>
    </div>
    <input
      type="text"
      id="email"
      name="email"
      className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="name@gmail.com"
      style={{ maxWidth: '400px' }} // Add fixed width here
    />
  </div>

  <label
    htmlFor="message"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Message
  </label>
  <div className="relative mb-4">
    <textarea
      id="message"
      name="message"
      rows="8"
      className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      style={{ maxWidth: '400px' }} // Add fixed width here
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full max-w-[25rem] h-12 mx-auto mt-4 text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm focus:outline-none"
>
    Send
</button>




</form>

      </div>
    </div>
  );
}

export default ContactUs;
