"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronsUpDown } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";


export default function SelectTags({ tags, setTags, }: { tags: { name: string, selected: boolean }[], setTags: (param: { name: string, selected: boolean }[]) => void }) {

    const [displayTags, setDisplayTags] = useState<{ name: string, selected: boolean }[]>(tags)
    const [open, setOpen] = useState(false);

    function filterTags(param: string) {
        const filteredTags = tags.filter(({ name }) => name.includes(param));
        setDisplayTags(filteredTags)
    }


    return <div className="relative">
        <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between"
            onClick={() => setOpen(!open)}
        >
            Add Tag
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>


        {open && <div className="absolute  top-10 right-5 bg-white z-[10] border-[2px] rounded-md">
            <ScrollArea className=" h-72 w-48 ">
                <div className="p-4">
                    <div className="flex mb-5 w-full flex-row items-center gap-2 text-slate-600">
                        <FaSearch />
                        <input
                            onChange={(e) => filterTags(e.target.value)}
                            placeholder="Search tag..."
                            className="bg-transparent flex-1 outline-none border-none focus:border-none" />
                    </div>

                    <div className="flex flex-col gap-4">
                        {displayTags.length === 0 ? <p className="text-sm">No tags found</p> : displayTags.map((tag, idx) => {
                            const changesSelectedState = () => {
                                const tempArray = tags;
                                tempArray[idx].selected = !tag.selected;
                                console.log(tempArray[idx].selected )
                                setTags(tempArray)
                            }

                            return (
                                <>
                                    <div
                                        onClick={changesSelectedState}
                                        key={tag.name}
                                        className={`text-sm text-slate-400 ${tag.selected && "text-slate-600 font-semibold cursor-pointer flex flex-row items-center gap-2"}`}>
                                        {tag.selected && <FaCheck />}
                                        {tag.name}
                                    </div >
                                </>
                            )
                        })}
                    </div>
                </div>
            </ScrollArea>
        </div >}

    </div >
}