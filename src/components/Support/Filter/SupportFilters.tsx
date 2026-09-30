"use client"

import DataFilters from "@/components/Common/Filter/DataFilters"

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
        {
          label: "Website",
          value: "website",
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
          value: "inprogress",
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
    />
  )
}

export default SupportFilters
