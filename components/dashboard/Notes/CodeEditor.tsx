"use client"

import { MdOutlineCode } from "react-icons/md";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";
import { LanguageType } from "@/lib/constants";

export default function CodeEditor({
    code,
    setCode,
    language,
}: {
    code: string,
    setCode: (code: string) => void,
    language: LanguageType
}) {

    return <div className=" text-slate-600 w-full min-h-[400px] relative">

       

        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 animate-pulse rounded-md">
            <h1 className="flex flex-col items-center justify-center gap-2 text-slate-600 text-lg font-semibold">
                <MdOutlineCode size={30} color="#973131" />
                Code Editor Loading
            </h1>
        </div>

        <AceEditor
            onChange={(value) => setCode(value)}
            width="100%"
            placeholder="Placeholder Text"
            mode={language.name.toLocaleLowerCase()}
            theme="tomorrow"
            name="blah2"
            fontSize={14}
            lineHeight={19}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
            }} />


    </div>
}