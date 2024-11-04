import { Router } from "express";

import { addExperience,delExperience ,updateExperience } from "../controllers/experiences.controller.js";


const router = Router();


router.route("/add_experience").post(addExperience);
router.route("/del_experience/:id").delete(delExperience);
router.route("/update_experience/:id").put(updateExperience);

export default router;