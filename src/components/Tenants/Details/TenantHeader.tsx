import { LogIn, Pencil, ShieldBan } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"

import type { Tenant } from "@/types"

interface Props {
  tenant: Tenant
}

const TenantHeader = ({ tenant }: Props) => {
  return (
    <section className="flex flex-col gap-6 rounded-lg border bg-card p-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <CustomAvatar
          src={tenant.avatar}
          alt={tenant.name}
          className="h-20 w-20 rounded-full object-cover"
        />

        <div className="space-y-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {tenant.name}
            </h2>

            <p className="text-sm text-muted-foreground">{tenant.email}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant={tenant.status === "active" ? "default" : "secondary"}
              className="capitalize"
            >
              {tenant.status ?? "active"}
            </Badge>

            <Badge variant="outline" className="capitalize">
              {tenant.plan ?? "enterprise"}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button variant="destructive">
          <ShieldBan className="h-4 w-4" />
          Suspend
        </Button>

        <Button variant="outline">
          <LogIn className="h-4 w-4" />
          Login as tenant
        </Button>

        <Button>
          <Pencil className="h-4 w-4" />
          Edit plan
        </Button>
      </div>
    </section>
  )
}

export default TenantHeader
