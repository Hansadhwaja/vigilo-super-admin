
import { Check, MoreVertical, Pencil, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import type { Plan } from "@/types"

const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <Card
      className={cn(
        "relative transition-all duration-300 cursor-pointer",
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="size-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Pencil className="mr-2 size-4" />
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 size-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          {plan.price ? (
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="pb-1 text-muted-foreground">
                / {plan.billing}
              </span>
            </div>
          ) : (
            <p className="text-4xl font-bold">Custom</p>
          )}
        </div>

        <Badge
          variant={plan.status === "Active" ? "default" : "secondary"}
          className="w-fit"
        >
          {plan.status}
        </Badge>
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
