import { createTransport } from "nodemailer";
import emailTemplate from "./emailTemplate.js";



const sendEmailVerefication = async (email) => {
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
            html: emailTemplate(email), // html body
        });
    
        console.log("Message sent: %s", info.messageId);
    
    
}

export default sendEmailVerefication;