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
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import type { RevenueGrowthData } from "@/types"

type RevenueGrowthChartProps = {
  data: RevenueGrowthData[]
}

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const RevenueGrowthChart = ({ data }: RevenueGrowthChartProps) => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="px-4 py-4 sm:px-6">
        <CardTitle className="text-base sm:text-lg">
          Revenue Growth
        </CardTitle>

        <CardDescription className="text-xs sm:text-sm">
          Revenue generated over the last 12 months
        </CardDescription>
      </CardHeader>

      <CardContent className="px-2 pb-4 sm:px-6 sm:pb-6">
        <ChartContainer
          config={chartConfig}
          className="h-[250px] w-full sm:h-[300px] lg:h-[350px]"
        >
          <LineChart
            data={data}
            margin={{
              left: 0,
              right: 8,
              top: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={24}
              tick={{ fontSize: 11 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              width={42}
              tick={{ fontSize: 11 }}
              tickFormatter={(value) => `₹${value / 1000}k`}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) =>
                    `₹${Number(value).toLocaleString("en-IN")}`
                  }
                />
              }
            />

            <Line
              dataKey="revenue"
              type="monotone"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 5,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default RevenueGrowthChart