import { PageHeader } from "@/components/Common/Header/PageHeader"
import Loader from "@/components/Common/Loader"
import StatList from "@/components/Common/Stats/StatList"
import SupportFilters from "@/components/Support/Filter/SupportFilters"
import SupportTable from "@/components/Support/Table"
import useDebounce from "@/hooks/useDebounce"
import useQueryParams from "@/hooks/useQueryParams"
import { useGetAllEnquiriesQuery } from "@/store/api/enquiry/enquiryApis"
import { Inbox, CircleAlert, Clock3, CheckCircle2 } from "lucide-react"
import { Suspense } from "react"

const SupportPage = () => {
  const { getParam } = useQueryParams()
  const page = Number(getParam("page", "1"))
  const limit = Number(getParam("limit", "10"))
  const search = getParam("search", "")
  const status = getParam("status", "")
  const senderType = getParam("senderType", "")
  const debouncedSearch = useDebounce(search)

  const { data, isLoading } = useGetAllEnquiriesQuery({
    page,
    limit,
    search: debouncedSearch,
    status,
    senderType,
  })

  const enquiries = data?.data ?? []
  const pagination = data?.pagination ?? {
    total: data?.count ?? 0,
    page,
    limit,
    totalPages: 1,
  }

  if (isLoading) return <Loader />

  const stats = [
    {
      title: "Total Enquiries",
      value: 248,
      subtitle: "All enquiries received",
      icon: Inbox,
      color: "bg-blue-500/10 text-blue-500",
      trend: 12,
    },
    {
      title: "Open",
      value: 34,
      subtitle: "Awaiting response",
      icon: CircleAlert,
      color: "bg-red-500/10 text-red-500",
      trend: 5,
    },
    {
      title: "In Progress",
      value: 18,
      subtitle: "Currently being handled",
      icon: Clock3,
      color: "bg-amber-500/10 text-amber-500",
      trend: -2,
    },
    {
      title: "Resolved",
      value: 196,
      subtitle: "Successfully resolved",
      icon: CheckCircle2,
      color: "bg-green-500/10 text-green-500",
      trend: 18,
    },
  ]
  return (
    <div className="space-y-4">
      <PageHeader
        title="Support & Enquiries"
        description="Manage customer enquiries, tickets, and support requests."
      />
      <StatList stats={stats} />
      <Suspense fallback={null}>
        <SupportFilters />
      </Suspense>
      <SupportTable enquiries={enquiries} pagination={pagination} />
    </div>
  )
}

export default SupportPage
