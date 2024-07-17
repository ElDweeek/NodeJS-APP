

import userModel from "../../../DataBase/models/user.model.js"
import sendEmailVerefication from "../../util/sendEmail.js"


const signUp = async (req,res) => {
    // code implemented in checkLoginRegister.js File
    await userModel.insertMany(req.body)
    sendEmailVerefication(req.body.email)
    res.json({message: "Register Successful"})
}



const signIn = async (req,res) => {
    // code implemented in checkLoginRegister.js File
    res.json({message: "Login Successful"})
}


const verifyAccount = async(req,res) => {
    
    console.log(req.params.email);
    let verifiedUser = await userModel.findOneAndUpdate(
        {email: req.params.email},
        {isVerified: true},
        {new: true}
    )
    res.json({message: "welcome", verifiedUser})
}


export {
    signUp,
    signIn,
    verifyAccount
}