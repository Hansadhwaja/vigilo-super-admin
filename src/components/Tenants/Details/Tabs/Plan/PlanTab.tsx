import type { Tenant } from "@/types"
import CurrentPlanCard from "./CurrentPlanCard"
import BillingHistoryTable from "./Table"
import { useGetAllTransactionsQuery } from "@/store/api/billing/billingApis"
import useQueryParams from "@/hooks/useQueryParams"

interface Props {
  tenant: Tenant
}

const PlanTab = ({ tenant }: Props) => {
  const { getParam } = useQueryParams()
  const page = Number(getParam("page") ?? 1)
  const limit = Number(getParam("limit") ?? 10)

  const { data, isLoading } = useGetAllTransactionsQuery({
    page,
    limit,
    userId:tenant.id
  })

  const transactions = data?.data ?? []
  const pagination = data?.pagination ?? {
    limit: 1,
    page: 1,
    total: 1,
    totalPages: 1,
  }
  return (
    <div className="space-y-6">
      <CurrentPlanCard tenant={tenant} />
      <BillingHistoryTable
        transactions={transactions}
        isLoading={isLoading}
        pagination={pagination}
      />
    </div>
  )
}

export default PlanTab
