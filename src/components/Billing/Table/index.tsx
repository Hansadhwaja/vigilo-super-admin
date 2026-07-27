import { DataTable } from "@/components/ui/data-table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { columns } from "./columns"
import { useGetAllTransactionsQuery } from "@/store/api/billing/billingApis"
import useQueryParams from "@/hooks/useQueryParams"

const BillingTable = () => {
  const { getParam } = useQueryParams()
  const page = Number(getParam("page") ?? 1)
  const limit = Number(getParam("limit") ?? 10)

  const { data, isLoading } = useGetAllTransactionsQuery({
    page,
    limit,
  })

  const transactions = data?.data ?? []

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
        />
      </CardContent>
    </Card>
  )
}

export default BillingTable
