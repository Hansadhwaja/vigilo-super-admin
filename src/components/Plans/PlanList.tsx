"use client"

import { useGetPlansQuery } from "@/store/api/plans/plansApi"
import PlanCard from "./PlanCard"
import Loader from "../Common/Loader"
import type { Plan } from "@/types"

const PlanList = () => {
  const { data, isLoading } = useGetPlansQuery({
    isActive:false
  })
  const plans = data?.data ?? []

  if (isLoading) return <Loader />

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {plans.map((plan: Plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}

export default PlanList
