import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useQueryParams from "@/hooks/useQueryParams"
import type { Pagination } from "@/types"

interface DataTablePaginationProps {
  pagination: Pagination
  pageSizeOptions?: number[]
  showFirstLastButtons?: boolean
}

export function DataTablePagination({
  pagination,
  pageSizeOptions = [10, 20, 30, 50],
  showFirstLastButtons = true,
}: DataTablePaginationProps) {
  const { setMultipleParams } = useQueryParams()

  const { page, limit, totalPages } = pagination

  const canPrevious = page > 1
  const canNext = page < totalPages

  const handlePageChange = (page: number) => {
    setMultipleParams(
      {
        page,
        limit,
      },
      false
    )
  }

  const handleLimitChange = (value: string) => {
    setMultipleParams(
      {
        page: 1,
        limit: Number(value),
      },
      false
    )
  }

  return (
    <div className="flex items-center justify-end gap-4 px-2 py-3">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium whitespace-nowrap">Rows per page</p>

          <Select value={String(limit)} onValueChange={handleLimitChange}>
            <SelectTrigger className="h-8 w-20">
              <SelectValue />
            </SelectTrigger>

            <SelectContent side="top">
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="text-sm font-medium whitespace-nowrap">
          Page {page} of {totalPages}
        </div>

        <div className="flex items-center gap-1">
          {showFirstLastButtons && (
            <Button
              variant="outline"
              size="icon"
              className="hidden h-8 w-8 lg:flex"
              onClick={() => handlePageChange(1)}
              disabled={!canPrevious}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
          )}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => handlePageChange(page - 1)}
            disabled={!canPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => handlePageChange(page + 1)}
            disabled={!canNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {showFirstLastButtons && (
            <Button
              variant="outline"
              size="icon"
              className="hidden h-8 w-8 lg:flex"
              onClick={() => handlePageChange(totalPages)}
              disabled={!canNext}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
