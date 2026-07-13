import { PageHeader } from "@/components/Common/Header/PageHeader"
import StatList from "@/components/Common/Stats/StatList"
import SupportFilters from "@/components/Support/Filter/SupportFilters"
import SupportTable from "@/components/Support/Table"
import { Inbox, CircleAlert, Clock3, CheckCircle2 } from "lucide-react"
import { Suspense } from "react"

const SupportPage = () => {
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
      <SupportTable />
    </div>
  )
}

export default SupportPage
