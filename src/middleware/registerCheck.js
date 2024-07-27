import userModel from "../../DataBase/models/user.model.js";
import bcrypt from "bcrypt"



export const checkForRegister = async (req, res, next) => {
    const existUser = await userModel.findOne({ email: req.body.email });

    if (existUser){
        return res.status(409).json({ message: "user Already Exist" });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 8)

    next()
}