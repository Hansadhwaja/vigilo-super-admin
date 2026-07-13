"use client"

import { Bell, Search } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserNav } from "./UserNav"
import { ModeToggle } from "../Common/Theme/ModeToggle"

const DashboardTopBar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur">
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        <div className="relative hidden md:block">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input placeholder="Search..." className="w-72 pl-9" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="size-5" />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
        </Button>

        <ModeToggle />

        <UserNav />
      </div>
    </header>
  )
}

export default DashboardTopBar
