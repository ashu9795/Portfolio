import React from 'react';
import { Form, Input } from 'antd';

function AdminIntro() {
  return (
    <div >
      <Form className=" p-8  rounded-lg w-full max-w-md">
        <Form.Item name="name" className="mb-4"  label = "Name">
          <Input

            placeholder="Name"
            className="w-full h-10 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>
        <Form.Item name="title" className="mb-4" label = "Title">
          <Input
            placeholder="Title"
            className="w-full h-10 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default AdminIntro;
