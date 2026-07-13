import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"
import { topTenants } from "@/constants"

const TopTenantTable = () => {
  return (
    <div>
      <DataTable columns={columns} data={topTenants} />
    </div>
  )
}

export default TopTenantTable
