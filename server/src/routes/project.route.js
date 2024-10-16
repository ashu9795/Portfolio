import { Router } from "express";

import {findProject} from "../controllers/project.controller.js"

const router = Router();

router.route("/projectData").get(findProject);
export default router;