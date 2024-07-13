"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronsUpDown } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";


export default function SelectTags({ tags }: { tags: string[] }) {
    const [selectedTags, setSelectedTags] = useState([]);
    const [displayTags, setDisplayTags] = useState(tags)
    const [open, setOpen] = useState(false);

    function filterTags(param: string) {
        const filteredTags = tags.filter(str => str.includes(param));
        setDisplayTags(filteredTags)
    }

    function stringInArray(stringToSearch: string): boolean {
        return selectedTags.includes(stringToSearch);
    }

    function removeStringFromArray(stringToRemove: string): string[] {
        return selectedTags.filter(str => str !== stringToRemove);
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
                        { }

                        {displayTags.length === 0 ? <p className="text-sm">No tags found</p> : displayTags.map((tag: string) => (
                            <>
                                <div
                                    onClick={() => {
                                        if (stringInArray(tag)) removeStringFromArray(tag)  
                                        else selectedTags.push(tag)
                                    }}
                                    key={tag}
                                    className="text-sm">
                                    {tag}
                                </div >
                            </>
                        ))}
                    </div>
                </div>
            </ScrollArea>
        </div >}

    </div >
}