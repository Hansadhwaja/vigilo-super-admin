"use client";

import DataFilters from "@/components/Common/Filter/DataFilters"
import { Button } from "@/components/ui/button"

const TenantFilters = () => {
  const filters = [
    {
      type: "select" as const,
      key: "status",
      placeholder: "Status",
      options: [
        {
          label: "Active",
          value: "active",
        },
        {
          label: "Inactive",
          value: "inactive",
        },
      ],
    },
    {
      type: "select" as const,
      key: "plan",
      placeholder: "Plan",
      options: [
        {
          label: "Basic",
          value: "basic",
        },
        {
          label: "Premium",
          value: "premium",
        },
      ],
    },
  ]

  return (
    <DataFilters
      search={{
        key: "search",
        placeholder: "Search tenants...",
      }}
      filters={filters}
      actions={<Button>Add Tenant</Button>}
    />
  )
}

export default TenantFilters
