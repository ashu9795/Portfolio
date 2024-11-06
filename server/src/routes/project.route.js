import { Router } from "express";

import {addNewProject,deleteProject,updateProject} from "../controllers/project.controller.js"
import { upload } from "../middlewares/multer.middleware.js"

const router = Router();


router.route("/add_project").post(upload.single("image"),addNewProject);
router.route("/del_project/:id").delete(deleteProject);
router.route("/update_project/:id").put(upload.single("image"),updateProject);

export default router;