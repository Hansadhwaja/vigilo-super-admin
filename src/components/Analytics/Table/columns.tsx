import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"
import type { TopTenant } from "@/types"
import type { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<TopTenant>[] = [
  {
    id: "sno",
    header: "#",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "company",
    header: "Tenant",
    cell: ({ row }) => {
      const name = row.original.name

      return (
        <div className="flex items-center gap-3">
          <CustomAvatar
            src={""}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-medium">{name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "planName",
    header: "Plan",
  },
  {
    accessorKey: "patrolRunsCount",
    header: "Patrol Runs",
  },
  {
    accessorKey: "activeGuardsCount",
    header: "Active Guards",
  },
  {
    accessorKey: "alarmsCount",
    header: "Alarms",
  },
]
