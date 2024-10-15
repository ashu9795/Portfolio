import mongoose from "mongoose";

const certification = new mongoose.Schema({
    
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
        },
        image : {
            type: String,
            required: true
        }

    
}, { timestamps: true });




export const Certification = mongoose.model("Certification", certification);