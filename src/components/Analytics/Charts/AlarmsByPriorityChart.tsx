"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

import type { AnalyticsAlarmByPriority } from "@/types"

const chartConfig = {
  count: {
    label: "Alarms",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

interface Props {
  data: AnalyticsAlarmByPriority[]
}

export default function AlarmsByPriorityChart({ data }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Alarms Dispatched by Priority</CardTitle>
        <CardDescription>Alarm volume grouped by priority</CardDescription>
      </CardHeader>

      <CardContent className="px-2 sm:px-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full sm:h-[320px] lg:h-[350px]"
        >
          <BarChart
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
              dataKey="priority"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                String(value).charAt(0).toUpperCase() + String(value).slice(1)
              }
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={35}
              allowDecimals={false}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    String(value).charAt(0).toUpperCase() +
                    String(value).slice(1)
                  }
                />
              }
            />

            <Bar
              dataKey="count"
              fill="var(--color-count)"
              radius={[4, 4, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
