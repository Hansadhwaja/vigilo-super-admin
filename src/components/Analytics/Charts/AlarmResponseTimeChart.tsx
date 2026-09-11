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

import type { AnalyticsAlarmResponseTime } from "@/types"
import { formatMonth } from "@/utils/date"

const chartConfig = {
  avgTime: {
    label: "Avg Response Time",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

interface Props {
  data: AnalyticsAlarmResponseTime[]
}

export default function AlarmResponseTimeChart({ data }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Avg Alarm Response Time</CardTitle>
        <CardDescription>Minutes from dispatch to on-site</CardDescription>
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
              left: 12,
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
              width={50}
              tickFormatter={(value) => `${value} min`}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  formatter={(value) => [
                    `${Number(value).toFixed(1)} min`,
                    "Avg Response Time",
                  ]}
                  labelFormatter={(value) => formatMonth(String(value))}
                />
              }
            />

            <Line
              dataKey="avgTime"
              type="monotone"
              stroke="var(--color-avgTime)"
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
