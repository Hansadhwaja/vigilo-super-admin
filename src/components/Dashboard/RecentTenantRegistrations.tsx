import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"
import type { RecentTenant } from "@/types"
import { getInitials } from "@/lib/utils/index"
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
          Recent Tenant Registrations
        </CardTitle>

        <p className="text-xs text-muted-foreground sm:text-sm">
          Newest tenants on the platform
        </p>
      </CardHeader>

      <CardContent className="p-0">
        <div className="divide-y">
          {tenants.map((tenant) => (
            <div
              key={tenant.id}
              className="flex items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4"
            >
              {/* Avatar */}
              <CustomAvatar
                src={tenant.avatar}
                alt={tenant.name}
                fallback={getInitials(tenant.name)}
                className="size-9 shrink-0 sm:size-10"
              />

              {/* Tenant information */}
              <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-center gap-2">
                  <p className="min-w-0 truncate text-sm font-medium">
                    {tenant.name}
                  </p>
                </div>

                <div className="mt-0.5 flex min-w-0 items-center gap-1.5 text-[11px] text-muted-foreground sm:mt-1 sm:text-xs">
                  <span className="shrink-0">{tenant.email}</span>
                </div>
              </div>

              {/* Registration time */}
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
