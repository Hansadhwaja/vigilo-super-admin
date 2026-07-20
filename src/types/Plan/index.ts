import type { billingIntervals } from "@/constants"

export type Plan = {
  id: string
  name: string
  description: string
  amount: number | null
  interval: BillingInterval
  popular?: boolean
  isActive: boolean
  tenants?: number
  features: string[]
}

export type BillingInterval = (typeof billingIntervals)[number]["value"]
