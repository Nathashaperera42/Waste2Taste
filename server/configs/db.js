import mongoose from "mongoose";

const connectDB= async ()=>{
    try{
        mongoose.connection.on('connected', ()=>console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URL}/waste2taste`)
    }catch(error){
        console.error(error.message);
    }
}
export default connectDB;