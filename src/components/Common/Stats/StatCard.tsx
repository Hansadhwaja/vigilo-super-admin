import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Stat } from "@/types"

interface StatCardProps {
  stat: Stat
}

const StatCard = ({ stat }: StatCardProps) => {
  const Icon = stat.icon

  return (
    <Card className="p-0 transition-all duration-200 hover:shadow-md rounded-xl">
      <CardContent className="flex items-center justify-between p-2 sm:p-4">
        <div className="min-w-0 space-y-0.5">
          <p className="text-[10px] sm:text-xs font-medium text-muted-foreground">
            {stat.title}
          </p>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
            {stat.value}
          </h3>

          {stat.description && (
            <p className="truncate text-xs text-muted-foreground">
              {stat.description}
            </p>
          )}

          {stat.trend !== undefined && (
            <p
              className={cn(
                "text-[10px] sm:text-xs font-medium",
                stat.trend >= 0
                  ? "text-green-600"
                  : "text-red-600"
              )}
            >
              {stat.trend >= 0 ? "+" : ""}
              {stat.trend}% from last month
            </p>
          )}
        </div>

        {Icon && (
          <div
            className={cn(
              "shrink-0 rounded-lg p-2.5",
              stat.color ?? "bg-primary/10"
            )}
          >
            <Icon className="size-4" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default StatCard