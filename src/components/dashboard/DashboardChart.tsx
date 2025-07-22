"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { chartData } from "../../data/dummyData";
const DashboardChart = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Monthly Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={"100%"} height={250}>
          <LineChart data={chartData}>
            <XAxis
              dataKey="name"
              stroke="#888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Line
              type={"monotone"}
              dataKey={"amount"}
              stroke="#4f46e5"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
