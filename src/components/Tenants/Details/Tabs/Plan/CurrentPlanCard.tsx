import { CalendarDays, Check, CreditCard, Crown } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Tenant } from "@/types"
import { formatDate } from "@/utils/date"
import { formatCurrency } from "@/utils"

interface Props {
  tenant: Tenant
}

const CurrentPlanCard = ({ tenant }: Props) => {
  const plan = tenant.activePlan
  const amount = tenant.plan?.amount

  if (!plan) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Current Plan
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
              <Crown className="size-5 text-muted-foreground" />
            </div>

            <p className="mt-3 text-sm font-medium">No active plan</p>

            <p className="mt-1 text-sm text-muted-foreground">
              This company does not have an active subscription.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const formattedAmount = amount != null ? formatCurrency(amount) : "-"

  const startDate = formatDate(plan.startDate)
  const endDate = formatDate(plan.endDate)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Crown className="size-5" />
            </div>

            <div>
              <CardTitle className="text-base font-semibold">
                Current Plan
              </CardTitle>

              <p className="mt-0.5 text-sm text-muted-foreground">
                Active subscription
              </p>
            </div>
          </div>

          <Badge variant="default" className="capitalize">
            {plan.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex flex-col gap-6">
          {/* Plan overview */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-muted-foreground">Plan</p>

              <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                {plan.name}
              </h3>
            </div>

            <div className="sm:text-right">
              <p className="text-2xl font-semibold">
                {formattedAmount}
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  / {tenant.plan?.interval ?? "month"}
                </span>
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Billed per {tenant.plan?.interval ?? "month"}
              </p>
            </div>
          </div>

          {/* Dates */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="size-4" />
                <span className="text-xs">Start Date</span>
              </div>

              <p className="mt-2 text-sm font-medium">{startDate}</p>
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="size-4" />
                <span className="text-xs">End Date</span>
              </div>

              <p className="mt-2 text-sm font-medium">{endDate}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="mb-3 text-sm font-medium">Plan Features</p>

            <div className="grid gap-2 sm:grid-cols-2">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="flex size-5 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                    <Check className="size-3" />
                  </div>

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cancellation */}
          {plan.cancelAtPeriodEnd && (
            <div className="flex items-center gap-3 rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">
              <CreditCard className="size-4 text-orange-500" />

              <div>
                <p className="text-sm font-medium">Cancellation scheduled</p>

                <p className="text-xs text-muted-foreground">
                  This subscription will end on {endDate}.
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default CurrentPlanCard
