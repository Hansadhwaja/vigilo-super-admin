"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import type { PlanDistributionData } from "@/types";

type PlanDistributionChartProps = {
  data: PlanDistributionData[];
};

const chartConfig = {
  monthly: {
    label: "Monthly",
    color: "var(--chart-1)",
  },
  annual: {
    label: "Annual",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const PlanDistributionChart = ({
  data,
}: PlanDistributionChartProps) => {
  const chartData = data.map((item) => ({
    ...item,
    fill:
      item.interval === "month"
        ? "var(--color-monthly)"
        : "var(--color-annual)",
  }));

  return (
    <Card className="w-full min-w-0 border-border/50 shadow-sm">
      <CardHeader className="pb-2 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">
          Plan Distribution
        </CardTitle>

        <CardDescription className="text-xs sm:text-sm">
          Distribution of active subscriptions by plan
        </CardDescription>
      </CardHeader>

      <CardContent className="px-2 pb-4 sm:px-6">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <Pie
              data={chartData}
              dataKey="count"
              nameKey="planName"
              innerRadius="55%"
              outerRadius="75%"
              strokeWidth={2}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PlanDistributionChart;