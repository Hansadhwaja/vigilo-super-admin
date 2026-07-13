
import { Badge } from "@/components/ui/badge"
import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"
import type { ColumnDef } from "@tanstack/react-table"
import type { Tenant } from "@/types"


export const columns: ColumnDef<Tenant>[] = [
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      const company = row.original.company

      return (
        <div className="flex items-center gap-3">
          <CustomAvatar
            src={company.avatar}
            alt={company.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{company.name}</p>
            <p className="text-sm text-muted-foreground">{company.email}</p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "subdomain",
    header: "Subdomain",
  },
  {
    accessorKey: "plan",
    header: "Plan",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status

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
  },
  {
    accessorKey: "vehicles",
    header: "Vehicles",
  },
  {
    accessorKey: "runs",
    header: "Runs",
  },
  {
    accessorKey: "mrr",
    header: "MRR",
    cell: ({ row }) => `$${row.original.mrr.toLocaleString()}`,
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
  },
  {
    accessorKey: "createdAt",
    header: "Created",
  },
]
