import type { ReactNode } from "react"


export interface FilterOption {
  label: ReactNode | string
  value: string
}

export type FilterConfig =
  | {
      type: "select"
      key: string
      placeholder: string
      options: FilterOption[]
      className?: string
    }
  | {
      type: "date"
      key: string
      className?: string
    }

export interface SearchConfig {
  key: string
  placeholder?: string
}

export interface DataFiltersProps {
  search?: SearchConfig

  filters?: FilterConfig[]

  actions?: ReactNode

  showClearButton?: boolean
}