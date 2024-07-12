"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function SelectTag({ tags }: { tags: string[] }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[150px] justify-between"
                >
                    {value
                        ? tags.find((tag) => tag === value)
                        : "Add tag..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search Tag..." />
                    <CommandEmpty>No tag found.</CommandEmpty>


                    <CommandGroup>
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === tag ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {tag}
                            </div>
                        ))}
                    </CommandGroup>

                </Command>
            </PopoverContent>

        </Popover>
    )
}
