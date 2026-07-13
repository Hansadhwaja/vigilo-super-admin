import React from "react"
import PlanCard from "./PlanCard"
import { plans } from "@/constants"

const PlanList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}

export default PlanList
