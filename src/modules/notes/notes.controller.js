
import mongoose from "mongoose"
import noteModel from "../../../DataBase/models/note.model.js"




const getAllNotes = async (req,res) => {
    let allNotes = await noteModel.find().select("title description -_id").populate({
        path: "author",
        select: "name email -_id"
    })
    res.json({message: "All Notes Fetched", allNotes})
}

const createNote = async (req,res) => {
    let createdNote = await noteModel.insertMany(req.body);
    res.json({message: "Note Created", createdNote})
}

const deleteNote = (req,res) => {
    let deletedNote = noteModel.findOneAndDelete(req.params.id)
    res.json({message: "Note Deleted", deletedNote})
}







export {
    createNote,
    getAllNotes
}