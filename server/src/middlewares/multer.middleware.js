import multer from 'multer';

// Configure multer to use memory storage
const storage = multer.memoryStorage();

// Create the upload middleware
export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // Limit file size to 10MB (optional)
    },
    fileFilter: (req, file, cb) => {
        // Optional: Validate file types (e.g., only images)
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true); // Accept file
        } else {
            cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'), false); // Reject file
        }
    }
});
