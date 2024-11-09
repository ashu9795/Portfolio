import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: './.env' });

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("No file to upload - localFilePath is missing.");
            return null;
        }

        // Check if the file exists before uploading
        if (!fs.existsSync(localFilePath)) {
            console.error("File not found:", localFilePath);
            return null;
        }

        // Attempt to upload to Cloudinary
        const result = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" });

        if (!result) {
            console.log("Cloudinary did not return a result.");
            return null;
        }

        // Unlink the file after a successful upload
        fs.unlinkSync(localFilePath);
        return result;

    } catch (error) {
        console.error("Unable to upload to Cloudinary:", error);
        return null;
    }
};

const deleteCloudinaryImage = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error("Unable to delete image from Cloudinary:", error);
    }
};

export { uploadCloudinary, deleteCloudinaryImage };
