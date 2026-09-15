import { DataTable } from "@/components/ui/data-table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { columns } from "./columns"
import type { Pagination, Transaction } from "@/types"

interface Props {
  transactions: Transaction[]
  isLoading: boolean
  pagination: Pagination
}

const BillingTable = ({ transactions, isLoading, pagination }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          View the latest subscription payments and billing activity.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <DataTable
          columns={columns}
          data={transactions}
          isLoading={isLoading}
          pagination={pagination}
        />
      </CardContent>
    </Card>
  )
}

export default BillingTable
