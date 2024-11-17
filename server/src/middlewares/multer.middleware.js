import multer from 'multer';

import fs from 'fs/promises';

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        const tempDir = "./Public/temp";
        try {
            await fs.access(tempDir).catch(() => fs.mkdir(tempDir, { recursive: true }));
            cb(null, tempDir);
        } catch (err) {
            cb(new Error("Failed to create temp directory"));
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage: storage });
