
import CustomAvatar from "@/components/Common/Avatar/CustomAvatar"
import type { TopTenant } from "@/types"
import type { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<TopTenant>[] = [
  {
    accessorKey: "rank",
    header: "#",
  },
  {
    accessorKey: "company",
    header: "Tenant",
    cell: ({ row }) => {
      const company = row.original.company

      return (
        <div className="flex items-center gap-3">
          <CustomAvatar
            src={company.avatar}
            alt={company.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-medium">{company.name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "plan",
    header: "Plan",
  },
  {
    accessorKey: "patrolRuns",
    header: "Patrol Runs",
  },
  {
    accessorKey: "activeGuards",
    header: "Active Guards",
  },
  {
    accessorKey: "alarms",
    header: "Alarms",
  },
]
