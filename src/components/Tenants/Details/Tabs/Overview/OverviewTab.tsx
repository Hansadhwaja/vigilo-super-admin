import StatList from "@/components/Common/Stats/StatList"
import type { Tenant } from "@/types"
import { BadgeCheck, Car, PlayCircle, ShieldCheck } from "lucide-react"
import AccountInfoCard from "./AccountInfoCard"

interface Props {
  tenant: Tenant
}

const OverviewTab = ({ tenant }: Props) => {
  const stats = [
    {
      title: "Total Guards",
      value: tenant.stats.totalGuards ?? 0,
      icon: ShieldCheck,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Vehicles",
      value: tenant.stats.totalVehicles ?? 0,
      icon: Car,
      color: "bg-violet-500/10 text-violet-500",
    },
    {
      title: "Active Runs",
      value: tenant.stats.activePatrolRuns ?? 0,
      icon: PlayCircle,
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      title: "Members",
      value: tenant.stats.totalMembers ?? 0,
      icon: BadgeCheck,
      color: "bg-green-500/10 text-green-500",
    },
  ]

  return (
    <div className="space-y-6">
      <StatList stats={stats} />
      <AccountInfoCard tenant={tenant} />
    </div>
  )
}

export default OverviewTab
