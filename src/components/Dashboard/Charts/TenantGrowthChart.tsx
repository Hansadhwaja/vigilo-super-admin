"use client"

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"

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

import type { TenantGrowthData } from "@/types"

type TenantGrowthChartProps = {
  data: TenantGrowthData[]
}

const chartConfig = {
  tenants: {
    label: "Tenants",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const TenantGrowthChart = ({ data }: TenantGrowthChartProps) => {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader className="px-4 py-4 sm:px-6">
        <CardTitle className="text-base sm:text-lg">
          Tenant Growth
        </CardTitle>

        <CardDescription className="text-xs sm:text-sm">
          Tenant growth over the last 12 months
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
              allowDecimals={false}
              width={32}
              tick={{ fontSize: 11 }}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <Line
              dataKey="tenants"
              type="monotone"
              stroke="var(--color-tenants)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default TenantGrowthChart