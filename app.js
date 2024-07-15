

import express from "express";
import userRoutes from "./src/modules/users/users.routes.js";
import postRoutes from "./src/modules/posts/posts.routes.js";

const app = express()

app.use(express.json())

app.use(userRoutes)
app.use(postRoutes)





app.listen(3000)