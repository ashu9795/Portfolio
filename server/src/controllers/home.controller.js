import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"

import  {Home} from "../project.modals/home.modal.js"

const updateData = asyncHandeler(async (req, res) => {
    const { name, title } = req.body;

    if (!name && !title) {
        throw new ApiError(400, "Please provide all the required fields");
    }

    // The query to find the document to update (you might want to specify an ID or another identifier)
    const query = {}; // Specify your query criteria here, e.g., { _id: req.params.id }

    // The update object
    const update = {
        name: name,
        title: title
    };

    const data = await Home.findOneAndUpdate(query, update, { new: true });

    if (!data) {
        throw new ApiError(404, "Data not found"); // Changed to 404 for not found
    }

    res.status(200).json(new ApiResponce(200, data , "Done")); // Fixed typo
});

export { updateData };