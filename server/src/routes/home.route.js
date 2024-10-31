import { Router } from 'express'; // Corrected import
import { updateData } from "../controllers/home.controller.js";

const router = Router(); // Corrected to use Router()

router.route("/update_data").post(updateData);

export default router;
