import React from 'react';
import HeaderAdmin from '../../Components/HeaderAdmin.jsx';
import { Tabs } from 'antd';
import AdminAbout from './AdminAbout.jsx';
import AdminIntro from './AdminIntro.jsx';
import { useSelector } from 'react-redux';
import"../../index.css";
import AdminExperience from './AdminExperience.jsx';
import AdminProject from './AdminProject.jsx';

const App = () => {
  const { portfolioData } = useSelector((state) => state.root); // Move this line here
  return (
    <div className='bg-gray-400 min-h-screen'>
      <HeaderAdmin />
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
                label: 'Expereince',
                key: '3',
                children: <AdminExperience />,
              },
              {
                label: 'Project',
                key: '4',
                children: <AdminProject />,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default App;