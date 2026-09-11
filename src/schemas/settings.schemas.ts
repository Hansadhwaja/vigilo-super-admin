import { z } from "zod"

export const generalSettingsSchema = z.object({
  name: z.string().min(1, "Platform name is required."),
  email: z.email("Please enter a valid email address."),
  mobile: z
    .string()
    .min(1, "Mobile number is required.")
    .max(10, "Enter a valid number"),
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
