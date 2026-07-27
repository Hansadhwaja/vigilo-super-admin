import { Outlet } from "react-router"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar"
import DashboardTopBar from "@/components/Dashboard/DashboardTopBar"

const DashboardLayout = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "14rem",
          "--sidebar-width-icon": "4rem",
        } as React.CSSProperties
      }
    >
      <DashboardSidebar />

      <SidebarInset className="h-screen min-w-0 overflow-hidden">
        <DashboardTopBar />

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
