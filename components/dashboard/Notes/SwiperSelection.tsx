import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const items = ["all","javascript exercises", "javascript exercises", "javascript exercises", "javascript exercises",]
function SwiperSelection() {
    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-md bg-white border my-4 px-4">
            <div className="flex w-max space-x-4 p-4">
                {items.map((item, idx) => (
                    <p key={idx} className={`text-sm text-slate-500 px-3 py-1 cursor-pointer rounded-md ${item === "all" && "bg-primary text-white font-semibold"}`}> {item} </p>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default SwiperSelection