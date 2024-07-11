"use client"
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs"
import { upsertUser } from "@/lib/actions/user.action";

export default function UserProfile() {

    const { user } = useUser();
    const imageUrl = user?.imageUrl;

    useEffect(() => {
        if (!user?.id || !user?.emailAddresses[0].emailAddress) return
        // search the user on the database, if dont exitst, will be created
        const createdUser = upsertUser({
            clerkUserId: user?.id,
            emailAddress: user?.emailAddresses[0].emailAddress
        })

        // TODO: do something with the response data
        createdUser.then((data) => console.log(data))
        .catch(e => console.log(e))

    }, [user])

    const loading = (
        <div className="w-9 h-9 rounded-full mb-[5px] bg-slate-200 animate-pulse" />
    )
    return (
        <div className="flex gap-3 items-center">
            {!user ?
                loading :
                <img src={imageUrl} alt="" className="w-9 h-9 rounded-full mb-[5px]" />
            }

            <div className="flex flex-col text-sm">
                <span className="font-semibold"> {user?.firstName} {user?.lastName} </span>

                <span className="text-slate-500 text-sm">
                    {user?.emailAddresses[0].emailAddress}
                </span>
            </div>

        </div>
    )
}