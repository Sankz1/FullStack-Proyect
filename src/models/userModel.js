import mongoose from 'mongoose'
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
export default mongoose.model('User',userSchema) // Metohd