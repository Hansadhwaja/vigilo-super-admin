import AlarmResponseTimeChart from "./AlarmResponseTimeChart"
import AlarmsByPriorityChart from "./AlarmsByPriorityChart"
import MissedCheckpointChart from "./MissedCheckpointChart"
import PatrolRunsChart from "./PatrolRunsChart"
import type { AnalyticsData } from "@/types"

interface Props {
  data: AnalyticsData
}

const AnalyticsCharts = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <PatrolRunsChart data={data?.patrolRuns ?? []} />
      <AlarmsByPriorityChart data={data?.alarmsByPriority ?? []} />
      <MissedCheckpointChart data={data?.missedCheckpointRate ?? []} />
      <AlarmResponseTimeChart data={data?.alarmResponseTime ?? []} />
    </div>
  )
}

export default AnalyticsCharts
