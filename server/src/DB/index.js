import DB_Name from "../constant.js";
import mongoose from "mongoose";

const connectDB = async () => {

try {

    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)

    console.log(`\n MongoDB connected !! HOST ON : ${connectInstance.connection.host}`)

    
} catch (error) {
    console.log("MongoDB connection failed at ", error)
}


}

export default connectDB