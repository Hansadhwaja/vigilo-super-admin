import RevenueByPlanChart from "@/components/Billing/Chart/RevenueByPlanChart"
import BillingTable from "@/components/Billing/Table"
import { PageHeader } from "@/components/Common/Header/PageHeader"
import StatList from "@/components/Common/Stats/StatList"
import { revenueByPlan } from "@/constants"
import {
  DollarSign,
  Landmark,
  TrendingDown,
  Users,
} from "lucide-react"

const BillingPage = () => {
  const stats = [
    {
      title: "MRR",
      value: "₹3,692",
      subtitle: "Monthly recurring revenue",
      icon: DollarSign,
      color: "bg-green-500/10 text-green-500",
      trend: 6.4,
    },
    {
      title: "ARR",
      value: "₹44,304",
      subtitle: "Annual recurring revenue",
      icon: Landmark,
      color: "bg-blue-500/10 text-blue-500",
      trend: 8.1,
    },
    {
      title: "Active Subscriptions",
      value: 8,
      subtitle: "Currently active plans",
      icon: Users,
      color: "bg-violet-500/10 text-violet-500",
      trend: 2,
    },
    {
      title: "Churn Rate",
      value: "2.1%",
      subtitle: "Compared to last month",
      icon: TrendingDown,
      color: "bg-orange-500/10 text-orange-500",
      trend: -0.4,
    },
  ]
  return (
    <div className="space-y-4">
      <PageHeader
        title="Billing & Subscriptions"
        description="Monitor subscriptions, invoices, payments, and revenue."
      />
      <StatList stats={stats} />
      <BillingTable />
      <RevenueByPlanChart data={revenueByPlan} />
    </div>
  )
}

export default BillingPage
