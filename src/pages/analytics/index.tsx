import AnalyticsCharts from "@/components/Analytics/Charts"
import AnalyticsFilters from "@/components/Analytics/Filter/AnalyticsFilters"
import TopTenantTable from "@/components/Analytics/Table"
import { PageHeader } from "@/components/Common/Header/PageHeader"
import { Suspense } from "react"

const AnalyticsPage = () => {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Usage & Analytics"
        description="Track platform usage, engagement, and performance metrics."
      />
      <Suspense fallback={null}>
        <AnalyticsFilters />
      </Suspense>
      <AnalyticsCharts />
      <TopTenantTable />
    </div>
  )
}

export default AnalyticsPage
