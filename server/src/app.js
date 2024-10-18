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



export {app}


