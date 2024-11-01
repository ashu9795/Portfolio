import React from 'react';
import { Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';

function AdminAbout() {
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/about/update_about", values);
      alert("About updated successfully");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      {/* Description Form */}
      <Form
        onFinish={onFinish}
        className="p-8 rounded-lg"
        initialValues={portfolioData?.about[0]}
      >
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

        {/* Description Form */}
        <Form.Item name="description" className="mb-4" label="Description">
          <textarea
            placeholder="Enter description"
            className="w-full h-32 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>

        {/* Submit Button */}
        <div className="flex justify-center w-full">
          <button
            className="px-10 rounded-lg py-2 bg-black text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
            type="submit" // set the button type to "submit"
          >
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
