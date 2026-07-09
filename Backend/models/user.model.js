import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

name:{
	type:String,
},
email:{
	type:String,
	required:true,
	unique:true
}, 
password:{
	type:String, 
	required:true
}, 

age:Number
},{
	timestamps:true
});

export default mongoose.model("User", userSchema);