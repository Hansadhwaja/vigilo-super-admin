import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"
import type { RecentTenant } from "@/types"
import { getInitials } from "@/utils/index"
import { formatDate } from "@/utils/date"

type RecentTenantRegistrationsProps = {
  tenants: RecentTenant[]
}

const RecentTenantRegistrations = ({
  tenants,
}: RecentTenantRegistrationsProps) => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="px-4 py-4 sm:px-6">
        <CardTitle className="text-base sm:text-lg">
          Recent Company Registrations
        </CardTitle>

        <p className="text-xs text-muted-foreground sm:text-sm">
          Newest companies on the platform
        </p>
      </CardHeader>

      <CardContent className="p-0">
        <div className="divide-y">
          {tenants.map((tenant) => (
            <div
              key={tenant.id}
              className="flex min-w-0 items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4"
            >
              {/* Avatar */}
              <CustomAvatar
                src={tenant.avatar}
                alt={tenant.name}
                fallback={getInitials(tenant.name)}
                className="size-9 shrink-0 sm:size-10"
              />

              {/* Company information */}
              <div className="min-w-0 flex-1">
                {/* Company name */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="truncate text-sm font-medium">
                      {tenant.name}
                    </p>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{tenant.name}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Email */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="mt-0.5 truncate text-[11px] text-muted-foreground sm:mt-1 sm:text-xs">
                      {tenant.email}
                    </p>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{tenant.email}</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Registration date */}
              <span className="shrink-0 text-[10px] text-muted-foreground sm:text-xs">
                {tenant.createdAt ? formatDate(tenant.createdAt) : "-"}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentTenantRegistrations
