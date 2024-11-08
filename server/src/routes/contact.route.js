import { Router } from 'express';
import {updateContact} from "../controllers/contact.controller.js"
const router = Router();

router.route("/update_contact").patch(updateContact);

export default router;