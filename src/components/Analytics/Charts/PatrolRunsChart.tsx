"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

import type { AnalyticsPatrolRun } from "@/types"
import { formatMonth } from "@/utils/date"

const chartConfig = {
  count: {
    label: "Patrol Runs",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

interface Props {
  data: AnalyticsPatrolRun[]
}

export default function PatrolRunsChart({ data }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Patrol Runs Completed</CardTitle>
        <CardDescription>Daily, across all tenants</CardDescription>
      </CardHeader>

      <CardContent className="px-2 sm:px-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full sm:h-[320px] lg:h-[350px]"
        >
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 8,
              right: 12,
              bottom: 8,
              left: 0,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonth}
              minTickGap={24}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={35}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => formatMonth(String(value))}
                />
              }
            />

            <Line
              dataKey="count"
              type="monotone"
              stroke="var(--color-count)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
