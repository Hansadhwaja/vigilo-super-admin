"use client"

import { useState } from "react"
import { Edit } from "lucide-react"
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

import EditTenantForm from "../Form/EditTenantForm"

import { useUpdateCompanyMutation } from "@/store/api/tenants/tenantsApi"

import type { EditTenantFormValues } from "@/schemas/tenants.schema"
import type { Tenant } from "@/types"

interface Props {
  tenant: Tenant
}

const EditTenantModal = ({ tenant }: Props) => {
  const [open, setOpen] = useState(false)

  const [updateCompany, { isLoading }] = useUpdateCompanyMutation()

  const handleSubmit = async (data: EditTenantFormValues) => {
    try {
      const response = await updateCompany({
        id: tenant.id,
        data,
      }).unwrap()

      toast.success(response.message || "Tenant updated successfully")

      setOpen(false)
    } catch (error) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "Failed to update tenant"

      toast.error(message)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer"
          aria-label="Edit tenant"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-4 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Tenant</DialogTitle>

          <DialogDescription>
            Update the company name and address for this tenant.
          </DialogDescription>
        </DialogHeader>

        <EditTenantForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          initialData={tenant}
        />
      </DialogContent>
    </Dialog>
  )
}

export default EditTenantModal
