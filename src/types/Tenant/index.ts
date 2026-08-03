export type Tenant = {
  id: string
  avatar: string
  name: string
  email: string
  mobile: string
  address: string
  subdomain: string
  plan: {
    amount: number
    currency: string
    description: string
    id: string
    interval: string
    name: string
  } | null
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
