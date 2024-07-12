"use client";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SearchBar() {

    return (
        <div className="relative flex items-center gap-2 pl-3 w-[60%] bg-slate-100 rounded-3xl justify-between overflow-hidden border">
            <FaSearch color="#973131" size={20} />
            <input
                placeholder="Search for snippet..."
                className="flex-1
             outiline-none text-sm bg-slate-100 text-slate-500 p-3 focus:border-none focus:outline-none"
                type="text"
            />
            <Button size="lg" asChild>
                <Link href="/dashboard/create" className="flex items-center gap-2 cursor-pointer">
                    <FaPlus color="white" size={15} />
                    Snippet
                </Link>
            </Button>
        </div>
    )
}