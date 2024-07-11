import GetNotes from "@/components/dashboard/Notes/GetNotes";
import SwiperSelection from "@/components/dashboard/Notes/SwiperSelection";
import Topbar from "@/components/dashboard/TopBar";

export default function Dashboard() {
    return (
        <section className="w-full min-h-screen bg-primary-background">
            <Topbar />
            <div className="">
                <SwiperSelection />
                <GetNotes />
            </div>
            <ContentNote />
        </section>
    )
}