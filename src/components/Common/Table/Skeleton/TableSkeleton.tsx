import { Skeleton } from "@/components/ui/skeleton"
import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import type { Table } from "@tanstack/react-table"

interface TableSkeletonProps<TData> {
  table: Table<TData>
  rows?: number
}

export default function TableSkeleton<TData>({
  table,
  rows = 10,
}: TableSkeletonProps<TData>) {
  return (
    <TableBody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {table.getVisibleLeafColumns().map((column) => (
            <TableCell key={column.id}>
              <Skeleton className="h-5 w-full min-w-20" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}
