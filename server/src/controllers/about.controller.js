import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {About} from "../project.modals/about.modal.js"


const updateAbout = asyncHandeler(async (req, res) => {
    
      const {description, languages,tools} = req.body;
      
      if(!description && !languages && !tools){
          throw new ApiError(400, "Please fill all the fields")
      }

      const query = {};
      const update = {};

        if(description){
            update.description = description;
        }
        if(languages){
            update.languages = languages;
        }
        if(tools){
            update.tools = tools;
        }

        const newAbout = await About.findOneAndUpdate(query, update, {new: true, upsert: true});

        if(!newAbout){
            throw new ApiError(500, "Something went wrong")
        }

        res.status(200).json(new ApiResponce(200, newAbout, "About updated successfully"))

    })


export { updateAbout }