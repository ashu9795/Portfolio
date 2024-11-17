import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (fileBuffer) => {
    try {
        if (!fileBuffer) {
            console.log("No file buffer to upload.");
            return null;
        }

        // Convert the buffer to a readable stream
        const stream = cloudinary.uploader.upload_stream(
            { resource_type: "auto" },
            (error, result) => {
                if (error) {
                    console.error("Error uploading to Cloudinary:", error);
                    return null;
                }
                return result;
            }
        );

        // Write the buffer to the Cloudinary upload stream
        stream.end(fileBuffer);

        return new Promise((resolve, reject) => {
            stream.on("finish", (result) => resolve(result));
            stream.on("error", (error) => reject(error));
        });
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
