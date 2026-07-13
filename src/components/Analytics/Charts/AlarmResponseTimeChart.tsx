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

const chartConfig = {
  responseTime: {
    label: "Avg Response Time",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

interface Props {
  data: {
    label: string
    responseTime: number
  }[]
}

export default function AlarmResponseTimeChart({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Avg Alarm Response Time</CardTitle>
        <CardDescription>Minutes from dispatch to on-site</CardDescription>
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
              unit=" min"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Line
              dataKey="responseTime"
              type="monotone"
              stroke="var(--color-responseTime)"
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
