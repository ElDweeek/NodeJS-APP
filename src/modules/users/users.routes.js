import express from "express"
import { signIn, signUp } from "./users.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";

const userRoutes = express.Router()


userRoutes.post("/signUp",checkEmail, signUp)
userRoutes.get("/signIn", signIn)

export default userRoutes;