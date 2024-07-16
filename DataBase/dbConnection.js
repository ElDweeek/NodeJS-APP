

import mongoose from 'mongoose';


export const dbConnection = mongoose.connect('mongodb://localhost:27017/NoteApp')
    .then(() => {console.log("DB Connected")})
    .catch(() => {console.log("Failed To Connect Connected")})



