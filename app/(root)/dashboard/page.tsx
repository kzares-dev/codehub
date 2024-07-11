import ContentNote from "@/components/dashboard/Notes/ContentNote";
import GetNotes from "@/components/dashboard/Notes/GetNotes";
import SwiperSelection from "@/components/dashboard/Notes/SwiperSelection";
import Topbar from "@/components/dashboard/TopBar";

export default function Dashboard() {
    return (
        <section className="w-full min-h-screen bg-primary-background">
            <Topbar />
            <div className="flex flex-row gap-3">
                <div className="w-1/2">
                    <SwiperSelection />
                    <GetNotes />
                </div>
                <ContentNote />
            </div>
        </section>
    )
}