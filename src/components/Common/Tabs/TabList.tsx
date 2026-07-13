"use client"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export interface TabItem {
  value: string
  label: string
  icon?: LucideIcon
  content: ReactNode
}

interface TabListProps {
  tabs: TabItem[]
  defaultValue?: string
  className?: string
  tabsListClassName?: string
}

const TabList = ({
  tabs,
  defaultValue,
  className,
  tabsListClassName,
}: TabListProps) => {
  return (
    <Tabs
      defaultValue={defaultValue ?? tabs[0]?.value}
      className={cn("space-y-6", className)}
    >
      <TabsList
        className={cn(
          "h-14 w-full rounded-2xl bg-muted/50 p-1",
          tabsListClassName
        )}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon

          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex h-full flex-1 items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              {Icon && <Icon className="size-4" />}
              {tab.label}
            </TabsTrigger>
          )
        })}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="focus-visible:outline-none"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default TabList
