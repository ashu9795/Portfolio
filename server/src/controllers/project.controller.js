 
import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {Project} from "../project.modals/project.modal.js"

const findProject = asyncHandeler(async (req, res) => {
    const projects = await Project.find();
    console.log(projects);  // Log the fetched projects to the console
    
    if (!projects || projects.length === 0) {
        throw new ApiError(404, "No project found");
    }

    res.status(200).json(new ApiResponce(200, "success", projects));  // Ensure the data is passed
});


export {findProject}