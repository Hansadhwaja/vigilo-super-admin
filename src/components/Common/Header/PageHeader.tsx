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
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-3">
        {backTo && (
          <Button variant="ghost" size="icon" asChild>
            <Link to={backTo} aria-label="Go back">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        )}

        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

          {description && (
            <p className="mt-1 text-muted-foreground">{description}</p>
          )}
        </div>
      </div>

      {action && <div>{action}</div>}
    </div>
  )
}
