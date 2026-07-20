"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import PlanForm, { type CreatePlanPayload } from "../Form/PlanForm"
import { toast } from "sonner"
import { useState } from "react"
import { useCreatePlanMutation } from "@/store/api/plans/plansApi"

const AddPlanModal = () => {
  const [open, setOpen] = useState(false)

  const [createPlan, { isLoading }] = useCreatePlanMutation()

  const handleSubmit = async (data: CreatePlanPayload) => {
    try {
      const response = await createPlan(data).unwrap()

      toast.success(response.message || "Plan created successfully")

      setOpen(false)
    } catch (error) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "Failed to create plan"

      toast.error(message)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          Add Plan
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-4 sm:max-w-2xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Subscription Plan</DialogTitle>
          <DialogDescription>
            Create a new subscription plan by defining its pricing, features,
            and usage limits. You can edit these details later.
          </DialogDescription>
        </DialogHeader>

        <PlanForm onSubmit={handleSubmit} isLoading={isLoading} />
      </DialogContent>
    </Dialog>
  )
}

export default AddPlanModal
