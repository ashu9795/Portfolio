 
import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {Project} from "../project.modals/project.modal.js"
import { uploadCloudinary, deleteCloudinaryImage } from "../utils/cloudinary.js"

const addNewProject = asyncHandeler(async (req, res) => {
    // Destructure the fields from the request body
    const { link, description, title, technologies } = req.body;

    // Validate required fields
    if (!link) {
        throw new ApiError(400, "Link is required");
    }
    if (!description) {
        throw new ApiError(400, "Description is required");
    }
    if (!title) {
        throw new ApiError(400, "Title is required");
    }
    
    // Check if technologies is provided and split it into an array
    if (!technologies) {
        throw new ApiError(400, "Technologies is required");
    }
    
    // Split the technologies string by commas and trim spaces
    const technologiesArray = technologies.split(',').map(tech => tech.trim());

    // Validate that the technologies array is not empty
    if (!Array.isArray(technologiesArray) || technologiesArray.length === 0) {
        throw new ApiError(400, "Technologies should be a non-empty array");
    }

    // Check if the image was uploaded
    const imageLocalPath = req.file?.path || req.body.image; // Image might come in the form of a base64 string or file path

    if (!imageLocalPath) {
        throw new ApiError(400, "Image is required");
    }

    // Upload image to Cloudinary
    const image = await uploadCloudinary(imageLocalPath);

    if (!image || !image.url) {
        throw new ApiError(500, "Failed to upload image to Cloudinary");
    }

    // Create a new project instance
    const project = new Project({
        image: image.url,
        imagePublicId: image.public_id,
        link,
        description,
        title,
        technologies: technologiesArray // Set the technologies array
    });

    // Save the project to the database
    if (!project) {
        throw new ApiError(500, "Project not created");
    }

    await project.save();

    // Send the response
    res.status(201).json(new ApiResponce(201, project, "Project created"));
});


   


const deleteProject = asyncHandeler(async (req, res) => {
    const { id } = req.params;

    if (!id) throw new ApiError(400, "Project id is required");

    // Find the project to get the image URL
    const project = await Project.findById(id);
    if (!project) throw new ApiError(404, "Project not found");

    // Extract public_id from the image URL
    const imageUrl = project.image;
    const publicIdMatch = imageUrl.match(/\/([^/]+)\.[^/.]+$/); // Extracts 'public_id' before file extension BY chnagtpt
    const publicId = publicIdMatch ? publicIdMatch[1] : null;

    if (publicId) {
        await deleteCloudinaryImage(publicId);
    }

    // Delete the project from the database
    await project.deleteOne();

    res.status(200).json(new ApiResponce(200, "Project deleted"));
});

const updateProject = asyncHandeler(async (req, res) => {
    const { id } = req.params;
    const { link, description, title, technologies } = req.body;

    if (!id) throw new ApiError(400, "Project id is required");



    const project = await Project.findById(id);
    if (!project) throw new ApiError(404, "Project not found");

    if (link) project.link = link;
    if (description) project.description = description;
    if (title) project.title = title;
    if(req.file?.path||req.file?.image[0]?.path)
    {
        const imageUrl = project.image;
    const publicIdMatch = imageUrl.match(/\/([^/]+)\.[^/.]+$/); // Extracts 'public_id' before file extension BY chnagtpt
    const publicId = publicIdMatch ? publicIdMatch[1] : null;

    if (publicId) {
        await deleteCloudinaryImage(publicId);
    }


 const imageLocalPath = req.file?.path||req.file?.image[0]?.path

      const image = await uploadCloudinary(imageLocalPath)
      if (image && image.url) {
        project.image = image.url; // Update the project with the new image URL
    }

      
         
    }
    if (technologies) project.technologies = technologies;

    await project.save();

    res.status(200).json(new ApiResponce(200, project, "Project updated"));


})



export {addNewProject , deleteProject,updateProject}