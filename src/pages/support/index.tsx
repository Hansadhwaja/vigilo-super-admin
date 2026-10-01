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
    totalItems: data?.count ?? 0,
    page,
    limit,
    totalPages: 1,
  }

  const summary = data?.summary ?? {
    total: 0,
    open: 0,
    inprogress: 0,
    resolved: 0,
  }

  if (isLoading) return <Loader />

  const stats = [
    {
      title: "Total Enquiries",
      value: summary?.total,
      subtitle: "All enquiries received",
      icon: Inbox,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Open",
      value: summary?.open,
      subtitle: "Awaiting response",
      icon: CircleAlert,
      color: "bg-red-500/10 text-red-500",
    },
    {
      title: "In Progress",
      value: summary?.inprogress,
      subtitle: "Currently being handled",
      icon: Clock3,
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      title: "Resolved",
      value: summary?.resolved,
      subtitle: "Successfully resolved",
      icon: CheckCircle2,
      color: "bg-green-500/10 text-green-500",
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
      <SupportTable
        enquiries={enquiries}
        pagination={{ ...pagination, total: pagination.totalItems }}
      />
    </div>
  )
}

export default SupportPage
