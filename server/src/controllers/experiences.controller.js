import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {Experience} from "../project.modals/experiences.moda.js"

 const findExperience = asyncHandeler(async (req, res) => {
     
         const experience = await Experience.find();
     
         if(!experience){
             throw new ApiError(404, "No experience found");
         }
   res.status(200).json(new ApiResponce(200, "success", experience));
     })

     export {findExperience}