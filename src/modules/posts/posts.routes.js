import express from "express"
import { addPost, deletePost, getAllPosts, updatePost } from "./posts.controller.js";

const postRoutes = express.Router()


// postRoutes.get("/post", getAllposts);
// postRoutes.post("/post", addpost);
// postRoutes.delete("/post/:id", deletepost);
// postRoutes.put("/post/:id", updatepost);


postRoutes.route("/post").get(getAllPosts).post(addPost)
postRoutes.route("/post/:id").delete(deletePost).put(updatePost)

export default postRoutes;