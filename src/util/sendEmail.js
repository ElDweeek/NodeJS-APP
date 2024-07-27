import { createTransport } from "nodemailer";
import emailTemplate from "./emailTemplate.js";
import otpEmailTemplate from "./otpEmailTemplate.js";



const sendEmailVerefication = async (email,otp) => {
    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: "noteappiti@gmail.com",
            pass: "aqap qnzf bwmh qrbc",
        },
    });
    
        const info = await transporter.sendMail({
            from: '"Note APP 👻" <noteappiti@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Hello Dear", // Subject line
            text: "Email Verification", // plain text body
            html: otpEmailTemplate(email,otp), // html body
        });
    
        console.log("Message sent: %s", info.messageId);
    
    
}

export default sendEmailVerefication;