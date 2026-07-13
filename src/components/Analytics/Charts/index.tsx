import AlarmResponseTimeChart from "./AlarmResponseTimeChart"
import AlarmsByPriorityChart from "./AlarmsByPriorityChart"
import CheckpointScanChart from "./CheckpointScanChart"
import MissedCheckpointChart from "./MissedCheckpointChart"
import PatrolRunsChart from "./PatrolRunsChart"
import {
  alarmsByPriorityData,
  avgAlarmResponseTimeData,
  checkpointScanTimeData,
  missedCheckpointRateData,
  patrolRunsData,
  systemUptimeData,
} from "@/constants"
import SystemUptimeChart from "./SystemUptimeChart"

const AnalyticsCharts = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <PatrolRunsChart data={patrolRunsData} />
      <AlarmsByPriorityChart data={alarmsByPriorityData} />
      <CheckpointScanChart data={checkpointScanTimeData} />
      <MissedCheckpointChart data={missedCheckpointRateData} />
      <AlarmResponseTimeChart data={avgAlarmResponseTimeData} />
      <SystemUptimeChart data={systemUptimeData} />
    </div>
  )
}

export default AnalyticsCharts
