import { cookies } from "next/headers"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/features/dashboard/componnets/dashboard-sidebar"

interface Props {
    children: React.ReactNode
}

const dashboardLayout = async ({ children }: Props) => {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";   // way to preserver the state of the sidebar

    return (
        <SidebarProvider defaultOpen={defaultOpen} className="h-svh">
            <DashboardSidebar />
            <SidebarInset className="min-h-0 min-w-0">
                <main className="flex min-h-0 flex-1 flex-col">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default dashboardLayout
