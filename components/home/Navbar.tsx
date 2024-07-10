import { Button } from "@/components/ui/button"
import Link from "next/link";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
    return <nav className="flex items-center justify-between max-sm:flex-col p-5 max-sm:mt-9 mx-8">

        {/*-- Logo Component --*/}
        <div className="flex items-center gap-2">

            <div className="bg-primary p-3 rounded-md">
                <FaCode color="white" size={25} />
            </div>

            <div className="flex gap-1 text-xl">
                <span className="font-bold text-primary">Code</span>
                <div className="text-slate-600">Hub</div>
            </div>

        </div>

        {/*-- Auth Buttons TODO: add responsivenes --*/}

        <div className="flex items-center flex-row justify-center gap-4">
            <Button asChild size="lg">
                <Link href="/sign-in"> Login </Link>
            </Button>
            <Button asChild variant="outline" size="lg" >
                <Link href="/sign-up">Register</Link>
            </Button>
        </div>

    </nav>
}