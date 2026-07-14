"use client"

import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"
import { useGetAllCompaniesQuery } from "@/store/api/tenants/tenantsApi"
import Loader from "@/components/Common/Loader"

const TenantTable = () => {
  const { data, isLoading } = useGetAllCompaniesQuery({
    page: 1,
    limit: 6,
  })
  const tenants = data?.data ?? []

  if (isLoading) return <Loader />
  return (
    <div>
      <DataTable columns={columns} data={tenants} />
    </div>
  )
}

export default TenantTable
