import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Form, Input } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {  SetReloadData } from "../../redux/rootSlice.js";




function AdminExperience() {
    const { portfolioData } = useSelector((state) => state.root);
    const { experience } = portfolioData || {};
    const [showAddEditModal, setShowAddEditModal] = useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    

    const onFinish = async (values) => {
        let response = null;

        try {
            if (!selectedItemForEdit) {
                response = await axios.post("http://localhost:8000/api/v1/experience/add_experience", values);
                alert("Experience added successfully");
            } else {
                response = await axios.put(`http://localhost:8000/api/v1/experience/update_experience/${selectedItemForEdit._id}`, values);
                alert("Experience updated successfully");
            }
            setShowAddEditModal(false);
            dispatch(SetReloadData(true));
        } catch (error) {
            console.log(error);
        }
    };
    

    const handleClick = (ex) => {
        setShowAddEditModal(true);
        setSelectedItemForEdit(ex);
    };

    useEffect(() => {
        if (selectedItemForEdit) {
            form.setFieldsValue(selectedItemForEdit);
        } else {
            form.resetFields();
        }
    }, [selectedItemForEdit, form]);


    const delClick = async (id) => {

        const confirmDelete = window.confirm("Do you want to delete this experience?");
        if(confirmDelete){

        try {
            const response = await axios.delete(`http://localhost:8000/api/v1/experience/del_experience/${id}`)
            alert("Experience deleted successfully")
            dispatch(SetReloadData(true))
        } catch (error) {
            console.log(error)
        }}
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex justify-end  mb-4">
                    <button
                        className="px-3 py-2  bg-slate-600 text-white rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                        type="button"
                        onClick={() => { 
                            setShowAddEditModal(true);
                            setSelectedItemForEdit(null);
                        }}
                    >
                        +New
                    </button>
                </div>
                <div className="flex flex-wrap gap-4 justify-start">
                    {experience && experience.length > 0 && (
                        experience.map((ex, index) => (
                            <div
                                key={index}
                                className="p-4 border border-gray-300 rounded-lg bg-white shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative"
                            >
                                <h1 className="text-2xl m-3 font-semibold">{ex.title}</h1>
                                <h2 className="text-xl flex justify-center text-gray-900">{ex.Organization}</h2>
                                <h2 className="text-lg m-5 text-gray-600">{ex.period}</h2>
                                <h2 className="text-sm text-gray-500">{ex.description}</h2>

                                <div className="flex justify-end space-x-2 mt-4">
                                    <button
                                        className="px-4 rounded-lg py-2 bg-blue-400 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
                                        type="button"
                                        onClick={() => handleClick(ex)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-4 rounded-lg py-2 bg-red-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
                                        type="button"
                                        onClick = { () => delClick(ex._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <Modal
                open={showAddEditModal}
                title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
                footer={null}
                onCancel={() => setShowAddEditModal(false)}
            >
                <Form 
                    form={form}
                    layout="vertical" 
                    onFinish={onFinish  }
                    initialValues={{ title: "", Organization: "", period: "", description: "" }}
                >
                    <Form.Item name="title" label="Title" >
                        <Input placeholder="Title" />
                    </Form.Item>
                    <Form.Item name="Organization" label="Organization" >
                        <Input placeholder="Organization" />
                    </Form.Item>
                    <Form.Item name="period" label="Period" >
                        <Input placeholder="Period" />
                    </Form.Item>
                    <Form.Item name="description" label="Description" >
                        <Input.TextArea
                            className="w-full  rounded-md pl-5 border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
                            placeholder="Description"
                            rows={5}
                        />
                    </Form.Item>
                    <div className="flex justify-end gap-4">
                        <button 
                            className="px-4 bg-white text-black py-2 font-bold border border-black rounded-full"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowAddEditModal(false);
                            }}
                        >
                            Cancel
                        </button>
                        <button 
                            className="px-6 bg-blue-400 text-black py-2 font-bold border border-black rounded-full"
                             htmlType="submit"
                        >
                            {selectedItemForEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </Form>
            </Modal>
        </>
    );
}

export default AdminExperience;
