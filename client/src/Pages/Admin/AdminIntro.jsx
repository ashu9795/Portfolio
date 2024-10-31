import React from 'react';
import { Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Import axios


const AdminIntro = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      // Use POST instead of GET
      const response = await axios.post("http://localhost:8000/api/v1/home/update_data", values);
      
      console.log(response.data); // Log the response data

      // You might want to handle the response or display a success message here
    } catch (error) {
      console.error("Error updating data:", error); // Log any errors
      // You may want to show an error message to the user
    }

     // Reset the form
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        className="p-8 rounded-lg w-full max-w-md"
        initialValues={portfolioData?.home[0]}
      >
        <Form.Item
          name="name"
          className="mb-4"
          label="Name"
        >
          <Input
            placeholder="Name"
            className="w-full h-10 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>
        <Form.Item
          name="title"
          className="mb-4"
          label="Title"
        >
          <Input
            placeholder="Title"
            className="w-full h-10 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>
        <div className='flex justify-center w-full'>
          <button 
            className='px-10 rounded-lg py-2 bg-black text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800'
            type='submit'
          >
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
