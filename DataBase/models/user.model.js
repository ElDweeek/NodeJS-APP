import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    isVerified:{
        type: Boolean,
        default: false
    } 
},{
    timestamps: true
})


const userModel = mongoose.model("User", userSchema)


export default userModel;