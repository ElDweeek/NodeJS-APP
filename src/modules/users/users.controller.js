

import userModel from "../../../DataBase/models/user.model.js"
import bcrypt from "bcrypt"


const signUp = async (req,res) => {

    await userModel.insertMany(req.body)
    res.json({message: "Added"})

}



const signIn = async (req,res) => {

    const existUser = await userModel.findOne({email : req.body.email})
    if(!existUser || !bcrypt.compareSync(req.body.password , existUser.password))
        return res.status(404).json({message: "Email Or Password is Invaild"})
    res.json({message: "Login Successful" ,existUser})
}



export {
    signUp,
    signIn
}