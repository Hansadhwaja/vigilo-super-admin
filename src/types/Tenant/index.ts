export type Tenant = {
  id: string
  company: {
    avatar: string
    name: string
    email: string
  }
  subdomain: string
  plan: string
  status: string
  guards: number
  vehicles: number
  runs: number
  mrr: number
  lastActive: string
  createdAt: string
}

export interface TopTenant {
  id: string
  rank: number
  company: {
    name: string
    avatar: string
  }
  plan: string
  patrolRuns: number
  activeGuards: number
  alarms: number
}
