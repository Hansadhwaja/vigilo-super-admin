import { Badge } from "@/components/ui/badge"
import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"
import type { ColumnDef } from "@tanstack/react-table"
import type { Transaction } from "@/types"
import { formatDate } from "@/utils/date"
import { getInitials } from "@/lib/utils/index"

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "paidAt",
    header: "Date",
    cell: ({ row }) => formatDate(row.original.paidAt),
  },
  {
    accessorKey: "tenant",
    header: "Tenant",
    cell: ({ row }) => {
      const tenant = row.original.user

      return (
        <div className="flex items-center gap-3">
          <CustomAvatar
            src={""}
            alt={tenant.name}
            fallback={getInitials(tenant.name)}
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
    cell: () => "-",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status

      return (
        <Badge
          className="capitalize"
          variant={
            status === "paid"
              ? "default"
              : status === "pending"
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
    cell: () => "-",
  },
]
