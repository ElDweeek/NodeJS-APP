

import userModel from "../../../DataBase/models/user.model.js"
import sendEmailVerefication from "../../util/sendEmail.js"
import generateOTP from "../../util/generateOTP.js"


const signUp = async (req, res) => {
    // code implemented in registerCheck.js File
    const otpGenerated = generateOTP();
    await userModel.insertMany({...req.body, otp: otpGenerated})
    sendEmailVerefication(req.body.email,otpGenerated)
    res.json({ message: "Register Successful, Please verify your email." })
}



const signIn = async (req, res) => {
    // code implemented in loginCheck.js File
    // console.log(req);
    const { user, token } = req;
    res.status(200).json({
        message: "Login Successful", token, user: {
            id: user._id,
            email: user.email,
            role: user.role
        }
    })
}


const verifyAccount = async (req, res) => {
    //**********OTP_Verification************IN EMAIL :'D
    const { email ,otp } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (user.otp == otp) {
        const verifiedUser = await userModel.findOneAndUpdate(
            { email: req.body.email },
            { isVerified: true, otp: null },
            { new: true }
        );
        return res.json({ message: "Welcome", verifiedUser });
    } else {
        return res.status(401).json({ message: "Invalid OTP" });
    }
    
    //**********E-mail_Verification************
    // let verifiedUser = await userModel.findOneAndUpdate(
    //     { email: req.params.email },
    //     { isVerified: true },
    //     { new: true }
    // )
    // res.json({ message: "welcome", verifiedUser })
}


export {
    signUp,
    signIn,
    verifyAccount
}