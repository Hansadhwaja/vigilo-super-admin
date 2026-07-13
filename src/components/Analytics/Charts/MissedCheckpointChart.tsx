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
  rate: {
    label: "Missed Rate",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

interface Props {
  data: {
    label: string
    rate: number
  }[]
}

export default function MissedCheckpointChart({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Missed Checkpoint Rate</CardTitle>
        <CardDescription>
          % of checkpoints not scanned within the expected window
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <LineChart data={data} accessibilityLayer>
            <CartesianGrid vertical={false} />

            <XAxis dataKey="label" tickLine={false} axisLine={false} />

            <YAxis unit="%" tickLine={false} axisLine={false} />

            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />

            <ChartLegend content={<ChartLegendContent />} />

            <Line
              dataKey="rate"
              type="monotone"
              stroke="var(--color-rate)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
