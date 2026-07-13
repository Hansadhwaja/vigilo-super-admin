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
  avgTime: {
    label: "Avg Scan Time",
    color: "var(--chart-1)",
  },
  target: {
    label: "Target",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

interface Props {
  data: {
    date: string
    avgTime: number
    target: number
  }[]
}

export default function CheckpointScanChart({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Avg Checkpoint Scan Time</CardTitle>
        <CardDescription>Target &lt; 2 seconds</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <LineChart data={data} accessibilityLayer>
            <CartesianGrid vertical={false} />

            <XAxis dataKey="date" tickLine={false} axisLine={false} />

            <YAxis unit="s" tickLine={false} axisLine={false} />

            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />

            <ChartLegend content={<ChartLegendContent />} />

            <Line
              dataKey="avgTime"
              type="monotone"
              stroke="var(--color-avgTime)"
              strokeWidth={3}
              dot={false}
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
