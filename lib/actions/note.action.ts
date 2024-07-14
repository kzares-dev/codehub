import connect from "../connect"
import Note from "../schema/note.schema";
    
interface ServerNoteType {
    title: string,
    description: string,
    code: string,
    language: string,
    createdAt: Date,
    userId: string,
}

export async function createNote(note: ServerNoteType): Promise<ServerNoteType> {
    await connect();
    const newNote = await Note.create(note);

    return newNote
}
