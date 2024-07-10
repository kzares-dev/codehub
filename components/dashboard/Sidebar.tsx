import { LanguageType, quickLinks, QuickLinkType, languages } from "@/lib/constants"
import { FaCode } from "react-icons/fa"

export default function Sidebar() {
    return <nav className="flex flex-col gap-4 h-screen pt-7 border-r max-w-[300px] p-5">
        <RenderLogo />
        <RenderQuickLinks />
        <RenderLanguages />
    </nav>
}

const RenderLogo = () => {
    return <div className="flex items-center gap-2">

        <div className="bg-primary p-3 rounded-md">
            <FaCode color="white" size={25} />
        </div>

        <div className="flex gap-1 text-xl">
            <span className="font-bold text-primary">Code</span>
            <div className="text-slate-600">Hub</div>
        </div>

    </div>
}

const RenderQuickLinks = () => {
    return (
        <div className="mt-10">

            <div className="font-semibold text-lg text-slate-500 border-b pb-3">Quick Links</div>
            <div className="flex flex-col gap-4 pt-4">
                {quickLinks.map(({ name, Icon }: QuickLinkType) => (
                    <ul key={name} className="flex flex-col gap-2 text-slate-400 cursor-pointer">
                        <li className="flex items-center gap-1 text-md text-slate-600">
                            <Icon />
                            <span className="">{name}</span>
                        </li>
                    </ul>
                ))}
            </div>

        </div>
    )
}

const RenderLanguages = () => {
    return (
        <div>
            <div className="font-semibold text-lg text-slate-500 border-b pb-3">Languages</div>
            <div className="flex flex-col gap-4 pt-4">
                {languages.map(({ name, Icon }: LanguageType) => (
                    <ul key={name} className="flex flex-col gap-2 text-slate-400 cursor-pointer">
                        <li className="flex items-center gap-1 text-md text-slate-600">
                            <Icon />
                            <span className="">{name}</span>
                        </li>
                    </ul>
                ))}
            </div>

        </div>
    )
}