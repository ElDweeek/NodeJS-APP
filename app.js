

import express from "express";
import {dbConnection} from "./DataBase/dbConnection.js"
import userRoutes from "./src/modules/users/users.routes.js";
import noteRoutes from "./src/modules/notes/notes.routes.js";

const app = express()
const port = 3000;
app.use(express.json())

dbConnection

app.use(userRoutes)
app.use(noteRoutes)




app.listen(port, ()=> {
    console.log(`server is Running at http://localhost:${port}`);
    console.log(`-- Our End Points:`);
    console.log(`1 >> server is Running at http://localhost:${port}/signUp`);
    console.log(`2 >> server is Running at http://localhost:${port}/signIn`);
})