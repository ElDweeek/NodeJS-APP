
import noteModel from "../../../DataBase/models/note.model.js"




const getAllNotes = async (req, res) => {
    let allNotes = await noteModel.find().select("title description -_id").populate({
        path: "author",
        select: "name email -_id"
    })
    res.json({ message: "All Notes Fetched", allNotes })
}

const createNote = async (req, res) => {
    let createdNote = await noteModel.insertMany(req.body);
    res.json({ message: "Note Created", createdNote })
}

const deleteNote = async (req, res) => {
    let deletedNote = await noteModel.findOneAndDelete({ _id: req.params.id })
    if (deletedNote) {
        res.json({ message: "Note Deleted", deletedNote })
    } else {
        res.status(404).json({ message: "Note Not Found" })
    }
}

const updateNote = async (req, res) => {
    let updatedNote = await noteModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { title: req.body.title, description: req.body.description } },
        { new: true }
    )
    res.json({ message: "Note Updated", updatedNote })
}







export {
    createNote,
    getAllNotes,
    deleteNote,
    updateNote
}