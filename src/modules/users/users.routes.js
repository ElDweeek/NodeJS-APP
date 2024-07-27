import express from "express"
import { signIn, signUp , verifyAccount } from "./users.controller.js";
import { checkForRegister } from "../../middleware/registerCheck.js";
import { authenticatedUser, checkPassword, checkVerification, generateToken } from "../../middleware/loginCheck.js";

const userRoutes = express.Router()


userRoutes.post("/signUp",checkForRegister, signUp)
userRoutes.post("/signIn",authenticatedUser,checkPassword,checkVerification,generateToken, signIn)
userRoutes.get("/verify/:email", verifyAccount)

export default userRoutes;