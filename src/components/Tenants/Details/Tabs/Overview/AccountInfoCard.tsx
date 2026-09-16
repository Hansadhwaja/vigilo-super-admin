import { Building2, CalendarDays, Mail, MapPin, Phone } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Tenant } from "@/types"

interface Props {
  tenant: Tenant
}

const AccountInfoCard = ({ tenant }: Props) => {
  const fields = [
    {
      label: "Company Name",
      value: tenant.name,
      icon: Building2,
    },
    {
      label: "Email",
      value: tenant.email,
      icon: Mail,
    },
    {
      label: "Mobile",
      value: tenant.mobile,
      icon: Phone,
    },
    {
      label: "Address",
      value: tenant.address || "-",
      icon: MapPin,
    },
    {
      label: "Created On",
      value: new Date(tenant.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      icon: CalendarDays,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          Account Information
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/20 p-3"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>

                <p className="mt-1 truncate text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default AccountInfoCard
