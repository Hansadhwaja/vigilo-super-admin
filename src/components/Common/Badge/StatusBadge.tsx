import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { statusConfig } from "@/config/statusConfig"

type StatusBadgeProps = {
  status: keyof typeof statusConfig
  className?: string
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const { label, color } = statusConfig[status]

  return (
    <Badge
      variant="outline"
      className={cn("shrink-0 text-xs font-medium", color, className)}
    >
      {label}
    </Badge>
  )
}

export default StatusBadge
