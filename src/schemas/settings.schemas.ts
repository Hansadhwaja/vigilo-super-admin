import { z } from "zod"

export const generalSettingsSchema = z.object({
  platformName: z.string().min(1, "Platform name is required."),
  supportEmail: z.email("Please enter a valid email address."),
  supportPhone: z.string().min(1, "Support phone is required."),
  timezone: z.string().min(1, "Please select a timezone."),
  currency: z.string().min(1, "Please select a currency."),
})

export type GeneralSettingsFormValues = z.infer<typeof generalSettingsSchema>

export const securitySchema = z.object({
  sessionTimeout: z
    .number()
    .min(5, "Session timeout must be at least 5 minutes.")
    .max(1440, "Session timeout cannot exceed 1440 minutes."),
  require2FA: z.boolean(),
  restrictByIp: z.boolean(),
  allowedIps: z.string(),
})

export type SecurityFormValues = z.infer<typeof securitySchema>
