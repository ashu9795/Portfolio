import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({

   path: './.env'

})

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "160kb", extended: true}))

app.get("/",(req,res)=>{
    res.send("Hello World")
})

import mainroute from "./routes/mainCheck.routes.js"

app.use("/api/v1/main", mainroute);
import homerouter from "./routes/home.route.js"

app.use("/api/v1/home", homerouter);


import aboutRouter from "./routes/about.route.js"

app.use("/api/v1/about", aboutRouter);

import aboutExperience from "./routes/experiences.route.js"

app.use("/api/v1/experience", aboutExperience);

import aboutProject from "./routes/project.route.js"

app.use("/api/v1/project", aboutProject);

import aboutCertification from "./routes/certification.route.js"

app.use("/api/v1/certification", aboutCertification);
import aboutContact from "./routes/contact.route.js"

app.use("/api/v1/contact", aboutContact);


export {app}


