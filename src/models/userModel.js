import mongoose from "mongoose";
// Schema to create a user
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, //Requirement
      trim: true, //Delete spaces
      unique: true,
    },
    contactEmail: {
      type: String,
      required: true,
      unique: true, //Unique validation
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
export default mongoose.model("Users", userSchema); // Metohd to use the data
