import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

technologies : {
    type: [String],
    required: true
},
title : {
    type: String,
    required: true
},
description : {
    type: String,
    required: true},

link : {
    type: String,
    required: true,
},
image : {
    type: String,
    required: true}

    
},{timestamps: true});




export const Project = mongoose.model("Project", projectSchema);