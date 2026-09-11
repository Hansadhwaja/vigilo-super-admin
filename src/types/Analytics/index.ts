import type { TopTenant } from "../Tenant"

export interface AnalyticsPatrolRun {
  date: string
  count: number
}

export interface AnalyticsAlarmByPriority {
  priority: string
  count: number
}

export interface AnalyticsAlarmResponseTime {
  date: string
  avgTime: number
}

export interface AnalyticsMissedCheckpointRate {
  date: string
  rate: number
}

export interface AnalyticsData {
  patrolRuns: AnalyticsPatrolRun[]
  alarmsByPriority: AnalyticsAlarmByPriority[]
  alarmResponseTime: AnalyticsAlarmResponseTime[]
  missedCheckpointRate: AnalyticsMissedCheckpointRate[]
  topAdmins: TopTenant[]
}

export interface AnalyticsResponse {
  success: boolean
  data: AnalyticsData
}
