import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, Input, Image } from 'antd';
import axios from 'axios';
import { SetReloadData } from "../../redux/rootSlice.js";

function AdminCertification() {
    const { portfolioData } = useSelector((state) => state.root);
    const { certification } = portfolioData || {};
    const [showAddEditModal, setShowAddEditModal] = useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            const formData = new FormData();
            for (let key in values) {
                formData.append(key, values[key]);
            }
            if (selectedFile) {
                formData.append("image", selectedFile);
            }

            if (!selectedItemForEdit) {
                await axios.post("http://localhost:8000/api/v1/certification/add_certification", formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                alert("Project added successfully");
            } else {
                await axios.put(`http://localhost:8000/api/v1/certification/update_certification/${selectedItemForEdit._id}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                alert("Project updated successfully");
            }
            
            setShowAddEditModal(false);
            setSelectedFile(null);
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
                await axios.delete(`http://localhost:8000/api/v1/certification/del_certification/${id}`);
                alert("Certification deleted successfully");
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
                    {certification && certification.length > 0 && (
                        certification.map((ex, index) => (
                            <div
                                key={index}
                                className="p-4 border border-gray-300 rounded-lg bg-white shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative"
                            >
                                <h1 className="text-xl sm:text-2xl m-3 font-semibold">{ex.title}</h1>
                                <h2 className="text-sm sm:text-xl m-3 text-gray-900 whitespace-normal break-words text-center">{ex.Organization}</h2>
                                <h2 className="text-lg m-5 text-gray-600">{ex.period}</h2>
                                <h2 className="text-sm text-gray-500">{ex.description}</h2>
                                
                                <img src={ex.image} alt="image" className="w-24 sm:w-32 m-3 h-24 sm:h-32 object-cover mx-auto" />

                                <div className="flex justify-end space-x-2 mt-4">
                                    <button
                                        className="px-2 sm:px-4 rounded-lg py-1 sm:py-2 bg-blue-400 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
                                        type="button"
                                        onClick={() => handleClick(ex)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-2 sm:px-4 rounded-lg py-1 sm:py-2 bg-red-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
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
                    <Form.Item label="Image">
                        <Input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                        {selectedItemForEdit && selectedItemForEdit.image && (
                            <Image width={150} src={selectedItemForEdit.image} alt="Selected project" className="mt-2" />
                        )}
                    </Form.Item>
                    <div className="flex flex-col sm:flex-row justify-end gap-4">
                        <button
                            className="px-4 bg-white text-black py-2 font-bold border border-black rounded-full w-full sm:w-auto"
                            type="button"
                            onClick={() => setShowAddEditModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-6 bg-blue-400 text-black py-2 font-bold border border-black rounded-full w-full sm:w-auto"
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

export default AdminCertification;
