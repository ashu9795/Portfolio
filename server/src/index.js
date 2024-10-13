import {app} from "./app.js"
import  dotenv from 'dotenv'
import connectDB from "./DB/index.js"

dotenv.config(
   {
      path: './.env'
   }
)

try {
   connectDB()
   .then(() => {
     app.on("error",(err)=>{
         console.log(err)
     })
      app.listen(process.env.PORT||8000,()=>{
            console.log(`Server is running on port ${process.env.PORT||8000}`)
      })
   
   })
} catch (error) {
   console.log( " MOngoDB connection failed",error)
   
}
