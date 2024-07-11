import GetNotes from "@/components/dashboard/Notes/GetNotes";
import Topbar from "@/components/dashboard/TopBar";

export default function Dashboard() {
    return (
        <section className="w-full min-h-screen bg-primary-background">
            <Topbar />
            <GetNotes />
        </section>
    )
}