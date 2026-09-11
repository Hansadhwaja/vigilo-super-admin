import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"
import type { TopTenant } from "@/types"

interface Props {
  data: TopTenant[]
}

const TopTenantTable = ({ data }: Props) => {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default TopTenantTable
