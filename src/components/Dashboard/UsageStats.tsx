import {
  CalendarDays,
  Footprints,
  ShieldCheck,
  Users,
} from "lucide-react"

import StatList from "../Common/Stats/StatList"

const UsageStats = () => {
  const stats = [
    {
      title: "Total Shifts",
      value: 124,
      icon: CalendarDays,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Total Patrols",
      value: 89,
      icon: Footprints,
      color: "bg-violet-500/10 text-violet-500",
    },
    {
      title: "Active Guards",
      value: "5,432",
      icon: ShieldCheck,
      color: "bg-green-500/10 text-green-500",
      trend: 8.2,
    },
    {
      title: "Active Clients",
      value: "4,821",
      icon: Users,
      color: "bg-orange-500/10 text-orange-500",
    },
  ]

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">
          Usage Overview
        </h2>

        <p className="text-sm text-muted-foreground">
          Monitor your security operations and platform usage.
        </p>
      </div>

      <StatList stats={stats} />
    </section>
  )
}

export default UsageStats