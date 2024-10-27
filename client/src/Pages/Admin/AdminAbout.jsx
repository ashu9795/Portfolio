import React from 'react';
import { Form, Input } from 'antd';

function AdminAbout() {
  return (
    <div className="">
      
      {/* Description Form */}
      <Form className=" p-8 rounded-lg  ">
       

      {/* Languages Form */}
      
        <Form.Item name="languages" className="mb-4" label="Languages">
          <Input
            placeholder="Enter languages"
            className="w-full h-10 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>
    

      {/* Tools Form */}
      
        <Form.Item name="tools" className="mb-4" label="Tools">
          <Input
            placeholder="Enter tools"
            className="w-full h-10 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>
        <Form.Item name="description" className="mb-4" label="Description">
          <textarea
            placeholder="Enter description"
            className="w-full h-32 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>
      </Form>

    </div>
  );
}

export default AdminAbout;
