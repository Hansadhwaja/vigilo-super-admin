import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"
import { useGetAllCompaniesQuery } from "@/store/api/tenants/tenantsApi"
import useQueryParams from "@/hooks/useQueryParams"

const TenantTable = () => {
  const { getParam } = useQueryParams()
  const page = Number(getParam("page", "1"))
  const limit = Number(getParam("limit", "10"))

  const { data, isLoading } = useGetAllCompaniesQuery({
    page,
    limit,
  })

  const tenants = data?.data ?? []
  const pagination = data?.pagination

  return (
    <div>
      <DataTable
        columns={columns}
        data={tenants}
        pagination={pagination}
        isLoading={isLoading}
      />
    </div>
  )
}

export default TenantTable
