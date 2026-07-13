
import { Badge } from "@/components/ui/badge"
import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"
import type { ColumnDef } from "@tanstack/react-table"
import type { Transaction } from "@/types"

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "tenant",
    header: "Tenant",
    cell: ({ row }) => {
      const tenant = row.original.tenant

      return (
        <div className="flex items-center gap-3">
          <CustomAvatar
            src={tenant.avatar}
            alt={tenant.name}
            fallback={tenant.name}
            className="h-9 w-9"
          />

          <span className="font-medium">{tenant.name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <span className="font-medium">${row.original.amount}</span>
    ),
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
        <Badge
          variant={
            status === "Paid"
              ? "default"
              : status === "Pending"
                ? "secondary"
                : "destructive"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "method",
    header: "Method",
  },
]
