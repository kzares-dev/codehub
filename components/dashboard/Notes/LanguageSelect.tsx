import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { languages, LanguageType } from "@/lib/constants"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PopoverClose } from "@radix-ui/react-popover"

export default function LanguageSelect({
    language,
    setLanguage
}: {
    language: LanguageType,
    setLanguage: (item: LanguageType) => void,
}) {
    return <Popover>
        <PopoverTrigger className="w-fit">
            <Button
                variant="outline"
                role="combobox"
                className="w-[200px] p-2 justify-between"

            >
                <div className="flex w-full items-center gap-1 text-md text-slate-600">
                    <language.Icon />
                    <span className="font-semibold">{language.name}</span>
                </div>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>

        <PopoverContent className="flex flex-col py-4">
            {languages.map(({ name, Icon }: LanguageType) => (
                <PopoverClose key={name}>
                    <ul onClick={() => setLanguage({ name, Icon })} key={name} className="flex flex-col gap-2 text-slate-400 cursor-pointer hover:bg-gray-50 p-2 rounded-md">
                        <li className="flex items-center gap-1 text-md text-slate-600">
                            <Icon />
                            <span className="">{name}</span>
                        </li>
                    </ul>
                </PopoverClose>
            ))}
        </PopoverContent>
    </Popover>
}