import {ApiError} from "../utils/apiError.js";
import {ApiResponce} from "../utils/apiResponse.js";
import asyncHandeler from  "../utils/asyncHandler.js"
import {Certification} from "../project.modals/certification.model.js"
 import {uploadCloudinary, deleteCloudinaryImage} from "../utils/cloudinary.js"


// const addCertification = asyncHandeler(async (req, res) => {
//     const {description,Organization,title,period} = req.body;

//   if(!description)
//   {
//         throw new ApiError(400, "Description is required")
//   }
//     if(!Organization)
//     {
//         throw new ApiError(400, "Organization is required")
//     }
//     if(!title)
//     {
//         throw new ApiError(400, "Title is required")
//     }

//     if(!period)
//     {
//         throw new ApiError(400, "Period is required")
//     }
      

//     const imageLocalPath = req.file?.path||req.file?.image[0]?.path

//  if(!imageLocalPath)
//  {
//         throw new ApiError(400, "Image is required")
//  }

//     const image = await uploadCloudinary(imageLocalPath)

//     if(!image)
//     {
//         throw new ApiError(500, "Failed to upload image to Cloudinary")
//     }

 
//     const certification = new Certification({
//         description,
//         image : image.url,
//         Organization,
//         title,
//         period
//     });
//     await certification.save();
//      if(!certification){
//          throw new ApiError(400, "Certification not added");
//      }
//         res.status(200).json(new ApiResponce(200,"Certification added", certification));

// })

const addCertification = asyncHandler(async (req, res) => {
    const { description, Organization, title, period } = req.body;
    const imageBase64 = req.body.image; // Assuming the image is being sent as base64 in the request body

    // Validate the inputs
    if (!description) {
        throw new ApiError(400, "Description is required");
    }
    if (!Organization) {
        throw new ApiError(400, "Organization is required");
    }
    if (!title) {
        throw new ApiError(400, "Title is required");
    }
    if (!period) {
        throw new ApiError(400, "Period is required");
    }

    // Check if image was provided
    if (!imageBase64) {
        throw new ApiError(400, "Image is required");
    }

    // Upload image to Cloudinary directly using the base64 data
    const image = await uploadCloudinary(imageBase64);

    if (!image) {
        throw new ApiError(500, "Failed to upload image to Cloudinary");
    }

    // Create new certification entry in the database
    const certification = new Certification({
        description,
        image: image.url,
        Organization,
        title,
        period,
    });

    await certification.save();
    if (!certification) {
        throw new ApiError(400, "Certification not added");
    }

    res.status(200).json(new ApiResponce(200, "Certification added", certification));
});

const deleteCertification = asyncHandeler(async (req, res) => {
    const { id } = req.params;

    if (!id) throw new ApiError(400, "Certification id is required");

    // Find the certification to get the image URL
    const certification = await Certification.findById(id);
    if (!certification) throw new ApiError(404, "Certification not found");

    const imageUrl = certification.image;
    const publicIdMatch = imageUrl.match(/\/([^/]+)\.[^/.]+$/); // Extracts 'public_id' before file extension BY chnagtpt
    const publicId = publicIdMatch ? publicIdMatch[1] : null;

    if (publicId) {
        await deleteCloudinaryImage(publicId);
    }

     await certification.deleteOne();

    res.status(200).json(new ApiResponce(200, "Certification deleted"));

})


const updateCertification = asyncHandeler(async (req, res) => {
    const {description,Organization,title} = req.body;

   const { id } = req.params;

    if (!id) throw new ApiError(400, "Certification id is required");

    const certification = await Certification.findById(id);

    if(!certification) throw new ApiError(404, "Certification not found");

    if(description)
    {
        certification.description = description;
    }
    if(Organization)
    {
        certification.Organization = Organization;
    }
    if(title)
    {
        certification.title = title;
    }
     const imageLocalPath = req.file?.path||req.file?.image[0]?.path
     if(imageLocalPath)
     {
        const imageUrl = certification.image;
    const publicIdMatch = imageUrl.match(/\/([^/]+)\.[^/.]+$/); // Extracts 'public_id' before file extension BY chnagtpt
    const publicId = publicIdMatch ? publicIdMatch[1] : null;

    if (publicId) {
        await deleteCloudinaryImage(publicId);
    }
    
        const image = await uploadCloudinary(imageLocalPath)
        if(!image)
        {
            throw new ApiError(500, "Failed to upload image to Cloudinary")
        }
        certification.image = image.url;
     }

    await certification.save();

    res.status(200).json(new ApiResponce(200, certification, "Certification updated"));


})


export {addCertification ,deleteCertification ,updateCertification}