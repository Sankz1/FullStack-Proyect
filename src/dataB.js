import mongoose from 'mongoose'

export const connectDb = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/FullstackDb');
        console.log("Database is Connected")
    }
    catch (error){
        console.log(error)
    }
}