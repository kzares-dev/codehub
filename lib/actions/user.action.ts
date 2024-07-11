"use server";
import connect from "../connect";
import User from "../schema/user.schema";
import { UserType } from "../types";

export async function createUser(user: UserType): Promise<UserType>{
    await connect();
    const newUser = await User.create(user);

    return newUser;
}

export async function fetchUser(clerkUserId: string): Promise<UserType>{
    await connect();
    const user = await User.findOne({ clerkUserId });

    return user;
}

export async function upsertUser(clerkUser: UserType): Promise<UserType>{
    let user = await fetchUser(clerkUser.clerkUserId);

    if (!user) {
        const createdUser = await createUser(clerkUser);
        user = createdUser;
    }
    // to pass the data to client components must be correectly formatted
    return JSON.parse(JSON.stringify(user))
}