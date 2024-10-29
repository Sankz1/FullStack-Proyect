import mongoose from 'mongoose'
// Schema to create a user
const userSchema = mongoose.Schema({
 username:{
     type: String,
     required : true, //Requirment
     trim : true      //Delete spaces
 },
 contactemail:{
     type: String,
     required :true,
     unique: true,  //Unique validation
 },
 password:{
     type: String,
     required : true,
 }
    })
export default mongoose.model('User',userSchema) // Metohd to use the data
