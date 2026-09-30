import { DataTable } from "@/components/ui/data-table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { columns } from "./columns"
import type { Pagination, Ticket } from "@/types"

interface Props {
  enquiries: Ticket[]
  pagination?: Pagination
}

const SupportTable = ({ enquiries, pagination }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support Enquiries</CardTitle>
        <CardDescription>
          View and manage enquiries submitted by companies and guards.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <DataTable columns={columns} data={enquiries} pagination={pagination} />
      </CardContent>
    </Card>
  )
}

export default SupportTable
