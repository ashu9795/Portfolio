import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {About} from "../project.modals/about.modal.js"


const findAbout = asyncHandeler(async (req, res) => {
    
        const about = await About.find();
    
        if(!about){
            throw new ApiError(404, "No about found");
        }
  res.status(200).json(new ApiResponce(200, "success", about));
    })


export {findAbout}