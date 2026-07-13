
import type { Stat } from "@/types"
import StatCard from "./StatCard"

interface StatListProps {
  stats: Stat[]
}

const StatList = ({ stats }: StatListProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  )
}

export default StatList
