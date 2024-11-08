import { Router } from 'express';
import {addCertification ,deleteCertification ,updateCertification} from "../controllers/certification.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
const router = Router();

router.route("/add_certification").post(upload.single("image"),addCertification);
router.route("/del_certification/:id").delete(deleteCertification);
router.route("/update_certification/:id").put(upload.single("image"),updateCertification);

export default router;

