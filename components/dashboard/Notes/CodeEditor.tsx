"use client"

import { MdOutlineCode } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";

const sampleContent = `
function onLoad(editor) {
    console.log("i've loaded");
}
`
export default function CodeEditor() {

    return <div className="flex gap-2 text-[12px] text-slate-600 mt-8 relative">
        <div className="absolute z-2 top-5 right-5">
            <MdOutlineContentCopy color="black" size={20} />
        </div>

        <MdOutlineCode  size={25} color="black" />

        <AceEditor
            width="100%"
            placeholder="Placeholder Text"
            mode="javascript"
            theme="tomorrow"
            name="blah2"
            fontSize={14}
            lineHeight={19}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={sampleContent}
            setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
            }} />


    </div>
}