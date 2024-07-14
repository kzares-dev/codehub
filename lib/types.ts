export type UserType = {
    clerkUserId: string,
    emailAddress: string,
}

export type NoteType = {
    createdAt: Date,
    title: string,
    description: string,
    tags: {name: string, selected:boolean}[],
    code: string,
}