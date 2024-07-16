import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
},{
    timestamps: true
})


const userModel = mongoose.model("User", userSchema)


export default userModel;