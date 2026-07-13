"use client"

import DataFilters from "@/components/Common/Filter/DataFilters"
import { Button } from "@/components/ui/button"

const SupportFilters = () => {
  const filters = [
    {
      type: "select" as const,
      key: "sender",
      placeholder: "All Senders",
      options: [
        {
          label: "All Senders",
          value: "all",
        },
        {
          label: "Company",
          value: "company",
        },
        {
          label: "Guard",
          value: "guard",
        },
      ],
    },
    {
      type: "select" as const,
      key: "status",
      placeholder: "All Statuses",
      options: [
        {
          label: "All Statuses",
          value: "all",
        },
        {
          label: "Open",
          value: "open",
        },
        {
          label: "In Progress",
          value: "in_progress",
        },
        {
          label: "Resolved",
          value: "resolved",
        },
      ],
    },
  ]

  return (
    <DataFilters
      search={{
        key: "search",
        placeholder: "Search enquiries...",
      }}
      filters={filters}
      actions={<Button>Add Query</Button>}
    />
  )
}

export default SupportFilters
