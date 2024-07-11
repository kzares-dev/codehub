import { Button } from "@/components/ui/button";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const themeIcons = [
    {
        name: "white",
        Icon: MdSunny
    },
    {
        name: "dark",
        Icon: FaMoon
    }
]


export default function ThemeIcons() {
    return <div className="flex items-center gap-3 bg-slate-100 rounded-2xl">
        {themeIcons.map(({ name, Icon }) => (
            <Button size="icon" key={name} variant={name === "white" ? "ghost" : "default"}> <Icon /> </Button>
        ))}
    </div>
}