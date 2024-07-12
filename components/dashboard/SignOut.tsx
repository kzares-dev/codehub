"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { FaSignOutAlt } from "react-icons/fa";
import { useClerk } from '@clerk/nextjs';


const SignOut = ({ hideBar }: { hideBar : boolean}) => {

    const { signOut } = useClerk();

    const customSignOut = () => {
        signOut({ redirectUrl: '/' })
    }

    return (
        <AlertDialog>

            <AlertDialogTrigger className="w-full flex items-center justify-center">
                <div className="flex items-center justify-center  gap-2 my-5 py-3  rounded-md w-fit ">
                    <FaSignOutAlt color="black" size={25} />
                   {!hideBar &&  <div className="text-slate-600">Sign Out</div>}
                </div>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will log out of the plattaform
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={customSignOut}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SignOut