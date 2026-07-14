import { Badge } from "@/components/ui/badge"
import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"
import type { ColumnDef } from "@tanstack/react-table"
import type { Tenant } from "@/types"
import { displayValue } from "@/utils"
import { formatDate } from "@/utils/date"
import TenantActions from "./TenantsActions"

export const columns: ColumnDef<Tenant>[] = [
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      const avatar = row.original.avatar
      const name = row.original.name
      const email = row.original.email

      return (
        <div className="flex items-center gap-3">
          <CustomAvatar
            src={avatar}
            alt={name || "Tenant"}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="font-medium">{displayValue(name)}</p>
            <p className="text-sm text-muted-foreground">
              {displayValue(email)}
            </p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "subdomain",
    header: "Subdomain",
    cell: ({ row }) => displayValue(row.original.subdomain),
  },
  {
    accessorKey: "plan",
    header: "Plan",
    cell: ({ row }) => displayValue(row.original.plan),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status

      if (!status) return "-"

      return (
        <Badge variant={status === "Active" ? "default" : "secondary"}>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "guards",
    header: "Guards",
    cell: ({ row }) => displayValue(row.original.guards),
  },
  {
    accessorKey: "vehicles",
    header: "Vehicles",
    cell: ({ row }) => displayValue(row.original.vehicles),
  },
  {
    accessorKey: "runs",
    header: "Runs",
    cell: ({ row }) => displayValue(row.original.runs),
  },
  {
    accessorKey: "mrr",
    header: "MRR",
    cell: ({ row }) => {
      const mrr = row.original.mrr

      return mrr !== null && mrr !== undefined
        ? `$${mrr.toLocaleString()}`
        : "-"
    },
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
    cell: ({ row }) => displayValue(row.original.lastActive),
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => displayValue(formatDate(row.original.createdAt)),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => <TenantActions tenant={row.original} />,
  },
]
