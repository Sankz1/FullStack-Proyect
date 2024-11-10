import mongoose from "mongoose";
const tasksSchema =new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    }

})
export default mongoose.model("userTask", tasksSchema)