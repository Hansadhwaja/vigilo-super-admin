export * from "./Filter"
export * from "./Stat"
export * from "./Plan"
export * from "./Billing"
export * from "./Tenant"
export * from "./Team"
export * from "./Support"
export * from "./Settings"

export type Pagination = {
  total: number
  page: number
  totalPages: number
  limit: number
}
