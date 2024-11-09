import React, { useEffect } from 'react';
import HeaderAdmin from '../../Components/HeaderAdmin.jsx';
import { Tabs } from 'antd';
import AdminAbout from './AdminAbout.jsx';
import AdminIntro from './AdminIntro.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../../index.css";
import AdminExperience from './AdminExperience.jsx';
import AdminProject from './AdminProject.jsx';
import AdminCertification from './AdminCertification.jsx';
import AdminContact from './AdminContact.jsx';

const App = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    const adminToken = sessionStorage.getItem("Token");  // Using sessionStorage
    if (adminToken) {
      navigate("/Admin");
    } else {
      navigate("/Login");
    }
  }, [navigate]);
  return (
    <div className="bg-gray-400 min-h-screen">
      <HeaderAdmin />
      <h1 className='text-4xl m-3 text-white ubuntu-bold '> Admin-Page</h1>
      {portfolioData && (
        <div className="font-bold ml-5">
          <Tabs
           
            defaultActiveKey="1"
            items={[
              {
                label: 'Intro',
                key: '1',
                children: <AdminIntro />,
              },
              {
                label: 'About',
                key: '2',
                children: <AdminAbout />,
              },
              {
                label: 'Experience',
                key: '3',
                children: <AdminExperience />,
              },
              {
                label: 'Project',
                key: '4',
                children: <AdminProject />,
              },
              {
                label: 'Certification',
                key: '5',
                children: <AdminCertification />,
              },
              {
                label: 'Contact',
                key: '6',
                children: <AdminContact />,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default App;
