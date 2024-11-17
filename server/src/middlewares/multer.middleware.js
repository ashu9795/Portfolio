import multer from 'multer';
import fs from 'fs/promises'; // Node.js promises-based file system module

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        try {
            const tempDir = "./Public/temp";
            // Check if the directory exists, create it if not
            await fs.access(tempDir).catch(() => fs.mkdir(tempDir, { recursive: true }));
            cb(null, tempDir);
        } catch (err) {
            cb(err); // Handle errors
        }
    },
    filename: async function (req, file, cb) {
        try {
            // Perform async logic if needed, for example:
            // const uniqueSuffix = await generateUniqueSuffix(); 
            cb(null, file.originalname); // Use the async result if necessary
        } catch (err) {
            cb(err); // Handle errors
        }
    }
});

export const upload = multer({ storage: storage });
