import express from "express"
import { addUser, deleteUser, getAllUsers, updateUser } from "./users.controller.js";

const userRoutes = express.Router()


// userRoutes.get("/user", getAllUsers);
// userRoutes.post("/user", addUser);
// userRoutes.delete("/user/:id", deleteUser);
// userRoutes.put("/user/:id", updateUser);


userRoutes.route("/user").get(getAllUsers).post(addUser)
userRoutes.route("/user/:id").delete(deleteUser).put(updateUser)

export default userRoutes;