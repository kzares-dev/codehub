"use client"
import { useState } from "react";
import NoteEditor from "@/components/dashboard/Notes/NoteEditor";
import SingleNote from "@/components/dashboard/Notes/SingleNote";
import { VscOpenPreview } from "react-icons/vsc";
import { languages } from "@/lib/constants";

const codePlaceholder = `
    import React from "react";

    export default funcion () {
        return (
            <div>
            
            </div>
        )
    }
`
/*
    !This component is marked as "use client" for one main reason,
    To see the content preview
    the ideal is make it server component and use form actions
    but is not posible in this use case
*/
export default function CreateNote() {
    const [title, setTitle] = useState("Your Note title");
    const [description, setDescription] = useState("Short description about your code");
    const [code, setCode] = useState(codePlaceholder);
    const [language, setLanguage] = useState(languages[0]);

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
                    code,
                    createdAt: new Date(),
                    language: language.name,
                }}
                width="full" />
        </div>
        
        <NoteEditor
            language={language}
            setLanguage={setLanguage}
            title={title}
            description={description}
            code={code}
            setTitle={setTitle}
            setDescription={setDescription}
            setCode={setCode}
        />
    </div>
}