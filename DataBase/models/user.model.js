import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    otp: String,
    isVerified:{
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enums: ["User","Admin"],
        default: "User"
    }
},{
    timestamps: true
})


const userModel = mongoose.model("User", userSchema)


export default userModel;