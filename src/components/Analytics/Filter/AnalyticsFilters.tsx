import DataFilters from "@/components/Common/Filter/DataFilters"
import { useGetAllCompaniesQuery } from "@/store/api/tenants/tenantsApi"
import type { Tenant } from "@/types"

const AnalyticsFilters = () => {
  const { data } = useGetAllCompaniesQuery({
    page: 1,
    limit: 1000,
  })

  const tenants = data?.data ?? []
  const filters = [
    {
      type: "select" as const,
      key: "range",
      placeholder: "Select range",
      options: [
        {
          label: "Last 7 Days",
          value: "7d",
        },
        {
          label: "Last 30 Days",
          value: "30d",
        },
        {
          label: "Last 3 Months",
          value: "3m",
        },
        {
          label: "Last 12 Months",
          value: "12m",
        },
      ],
    },
    {
      type: "select" as const,
      key: "companyAdminId",
      placeholder: "Select tenant",
      options: [
        { label: "All Tenants", value: "all" },
        ...tenants.map((tenant: Tenant) => ({
          label: tenant.name,
          value: tenant.id,
        })),
      ],
    },
  ]

  return <DataFilters filters={filters} />
}

export default AnalyticsFilters
