export type Tenant = {
  id: string
  name: string
  email: string
  avatar: string
  mobile: string
  address: string
  createdAt: string
  subdomain: string
  planId: string | null

  status: string
  guards: number
  vehicles: number
  runs: number
  mrr: number
  lastActive: string

  subscriptionStatus: string
  subscriptionStart: string | null
  subscriptionEnd: string | null
  cancelAtPeriodEnd: boolean

  plan: {
    currency: string
    description: string
    id: string
    name: string
    amount: number
    interval: string
    features: string[]
    isActive: boolean
  } | null

  activePlan: {
    id: string
    name: string
    features: string[]
    isActive: boolean
    status: string
    startDate: string
    endDate: string
    cancelAtPeriodEnd: boolean
  } | null

  stats: {
    totalGuards: number
    totalUsers: number
    totalAdmins: number
    totalVehicles: number
    activeVehicles: number
    totalPatrolRuns: number
    activePatrolRuns: number
    totalMembers: number
  }
}

export interface TopTenant {
  id: string
  name: string
  planName: string
  patrolRunsCount: number
  activeGuardsCount: number
  alarmsCount: number
}

export type RecentTenant = {
  id: string
  name: string
  email: string
  createdAt: string
  avatar: string
}
