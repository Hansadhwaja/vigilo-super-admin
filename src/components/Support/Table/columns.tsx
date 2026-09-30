import { Badge } from "@/components/ui/badge"
import type { Ticket } from "@/types"
import { formatDate } from "@/utils/date"
import type { ColumnDef } from "@tanstack/react-table"
import ChangeStatus from "../ChangeStatus"
import TableActions from "./TableActions"

export const columns: ColumnDef<Ticket>[] = [
  {
    id: "serialNumber",
    header: "S.No.",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">{row.index + 1}</span>
    ),
  },
  {
    accessorKey: "name",
    header: "Sender",
    cell: ({ row }) => {
      const { name, senderType } = row.original

      return (
        <div className="min-w-0 space-y-1">
          <p className="max-w-[220px] truncate font-medium">{name}</p>

          <Badge
            variant="secondary"
            className="h-5 px-2 text-[11px] font-medium capitalize"
          >
            {senderType}
          </Badge>
        </div>
      )
    },
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => (
      <div className="max-w-40">
        <p className="truncate font-medium" title={row.original.subject}>
          {row.original.subject}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Message",
    cell: ({ row }) => (
      <div className="max-w-40">
        <p
          className="truncate text-sm text-muted-foreground"
          title={row.original.description}
        >
          {row.original.description}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <ChangeStatus ticket={row.original} />,
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => (
      <span className="text-sm whitespace-nowrap text-muted-foreground">
        {formatDate(row.original.createdAt)}
      </span>
    ),
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => <TableActions ticket={row.original} />,
  },
]
