"use client"

import EditPlanModal from "./Modal/EditPlanModal"
import type { Plan } from "@/types"

interface Props {
  plan: Plan
}

const PlanActions = ({ plan }: Props) => {
  return <EditPlanModal plan={plan} />
}

export default PlanActions
