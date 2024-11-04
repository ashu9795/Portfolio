import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {Experience} from "../project.modals/experiences.moda.js"

const addExperience = asyncHandeler(async(req,res)=>{

  const {Organization,title,period,description } = req.body;

  if(!Organization || !title || !period || !description){
    throw new ApiError(400,"Please fill all the fields")
  }

  const newExperience = new Experience({
    Organization,
    title,
    period,
    description
  })

  const savedExperience = await newExperience.save();

  if(!savedExperience){
    throw new ApiError(500,"Experience not saved")
  }

  res.status(200).json(new ApiResponce(200,"Experience added successfully",savedExperience))


})
const delExperience = asyncHandeler(async(req,res)=>{
  const {id} = req.params;

  if(!id){
    throw new ApiError(400,"Please provide id")
  }

  const deletedExperience = await Experience.findByIdAndDelete(id);

  if(!deletedExperience){
    throw new ApiError(404,"Experience not found")
  }

  res.status(200).json(new ApiResponce(200,"Experience deleted successfully",deletedExperience))



})

const updateExperience = asyncHandeler(async(req,res)=>{
const {id} = req.params;

if(!id){
  throw new ApiError(400,"Please provide id")}

  const {Organization,title,period,description} = req.body;

  if(!Organization && !title && !period && !description){
    throw new ApiError(400,"Please fill  the fields")
  }

  const Update = {}
  if(Organization) Update.Organization = Organization;
  if(title) Update.title = title;
  if(period) Update.period = period;
  if(description) Update.description = description;

  const updatedExperience = await Experience.findByIdAndUpdate(id,Update,{new:true}); 

  if(!updatedExperience){
    throw new ApiError(500,"Experience not updated")
  }

  

res.status(200).json(new ApiResponce(200,"Experience updated successfully",updatedExperience))
})




export {addExperience ,delExperience,updateExperience}