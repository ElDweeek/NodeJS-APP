
import mongoose, { model, Schema } from "mongoose";


const noteSchema = new Schema({
    title: String,
    description: String,
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true
})


const noteModel = model("Note", noteSchema)


export default noteModel;