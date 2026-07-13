"use client"

import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useQueryParams from "@/hooks/useQueryParams"
import type { DataFiltersProps } from "@/types"


const DataFilters = ({
  search,
  filters = [],
  actions,
  showClearButton = true,
}: DataFiltersProps) => {
  const { getParam, setParam, clearParams } = useQueryParams()

  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          {search && (
            <div className="relative w-full sm:w-72">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={getParam(search.key)}
                placeholder={search.placeholder ?? "Search..."}
                onChange={(e) => setParam(search.key, e.target.value)}
                className="pl-9"
              />
            </div>
          )}

          {filters.map((filter) => {
            if (filter.type === "date") {
              return (
                <Input
                  key={filter.key}
                  type="date"
                  value={getParam(filter.key)}
                  onChange={(e) => setParam(filter.key, e.target.value)}
                  className={filter.className ?? "w-[180px]"}
                />
              )
            }

            return (
              <Select
                key={filter.key}
                value={getParam(filter.key)}
                onValueChange={(value) => setParam(filter.key, value)}
              >
                <SelectTrigger className={filter.className ?? "w-[180px]"}>
                  <SelectValue placeholder={filter.placeholder} />
                </SelectTrigger>

                <SelectContent>
                  {filter.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )
          })}

          {showClearButton && (
            <Button variant="outline" onClick={clearParams}>
              <X className="size-4" />
              Clear
            </Button>
          )}
        </div>

        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  )
}

export default DataFilters
