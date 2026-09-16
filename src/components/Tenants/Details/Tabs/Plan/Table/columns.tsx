import { Badge } from "@/components/ui/badge"
import type { ColumnDef } from "@tanstack/react-table"
import type { Transaction } from "@/types"
import { formatDate } from "@/utils/date"

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "paidAt",
    header: "Date",
    cell: ({ row }) => formatDate(row.original.paidAt),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <span className="font-medium">${row.original.amount}</span>
    ),
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
    accessorKey: "plan",
    header: "Plan",
    cell: ({ row }) => row.original?.plan?.name ?? "-",
  },
]
