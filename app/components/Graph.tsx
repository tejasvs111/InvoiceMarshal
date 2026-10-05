"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface iAppProps {
  data: {
    date: string;
    amount: number;
  }[]; // This is in array with multiple objects
}

export function Graph({ data }: iAppProps) {
  return (
    <ChartContainer
      config={{
        amount: {
          label: "Amount",
          color: "hsl(var(--primary))",
        },
      }}
      className="min-h-75"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
          <Line
            type={"monotone"}
            dataKey="amount"
            stroke="var(--color-amount)"
            strokeWidth={10}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
