import { Router } from "express";

import {updateAbout} from "../controllers/about.controller.js";

const router = Router();


router.route("/update_about").post(updateAbout);

export default router;