import multer from 'multer';
import fs from 'fs';
import path from 'path';

const tempDir = path.join(__dirname, 'Public', 'temp');

// Ensure the directory exists
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(`Saving to directory: ${tempDir}`);
        cb(null, tempDir);
    },
    filename: function (req, file, cb) {
        console.log(`Saving file with name: ${file.originalname}`);
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage: storage });
