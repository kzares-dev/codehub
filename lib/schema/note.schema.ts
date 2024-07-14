import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: { type: String, required: true},
        description: { type: String,},
        code: { type: String, required: true},
        language: { type: String, required: true},
        createdAt: {type: String, required: true},
        userId: {type: String, required: true}
    },
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema)
export default Note;