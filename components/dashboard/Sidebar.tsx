"use client";
import { useWindowWidth } from '@react-hook/window-size'
import { LanguageType, quickLinks, QuickLinkType, languages } from "@/lib/constants"
import { FaCode } from "react-icons/fa"
import SignOut from "./SignOut"
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";



export default function Sidebar() {
    const windowWidth = useWindowWidth()
    const [hideBar, setHideBar] = useState(true);

    useEffect(() => {
        if (windowWidth <= 900) setHideBar(true);
    }, [windowWidth])

    return <div className={`flex flex-col gap-4 h-screen pt-7 border-r max-w-[300px] p-5 bg-white relative ${!hideBar && "w-full"}`}>
        <div className="absolute top-[20%] -right-4 p-2 rounded-full border-[2px] bg-white text-primary text-xl cursor-pointer" onClick={() => setHideBar(!hideBar)}>
            {hideBar ? <MdOutlineKeyboardDoubleArrowRight /> : <MdOutlineKeyboardDoubleArrowLeft />}
        </div>
        <RenderLogo hideBar={hideBar} />
        <RenderQuickLinks hideBar={hideBar} />
        <RenderLanguages hideBar={hideBar} />
        <SignOut hideBar={hideBar} />
    </div>
}


const RenderLogo = ({ hideBar }: { hideBar: boolean }) => {
    return <div className="flex items-center gap-2">

        <div className="bg-primary p-3 rounded-md">
            <FaCode color="white" size={25} />
        </div>

        {!hideBar && <div className="flex gap-1 text-xl">
            <span className="font-bold text-primary">Code</span>
            <div className="text-slate-600">Hub</div>
        </div>}

    </div>
}

const RenderQuickLinks = ({ hideBar }: { hideBar: boolean }) => {
    return (
        <div className="mt-10">

            {!hideBar && <div className="font-semibold text-lg text-slate-500 border-b pb-3">Quick Links</div>}

            <div className={`flex flex-col  gap-7 pt-4 ${hideBar && "items-center text-2xl"}`} >
                
                {quickLinks.map(({ name, Icon }: QuickLinkType) => (
                    <ul key={name} className="flex flex-col gap-2 text-slate-400 cursor-pointer">
                        <li className="flex items-center gap-1 text-md text-slate-600">
                            <Icon />
                            {!hideBar && <span className="">{name}</span>}
                        </li>
                    </ul>
                ))}
            </div>

        </div>
    )
}

const RenderLanguages = ({ hideBar }: { hideBar: boolean }) => {
    return (
        <div>
            {!hideBar && <div className="font-semibold text-lg text-slate-500 border-b pb-3">Languages</div>}
            <div className={`flex flex-col  gap-4 pt-4 ${hideBar && "items-center text-2xl gap-7"}`} >
                {languages.map(({ name, Icon }: LanguageType) => (
                    <ul key={name} className="flex flex-col gap-2 text-slate-400 cursor-pointer">
                        <li className="flex items-center gap-1 text-md text-slate-600">
                            <Icon />
                            {!hideBar && <span className="">{name}</span>}
                        </li>
                    </ul>
                ))}
            </div>

        </div>
    )
}