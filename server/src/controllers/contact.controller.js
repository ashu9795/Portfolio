import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {Contact} from "../project.modals/contact.js"


const findContact = asyncHandeler(async (req, res) => {
    
        const contact = await Contact.find();
    
        if(!contact){
            throw new ApiError(404, "No contact found");
        }
  res.status(200).json(new ApiResponce(200, "success", contact[0]));
    })


export {findContact}