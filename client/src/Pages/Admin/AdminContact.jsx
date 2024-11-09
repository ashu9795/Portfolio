import React from 'react';
import { Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Import axios

const AdminContact = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    const confirmSave = window.confirm("Do you want to save changes?");

    if (confirmSave) {
      try {
        // Use POST instead of GET
        const response = await axios.patch("http://localhost:8000/api/v1/contact/update_contact", values);
        
        alert("Contact updated successfully");

        // You might want to handle the response or display a success message here
      } catch (error) {
        console.error("Error updating data:", error); // Log any errors
        // You may want to show an error message to the user
      }

      // Reset the form
    } else {
      // Handle the cancel action if needed
      console.log("Changes were not saved.");
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        className="p-8 rounded-lg w-full max-w-md"
        initialValues={portfolioData?.contact[0]}
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
          name="email"
          className="mb-4"
          label="Email"
        >
          <Input
            placeholder="Email"
            className="w-full h-10 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>
        <Form.Item
         
          name="phone"
          className="mb-4"
          label="Phone"
        >
          <Input
          
            placeholder="Phone"
            className="w-full h-10 rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
            style={{ paddingLeft: '20px' }}
          />
        </Form.Item>
        <Form.Item
          name="address"
          className="mb-4"
          label="Address"
        >
          <Input
            placeholder="Address"
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

export default AdminContact;
