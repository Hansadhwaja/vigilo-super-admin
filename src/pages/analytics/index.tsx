import AnalyticsCharts from "@/components/Analytics/Charts"
import AnalyticsFilters from "@/components/Analytics/Filter/AnalyticsFilters"
import TopTenantTable from "@/components/Analytics/Table"
import { PageHeader } from "@/components/Common/Header/PageHeader"
import Loader from "@/components/Common/Loader"
import useQueryParams from "@/hooks/useQueryParams"
import { useGetAnalyticsStatsQuery } from "@/store/api/analytics/analyticsApi"
import { Suspense } from "react"

const AnalyticsPage = () => {
  const { getParam } = useQueryParams()
  const range = getParam("range", "30d")
  const companyAdminId = getParam("companyAdminId", "all")

  const { data, isLoading } = useGetAnalyticsStatsQuery({
    range,
    companyAdminId: companyAdminId === "all" ? "" : companyAdminId,
  })

  const analyticsContent = data?.data

  if (isLoading) return <Loader />

  return (
    <div className="space-y-4">
      <PageHeader
        title="Usage & Analytics"
        description="Track platform usage, engagement, and performance metrics."
      />
      <Suspense fallback={null}>
        <AnalyticsFilters />
      </Suspense>
      <AnalyticsCharts data={analyticsContent} />
      <TopTenantTable data={analyticsContent?.topAdmins} />
    </div>
  )
}

export default AnalyticsPage
