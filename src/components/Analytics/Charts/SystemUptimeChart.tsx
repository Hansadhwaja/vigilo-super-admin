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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartConfig = {
  uptime: {
    label: "System Uptime",
    color: "var(--chart-5)",
  },
  target: {
    label: "Target",
    color: "var(--muted-foreground)",
  },
} satisfies ChartConfig

interface Props {
  data: {
    label: string
    uptime: number
    target:number
  }[]
}

export default function SystemUptimeChart({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Uptime</CardTitle>
        <CardDescription>Target &gt; 99.9%</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <LineChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <YAxis
              domain={[99.8, 100]}
              unit="%"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <ChartLegend content={<ChartLegendContent />} />

            <Line
              dataKey="uptime"
              type="monotone"
              stroke="var(--color-uptime)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }}
            />

            <Line
              dataKey="target"
              stroke="var(--color-target)"
              strokeDasharray="6 6"
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
