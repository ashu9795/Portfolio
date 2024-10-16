import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {About} from "../project.modals/about.modal.js"
import {Certification} from "../project.modals/certification.model.js"
import {Contact} from "../project.modals/contact.js"
import {Experience} from "../project.modals/experiences.moda.js"
import  {Home} from "../project.modals/home.modal.js"
import {Project} from "../project.modals/project.modal.js"


const fetchData = asyncHandeler(async (req, res) => {
    const about = await About.find();
    if(!about){
        throw new ApiError(404, "No about found");
    }
    const certification = await Certification.find();
    if(!certification){
        throw new ApiError(404, "No certification found");
    }

    const contact = await Contact.find();
    if(!contact){
        throw new ApiError(404, "No contact found");
    }




    const experience = await Experience.find();
    if(!experience){
        throw new ApiError(404, "No experience found");
    }

    const home = await Home.find();
    if(!home){
        throw new ApiError(404, "No home found");
    }


    const project = await Project.find();
    if(!project){
        throw new ApiError(404, "No project found");
    }

    const total = {about : about[0], certification, contact : contact[0], experience, home : home[0], project}


    



    res.status(200).json(new ApiResponce(200, "success", {about, certification, contact, experience, home, project}));
})

export {fetchData}