import { Badge } from "@/components/ui/badge"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

import { cn } from "@/lib/utils"
import type { Plan } from "@/types"
import PlanActions from "./PlanActions"
import { Check } from "lucide-react"
import { Switch } from "../ui/switch"
import { toast } from "sonner"
import { useTogglePlanStatusMutation } from "@/store/api/plans/plansApi"

const PlanCard = ({ plan }: { plan: Plan }) => {
  const [togglePlanStatus, { isLoading }] = useTogglePlanStatusMutation()

  const handleToggle = async () => {
    try {
      const response = await togglePlanStatus(plan.id).unwrap()

      toast.success(response.message || "Plan status changed successfully")
    } catch (error) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "Failed to change plan status"

      toast.error(message)
    }
  }

  return (
    <Card
      className={cn(
        "relative cursor-pointer transition-all duration-300",
        plan.popular
          ? "border-2 border-primary shadow-sm shadow-primary/20 hover:shadow-2xl hover:shadow-primary/80"
          : "hover:shadow-lg"
      )}
    >
      {plan.popular && (
        <Badge className="absolute top-4 right-12">Most Popular</Badge>
      )}

      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {plan.description}
            </p>
          </div>

          <PlanActions plan={plan} />
        </div>

        <div>
          {plan.amount ? (
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold">${plan.amount}</span>
              <span className="pb-1 text-muted-foreground">
                / {plan.interval}
              </span>
            </div>
          ) : (
            <p className="text-4xl font-bold">Custom</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Switch
            checked={plan.isActive}
            onCheckedChange={handleToggle}
            disabled={isLoading}
          />

          <span className="text-sm text-muted-foreground">
            {plan.isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <div className="flex w-full items-center justify-between text-sm">
          <span className="text-muted-foreground">Active Tenants</span>
          <span className="font-semibold">{plan.tenants}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export default PlanCard
