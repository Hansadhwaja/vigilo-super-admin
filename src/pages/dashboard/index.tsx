import { PageHeader } from "@/components/Common/Header/PageHeader"
import StatList from "@/components/Common/Stats/StatList"
import { Building2, CreditCard, Users, Wallet } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Tenants",
      value: 124,
      icon: Building2,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Active Plans",
      value: 89,
      icon: CreditCard,
      color: "bg-violet-500/10 text-violet-500",
    },
    {
      title: "Monthly Revenue",
      value: "₹1,24,500",
      icon: Wallet,
      color: "bg-green-500/10 text-green-500",
      trend: 12.5,
    },
    {
      title: "Platform Users",
      value: "5,432",
      icon: Users,
      color: "bg-orange-500/10 text-orange-500",
      trend: 8.2,
    },
  ]

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Monitor platform activity, revenue, tenants, and system health."
      />

      <StatList stats={stats} />
    </>
  )
}
