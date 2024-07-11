import Sidebar from "@/components/dashboard/Sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row w-full min-h-screen bg-secondary-background">
            <Sidebar />
            <div className="w-full h-screen overflow-hidden container pt-5">
                {children}
            </div>
        </div>
    )
}