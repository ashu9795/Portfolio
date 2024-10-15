import mongoose from 'mongoose';

const homeSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }



},{timestamps: true});



export const Home = mongoose.model('Home', homeSchema);