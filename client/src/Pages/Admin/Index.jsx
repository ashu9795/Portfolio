import React from 'react';
import Header from '../../Components/Header';
import { Tabs } from 'antd';
import AdminAbout from './AdminAbout.jsx';
import AdminIntro from './AdminIntro.jsx';
import"../../index.css";

const App = () => (
  <>
    <Header />
    <div className="text-blue-500 font-bold ml-5">
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
  </>
);

export default App;
