import { PageHeader } from "@/components/Common/Header/PageHeader"
import StatList from "@/components/Common/Stats/StatList"
import PlanDistributionChart from "@/components/Dashboard/Charts/PlanDistributionChart"
import RevenueGrowthChart from "@/components/Dashboard/Charts/RevenueGrowthChart"
import TenantGrowthChart from "@/components/Dashboard/Charts/TenantGrowthChart"
import RecentTenantRegistrations from "@/components/Dashboard/RecentTenantRegistrations"
import UsageStats from "@/components/Dashboard/UsageStats"

import {
  dummyPlanDistribution,
  dummyRevenueGrowth,
  dummyTenantGrowth,
  recentTenants,
} from "@/constants"

import {
  BadgeCheck,
  BadgeX,
  Building2,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Tenants",
      value: 124,
      icon: Building2,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Active Tenants",
      value: 89,
      icon: Users,
      color: "bg-violet-500/10 text-violet-500",
    },
    {
      title: "New Signups",
      value: "5,432",
      icon: UserPlus,
      color: "bg-orange-500/10 text-orange-500",
      trend: 8.2,
    },
    {
      title: "Active Subscriptions",
      value: "4,821",
      icon: BadgeCheck,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Inactive Subscriptions",
      value: "611",
      icon: BadgeX,
      color: "bg-red-500/10 text-red-500",
    },
    {
      title: "Monthly Revenue",
      value: "₹1,24,500",
      icon: Wallet,
      color: "bg-emerald-500/10 text-emerald-500",
      trend: 12.5,
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Monitor platform activity, revenue, tenants, and system health."
      />

      {/* Key metrics */}
      <StatList stats={stats} />

      {/* Usage */}
      <UsageStats />

      {/* Growth charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <TenantGrowthChart data={dummyTenantGrowth} />
        <RevenueGrowthChart data={dummyRevenueGrowth} />
      </div>

      {/* Subscription distribution */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentTenantRegistrations tenants={recentTenants} />
        </div>
        <div className="xl:col-span-1">
          <PlanDistributionChart data={dummyPlanDistribution} />
        </div>
      </div>
    </div>
  )
}
