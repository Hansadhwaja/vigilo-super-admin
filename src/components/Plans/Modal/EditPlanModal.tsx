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
import type { Plan } from "@/types"
import { useUpdatePlanMutation } from "@/store/api/plans/plansApi"
import PlanForm, { type CreatePlanPayload } from "../Form/PlanForm"

interface Props {
  plan: Plan
}

const EditPlanModal = ({ plan }: Props) => {
  const [open, setOpen] = useState(false)
  const [updatePlan, { isLoading }] = useUpdatePlanMutation()

  const handleSubmit = async (data: CreatePlanPayload) => {
    try {
      const response = await updatePlan({
        id: plan.id,
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
          <Edit />
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-4 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Tenant</DialogTitle>

          <DialogDescription>
            Update the company name and address for this tenant.
          </DialogDescription>
        </DialogHeader>

        <PlanForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          initialData={plan}
        />
      </DialogContent>
    </Dialog>
  )
}

export default EditPlanModal
