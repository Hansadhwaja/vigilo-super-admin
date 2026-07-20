import { billingIntervals } from "@/constants"
import type { BillingInterval } from "@/types"
import { z } from "zod"

export const planSchema = z.object({
  name: z
    .string()
    .min(2, "Plan name must be at least 2 characters")
    .max(100, "Plan name cannot exceed 100 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters"),

  interval: z.enum(
    billingIntervals.map((i) => i.value) as [
      BillingInterval,
      ...BillingInterval[],
    ],
    {
      error: "Please select a billing interval",
    }
  ),

  amount: z
    .number({
      error: "Amount is required",
    })
    .min(0, "Amount cannot be negative"),

  features: z
    .array(
      z.object({
        value: z.string().trim().min(1, "Feature is required"),
      })
    )
    .min(1, "Add at least one feature"),
})

export type PlanFormValues = z.infer<typeof planSchema>
