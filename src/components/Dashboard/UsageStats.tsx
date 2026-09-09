import type { Stat } from "@/types"
import StatList from "../Common/Stats/StatList"

interface Props {
  usageStats: Stat[]
}

const UsageStats = ({ usageStats }: Props) => {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">Usage Overview</h2>

        <p className="text-sm text-muted-foreground">
          Monitor your security operations and platform usage.
        </p>
      </div>

      <StatList stats={usageStats} />
    </section>
  )
}

export default UsageStats
