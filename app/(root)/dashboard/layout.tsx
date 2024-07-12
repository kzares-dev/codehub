import Sidebar from "@/components/dashboard/Sidebar"
import ContentNote from "@/components/dashboard/Notes/NoteEditor";
import SwiperSelection from "@/components/dashboard/Notes/SwiperSelection";
import Topbar from "@/components/dashboard/TopBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row w-full min-h-screen bg-secondary-background bg-gray-50">
            <Sidebar />
            <div className="w-full h-screen overflow-hidden container pt-5 ">
                {/*-- This is the main feed of the application --*/}
                <section className="w-full min-h-screen ">
                    <Topbar />
                    <div className="flex flex-row gap-3">
                        <div className="w-full">
                            <SwiperSelection />
                            {children}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}