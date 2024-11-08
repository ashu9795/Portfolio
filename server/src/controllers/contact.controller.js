import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {Contact} from "../project.modals/contact.js"

const updateContact = asyncHandeler(async (req,res)=>{
     const {name,email,phone,address} = req.body;
     if(!name && !email && !phone && !address){
         throw new ApiError(400,"Please provide all the required fields");
     }

     const query = {};
     const update = {};
     if(name){
         update.name = name;
     }
     if(email){
         update.email = email;
     }
     if(phone){
         update.phone = phone;
     }
     if(address){
         update.address = address;
     }

     const newContact = await Contact.findOneAndUpdate(query,update,{new:true});
     if(!newContact){
         throw new ApiError(500,"Something went wrong");
     }
     res.status(200).json(new ApiResponce(200,newContact,"Contact updated successfully"));
})


export {updateContact}