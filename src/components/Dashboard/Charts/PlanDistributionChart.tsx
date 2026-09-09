"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { PlanDistributionData } from "@/types"

type PlanDistributionChartProps = {
  data: PlanDistributionData[]
}

const chartConfig = {
  monthly: {
    label: "Monthly",
    color: "var(--chart-1)",
  },
  annual: {
    label: "Annual",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const PlanDistributionChart = ({ data }: PlanDistributionChartProps) => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader>
        <CardTitle>Plan Distribution</CardTitle>

        <CardDescription>
          Distribution of active subscriptions by plan
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={data}
              dataKey="subscribers"
              nameKey="plan"
              innerRadius={70}
              outerRadius={110}
              strokeWidth={2}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default PlanDistributionChart
