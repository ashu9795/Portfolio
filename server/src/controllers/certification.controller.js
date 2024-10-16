import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {Certification} from "../project.modals/certification.model.js"

const findCertification = asyncHandeler(async (req, res) => {
 
    const certification = await Certification.find();

    if(!certification){
        throw new ApiError(404, "No certification found");}
    res.status(200).json(new ApiResponce(200, "success", certification));


})

export {findCertification}