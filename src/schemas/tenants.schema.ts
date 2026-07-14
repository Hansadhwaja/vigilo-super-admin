import { z } from "zod"

export const tenantSchema = z.object({
  name: z.string().min(1, "Company name is required"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit mobile number"),
  address: z.string().min(1, "Address is required"),
})

export const editTenantSchema = z.object({
  name: z.string().min(1, "Company name is required"),
  address: z.string().min(1, "Address is required"),
})

export type TenantFormValues = z.infer<typeof tenantSchema>

export type EditTenantFormValues = z.infer<typeof editTenantSchema>
