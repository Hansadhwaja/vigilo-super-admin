import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { navLinks } from "@/constants"
import { cn } from "@/lib/utils"

import { LogOut } from "lucide-react"
import { Link, useLocation } from "react-router"

const DashboardSidebar = () => {
  const { pathname } = useLocation()

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border bg-sidebar"
    >
      <SidebarHeader className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link to="/">
                <img
                  src="/assets/logo/logo.png"
                  alt="Vigilo logo"
                  className="size-12 object-contain"
                />

                <div>
                  <h2 className="truncate text-lg font-bold text-sidebar-foreground">
                    VIGILO
                  </h2>

                  <p className="text-xs tracking-wider text-sidebar-foreground/70 uppercase">
                    Super Admin
                  </p>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarMenu className="gap-1">
          {navLinks.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.link

            return (
              <SidebarMenuItem key={item.link}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.label}
                  isActive={isActive}
                  className={cn(
                    "h-11 rounded-xl transition-all duration-200",
                    !isActive &&
                      "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Link to={item.link}>
                    <Icon className="size-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-11 rounded-xl text-destructive hover:bg-destructive/10 hover:text-destructive">
              <LogOut className="size-5" />
              <span className="font-medium">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default DashboardSidebar