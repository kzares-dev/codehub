import React from "react";
import { MdFavorite } from "react-icons/md";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CiTrash } from "react-icons/ci";
import { IoLogoJavascript } from "react-icons/io5";

export default function SingleNote({ width="420px" } : { width?: string}) {
    return (
        <div className={`w-full max-w-[${width}] rounded-md bg-white border py-4`}>
            <NoteHeader />
            <NoteDate />
            <NoteTags />
            <NoteDescription />
            <CodeBlock language="javascript" />
            <NoteFooter />

        </div>
    )
}

function NoteHeader() {
    return <div className="flex justify-between px-4">
        <span className="font-bold text-lg pr-5">
            Lorem ipsum dolor sit amet consectetur ?
        </span>

        <MdFavorite size={25} color="#973131" />
    </div>
}

function NoteDate() {
    return <div className="flex gap-1 px-4 py-1 font-light text-slate-500 text-sm">
        <span> 11th July 2024 </span>
    </div>
}

const tags = ['functions', 'functions', 'functions', 'functions', 'functions']

function NoteTags() {
    return <div className="flex flex-wrap gap-1 text-slate-500 text-sm px-4 pt-4">
        {tags.map((tag) => <div className="bg-white border text-primary rounded-md px-2">
            {tag}
        </div>)}
    </div>
}

function NoteDescription() {
    return <div className="text-slate-600  text-sm p-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae earum maxime iste enim esse obcaecati! Blanditiis, vero obcaecati. Aut, reiciendis.
    </div>
}

type CodeBlockProps = {
    language: string
}

const codeString = `
    import React from "react";

    export default funcion () {
        return (
            <div>
            
            </div>
        )
    }
`

const CodeBlock = ({ language }: CodeBlockProps) => {
    return <div className="rounded-md overflow-hidden text-sm border mx-2">
        <SyntaxHighlighter language={language} style={docco}>
            {codeString}
        </SyntaxHighlighter>
    </div>
}

function NoteFooter() {
    return <div className="flex justify-between text-sm text-slate-400 p-4">
        <div className="flex items-center gap-1">
            <IoLogoJavascript color="#973131" size={25} />
        </div>
        <CiTrash className="cursor-pointer" size={25} />

    </div>
}