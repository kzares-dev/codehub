"use client"
import { useState } from "react";   
import NoteEditor from "@/components/dashboard/Notes/NoteEditor";
import SingleNote from "@/components/dashboard/Notes/SingleNote";
import { VscOpenPreview } from "react-icons/vsc";
import { NoteType } from "@/lib/types";

export default function CreateNote() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [tags, setTags] = useState();
    const [code, setCode] = useState()






    return <div className="flex flex-row w-full gap-2">

        <div className=" space-y-4 h-fit w-full ">
            <h1 className="flex items-center flex-row gap-2 pl-4 pt-4 text-4xl text-slate-800 fon">
                <VscOpenPreview />
                Preview
            </h1>
            <SingleNote width="full" />
        </div>
        <NoteEditor />
    </div>
}