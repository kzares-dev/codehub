import { MdFavorite } from "react-icons/md";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CiTrash } from "react-icons/ci";
import { IoLogoJavascript } from "react-icons/io5";
import { NoteType } from "@/lib/types";
import { FaJava, FaPython } from "react-icons/fa";

export default function SingleNote({ width, noteContent }: { width?: string, noteContent: NoteType }) {


    const RenderLanguageIcon = () => {
        if (noteContent.language === "Javascript") return < IoLogoJavascript size={25} color="#973131" />
        if (noteContent.language === "Java") return < FaJava size={25} color="#973131" />
        if (noteContent.language === "Python") return < FaPython size={25} color="#973131"  />
        
    }


    return (
        <div className={`w-full ${width !== "full" && "max-w-[420px]"} rounded-md bg-white border py-4`}>
            {/*-- Note Header --*/}
            <div className="flex justify-between px-4">
                <span className="font-bold text-lg pr-5">
                    {noteContent.title}
                </span>

                <MdFavorite size={25} color="#973131" />
            </div>
            {/*-- Note Date --*/}
            <div className="flex gap-1 px-4 py-1 font-light text-slate-500 text-sm">
                <span> {noteContent.createdAt.toLocaleDateString()} </span>
            </div>

            {/*-- Note Description --*/}
            <div className="text-slate-600  text-sm p-4">
                {noteContent.description}
            </div>
            <CodeBlock codeString={noteContent.code} language={noteContent.language} />
            {/*-- Note Footer --*/}
            <div className="flex justify-between text-sm text-slate-400 p-4">
                <div className="flex items-center gap-1">
                    <RenderLanguageIcon />
                </div>
                <CiTrash className="cursor-pointer" size={25} />

            </div>

        </div>
    )
}


type CodeBlockProps = {
    language: string
    codeString: string
}

const CodeBlock = ({ language, codeString }: CodeBlockProps) => {
    return <div className="rounded-md overflow-hidden text-sm border mx-2">
        <SyntaxHighlighter language={language} style={docco}>
            {codeString}
        </SyntaxHighlighter>
    </div>
}
