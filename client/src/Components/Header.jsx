import React from 'react';
import ThemeBtn from './ThemeButton';
function Header() {
  const openCallLog = () => {
    const phoneNumber = '+919795727437'; // Replace with your actual phone number
    const callLogUrl = `tel:${phoneNumber}`;
    window.location.href = callLogUrl;
  };


  const openWhatsApp = () => {
    const phoneNumber = '+919795727437'; // Replace with your WhatsApp number (in international format)
    const message = encodeURIComponent('Hey Ashutosh, I hope you are doing well');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_self');
  };

  return (
    <header className="flex items-center justify-between z-10 w-full px-4 pointer-events-none mt-4 max-w-screen-xl mx-auto">
      <svg width="70" height="70" viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M314.516 203.174L314.516 349.104L162.117 208.727M314.516 203.174L282.653 203.26M314.516 203.174L337.498 203.26L380.617 170.782L314.516 170.782M162.117 208.727L117.661 170.634L157.117 170.782M162.117 208.727L65.1165 301.139L20.176 301.139L137.099 188.83M200.117 170.782L282.653 96.1739L282.653 170.782M200.117 170.782L282.653 170.782M200.117 170.782L157.117 170.782M282.653 203.26L210.462 202.796L282.653 270.76L282.653 203.26ZM282.653 170.782L314.516 170.782M157.117 170.782L315.751 20.1061L314.516 170.782" stroke="currentColor" strokeWidth="10" />
      </svg>
      <div className="flex gap-4 items-center">
       
      <ThemeBtn className="inline-flex items-center justify-center h-6 w-6" />
        <a  href="#" onClick={openCallLog}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-auto feather feather-phone">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        </a>
        <a href="#" onClick={openWhatsApp}>
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" className="pointer-events-auto svg-inline--fa fa-whatsapp fa-w-14" stroke="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
          <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
        </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
