"use client"

import { PageHeader } from "@/components/Common/Header/PageHeader"
import Loader from "@/components/Common/Loader"
import TenantDetailsTabs from "@/components/Tenants/Details/Tabs/TenantDetailsTabs"
import TenantHeader from "@/components/Tenants/Details/TenantHeader"
import { useGetCompanyByIdQuery } from "@/store/api/tenants/tenantsApi"
import { useParams } from "react-router"

const TenantDetailsPage = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetCompanyByIdQuery(id, {
    skip: !id,
  })
  const tenantDetails = data?.data ?? {}

  if (isLoading) return <Loader />
  return (
    <div className="space-y-4">
      <PageHeader
        title="Tenant Details"
        description="View tenant information, subscription, and platform usage."
        backTo="/tenants"
      />
      <TenantHeader tenant={tenantDetails} />
      <TenantDetailsTabs />
    </div>
  )
}

export default TenantDetailsPage
