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
      <div className="overflow-x-auto">
        <TabsList
          className={cn(
            "inline-flex h-14 min-w-full rounded-2xl bg-muted/50 p-1",
            tabsListClassName
          )}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon

            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex h-full shrink-0 items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                {Icon && <Icon />}
                {tab.label}
              </TabsTrigger>
            )
          })}
        </TabsList>
      </div>
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
