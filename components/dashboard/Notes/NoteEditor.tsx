"use client";
import { MdOutlineTextFields } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { GiPapers } from "react-icons/gi";
import { IoDocument } from "react-icons/io5";
import CodeEditor from "./CodeEditor";
import SelectTags from "./SelectTags";

interface NoteEditorType {
  title: string,
  description: string,
  tags: { name: string, selected: boolean }[],
  code: string,
  setTitle: (title: string) => void,
  setDescription: (description: string) => void,
  setTags: (param: { name: string, selected: boolean }[]) => void,
  setCode: (code: string) => void,
}

function NoteEditor({
  title,
  description,
  tags,
  code,
  setTitle,
  setDescription,
  setTags,
  setCode,
}: NoteEditorType) {

  const allTags = [
    {
      name: "javascript",
      selected: false,
    },
    {
      name: "java",
      selected: false,
    },
    {
      name: "python",
      selected: false,
    },
  ]

  return (
    <div className="gap-5 flex flex-col w-full bg-white p-5  border rounded-l-lg h-auto">
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

        <IoClose color="#aaa" size={25} />

      </div >

      {/*-- Note Tags --*/}
      <div className="flex items-center gap-2 text-sm">
        <GiPapers size={20} className="text-slate-800" />
        <div className="flex justify-between w-full">
          <div className="flex gap-2 items-center flex-wrap">
            {/*tags.map((tag, idx) => (
              <div key={tag + idx} className="bg-slate-100 text-slate-400 p-1 px-2 rounded-md">
                {tag}
              </div>
            )) */}
            <SelectTags setTags={setTags} tags={allTags} />
          </div>

        </div>

      </div>

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


      <CodeEditor code={code} setCode={setCode} />
    </div>
  )
}

export default NoteEditor