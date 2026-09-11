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

import type { AnalyticsMissedCheckpointRate } from "@/types"
import { formatMonth } from "@/utils/date"

const chartConfig = {
  rate: {
    label: "Missed Rate",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

interface Props {
  data: AnalyticsMissedCheckpointRate[]
}

export default function MissedCheckpointChart({ data }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Missed Checkpoint Rate</CardTitle>
        <CardDescription>
          % of checkpoints not scanned within the expected window
        </CardDescription>
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
              top: 16,
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
              domain={[0, 100]}
              padding={{ top: 10, bottom: 0 }}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={45}
              tickFormatter={(value) => `${value}%`}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  formatter={(value) => [`${value}%`, "Missed Rate"]}
                  labelFormatter={(value) => formatMonth(String(value))}
                />
              }
            />

            <Line
              dataKey="rate"
              type="monotone"
              stroke="var(--color-rate)"
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
