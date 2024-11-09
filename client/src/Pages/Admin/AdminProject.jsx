import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, Input, Image } from 'antd';
import axios from 'axios';
import { SetReloadData } from "../../redux/rootSlice.js";

function AdminProject() {
    const { portfolioData } = useSelector((state) => state.root);
    const { project } = portfolioData || {};
    const [showAddEditModal, setShowAddEditModal] = useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);  // New state for file
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            const formData = new FormData();
            
            // Append all form values to formData
            for (let key in values) {
                formData.append(key, values[key]);
            }

            // Append the selected file to formData if it exists
            if (selectedFile) {
                formData.append("image", selectedFile);
            }

            // Handle add and update logic with headers for `multipart/form-data`
            if (!selectedItemForEdit) {
                await axios.post("http://localhost:8000/api/v1/project/add_project", formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                alert("Project added successfully");
            } else {
                await axios.put(`http://localhost:8000/api/v1/project/update_project/${selectedItemForEdit._id}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                alert("Project updated successfully");
            }
            
            setShowAddEditModal(false);
            setSelectedFile(null);  // Clear the selected file
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
        const confirmDelete = window.confirm("Do you want to delete this project?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8000/api/v1/project/del_project/${id}`);
                alert("Project deleted successfully");
                dispatch(SetReloadData(true));
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex justify-end mb-4">
                    <button
                        className="px-3 py-2 bg-slate-600 text-white rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
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
                    {project && project.length > 0 && (
                        project.map((ex, index) => (
                            <div
                                key={index}
                                className="p-4 border border-gray-300 rounded-lg bg-white shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative"
                            >
                                <h1 className="text-2xl m-3 font-semibold">{ex.title}</h1>
                                <h2 className="text-xl m-3 text-gray-900 whitespace-normal break-words text-center">{ex.technologies + " , "}</h2>
                          
                                <h2 className="text-sm m-3 text-gray-500">{ex.description}</h2>
                                
                                <img src={ex.image} alt="image" className="w-32 h-32 object-cover mx-auto" />

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
                                        onClick={() => delClick(ex._id)}
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
                title={selectedItemForEdit ? "Edit Project" : "Add Project"}
                footer={null}
                onCancel={() => setShowAddEditModal(false)}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{ title: "", technologies: "", link: "", description: "" }}
                >
                    <Form.Item name="title" label="Title">
                        <Input placeholder="Title" />
                    </Form.Item>
                    <Form.Item name="technologies" label="Technologies">
                        <Input placeholder="Technologies" />
                    </Form.Item>
                    <Form.Item name="link" label="Link">
                        <Input placeholder="Link" />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <Input.TextArea
                            className="w-full rounded-md border border-gray-300 focus:outline-none focus:border-2 focus:border-gray-800"
                            placeholder="Description"
                            rows={5}
                        />
                    </Form.Item>
                    <Form.Item label="Image">
                        <Input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                        {selectedItemForEdit && selectedItemForEdit.image && (
                            <Image width={200} src={selectedItemForEdit.image} alt="Selected project" className="mt-2" />
                        )}
                    </Form.Item>
                    <div className="flex justify-end gap-4">
                        <button
                            className="px-4 bg-white text-black py-2 font-bold border border-black rounded-full"
                            type="button"
                            onClick={() => setShowAddEditModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-6 bg-blue-400 text-black py-2 font-bold border border-black rounded-full"
                            type="submit"
                        >
                            {selectedItemForEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </Form>
            </Modal>
        </>
    );
}

export default AdminProject;
