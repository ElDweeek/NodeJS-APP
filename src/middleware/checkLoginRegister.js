import userModel from "../../DataBase/models/user.model.js";
import bcrypt from "bcrypt"


// For Registration
export const checkEmail = async (req,res,next) => {
    let existUser = await userModel.findOne({email: req.body.email});

    if(existUser) return res.status(409).json({message: "user Already Exist"});
    req.body.password = bcrypt.hashSync(req.body.password,8)

    next()
}


// For Login
export const checkForSignin = async (req,res,next) => {
    const existUser = await userModel.findOne({email : req.body.email})
    if(!existUser || !bcrypt.compareSync(req.body.password , existUser.password))
        return res.status(404).json({message: "Email Or Password is Invaild"})

    next()
}