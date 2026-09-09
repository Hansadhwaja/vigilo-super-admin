import { PageHeader } from "@/components/Common/Header/PageHeader"
import StatList from "@/components/Common/Stats/StatList"
import PlanDistributionChart from "@/components/Dashboard/Charts/PlanDistributionChart"
import RevenueGrowthChart from "@/components/Dashboard/Charts/RevenueGrowthChart"
import TenantGrowthChart from "@/components/Dashboard/Charts/TenantGrowthChart"
import RecentTenantRegistrations from "@/components/Dashboard/RecentTenantRegistrations"
import DashboardSkeleton from "@/components/Dashboard/Skeleton/DashboardSkeleton"
import UsageStats from "@/components/Dashboard/UsageStats"
import { formatCurrency } from "@/lib/utils/index"
import { useGetDashboardContentQuery } from "@/store/api/dashboard/dashboardApis"

import {
  BadgeCheck,
  BadgeX,
  Building2,
  CalendarDays,
  Footprints,
  ShieldCheck,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react"

export default function DashboardPage() {
  const { data, isLoading } = useGetDashboardContentQuery(undefined)

  const dashboardData = data?.data

  if (isLoading) return <DashboardSkeleton />

  const {
    totalUsers,
    newSignupsThisMonth,
    activeSubscribers,
    nonActiveSubscribers,
    totalMonthlyRevenue,
    totalShifts,
    totalPatrolRuns,
    activeClients,
    totalGuards,
    totalClients,
    adminSignupsByMonth = [],
    monthlyRevenue = [],
    subscriptionPlanDistribution = [],
    recentAdminSignups = [],
  } = dashboardData

  const stats = [
    {
      title: "Total Companies",
      value: totalUsers,
      icon: Building2,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Active Clients",
      value: activeClients,
      icon: Users,
      color: "bg-violet-500/10 text-violet-500",
    },
    {
      title: "New Signups",
      value: newSignupsThisMonth,
      icon: UserPlus,
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      title: "Active Subscriptions",
      value: activeSubscribers,
      icon: BadgeCheck,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Inactive Subscriptions",
      value: nonActiveSubscribers,
      icon: BadgeX,
      color: "bg-red-500/10 text-red-500",
    },
    {
      title: "Monthly Revenue",
      value: formatCurrency(totalMonthlyRevenue),
      icon: Wallet,
      color: "bg-emerald-500/10 text-emerald-500",
    },
  ]

  const usageStats = [
    {
      title: "Total Shifts",
      value: totalShifts,
      icon: CalendarDays,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Total Patrols",
      value: totalPatrolRuns,
      icon: Footprints,
      color: "bg-violet-500/10 text-violet-500",
    },
    {
      title: "Total Guards",
      value: totalGuards,
      icon: ShieldCheck,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Total Clients",
      value: totalClients,
      icon: Users,
      color: "bg-orange-500/10 text-orange-500",
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
      <UsageStats usageStats={usageStats} />

      {/* Growth charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <TenantGrowthChart data={adminSignupsByMonth} />
        <RevenueGrowthChart data={monthlyRevenue} />
      </div>

      {/* Subscription distribution */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentTenantRegistrations tenants={recentAdminSignups} />
        </div>
        <div className="xl:col-span-1">
          <PlanDistributionChart data={subscriptionPlanDistribution} />
        </div>
      </div>
    </div>
  )
}
