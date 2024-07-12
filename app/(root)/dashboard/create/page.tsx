"use client"
import { useState } from "react";
import NoteEditor from "@/components/dashboard/Notes/NoteEditor";
import SingleNote from "@/components/dashboard/Notes/SingleNote";
import { VscOpenPreview } from "react-icons/vsc";

const codePlaceholder = `
    import React from "react";

    export default funcion () {
        return (
            <div>
            
            </div>
        )
    }
`

export default function CreateNote() {
    const [title, setTitle] = useState("Your Note title");
    const [description, setDescription] = useState("Short description about your code");
    const [tags, setTags] = useState(["no tag"]);
    const [code, setCode] = useState(codePlaceholder)

    return <div className="flex flex-row w-full gap-2">

        <div className=" space-y-4 h-fit w-full ">
            <h1 className="flex items-center flex-row gap-2 pl-4 pt-4 text-4xl text-slate-800 fon">
                <VscOpenPreview />
                Preview
            </h1>
            <SingleNote
                noteContent={{
                    title,
                    description,
                    tags,
                    code,
                    createdAt: new Date(),
                }}
                width="full" />
        </div>
        <NoteEditor
            title={title}
            description={description}
            tags={tags}
            code={code}
            setTitle={setTitle}
            setDescription={setDescription}
            setTags={setTags}
            setCode={setCode}
        />
    </div>
}