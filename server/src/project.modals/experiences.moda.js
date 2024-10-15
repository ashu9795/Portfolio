import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    Organization : {
        type: String,
        required: true
    },
    period : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    } 

 }, { timestamps: true });






export const Experience = mongoose.model("Experience", experienceSchema);