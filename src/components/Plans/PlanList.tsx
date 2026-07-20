"use client"

import { useGetPlansQuery } from "@/store/api/plans/plansApi"
import PlanCard from "./PlanCard"
import type { Plan } from "@/types"
import PlanListSkeleton from "./Skeleton/PlanListSkeleton"

const PlanList = () => {
  const { data, isLoading } = useGetPlansQuery({
    isActive: false,
  })
  const plans = data?.data ?? []

  if (isLoading) return <PlanListSkeleton />

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {plans.map((plan: Plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}

export default PlanList
