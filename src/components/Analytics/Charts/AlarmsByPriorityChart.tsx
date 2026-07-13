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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartConfig = {
  p1: {
    label: "P1",
    color: "var(--chart-1)",
  },
  p2: {
    label: "P2",
    color: "var(--chart-2)",
  },
  p3: {
    label: "P3",
    color: "var(--chart-3)",
  },
  p4: {
    label: "P4",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

interface Props {
  data: {
    date: string
    p1: number
    p2: number
    p3: number
    p4: number
  }[]
}

export default function AlarmsByPriorityChart({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alarms Dispatched by Priority</CardTitle>
        <CardDescription>Daily volume, grouped by priority</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <YAxis tickLine={false} axisLine={false} tickMargin={8} />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />

            <ChartLegend content={<ChartLegendContent />} />

            <Bar
              dataKey="p1"
              stackId="priority"
              fill="var(--color-p1)"
              radius={[0, 0, 0, 0]}
            />

            <Bar
              dataKey="p2"
              stackId="priority"
              fill="var(--color-p2)"
              radius={[0, 0, 0, 0]}
            />

            <Bar
              dataKey="p3"
              stackId="priority"
              fill="var(--color-p3)"
              radius={[0, 0, 0, 0]}
            />

            <Bar
              dataKey="p4"
              stackId="priority"
              fill="var(--color-p4)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
