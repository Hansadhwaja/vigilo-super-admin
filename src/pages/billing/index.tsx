"use client"

import BillingTable from "@/components/Billing/Table"
import { PageHeader } from "@/components/Common/Header/PageHeader"
import StatList from "@/components/Common/Stats/StatList"
import useQueryParams from "@/hooks/useQueryParams"
import { useGetAllTransactionsQuery } from "@/store/api/billing/billingApis"
import { formatCurrency } from "@/utils"
import { DollarSign, Landmark } from "lucide-react"

const BillingPage = () => {
  const { getParam } = useQueryParams()
  const page = Number(getParam("page") ?? 1)
  const limit = Number(getParam("limit") ?? 10)

  const { data, isLoading } = useGetAllTransactionsQuery({
    page,
    limit,
  })

  const transactions = data?.data ?? []
  const summary = data?.summary ?? {
    currentAnnualRevenue: 0,
    currentMonthRevenue: 0,
  }
  const pagination = data?.pagination ?? {
    limit: 1,
    page: 1,
    total: 1,
    totalPages: 1,
  }

  const stats = [
    {
      title: "MRR",
      value: formatCurrency(summary?.currentMonthRevenue ?? 0),
      subtitle: "Monthly recurring revenue",
      icon: DollarSign,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "ARR",
      value: formatCurrency(summary?.currentAnnualRevenue ?? 0),
      subtitle: "Annual recurring revenue",
      icon: Landmark,
      color: "bg-blue-500/10 text-blue-500",
    },
  ]
  return (
    <div className="space-y-4">
      <PageHeader
        title="Billing & Subscriptions"
        description="Monitor subscriptions, invoices, payments, and revenue."
      />
      <StatList stats={stats} />
      <BillingTable
        transactions={transactions}
        isLoading={isLoading}
        pagination={{
          limit: pagination.limit,
          page: pagination.page,
          total: pagination.total,
          totalPages: pagination.totalPages,
        }}
      />
    </div>
  )
}

export default BillingPage
