"use client";
import { MdOutlineTextFields } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import CodeEditor from "./CodeEditor";
import LanguageSelect from "./LanguageSelect";
import { LanguageType } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createNote } from "@/lib/actions/note.action";
import { useUser } from "@clerk/nextjs";

interface NoteEditorType {
  title: string,
  description: string,
  code: string,
  language: LanguageType
  setTitle: (title: string) => void,
  setDescription: (description: string) => void,
  setCode: (code: string) => void,
  setLanguage: (item: LanguageType) => void
}

function NoteEditor({
  title,
  description,
  code,
  setTitle,
  setDescription,
  setCode,
  language,
  setLanguage
}: NoteEditorType) {

  const { user } = useUser()

  const submitForm = () => {

    // user is not loaded will trigger a new call to the function
    console.log(user?.id)
    if(!user?.id) {
      submitForm();
      return
    }
    

    const note = {
      title,
      description,
      code,
      language: language.name,
      createdAt: new Date(),
      userId: user?.id,
    }
    createNote(note)
      .then((response) => {
        console.log(response)
        alert("note create")
      })
      .catch((response) => {
        console.log(response)
        alert("note create")
      })
  }

  return (
    <div className="gap-5 flex flex-col w-full bg-white p-5  border rounded-l-lg h-auto">

      {/*-- Create Buttons --*/}

      <div className="flex w-full justify-between items-center">
        <Button size="lg" variant="outline" asChild>
          <Link href="/dashboard">
            Cancel
          </Link>
        </Button>
        <Button onClick={submitForm} size="lg"> Create </Button>
      </div>

      {/*-- Content Header --*/}
      <div className="flex justify-between gap-8">

        <div className="flex gap-2 w-full">
          <MdOutlineTextFields size={25} />
          <textarea
            placeholder="Set title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="font-bold text-xl outline-none resize-none h-auto overflow-hidden w-full"
          />
        </div>
      </div >



      {/*-- Description--*/}
      <div className="flex flex-row gap-2 w-full " >
        <IoDocument size={25} color="black" />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          id=""
          placeholder="Enter a description..."
          className="bg-white w-full p-4 border outline-none focus:outline-none transition-all rounded-md text-sm text-slate-500" />
      </div>

      <LanguageSelect language={language} setLanguage={setLanguage} />
      <CodeEditor language={language} code={code} setCode={setCode} />
    </div>
  )
}

export default NoteEditor