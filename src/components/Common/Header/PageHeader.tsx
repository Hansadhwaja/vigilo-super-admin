import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"

import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
  backTo?: string
}

export function PageHeader({
  title,
  description,
  action,
  backTo,
}: PageHeaderProps) {
  return (
    <div className="-center mb-8 flex justify-between gap-4">
      <div className="flex items-start gap-3">
        {backTo && (
          <Button variant="ghost" size="icon" asChild>
            <Link to={backTo} aria-label="Go back">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        )}

        <div className="space-y-1">
          <h1 className="text-lg font-bold tracking-tight sm:text-xl md:text-2xl xl:text-3xl">
            {title}
          </h1>

          {description && (
            <p className="text-xs text-muted-foreground sm:text-sm md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>

      {action && <div>{action}</div>}
    </div>
  )
}
