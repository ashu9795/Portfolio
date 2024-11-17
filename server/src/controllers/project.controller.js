 
import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {Project} from "../project.modals/project.modal.js"
import { uploadCloudinary, deleteCloudinaryImage } from "../utils/cloudinary.js"

const addNewProject = asyncHandeler(async (req, res) => {
    const { link, description, title, technologies } = req.body;

    // Validate required fields
    if (!link) throw new ApiError(400, "Link is required");
    if (!description) throw new ApiError(400, "Description is required");
    if (!title) throw new ApiError(400, "Title is required");
    if (!technologies) throw new ApiError(400, "Technologies is required");

    // Convert technologies to an array
    const technologiesArray = technologies.split(',').map(tech => tech.trim());
    if (!Array.isArray(technologiesArray) || technologiesArray.length === 0) {
        throw new ApiError(400, "Technologies should be a non-empty array");
    }

    // Check if the image is provided
    if (!req.file?.buffer) throw new ApiError(400, "Image is required");

    // Upload the image to Cloudinary
    const image = await uploadCloudinary(req.file.buffer);
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
        technologies: technologiesArray,
    });

    // Save the project to the database
    await project.save();

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

    // Update fields if provided
    if (link) project.link = link;
    if (description) project.description = description;
    if (title) project.title = title;

    // Handle image update
    if (req.file?.buffer) {
        // Delete the old image from Cloudinary
        const imageUrl = project.image;
        const publicIdMatch = imageUrl.match(/\/([^/]+)\.[^/.]+$/); // Extract public_id
        const publicId = publicIdMatch ? publicIdMatch[1] : null;

        if (publicId) {
            await deleteCloudinaryImage(publicId);
        }

        // Upload the new image to Cloudinary
        const image = await uploadCloudinary(req.file.buffer);
        if (image && image.url) {
            project.image = image.url; // Update project with the new image URL
            project.imagePublicId = image.public_id;
        }
    }

    if (technologies) {
        project.technologies = technologies.split(',').map(tech => tech.trim());
    }

    // Save the updated project
    await project.save();

    res.status(200).json(new ApiResponce(200, project, "Project updated"));
});




export {addNewProject , deleteProject,updateProject}