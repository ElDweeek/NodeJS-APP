

import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "./notes.controller.js";

const noteRoutes = express.Router()



noteRoutes.route("/note").post(createNote).get(getAllNotes)
noteRoutes.route("/note/:id").delete(deleteNote).put(updateNote)







export default noteRoutes;