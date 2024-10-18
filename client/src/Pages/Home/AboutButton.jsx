// AboutButton.js
import React, { useState } from 'react';
import SkillsModal from "./SkillsModel"; // Import the SkillsModal component
import { useSelector } from 'react-redux';

const AboutButton = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleButtonClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
 
  

    return (
        <>
            <button
                onClick={handleButtonClick}
                className="bg-[#4595eb] py-2 font-extrabold px-5 rounded bg-gradient-to-l from-cyan-500 to-blue-500 transform hover:scale-105"
            >
                About Me
            </button>
            {isModalOpen && <SkillsModal onClose={handleCloseModal} />} {/* Render SkillsModal when open */}
        </>
    );
};

export default AboutButton;
