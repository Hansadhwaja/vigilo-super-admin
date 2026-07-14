"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { toast } from "sonner"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import TenantForm from "../Form/TenantForm"

import { useCreateCompanyMutation } from "@/store/api/tenants/tenantsApi"
import type { TenantFormValues } from "@/schemas/tenants.schema"

const AddTenantModal = () => {
  const [open, setOpen] = useState(false)

  const [createCompany, { isLoading }] = useCreateCompanyMutation()

  const handleSubmit = async (data: TenantFormValues) => {
    try {
      const response = await createCompany(data).unwrap()

      toast.success(response.message || "Tenant created successfully")

      setOpen(false)
    } catch (error) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "Failed to create tenant"

      toast.error(message)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          Add Tenant
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-4 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Tenant</DialogTitle>

          <DialogDescription>
            Create a new tenant by providing the company and administrator
            details.
          </DialogDescription>
        </DialogHeader>

        <TenantForm onSubmit={handleSubmit} isLoading={isLoading} />
      </DialogContent>
    </Dialog>
  )
}

export default AddTenantModal
