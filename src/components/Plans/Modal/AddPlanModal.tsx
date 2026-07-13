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
import PlanForm from "../Form/PlanForm"

const AddPlanModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          Add Plan
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-4 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create Subscription Plan</DialogTitle>
          <DialogDescription>
            Create a new subscription plan by defining its pricing, features,
            and usage limits. You can edit these details later.
          </DialogDescription>
        </DialogHeader>

        <PlanForm />
      </DialogContent>
    </Dialog>
  )
}

export default AddPlanModal
