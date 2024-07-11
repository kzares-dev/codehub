import SingleNote from "./SingleNote";

export default function GetNotes () {
    return (
        <div className="flex flex-wrap gap-4 mt-5">
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
        </div>
    )
}