import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"

import  {Home} from "../project.modals/home.modal.js"


const findHome = asyncHandeler(async (req, res) => {

    const home = await Home.find();

    if(!home){
        throw new ApiError(404, "No home found");


    }

    res.status(200).json(new ApiResponce(200, "success", home[0]));


})


export {findHome}