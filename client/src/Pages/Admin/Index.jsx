import React from 'react';
import HeaderAdmin from '../../Components/HeaderAdmin.jsx';
import { Tabs } from 'antd';
import AdminAbout from './AdminAbout.jsx';
import AdminIntro from './AdminIntro.jsx';
import"../../index.css";

const App = () => (
  <div className='bg-gray-400 min-h-screen'>
    <HeaderAdmin/>
    <div className=" font-bold ml-5">
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
        
        ]}
      />
    </div>
  </div>
);

export default App;