import express from "express"
import { signIn, signUp , verifyAccount } from "./users.controller.js";
import { checkEmail, checkForSignin } from "../../middleware/checkLoginRegister.js";

const userRoutes = express.Router()


userRoutes.post("/signUp",checkEmail, signUp)
userRoutes.post("/signIn",checkForSignin, signIn)
userRoutes.get("/verify/:email", verifyAccount)

export default userRoutes;