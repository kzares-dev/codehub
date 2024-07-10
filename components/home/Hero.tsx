import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center px-16 pt-[120px] gap-6 ">
            
            <h2 className="font-bold text-2xl text-center">
                Organize your code snippets
                <span className="text-primary"> Efficiently! </span>
            </h2>

            <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
                With our advanced tagging and search features, you can quickly find the snippet you need, right when you need it. Spend less time searching for code and more time writing it.
            </p>

            <Button size="lg">Lets's get Started</Button>


        </div>
    )
}