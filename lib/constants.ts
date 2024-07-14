import { IconType } from "react-icons";
import { BsLayoutWtf } from "react-icons/bs";
import { CiTrash } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaJava } from "react-icons/fa";

export type QuickLinkType = {
    name: string,
    Icon: IconType
}

export type LanguageType = {
    name: string,
    Icon: IconType
}
export const quickLinks = [
    {
        name: "All Snippets",
        Icon: BsLayoutWtf,
    },
    {
        name: "Favorites",
        Icon: MdFavoriteBorder,
    },
    {
        name: "Trash",
        Icon: CiTrash 
    },
]

export const languages = [
    {
        name: "Javascript",
        Icon: IoLogoJavascript,
    },
    {
        name: "Java",
        Icon: FaJava,
    },
    {
        name: "Python",
        Icon: FaPython,
    },
    
]