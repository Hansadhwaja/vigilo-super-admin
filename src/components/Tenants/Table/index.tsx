import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"
import { tenants } from "@/constants"

const TenantTable = () => {
  return (
    <div>
      <DataTable columns={columns} data={tenants} />
    </div>
  )
}

export default TenantTable
