"use client"

import DataFilters from "@/components/Common/Filter/DataFilters"
import { tenants } from "@/constants"

const AnalyticsFilters = () => {
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
      key: "tenant",
      placeholder: "Select tenant",
      options: [
        { label: "All Tenants", value: "all" },
        ...tenants.map((tenant) => ({
          label: tenant.company.name,
          value: tenant.id,
        })),
      ],
    },
  ]

  return <DataFilters filters={filters} />
}

export default AnalyticsFilters
