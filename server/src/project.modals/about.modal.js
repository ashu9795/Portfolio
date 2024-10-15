import mongoose from "mongoose";


const aboutSchema = new mongoose.Schema({
 description: {
    type: String,
    required: true
  },
  languages: {
    type: String,
    required: true
  },
  tools: {
    type: String,
    required: true
  }

},{timestamps: true});




export const About = mongoose.model('About', aboutSchema);