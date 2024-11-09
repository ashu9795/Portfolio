import { Router } from "express";

const router = Router();
// import {findHome} from "../controllers/home.controller.js"
// import {findProject} from "../controllers/project.controller.js"
// import {findExperience} from "../controllers/experiences.controller.js"
// import {findCertification} from "../controllers/certification.controller.js"
// import {findContact} from "../controllers/contact.controller.js"
// import { findAbout } from "../controllers/about.controller"
import  {fetchData } from "../controllers/main.controller.js";



router.route("/data").get(fetchData);

export default router;