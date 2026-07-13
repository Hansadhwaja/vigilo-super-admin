import { PageHeader } from "@/components/Common/Header/PageHeader"
import TenantFilters from "@/components/Tenants/Filter/TenantFilters"
import TenantTable from "@/components/Tenants/Table"
import { Suspense } from "react"

const TenantsPage = () => {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Tenants"
        description="Manage all organizations using the platform."
      />
      <Suspense fallback={null}>
        <TenantFilters />
      </Suspense>
      <TenantTable />
    </div>
  )
}

export default TenantsPage
