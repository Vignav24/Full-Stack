import mongoose from "mongoose"

export const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/vignesh')
        console.log("MongoDB Connected")
    }
    catch (error){
        console.log(error)
}
}