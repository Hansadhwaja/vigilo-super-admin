import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Stat } from "@/types"


interface StatCardProps {
  stat: Stat
}

const StatCard = ({ stat }: StatCardProps) => {
  const Icon = stat.icon

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardContent className="flex items-start justify-between p-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{stat.title}</p>

          <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>

          {stat.description && (
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          )}

          {stat.trend !== undefined && (
            <p
              className={cn(
                "text-xs font-medium",
                stat.trend >= 0 ? "text-green-600" : "text-red-600"
              )}
            >
              {stat.trend >= 0 ? "+" : ""}
              {stat.trend}% from last month
            </p>
          )}
        </div>

        {Icon && (
          <div className={cn("rounded-xl p-3", stat.color ?? "bg-primary/10")}>
            <Icon className="size-5" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default StatCard
