import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //mongoose ek obj return karta h
        console.log(`\nMONGODB CONNECTED !! DBHOST :${connectionInstance.connection.host}`);//check console of this line
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1) //learn more about process and exit
        
    }
}

export default connectDB