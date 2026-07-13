import type { LucideIcon } from "lucide-react"


export interface Stat {
  title: string
  value: string | number
  icon?: LucideIcon
  description?: string
  trend?: number
  color?: string
}
